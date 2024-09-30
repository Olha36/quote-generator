export default function Cards() {
    return (
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
                <p className='card__description'>Quote</p>
              </div>
              <button className='card__button'>Add to favourites</button>
            </div>
          </article>
        </div>
      </div>
    );
  }