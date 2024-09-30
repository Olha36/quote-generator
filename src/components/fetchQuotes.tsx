import { useState, useEffect } from 'react';
const url = 'https://api.api-ninjas.com/v1/quotes';

export default function Quotes() {
  interface Quote {
    quote: string;
    author: string;
    err?: string;
  }

  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [error, setError] = useState<string | null>(null);

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
        setQuotes(data); // Store the fetched quotes in the state
      } catch (err: unknown) {
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
    <div>
      <h1>Quotes</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {quotes.map((quote, index) => (
          <p key={index}>
            {quote.quote} - <strong>{quote.author}</strong>
          </p>
        ))}
      </ul>
    </div>
  );
}