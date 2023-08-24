import '../styles/card.css';

import {
  React,
  useState,
} from 'react';

import Belgrano2 from '../images/Belgrano2Small.jpg';
import Brown from '../images/BrownSmall.jpg';
import Camara from '../images/CamaraSmall.jpg';
import Carlini from '../images/CarliniSmall.jpg';
import Decepcion from '../images/DecepcionSmall.jpg';
import Esperanza from '../images/EsperanzaSmall.jpg';
import Marambio from '../images/MarambioSmall.jpg';
import Matienzo from '../images/MatienzoSmall.jpg';
import Melchior from '../images/MelchiorSmall.jpg';
import Orcadas from '../images/OrcadasSmall.jpg';
import Petrel from '../images/PetrelSmall.jpg';
import Primavera from '../images/PrimaveraSmall.jpg';
import SanMartin from '../images/SanMartinSmall.jpg';
import BaseBelgrano2 from './BaseBelgrano2';
import BaseBrown from './BaseBrown';
import BaseCamara from './BaseCamara';
import BaseCarlini from './BaseCarlini';
import BaseDecepcion from './BaseDecepcion';
import BaseEsperanza from './BaseEsperanza';
import BaseMarambio from './BaseMarambio';
import BaseMatienzo from './BaseMatienzo';
import BaseMelchior from './BaseMelchior';
import BaseOrcadas from './BaseOrcadas';
import BasePetrel from './BasePetrel';
import BasePrimavera from './BasePrimavera';
import BaseSanMartin from './BaseSanMartin';
import Card from './Card';

const CardsContent = () => {
  const [contentToShow, setContentToShow] = useState(null);
  const handleButtonClick = (component) => {
    setContentToShow(component);
  };
  return (
    <div>
<div id='BaseAntartica' > 
{contentToShow}
</div>

      <div  id="cards" className='container'>
        <div className='bases'>
          <h3> Bases Antárticas Argentinas</h3>
          <h6>La Argentina administra 13 bases en la Antártida, de las cuales 6 son permanentes (operativas todo el año) y el resto, temporarias (operativas sólo en verano). De ellas, 2 son administradas directamente por la Cancillería: Carlini (permanente, ex base Jubany) y Brown (temporaria). Las demás bases son administradas por el Comando Conjunto Antártico (Ministerio de Defensa). Ellas son base Orcadas,  base Marambio, base Esperanza, base San Martín y base Belgrano II (permanentes); y las bases temporarias Melchior, Decepción, Cámara, Primavera, Petrel y Matienzo.</h6>
        </div>
        
      <a href="#BaseAntartica" onClick={() => handleButtonClick(<BaseCarlini />)}>
         <Card 
          cardImg={Carlini}
          tipoDeBase="permanente"
          cardBadge="Permanente"
          cardTitle="Base Carlini"
          cardText="Latitud 62º 14’ S y longitud 58º 40’ W. Ubicada en la Caleta Potter, isla 25 de Mayo, Shetland del Sur. "/>
 </a>
 <a href="#BaseAntartica" onClick={() => handleButtonClick(<BaseEsperanza />)}>
        <Card
          cardImg={Esperanza}
          tipoDeBase="permanente"
          cardBadge="Permanente"
          cardTitle="Base esperanza"
          cardText="Ubicación: Latitud 63º 24’ S y longitud 57º 00’ W, extremo norte de la Península Trinidad, Bahía Esperanza, Estrecho Antarctic." 
          />
</a>
<a href="#BaseAntartica" onClick={() => handleButtonClick(<BaseMarambio />)}>
        <Card
          cardImg={Marambio}
          tipoDeBase="permanente"
          cardBadge="Permanente"
          cardTitle="Base Marambio"
          cardText="Latitud 64º 14’ S y longitud 56º 37’ W. Ubicada en la Isla Marambio (ex Seymur) sobre el Mar de Weddell" />
</a>
<a href="#BaseAntartica" onClick={() => handleButtonClick(<BaseOrcadas />)}>
        <Card
          cardImg={Orcadas}
          cardBadge="Permanente"
          tipoDeBase="permanente"
          cardTitle="Base Orcadas"
          cardText="Istmo de la isla Laurie, islas Orcadas del Sur. 60°44′25.6″S 44°44′24.3″O" />
</a>
<a href="#BaseAntartica" onClick={() => handleButtonClick(<BaseSanMartin />)}>
        <Card
          cardImg={SanMartin}
          tipoDeBase="permanente"
          cardBadge="Permanente"
          cardTitle="Base San Martín"
          cardText="En el islote Barry/San Martín. En la costa Fallières de la península Antártica. 68°07′47″S 67°06′10″O" />
</a>
<a href="#BaseAntartica" onClick={() => handleButtonClick(<BaseBelgrano2 />)}>
        <Card
          cardImg={Belgrano2}
          tipoDeBase="permanente"
          cardBadge="Permanente"
          cardTitle="Base Belgrano II"
          cardText="Está ubicada sobre el Nunatak Bertrab, en los 77º51’S y 34º33’W, en bahía de Vahsel sobre la costa Confín en la Tierra de Cotas." />
</a>
<a href="#BaseAntartica" onClick={() => handleButtonClick(<BaseCamara />)}>
        <Card
          cardImg={Camara}
          tipoDeBase="temporal"
          cardBadge="Temporal"
          cardTitle="Base Cámara"
          cardText="UBICACIÓN GEOGRÁFICA Caleta Menguante, isla Media Luna 62°36´S - 59°54´O" />
</a>
<a href="#BaseAntartica" onClick={() => handleButtonClick(<BaseDecepcion />)}>
        <Card
          cardImg={Decepcion}
          tipoDeBase="temporal"
          cardBadge="Temporal"
          cardTitle="Base Decepción"
          cardText="UBICACIÓN GEOGRÁFICA Bahía 1˚ de Mayo, isla Decepción 62°59´S - 60°43´O" />
</a>
<a href="#BaseAntartica" onClick={() => handleButtonClick(<BasePrimavera />)}>
        <Card
          cardImg={Primavera}
          tipoDeBase="temporal"
          cardBadge="Temporal"
          cardTitle="Base Primavera"
          cardText="UBICACIÓN GEOGRÁFICA  Cabo Primavera, Costa Danco 64°09´S - 60°58´O" />
</a>
<a href="#BaseAntartica" onClick={() => handleButtonClick(<BaseMelchior />)}>
        <Card
          cardImg={Melchior}
          tipoDeBase="temporal"
          cardBadge="Temporal"
          cardTitle="Base Melchior"
          cardText="UBICACIÓN GEOGRÁFICA Isla Observatorio, Archipiélago Melchior 64°20´S - 62°59´O" />
</a>
<a href="#BaseAntartica" onClick={() => handleButtonClick(<BaseBrown />)}>
        <Card
          cardImg={Brown}
          tipoDeBase="temporal"
          cardBadge="Temporal"
          cardTitle="Base Brown"
          cardText="UBICACIÓN GEOGRÁFICA Punta Proa, Bahía Puerto Paraíso 64°52´S - 62°54´O64°52´S - 62°54´O" />
</a>
<a href="#BaseAntartica" onClick={() => handleButtonClick(<BasePetrel />)}>
        <Card
          cardImg={Petrel}
          tipoDeBase="temporal"
          cardBadge="Temporal"
          cardTitle="Base Petrel"
          cardText="UBICACIÓN GEOGRÁFICA Rada Petrel, Isla Dundee 63°28´S - 56°12´O" />
</a>
<a href="#BaseAntartica" onClick={() => handleButtonClick(<BaseMatienzo />)}>
        <Card
          cardImg={Matienzo}
          tipoDeBase="temporal"
          cardBadge="Temporal"
          cardTitle="Base Matienzo"
          cardText="UBICACIÓN GEOGRÁFICA Nunatak Larsen (Nunatak Foca), barrera de hielos Larsen (mar de Weddell) 64°58´33´S - 60°4´15´O" />  
  </a>
      </div> 
    </div>
  )

}
export default CardsContent;

