import React, { useState, useEffect } from 'react';
import Card from './Card';
import Footer from './Footer';
import Navbar from './Navbar';
import ChatBot from './FloatingChat';
import axios from 'axios';
import {parseISO, format } from 'date-fns'; //probe de varias formas y preguntando a la IA y eso me funco
import '../styles/noticias.css';
import { useRef } from 'react';

function Noticias() {
  const [newsData, setNewsData] = useState([]);
  const [newsToShow, setNewsToShow] = useState(9); // Estado para el número de noticias a mostrar
  const [selectedNews, setSelectedNews] = useState(null);
  const newsRef = useRef(null);

  const fetchNews = async () => {
    const apiKey = '8613c9fce4674e0994c38ffa6850524c'; //lo pongo aparte para que no se me pierda y no se donde lo deje en el mail ja
    const apiUrl = `https://newsapi.org/v2/everything?q=Antártida&apiKey=${apiKey}`;

    try {
      const response = await axios.get(apiUrl);
      const sortedNews = response.data.articles
        .filter((item) => item.urlToImage) //esto me faltaba
        .slice(0,newsToShow)
        .sort((a, b) => parseISO(b.publishedAt).getTime() - parseISO(a.publishedAt).getTime());
      setNewsData(sortedNews);
    } catch (error) {
      console.error('Error fetching news:', error);
      }
  };

  useEffect(() => {fetchNews();}, [newsToShow]); // Ejecuta fetchNews() cada vez que newsToShow cambia

  const handleShowMoreNews = () => {
    setNewsToShow((prevNewsToShow) => prevNewsToShow + 9); // Incrementa el número de noticias a mostrar en 21
  };

  const handleCardClick = (event,index) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    setSelectedNews(newsData[index]);
    if (newsRef.current) {
      newsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
   
  return (
    <div id="Noticias" className='d-flex flex-column'>
      <Navbar claseNoticias="underline" />
      <div className="containernews">
        <div className='textoNoticias mb-5'> 
          <h3 className='text-center titulo_noticias'>¡Bienvenidos a la página de noticias de la Antártida!</h3>
          <p>Aquí encontrarás información relevante e interesante sobre los últimos acontecimientos relacionados a la Antártida. 
            En está página podrás estár actualizado con las últimas noticias recopiladas a nivel internacional sobre esta región única y fascinante del planeta.</p>
          <p>Nuestra misión es brindarte una ventana al mundo helado de la Antártida, donde la ciencia, la exploración y la conservación convergen en un entorno de desafíos extremos y descubrimientos asombrosos.</p>
        </div>

        {selectedNews && (
          <div ref={newsRef} className="selected-news glass-bg">
            <h3 className="selected-news-title" >{selectedNews.title}</h3>
            <div className="selected-news-content">
                <img src={selectedNews.urlToImage} alt={selectedNews.title } className="selected-news-image" /> 
                <ul className="selected-news-description">
                  <li><strong>Descripción: </strong>{selectedNews.content.replace(/\[\+\d+ chars\]/, '') }</li>
                  <li style={{ marginTop: '20px' }}><strong>Autor:</strong> {selectedNews.author}</li>
                  <li><strong>Publicado:</strong> {selectedNews.publishedAt}</li>
                </ul>
            </div>
          </div>
        )}
        <div>
        <div className="CardsNews">
          {newsData.map((item, index) => (
            <div key={index}>
              <Card
                cardImg={item.urlToImage} // Esta es una estructura condicional (operador ternario) que verifica si el artículo tiene una imagen (urlToImage). Si el artículo tiene una imagen, se renderiza el contenido dentro de la Card. Ahora si el artículo no tiene una imagen, se renderiza null, lo que significa que no se tiene qu ninguna tarjeta para ese artículo sin imagen.
                //tipoDeBase={isToday(parseISO(item.publishedAt)) ? 'temporal' : 'permanente'}
                cardBadge={format(parseISO(item.publishedAt), 'dd/MM/yyyy')}
                cardTitle={item.title}
                onClick={(event) => handleCardClick(event,index)}
              />
            </div>
          ))}
        </div>
        </div>
        <div className="load-more-news">
          <button onClick={handleShowMoreNews}>Más Noticias</button>
        </div>
      </div>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default Noticias;