import React, { useState } from 'react';
import Card from './Card';
import Footer from './Footer';
import Navbar from './Navbar';
//import linkedinIcon from '../images/linkedinIcon.png';
import '../styles/sobreNosotros.css';
import Contacto from './Contacto';


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
      //cardImg: no tengo la foto
      //cardBadge:
    },
    {
      cardTitle: "Dario Lopez",
      cardText: "Superisor en Mirgor. Full Stack Developer",
      cardLink: "https://www.linkedin.com/in/dar%C3%ADo-c%C3%A9sar-l%C3%B3pez",
      cardImg: "https://media.licdn.com/dms/image/D4D03AQHcChku6mJzFw/profile-displayphoto-shrink_800_800/0/1679715033735?e=1696464000&v=beta&t=0STgaMLYtjtgsRKHVM7deSg-NLmAvVKWauJPV_VztKw"
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
      <Navbar />
      <div className="containersobrenosotros">
        <h1 className='p-5 m-5'> SOBRE NOSOTROS </h1>
        <h5 className='p-1 m-5'>Bienvenidos a Cody app!</h5>
        <h5 className='p-0 m-5' onClick={handleAbrirModal1} style={{ cursor: 'pointer' }}>{texto1}</h5>
        <h5 className='p-0 m-5' onClick={handleAbrirModal2} style={{ cursor: 'pointer' }}>{texto2}</h5>
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

        <h1 className='p-5 m-5'> Integrandes del Grupo: </h1>
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
      <Footer />
    </div>
  );
};

export default SobreNosotros;
