import '../styles/informacionBases.css';

import BaseCamaraFoto from '../images/BaseCamaraFoto.jpg';
import BaseCamaraFoto2 from '../images/BaseCamaraFoto2.jpg';
import InfoBase from './InfoBase';

function BaseCamara() {

  return (
    <div className='baseCard'>
      <InfoBase 
          imagenInfoBase = {BaseCamaraFoto}
          imagenInfoBase2 = {BaseCamaraFoto2}
          tituloInfoBase = {"BASE CAMARA"}
          textoInfoBase = {"Ubicada en la Isla Media Luna, situada en la Bahía Luna, isla Livingston, Shetland del Sur. Fundada el 1º de Abril de 1953 con el nombre de Destacamento 'Bahía Luna'. "}
          textoInfoBase2 = {"Fue rebautizada en 1955 en memoria del Teniente de Navío D. Juan Cámara, integrante del Grupo Aeronaval de la Campaña Antártica 1954-55. Fue clausurada como base permanente en 1961 y reabierta desde la campaña 1988-1989 como una base de verano.  62°35′37.9″S 59°55′9.6″O  "}
          />
    </div>
  );
}

export default BaseCamara;