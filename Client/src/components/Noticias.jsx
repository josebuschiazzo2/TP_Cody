import React, { useState, useEffect } from 'react';
import Card from './Card';
import Footer from './Footer';
import Navbar from './Navbar';
import ChatBot from './FloatingChat';
import axios from 'axios';
import {parseISO, format } from 'date-fns'; //probe de varias formas y preguntando a la IA y eso me funco
import '../styles/noticias.css';

function Noticias() {
  const [newsData, setNewsData] = useState([]);
  const [newsToShow, setNewsToShow] = useState(9); // Estado para el número de noticias a mostrar

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

  return (
    <div id="Noticias">
      <Navbar claseNoticias="underline" />
      <div className="containernews">
        <h1 className='p-5 m-5'> NOTICIAS</h1>
        <div className="row">
          {newsData.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
              <Card
                cardImg={item.urlToImage} // Esta es una estructura condicional (operador ternario) que verifica si el artículo tiene una imagen (urlToImage). Si el artículo tiene una imagen, se renderiza el contenido dentro de la Card. Ahora si el artículo no tiene una imagen, se renderiza null, lo que significa que no se tiene qu ninguna tarjeta para ese artículo sin imagen.
                //tipoDeBase={isToday(parseISO(item.publishedAt)) ? 'temporal' : 'permanente'}
                cardBadge={format(parseISO(item.publishedAt), 'dd/MM/yyyy')}
                cardTitle={item.title}
              />
            </div>
          ))}
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
