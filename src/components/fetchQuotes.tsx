interface Quote {
  quote: string;
  author: string;
}

interface QuotesProps {
  quotes: Quote[];
  currentQuoteIndex: number;
}

export default function Quotes({ quotes, currentQuoteIndex }: QuotesProps) {
  return (
    <div>
      <h1>Quotes</h1>
      {quotes.length > 0 ? (
        <p>
          {quotes[currentQuoteIndex].quote} - <strong>{quotes[currentQuoteIndex].author}</strong>
        </p>
      ) : (
        <p>Loading quotes...</p>
      )}
    </div>
  );
}
