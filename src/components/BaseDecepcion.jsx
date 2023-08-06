import '../styles/informacionBases.css';

import BaseDecepcionFoto from '../images/BaseDecepcionFoto.jpg';
import BaseDecepcionFoto2 from '../images/BaseDecepcionFoto2.jpg';
import InfoBase from './InfoBase';

function BaseDecepcion() {

  return (
    <div className='baseCard'>
      <InfoBase 
          imagenInfoBase = {BaseDecepcionFoto}
          imagenInfoBase2 = {BaseDecepcionFoto2}
          tituloInfoBase = {"BASE DECEPCIÓN"}
          textoInfoBase = {"Situada en la bahía 1º de Mayo, Puerto Foster, isla Decepción, Shetland del Sur. Inaugurada el 25 de enero de 1948 con el nombre de Destacamento Naval Decepción. Desde diciembre de 1967, debido a erupciones volcánicas próximas a la zona, terminó su etapa como base permanente y pasó a ser de carácter temporal. "}
          textoInfoBase2 = {" Esta ubicada en la costa sudoeste de bahía Primero de Mayo, en el oeste de Puerto Foster en la isla Decepción de las Shetland del Sur 62°58′36.3″S 60°42′02.5″O  "} 
          />
    </div>
  );
}

export default BaseDecepcion;