import { useEffect, useState } from 'react';
import '../src/css/card.css';
import './App.css';
import Cards from './components/cards';

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const targetUrl = 'https://zenquotes.io/api/quotes';
const url = proxyUrl + targetUrl; // Use proxy to bypass CORS

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
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        console.log(data); // Log the fetched data

        if (Array.isArray(data) && data.length > 0) {
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
