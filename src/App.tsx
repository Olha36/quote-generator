import './App.css';
import '../src/css/card.css';

function App() {
  return (
    <div className='wrapper'>
      <div id='parchment'>
        <div className='container'>
          <h1 className='header'>Random Quote Generator</h1>

          <div className='quote-card'>
            <p className='quote-text'>"Random quote generator text goes here."</p>
            <p className='quote-author'>- Author Name</p>
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
                    <h2 className='card__title'>Colombia</h2>
                    <p className='card__description'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore
                      laudantium deserunt fugiat numquam.
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
