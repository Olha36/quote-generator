import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ChangeEvent, useEffect, useState } from 'react';
import '../src/css/card.css';
import './App.css';
import Cards from './components/cards';

const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // need to request temporary request
const targetUrl = 'https://zenquotes.io/api/quotes';
const url = proxyUrl + targetUrl; // Use proxy to bypass CORS

interface Quote {
  quote: string;
  author: string;
}

interface ApiQuote {
  q: string;
  a: string;
}

function App() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const quotesPerPage = 1;

  const handleChangeClick = (e: ChangeEvent<unknown>, p: number) => {
    console.log(e, p);
    setPage(p);
  };

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data: ApiQuote[] = await response.json();
        console.log('Fetched data:', data); // Log the fetched data

        if (Array.isArray(data) && data.length > 0) {
          const formattedQuotes = data.map((item: ApiQuote) => ({
            quote: item.q,
            author: item.a,
          }));
          setQuotes(formattedQuotes); // Set all fetched quotes
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

  const indexOfQuote = (page - 1) * quotesPerPage;
  const currentQuote = quotes[indexOfQuote];

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
              currentQuote && ( // Render the current quote only
                <div className='quote-card'>
                  <p>"{currentQuote.quote}"</p>
                  <p>- {currentQuote.author}</p>
                </div>
              )
            )}
          </div>

          <Cards />

          <Stack spacing={2}>
            {/* Set pagination with total number of quotes */}
            <Pagination
              count={Math.ceil(quotes.length / quotesPerPage)} // Calculate total number of pages
              page={page}
              color='secondary'
              onChange={handleChangeClick}
            />
          </Stack>
        </div>
      </div>
      <p className='cachet'>
        <img src='https://i.postimg.cc/4NBYNqCR/22.png' alt='Seal' />
      </p>
    </div>
  );
}

export default App;
