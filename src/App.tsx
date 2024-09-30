import './App.css';
import '../src/css/card.css';

// https://api.api-ninjas.com/v1/quotes

function App() {
  return (
    <div className='wrapper'>
      <div id='parchment'>
        <div className='container'>
          <h1 className='header'>Random Quote Generator</h1>

          <div className='quote-card'>
            <p className='quote-text'>"Quote"</p>
            <p className='quote-author'>- Author</p>
          </div>

          <div className='cards-below'>
            <div className='mini-card'>
              <article className='card'>
                <img
                  className='card__background'
                  src='https://i.imgur.com/QYWAcXk.jpeg'
                  alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                  width='1920'
                  height='2193'
                />
                <div className='card__content | flow'>
                  <div className='card__content--container | flow'>
                    <h2 className='card__title'>Hover to see a quote</h2>
                    <p className='card__description'>
                      Quote
                    </p>
                  </div>
                  <button className='card__button'>Add to favourites</button>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <p className='cachet'>
        <img src='https://i.postimg.cc/4NBYNqCR/22.png' alt='Seal' />
      </p>
    </div>
  );
}

export default App;
