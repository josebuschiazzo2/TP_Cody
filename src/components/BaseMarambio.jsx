import '../styles/informacionBases.css';

import BaseMarambioFoto from '../images/BaseMarambioFoto.jpg';
import BaseMarambioFoto2 from '../images/BaseMarambioFoto2.jpg';
import InfoBase from './InfoBase';

function BaseMarambio() {

  return (
    <div className='baseCard'>
      <InfoBase 
          imagenInfoBase = {BaseMarambioFoto}
          imagenInfoBase2 = {BaseMarambioFoto2}
          tituloInfoBase = {"BASE MARAMBIO"}
          textoInfoBase = {"La Base Marambio, dependiente de la Fuerza Aérea Argentina, es la principal puerta de entrada de la logística argentina en la Antártida y desde ella se despliega el mayor número de campamentos científicos durante la Campaña Antártica de Verano. Su nombre, así como el de la Isla en la que se encuentra, honra al piloto de la Fuerza Aérea Argentina, Gustavo Argentino Marambio."}
          textoInfoBase2 = {"La historia de la base comienza en noviembre de 1968 cuando la Fuerza Aérea realiza estudios de los suelos sobre la meseta de la Isla Vicecomodoro Marambio, situada en el Mar de Weddell. Esta ubicada en el noreste de la isla Seymour/Marambio en el mar de Weddell. 64°14′50.6″S 56°37′39.3″O"}

         
          />
    </div>
  );
}

export default BaseMarambio;