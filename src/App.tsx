import './App.css';
import '../src/css/card.css';
import Cards from './components/cards';
import Quotes from './components/fetchQuotes';
import '../src/css/nextButton.css';
import NextButton from './components/nextButton';

function handleNextButtonClick() {
  console.log('Next button clicked');
}

function App() {
  return (
    <div className='wrapper'>
      <div id='parchment'>
        <div className='container'>
          <h1 className='header'>Random Quote Generator</h1>

          <div className='quote-card'>
            <Quotes />
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
