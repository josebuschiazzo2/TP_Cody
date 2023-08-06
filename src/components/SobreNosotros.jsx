import React from 'react';
import Card from './Card';
import Footer from './Footer';
import Navbar from './Navbar';
//import linkedinIcon from '../images/linkedinIcon.png';
//import '../styles/sobreNosotros.css';

const SobreNosotros = () => {
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
      <h1 className='p-5 m-5'> SOBRE NOSOTROS </h1>
      <h5 className='p-1 m-5'>Bienvenidos a Cody app!</h5>
      <h5 className='p-1 m-5'> Somos un grupo de estudiantes de Full Stack Development
              que estamos trabajando en este proyecto final para demostrar nuestras habilidades
              y conocimientos adquiridos durante el curso. </h5>
      <h5 className='p-0 m-5'>Nuestro objetivo es crear aplicaciones
              web innovadoras y funcionales que puedan mejorar la experiencia de los usuarios.
              Estamos entusiasmados de presentarles este proyecto y esperamos que disfruten
              explorando las diferentes secciones de la aplicación.</h5>
      <h1 className='p-5 m-5'> Integrandes del Grupo: </h1>
      <div className="row">
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
      <Footer />
    </div>
  );
};

export default SobreNosotros;
