import '../styles/card.css';

import React, {
  lazy,
  startTransition,
  Suspense,
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
import Card from './Card';

const LazyBaseBelgrano2 = lazy(() => import('./BaseBelgrano2'));
const LazyBaseBrown = lazy(() => import('./BaseBrown'));
const LazyBaseCamara = lazy(() => import('./BaseCamara'));
const LazyBaseCarlini = lazy(() => import('./BaseCarlini'));
const LazyBaseDecepcion = lazy(() => import('./BaseDecepcion'));
const LazyBaseEsperanza = lazy(() => import('./BaseEsperanza'));
const LazyBaseMarambio = lazy(() => import('./BaseMarambio'));
const LazyBaseMatienzo = lazy(() => import('./BaseMatienzo'));
const LazyBaseMelchior = lazy(() => import('./BaseMelchior'));
const LazyBaseOrcadas = lazy(() => import('./BaseOrcadas'));
const LazyBasePetrel = lazy(() => import('./BasePetrel'));
const LazyBasePrimavera = lazy(() => import('./BasePrimavera'));
const LazyBaseSanMartin = lazy(() => import('./BaseSanMartin'));




const CardsContent = () => {
  const [contentToShow, setContentToShow] = useState(null);
  const handleButtonClick = (component) => {
    startTransition(() => {
      setContentToShow(
        <Suspense fallback={<div>Loading...</div>}>
          {component}
        </Suspense>
      )
    }
    )
  };
  return (
    <div>
      <div id='BaseAntartica' >
        {contentToShow}
      </div>

      <div id="cards" className='container'>
        <div className='bases'>
          <h3> Bases Antárticas Argentinas</h3>
          <h4 className='infoHome'>En la vastedad de la Antártida, Argentina gestiona 13 bases, donde la magia del hielo se entrelaza con la investigación científica,
           la preservación del medio ambiente y la cooperación internacional. Seis de ellas son permanentes, llevando a cabo sus actividades durante todo el año,
            mientras que las temporales se activan solo en verano. Dos de estas bases, Carlini y Brown, están bajo la tutela de la Cancillería,
             mientras que el resto de nuestras bases son atendidas por el Comando Conjunto Antártico del Ministerio de Defensa.
           Nuestras bases son piezas únicas, inscribiendo la esencia argentina en la tierra que abraza el hielo sin fin.</h4>
        </div>

        <a href="#BaseAntartica" onClick={() => handleButtonClick(<LazyBaseCarlini />)}>
          <Card
            cardImg={Carlini}
            tipoDeBase="permanente"
            cardBadge="Permanente"
            cardTitle="Base Carlini"
            cardText="Latitud 62º 14’ S y longitud 58º 40’ W. Ubicada en la Caleta Potter, isla 25 de Mayo, Shetland del Sur. " />
        </a>
        <a href="#BaseAntartica" onClick={() => handleButtonClick(<LazyBaseEsperanza />)}>
          <Card
            cardImg={Esperanza}
            tipoDeBase="permanente"
            cardBadge="Permanente"
            cardTitle="Base esperanza"
            cardText="Ubicación: Latitud 63º 24’ S y longitud 57º 00’ W, extremo norte de la Península Trinidad, Bahía Esperanza, Estrecho Antarctic."
          />
        </a>
        <a href="#BaseAntartica" onClick={() => handleButtonClick(<LazyBaseMarambio />)}>
          <Card
            cardImg={Marambio}
            tipoDeBase="permanente"
            cardBadge="Permanente"
            cardTitle="Base Marambio"
            cardText="Latitud 64º 14’ S y longitud 56º 37’ W. Ubicada en la Isla Marambio (ex Seymur) sobre el Mar de Weddell" />
        </a>
        <a href="#BaseAntartica" onClick={() => handleButtonClick(<LazyBaseOrcadas />)}>
          <Card
            cardImg={Orcadas}
            cardBadge="Permanente"
            tipoDeBase="permanente"
            cardTitle="Base Orcadas"
            cardText="Istmo de la isla Laurie, islas Orcadas del Sur. 60°44′25.6″S 44°44′24.3″O" />
        </a>
        <a href="#BaseAntartica" onClick={() => handleButtonClick(<LazyBaseSanMartin />)}>
          <Card
            cardImg={SanMartin}
            tipoDeBase="permanente"
            cardBadge="Permanente"
            cardTitle="Base San Martín"
            cardText="En el islote Barry/San Martín. En la costa Fallières de la península Antártica. 68°07′47″S 67°06′10″O" />
        </a>
        <a href="#BaseAntartica" onClick={() => handleButtonClick(<LazyBaseBelgrano2 />)}>
          <Card
            cardImg={Belgrano2}
            tipoDeBase="permanente"
            cardBadge="Permanente"
            cardTitle="Base Belgrano II"
            cardText="Está ubicada sobre el Nunatak Bertrab, en los 77º51’S y 34º33’W, en bahía de Vahsel sobre la costa Confín en la Tierra de Cotas." />
        </a>
        <a href="#BaseAntartica" onClick={() => handleButtonClick(<LazyBaseCamara />)}>
          <Card
            cardImg={Camara}
            tipoDeBase="temporal"
            cardBadge="Temporal"
            cardTitle="Base Cámara"
            cardText="UBICACIÓN GEOGRÁFICA Caleta Menguante, isla Media Luna 62°36´S - 59°54´O" />
        </a>
        <a href="#BaseAntartica" onClick={() => handleButtonClick(
          <Suspense fallback={<div>Loading...</div>}>

            <LazyBaseDecepcion />
          </Suspense>


        )}>
          <Card
            cardImg={Decepcion}
            tipoDeBase="temporal"
            cardBadge="Temporal"
            cardTitle="Base Decepción"
            cardText="UBICACIÓN GEOGRÁFICA Bahía 1˚ de Mayo, isla Decepción 62°59´S - 60°43´O" />
        </a>
        <a href="#BaseAntartica" onClick={() => handleButtonClick(
          <Suspense fallback={<div>Loading...</div>}>

            <LazyBasePrimavera />
          </Suspense>

        )}>
          <Card
            cardImg={Primavera}
            tipoDeBase="temporal"
            cardBadge="Temporal"
            cardTitle="Base Primavera"
            cardText="UBICACIÓN GEOGRÁFICA  Cabo Primavera, Costa Danco 64°09´S - 60°58´O" />
        </a>
        <a href="#BaseAntartica" onClick={() => handleButtonClick(
          <Suspense fallback={<div>Loading...</div>}>
            <LazyBaseMelchior />
          </Suspense>

        )}>
          <Card
            cardImg={Melchior}
            tipoDeBase="temporal"
            cardBadge="Temporal"
            cardTitle="Base Melchior"
            cardText="UBICACIÓN GEOGRÁFICA Isla Observatorio, Archipiélago Melchior 64°20´S - 62°59´O" />
        </a>
        <a href="#BaseAntartica" onClick={() => handleButtonClick(
          <Suspense fallback={<div>Loading...</div>}>

            <LazyBaseBrown />
          </Suspense>

        )}>
          <Card
            cardImg={Brown}
            tipoDeBase="temporal"
            cardBadge="Temporal"
            cardTitle="Base Brown"
            cardText="UBICACIÓN GEOGRÁFICA Punta Proa, Bahía Puerto Paraíso 64°52´S - 62°54´O64°52´S - 62°54´O" />
        </a>
        <a href="#BaseAntartica" onClick={() => handleButtonClick(
          <Suspense fallback={<div>Loading...</div>}>
            <LazyBasePetrel />
          </Suspense>

        )}>
          <Card
            cardImg={Petrel}
            tipoDeBase="temporal"
            cardBadge="Temporal"
            cardTitle="Base Petrel"
            cardText="UBICACIÓN GEOGRÁFICA Rada Petrel, Isla Dundee 63°28´S - 56°12´O" />
        </a>
        <a href="#BaseAntartica" onClick={() => handleButtonClick(
          <Suspense fallback={<div>Loading...</div>}>

            <LazyBaseMatienzo />

          </Suspense>
        )}>
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

