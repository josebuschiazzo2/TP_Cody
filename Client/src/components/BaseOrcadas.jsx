import '../styles/informacionBases.css';

import OrcadasFoto3 from '../images/OrcadasFoto.jpg';
import OrcadasFoto2 from '../images/OrcadasFoto3.jpg';
import InfoBase from './InfoBase';

function BaseOrcadas() {

  return (
    <div className='baseCard'>
      <InfoBase 
          imagenInfoBase = {OrcadasFoto3}
          imagenInfoBase2 = {OrcadasFoto2}
          tituloInfoBase = {"BASE ORCADAS"}
          textoInfoBase2 = {"Fecha de inauguración y de cambio de nombre: Omond House: 1 de abril de 1903 (120 años) *Observatorio meteorológico y magnético de las Orcadas del Sud: 22 de febrero de 1904 (119 años) *Destacamento naval Orcadas: 23 de diciembre de 1952 (70 años). Esta ubicada en Istmo de la isla Laurie (entre las caletas Uruguay y Scotia, de las bahías Uruguay y Scotia respectivamente), islas Orcadas del Sur. 60°44′25.6″S 44°44′24.3″O"}
          textoInfoBase = {"La base antártica Orcadas es una estación científica de la República Argentina ubicada en la isla Laurie de las islas Orcadas del Sur en la Antártida. Es la más antigua de las bases antárticas todavía en funcionamiento y opera todo el año a través de la Armada Argentina. Se llamó Destacamento Naval Orcadas hasta que en la década de 1990 su nombre fue modificado a Base Antártica Orcadas. Se encuentra a 1501 km al sudeste de la ciudad de Ushuaia, capital de la provincia de Tierra del Fuego Antártida e Islas del Atlántico Sur, a la que pertenece la Antártida Argentina. Las actividades científicas en la base están reunidas en el LABORC (Laboratorio Antártico Mutidisciplinario en Base Orcadas)."}
          />
    </div>
  );
}

export default BaseOrcadas;
