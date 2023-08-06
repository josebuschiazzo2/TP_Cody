import '../styles/informacionBases.css';

import BasePrimaveraFoto from '../images/BasePrimaveraFoto.jpg';
import BasePrimaveraFoto2 from '../images/BasePrimaveraFoto2.jpg';
import InfoBase from './InfoBase';

function BasePrimavera() {

  return (
    <div className='baseCard'>
      <InfoBase 
          imagenInfoBase = {BasePrimaveraFoto}
          imagenInfoBase2 = {BasePrimaveraFoto2}
          tituloInfoBase = {"BASE PRIMAVERA"}
          textoInfoBase = {"El 3 de marzo de 1977 personal del Ejército instaló en la entrada SO de la caleta Cierva una base en un promontorio rocoso que se levanta en la costa O de la Tierra de San Martín, en el acceso N del estrecho de Gerlache sobre la costa de Danco, en el cabo Primavera (64º09’S y 60º57’50”W). La zona es abrupta, formada por un gran macizo granítico que en los lugares libres de hielo exhibe capas de líquenes, musgos y algunas pequeñas gramíneas (el 80% de todo lo que se conoce en el continente Antártico). Cuenta con un 90% de las especies animales antárticas; entre los mamíferos se pueden mencionar a las focas peleteras, cangrejeras y de Weddell; leopardos y elefantes marinos y las ballenas azules, de aleta, franca, cachalotes y orcas. En cuanto a aves se observan: petreles, skúas, gaviotas, gaviotines, palomas antárticas y cormoranes. Se caracteriza por un microclima que favorece tanto la actividad humana como la presencia de una rica flora y fauna. La temperatura máxima y mínima oscilan entre los 13 y -20ºC. Los vientos que se han podido registrar predominan del sector NO a una velocidad promedio de 45 km/h. "}
          textoInfoBase2 = {"Buscando acentuar la presencia y la expansión de los estudios científicos en la costa occidental de la península Antártica el Teniente Coronel Ignacio CARRO y ocho hombres activaron la base. Tenían como misión, además de las observaciones meteorológicas y glaciológicas, completar todas las instalaciones para dar apoyo a los científicos que enviara el Instituto Antártico Argentino. Esta ubicada en la entrada sudoeste de la caleta Cierva en el cabo Primavera, en el acceso norte del estrecho de Gerlache sobre la costa Danco de la península Antártica. 64°09′35.1″S 60°57′25.5″O "}
          />
    </div>
  );
}

export default BasePrimavera;