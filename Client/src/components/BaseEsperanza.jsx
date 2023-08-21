import '../styles/informacionBases.css';

import BaseEsperanzaFoto from '../images/BaseEsperanzaFoto.jpg';
import BaseEsperanzaFoto2 from '../images/BaseEsperanzaFoto2.jpg';
import InfoBase from './InfoBase';

function BaseEsperanza() {
  return (
    <div className='baseCard'>
      <InfoBase 
          imagenInfoBase = {BaseEsperanzaFoto}
          imagenInfoBase2 = {BaseEsperanzaFoto2}
          tituloInfoBase = {"BASE ESPERANZA"}
          textoInfoBase = {"La base antártica Esperanza (BAE) es una estación científica de la República Argentina ubicada en punta Foca de la bahía Esperanza en la península Trinidad, en la Antártida Argentina. Junto a la chilena Villa Las Estrellas son los únicos establecimientos de la Antártida donde había personal temporal cumpliendo funciones militares, científicas o de servicio acompañados de sus familias."}
          textoInfoBase2 = {"Se llamó base de ejército Esperanza hasta que en la década de 1990 su nombre fue modificado a base antártica Esperanza. El lema de la base es: «Permanencia, un acto de sacrificio». Las actividades científicas en la base están reunidas en el LABES (Laboratorio Antártico Multidisciplinario en Base Esperanza)"}
          />
    </div>
  );
}

export default BaseEsperanza;

