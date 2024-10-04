import './App.css';
import '../src/css/card.css';
import Cards from './components/cards';
import Quotes from './components/fetchQuotes';
import '../src/css/nextButton.css';
import NextButton from './components/nextButton';
import { useState, useEffect } from 'react';

const url = 'https://api.api-ninjas.com/v1/quotes';

function App() {
  const [quotes, setQuotes] = useState<{ quote: string; author: string }[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            'X-Api-Key': '+N8VDmi3IPpD6ygKcZzhoA==cD7b1gv1GcElTiR6',
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();

        if (Array.isArray(data)) {
          setQuotes(data);
        } else {
          throw new Error('Unexpected API response format');
        }
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
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1 >= quotes.length ? 0 : prevIndex + 1));
    console.log('hi');
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
