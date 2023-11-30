import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { parseISO, format } from 'date-fns';
import Card from './Card';
import '../styles/noticias.css';

function NoticiasData() {
  const [newsData, setNewsData] = useState([]);
  const [newsToShow, setNewsToShow] = useState(9);
  const [selectedNews, setSelectedNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const newsRef = useRef(null);

  const fetchNews = async () => {
    const apiKey = '8613c9fce4674e0994c38ffa6850524c';
    const apiUrl = `https://newsapi.org/v2/everything?q=Antártida&apiKey=${apiKey}`;

    try {
      const response = await axios.get(apiUrl);
      const sortedNews = response.data.articles
        .filter((item) => item.urlToImage)
        .slice(0, newsToShow)
        .sort((a, b) => parseISO(b.publishedAt).getTime() - parseISO(a.publishedAt).getTime());
      setNewsData(sortedNews);
      setLoading(false); // Set loading to false when data is available
    } catch (error) {
      console.error('Error fetching news:', error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  useEffect(() => {
    fetchNews();
  }, [newsToShow]);

  const handleShowMoreNews = () => {
    setNewsToShow((prevNewsToShow) => prevNewsToShow + 9);
  };

  const handleCardClick = (event, index) => {
    event.preventDefault();
    setSelectedNews(newsData[index]);
    if (newsRef.current) {
      newsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return <div className='cargando d-felx flex-column'>
      <div className='loader'>
      </div>
      <h5 className='titulo_loader'>Cargando...</h5>
    </div>;
  }

  return (
    <>
      {selectedNews && (
        <div ref={newsRef} className="selected-news glass-bg">
          <h3 className="selected-news-title">{selectedNews.title}</h3>
          <div className="selected-news-content">
            <img src={selectedNews.urlToImage} alt={selectedNews.title} className="selected-news-image" />
            <ul className="selected-news-description">
              <li>
                <strong>Descripción: </strong>
                {selectedNews.content.replace(/\[\+\d+ chars\]/, '')}
              </li>
              <li style={{ marginTop: '20px' }}>
                <strong>Autor:</strong> {selectedNews.author}
              </li>
              <li>
                <strong>Publicado:</strong> {selectedNews.publishedAt}
              </li>
            </ul>
          </div>
        </div>
      )}

      <div className="CardsNews">
        {newsData.map((item, index) => (
          <div key={index}>
            <Card
              cardImg={item.urlToImage}
              cardBadge={format(parseISO(item.publishedAt), 'dd/MM/yyyy')}
              cardTitle={item.title}
              onClick={(event) => handleCardClick(event, index)}
            />
          </div>
        ))}
      </div>

      <div className="load-more-news">
        <button onClick={handleShowMoreNews}>Más Noticias</button>
      </div>
    </>
  );
}

export default NoticiasData;
