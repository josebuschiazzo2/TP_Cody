import '../styles/informacionBases.css';

import BasePetrelFoto from '../images/BasePetrelFoto.jpg';
import BasePetrelFoto2 from '../images/BasePetrelFoto2.jpg';
import InfoBase from './InfoBase';

function BasePetrel() {

  return (
    <div className='baseCard'>
      <InfoBase 
          imagenInfoBase = {BasePetrelFoto}
          imagenInfoBase2 = {BasePetrelFoto2}
          tituloInfoBase = {"BASE PETREL"}
          textoInfoBase = {"La Base Conjunta Antártica Petrel o base Petrel es una estación científica de la Antártida perteneciente a la República Argentina. Sus coordenadas son 63°28′S 56°17′O y se ubica sobre rocas a 18 m s. n. m. al pie del glaciar Rosamaría en la rada Petrel, punta Bajos del cabo Welchness de la isla Dundee en el archipiélago de Joinville. En 2013 comenzó un plan de 10 años para reconvertirla en una base permanente. En la campaña antártica 2021-2022 la base fue restablecida como permanente. La temperatura media de las islas donde se encuentra la base Petrel, es de -7,1 °C, mientras que la marcas más extremas registraron de máxima 10,3 °C el 14 de marzo de 1967, y de mínima, -32 °C el 15 de mayo de 1969. La infraestructura de la base cuenta con 3600 m² bajo techo, área logística de 1200 m² y 25 camas. Cuenta para transporte: 2 Zodiac con motor fuera de borda y 1 camión todo terreno de 1.5 ton."}
          textoInfoBase2 = {"El 16 de diciembre de 2013, el ministro de defensa Agustín Rossi anunció que la base sería reinaugurada para convertirla en una base operativa durante todo el año. Los trabajos de acondicionamiento se realizaron en las campañas de verano de 2014-2015, 2015-2016 y 2016-2017 y continuarán en las siguientes campañas. De acuerdo al Plan Anual Antártico 2017 el 20 de diciembre de 2013 pasó a denominarse como base antártica integrada permanente de apoyo logístico Petrel. La futura base conjunta logística Petrel será una base logística de transferencia de pasajeros y de cargas para el Programa Antártico Argentino y programas de otros países y buques turísticos."}
          />
    </div>
  );
}

export default BasePetrel;