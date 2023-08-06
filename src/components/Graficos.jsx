import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import '../styles/graficos.css';

const Graficos = () => {
  return (
    <div id="Graficos">
      <Navbar />
      <div className="container">
        <h1 className="p-5 m-5">Gráficos</h1>
        <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src="https://app.powerbi.com/groups/me/reports/5dcdc34d-7cc6-43e7-9203-90e5c38b85a4?ctid=abad18ee-d8eb-448a-8db7-f0f7e7a01f4b&pbi_source=linkShare"
          allowFullScreen 
        ></iframe>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Graficos;