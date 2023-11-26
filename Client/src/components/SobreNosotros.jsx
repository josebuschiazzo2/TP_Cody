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
  
 
  
  const integrantes = [
    {
      cardTitle: "Evelin Vidal",
      cardText: "Full Stack Developer",
      cardLink: "https://www.linkedin.com/in/evelin-vidal-740a29289/",
      cardImg: "https://media.licdn.com/dms/image/D4E03AQEPlH03nTgddA/profile-displayphoto-shrink_800_800/0/1693348319462?e=1706745600&v=beta&t=viiLakhZQE5v1p-y629y5JrHZZO9Hcu-a2NFB0sYhM0"
      //cardBadge:
    },
    {
      cardTitle: "Dario Lopez",
      cardText: "Supervisor en Mirgor. Full Stack Developer",
      cardLink: "https://www.linkedin.com/in/dar%C3%ADo-c%C3%A9sar-l%C3%B3pez",
      cardImg: "https://media.licdn.com/dms/image/D4D03AQHJugzYOcRDtg/profile-displayphoto-shrink_800_800/0/1692838576386?e=1706745600&v=beta&t=Qi6j4YLg4e8ngFaLBL5imVdEGAxNs6fS8HncEvszGNQ"
      //cardBadge: 
    },
    {
      cardTitle: "Jose Buschiazzo",
      cardText: "Jefe de Ing. de Procesos y MC. Full Stack Developer",
      cardLink: "https://www.linkedin.com/in/jose-buschiazzo/",
      cardImg: "https://media.licdn.com/dms/image/C4E03AQF4pngseWpbWQ/profile-displayphoto-shrink_800_800/0/1624714011502?e=1706745600&v=beta&t=4cGsjrBGFTzbd7KnZOpSm8gfaESn4jjHZAQ1CyLbqDI"
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
        <div className='introductory-text'>
          <div>{texto1}</div>
            <div>{texto2}</div>
          </div>
        </div>
       
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
