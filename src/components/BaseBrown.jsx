import '../styles/informacionBases.css';

import BaseBrownFoto from '../images/BaseBrownFoto.jpg';
import BaseBrownFoto2 from '../images/BaseBrownFoto2.jpg';
import InfoBase from './InfoBase';

function BaseBrown() {

  return (
    <div className='baseCard'>
      <InfoBase 
          imagenInfoBase = {BaseBrownFoto}
          imagenInfoBase2 = {BaseBrownFoto2}
          tituloInfoBase = {"BASE BROWN"}
          textoInfoBase = {"La base antártica Brown o base Brown es una estación estival de investigación de la Antártida que pertenece a la República Argentina. Se llamó estación científica Almirante Brown hasta la década de 1990, cuando su nombre fue modificado al actual. Las estructuras fueron construidas en el verano de 1949-1950. El 6 de abril de 1951 fue inaugurado el destacamento naval Almirante Brown, denominado así en homenaje al almirante Guillermo Brown (considerado como el padre de la Armada Argentina) por el Grupo Naval Antártico comandado por el capitán de fragata Rodolfo N. Panzarini. La primera dotación estuvo integrada por: el teniente de fragata Antonio Vañek, los cabos Aldo Peralta (radiotelegrafista), Miguel Sotelo (enfermero) y Teófilo Villarreal (maquinista), y el marinero Dolores Irazábal.  "}
          textoInfoBase2 = {"Prueba de su belleza y atractivo es la gran cantidad de afluencia de turismo al lugar, contabilizándose alrededor de un crucero turístico por día durante la época estival. Está ubicada al pie de un morro de 70 m en la punta Proa de la península Sanavirón (Aldunate o Coughtrey), bahía Paraíso de la península Antártica, el cual es considerado como uno de los más bellos lugares en la Antártida. El lugar corresponde a la costa Danco sobre el mar de Bellingshausen. En Puerto Paraíso los barcos que llegan al lugar son apoyados en su navegación por varias balizas argentinas ubicadas en: punta Proa, punta Vidt, punta Conesa, punta Piedras, y el faro de la isla Crámer. "}
          />
    </div>
  );
}

export default BaseBrown;