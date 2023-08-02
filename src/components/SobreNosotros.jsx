import React from 'react'
import Card from './Card'
import '../styles/about.css';
import Orcadas from '../images/OrcadasSmall.jpg';
import Navbar from './Navbar';
import Footer from './Footer';

function SobreNosotros() {
  return (
    <><><Navbar /><><h2 className='p-2 m-2'> SOBRE NOSOTROS </h2><>
      <div className='divAbout'>

        <div className='cardAbout'>
          <Card
           cardImg={Orcadas}
            cardTitle="Ema"
            cardText="estudiante" 
            
            />
        </div>

        <div className='cardAbout'>
          <Card
            cardTitle="dario"
            cardText="Está localizada en el islote San Martín del grupo de islotes Debenham en Bahía Margarita, al oeste de la Península Antártica, siendo la más occidental de las bases argentinas. " />
        </div>

        <div className='cardAbout'>
          <Card
            cardTitle="eve"
            cardText="Está localizada en el islote San Martín del grupo de islotes Debenham en Bahía Margarita, al oeste de la Península Antártica, siendo la más occidental de las bases argentinas. " />
        </div>
      </div>

      <div className='divAbout2'>
        <div className='cardAbout'>
          <Card
            cardTitle="jose"
            cardText="Está localizada en el islote San Martín del grupo de islotes Debenham en Bahía Margarita, al oeste de la Península Antártica, siendo la más occidental de las bases argentinas. " />
        </div>

        <div className='cardAbout'>
          <Card
            cardTitle="bruno"
            cardText="Está localizada en el islote San Martín del grupo de islotes Debenham en Bahía Margarita, al oeste de la Península Antártica, siendo la más occidental de las bases argentinas. " />
        </div>

      </div></></></><Footer /></>
  )
}

export default SobreNosotros;