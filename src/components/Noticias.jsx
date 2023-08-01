import React, { useState, useEffect } from 'react';
import Card from './Card';
import Footer from './Footer';
import Navbar from './Navbar';
import axios from 'axios';
import { isToday, parseISO, format } from 'date-fns'; //probe de varias formas y preguntando a la IA y eso me funco
import '../styles/noticias.css';

function Noticias() {
  const [newsData, setNewsData] = useState([]);

  const fetchNews = async () => {
    const apiKey = '8613c9fce4674e0994c38ffa6850524c';
    const apiUrl = `https://newsapi.org/v2/everything?q=Antártida&apiKey=${apiKey}`;

    try {
      const response = await axios.get(apiUrl);
      const sortedNews = response.data.articles
        .slice(0, 21)
        .sort((a, b) => parseISO(b.publishedAt).getTime() - parseISO(a.publishedAt).getTime());
      setNewsData(sortedNews);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div id="Noticias">
      <Navbar />
      <div className="container">
        <h1 className='p-5 m-5'> NOTICIAS</h1>

        <div className="row">
          {newsData.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
              <Card
                cardImg={item.urlToImage}
                tipoDeBase={isToday(parseISO(item.publishedAt)) ? 'temporal' : 'permanente'}
                cardBadge={format(parseISO(item.publishedAt), 'dd/MM/yyyy')}
                cardTitle={item.title}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Noticias;
