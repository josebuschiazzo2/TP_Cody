import React, { useState, useEffect } from 'react';
import Card from './Card';
import Footer from './Footer';
import Navbar from './Navbar';
import axios from 'axios'; // Importamos Axios

function Noticias() {
  const [newsData, setNewsData] = useState([]); // Estado para almacenar los datos de noticias

  // Función para cargar las noticias desde la API
  const fetchNews = async () => {
    const apiKey = '8613c9fce4674e0994c38ffa6850524c';
    const apiUrl = `https://newsapi.org/v2/everything?q=Antártida&apiKey=${apiKey}`;
 

    try {
      const response = await axios.get(apiUrl);
      setNewsData(response.data.articles.slice(0, 20));
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []); // Llamo a fetchNews una vez al cargar el componente

  return (
    <div id="Noticias">
      <Navbar />

      <h1 className='p-5 m-5'> NOTICIAS</h1>

      {/* Mapeamos las noticias y creamos una Card para cada una */}
      {newsData.map((item, index) => (
        <Card
          key={index}
          cardImg={item.urlToImage}
          tipoDeBase="permanente"
          cardBadge="Hoy"
          cardTitle={item.title}
          //cardText={item.description}
        />
      ))}

      <Footer />
    </div>
  );
}

export default Noticias;