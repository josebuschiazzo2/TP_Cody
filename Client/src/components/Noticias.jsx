import React, { useState, useEffect, lazy, Suspense } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import axios from 'axios';
import { parseISO, format } from 'date-fns';
import '../styles/noticias.css';
import { useRef } from 'react';
// import NoticiasData from './NoticiasData';
const LazyNoticiasData = lazy (() => import('./NoticiasData') )

function Noticias() {
  const [newsData, setNewsData] = useState([]);
  const [newsToShow, setNewsToShow] = useState(9); // Estado para el número de noticias a mostrar
  const [selectedNews, setSelectedNews] = useState(null);
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
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [newsToShow]); // Ejecuta fetchNews() cada vez que newsToShow cambia

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

  return (
    <div id="Noticias" className='d-flex flex-column'>
      <Navbar claseNoticias="underline" />
      <div className="containernews">
        <div className='textoNoticias mb-5'>
          <h3 className='text-center titulo_noticias'>¡Bienvenidos a la página de noticias de la Antártida!</h3>
          <p>Aquí encontrarás información relevante e interesante sobre los últimos acontecimientos relacionados a la Antártida.
            En esta página podrás estar actualizado con las últimas noticias recopiladas a nivel internacional sobre esta región única y fascinante del planeta.</p>
          <p>Nuestra misión es brindarte una ventana al mundo helado de la Antártida, donde la ciencia, la exploración y la conservación convergen en un entorno de desafíos extremos y descubrimientos asombrosos.</p>
        </div>

        <Suspense fallback={<div className='loadingNoticias'></div>}>
<LazyNoticiasData/>     </Suspense> 
</div>
      <Footer />
    </div>
  );
}

export default Noticias;