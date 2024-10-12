import './App.css';
import '../src/css/card.css';
import Cards from './components/cards';
import { useState, useEffect } from 'react';

const url = 'https://api.api-ninjas.com/v1/quotes?category=inspirational'; // Fetch 10 quotes at once

interface Quote {
  quote: string;
  author: string;
}

function App() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            'X-Api-Key': '+N8VDmi3IPpD6ygKcZzhoA==cD7b1gv1GcElTiR6', // Replace with your actual API key
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data: Quote[] = await response.json();

        if (data && data.length > 0) {
          setQuotes(data); // Set all fetched quotes
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

  return (
    <div className='wrapper'>
      <div id='parchment'>
        <div className='container'>
          <h1 className='header'>Random Quote Generator</h1>

          <div className='quote-list'>
            {error ? (
              <p>Error: {error}</p>
            ) : (
              // Render all quotes
              quotes.map((quote, index) => (
                <div key={index} className='quote-card'>
                  <p>"{quote.quote}"</p>
                  <p>- {quote.author}</p>
                </div>
              ))
            )}
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
