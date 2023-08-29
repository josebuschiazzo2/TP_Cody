//import linkedinIcon from '../images/linkedinIcon.png';
import '../styles/sobreNosotros.css';

import React, { useState } from 'react';

import Card from './Card';
import Contacto from './Contacto';
import Footer from './Footer';
import Navbar from './Navbar';

const SobreNosotros = () => {
  const [texto1, setTexto1] = useState(`
    Somos un grupo de estudiantes de Full Stack Development
    que estamos trabajando en este proyecto final para demostrar nuestras habilidades
    y conocimientos adquiridos durante el curso.
  `);

    const [texto2, setTexto2] = useState(`
    Nuestro objetivo es crear aplicaciones
    web innovadoras y funcionales que puedan mejorar la experiencia de los usuarios.
    Estamos entusiasmados de presentarles este proyecto y esperamos que disfruten
    explorando las diferentes secciones de la aplicación.
  `);
  
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const handleAbrirModal1 = () => {setModalVisible1(true);};
  const handleActualizarTexto1 = (event) => {
    event.preventDefault();
    setTexto1(event.target.texto.value);
    setModalVisible1(false);
  };
   const handleAbrirModal2 = () => {setModalVisible2(true);};
  const handleActualizarTexto2 = (event) => {
    event.preventDefault();
    setTexto2(event.target.texto.value);
    setModalVisible2(false);
  };
  
  const integrantes = [
    {
      cardTitle: "Evelin Vidal",
      cardText: "Full Stack Developer",
      cardLink: "https://www.linkedin.com/in/evelin-vidal/",
      cardImg: "https://media.licdn.com/dms/image/D4E03AQFB9S9IVxUMOQ/profile-displayphoto-shrink_400_400/0/1693265312313?e=1698883200&v=beta&t=ode1uqaIiWmwHHNxnua9-WMKZFTyDIAv4dwttyHxIKg"
      //cardBadge:
    },
    {
      cardTitle: "Dario Lopez",
      cardText: "Supervisor en Mirgor. Full Stack Developer",
      cardLink: "https://www.linkedin.com/in/dar%C3%ADo-c%C3%A9sar-l%C3%B3pez",
      cardImg: "https://media.licdn.com/dms/image/D4D03AQHJugzYOcRDtg/profile-displayphoto-shrink_400_400/0/1692838575833?e=1698883200&v=beta&t=BfTpZu61DXh8k2pVIEgSKrD2SmkjW27Emwsyqi6lMYI"
      //cardBadge: 
    },
    {
      cardTitle: "Jose Buschiazzo",
      cardText: "Jefe de Ing. de Procesos y MC. Full Stack Developer",
      cardLink: "https://www.linkedin.com/in/jose-buschiazzo/",
      cardImg: "https://media.licdn.com/dms/image/C4E03AQF4pngseWpbWQ/profile-displayphoto-shrink_800_800/0/1624714009924?e=1696464000&v=beta&t=3EXRVvMTrhsw0Y_KzP4jwGGPJhowkfk-HywtoZbdGY0"
      //cardBadge:
    }
  ];

  return (
    <div>
      <div className='container'>
      <Navbar claseSobreNosotros="underline" />
      <div className="containersobrenosotros ">
        <h3 className='titulo_sobreNosotros'>Bienvenidos a Cody app!</h3>
        <div className='texto_sobreNosotros'>
        <p onClick={handleAbrirModal1} style={{ cursor: 'pointer' }}>{texto1}</p>
        <p onClick={handleAbrirModal2} style={{ cursor: 'pointer' }}>{texto2}</p>
        </div>
        {modalVisible1 && (
          <div className="modal">
            <div className="modal-content">
              <form onSubmit={handleActualizarTexto1}>
                <textarea name="texto" defaultValue={texto1} />
                <button type="submit">Actualizar Texto</button>
              </form>
            </div>
          </div>
        )}

       {modalVisible2 && (
          <div className="modal">
            <div className="modal-content">
              <form onSubmit={handleActualizarTexto2}>
                <textarea name="texto" defaultValue={texto2} />
                <button type="submit">Actualizar Texto</button>
              </form>
            </div>
          </div>
        )}

        <h3 className='integrantes_titulo text-center'> Integrantes del Grupo: </h3>
        <div className="containerabout">
          <div className="row justify-content-center">
            {integrantes.map((integrante, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                <Card
                  cardTitle={integrante.cardTitle}
                  cardText={integrante.cardText}
                  cardLink={integrante.cardLink}
                  cardImg={integrante.cardImg} 
                  cardBadge={integrante.cardBadge}
                /></div>
              ))}
          </div>
        </div>
      </div>
      <Contacto/>
      </div>
      <Footer />
    </div>
  );
};

export default SobreNosotros;
