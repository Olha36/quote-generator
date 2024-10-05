import './App.css';
import '../src/css/card.css';
import Cards from './components/cards';
import Quotes from './components/fetchQuotes';
import '../src/css/nextButton.css';
import NextButton from './components/nextButton';
import { useState, useEffect } from 'react';

const url = 'https://api.api-ninjas.com/v1/quotes?category=inspirational'; // Example category

function App() {
  const [quotes, setQuotes] = useState<{ quote: string; author: string }[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  console.log('current index is', currentQuoteIndex);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const quotesArray: { quote: string; author: string }[] = [];

        // Fetch 10 quotes by making 10 API calls
        for (let i = 0; i < 10; i++) {
          const response = await fetch(url, {
            headers: {
              'X-Api-Key': '+N8VDmi3IPpD6ygKcZzhoA==cD7b1gv1GcElTiR6', // Replace with your actual API key
            },
          });

          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }

          const data = await response.json();

          if (data && data[0]) {
            quotesArray.push(data[0]); // Add the quote to the array
          } else {
            throw new Error('Unexpected API response format');
          }
        }

        setQuotes(quotesArray);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred');
        }
      }
    };

    fetchQuotes();
  }, []);

  function handleNextButtonClick() {
    setCurrentQuoteIndex((prevIndex) => {
      console.log('Previous index:', prevIndex);
      return prevIndex + 1 >= quotes.length ? 0 : prevIndex + 1;
    });
  }

  return (
    <div className='wrapper'>
      <div id='parchment'>
        <div className='container'>
          <h1 className='header'>Random Quote Generator</h1>

          <div className='quote-card'>
            {error ? (
              <p>Error: {error}</p>
            ) : (
              <Quotes quotes={quotes} currentQuoteIndex={currentQuoteIndex} />
            )}
            <NextButton onClick={handleNextButtonClick} />
          </div>

          <Cards />
        </div>
      </div>
      <p className='cachet'>
        <img src='https://i.postimg.cc/4NBYNqCR/22.png' alt='Seal' />
      </p>
    </div>
  );
}

export default App;
