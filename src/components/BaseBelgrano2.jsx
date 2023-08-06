import '../styles/informacionBases.css';

import BaseBelgrano2Foto from '../images/BaseBelgrano2Foto.jpg';
import BaseBelgrano2Foto2 from '../images/BaseBelgrano2Foto2.jpg';
import InfoBase from './InfoBase';

function BaseBelgrano2() {

  return (
    <div className='baseCard'>
      <InfoBase 
          imagenInfoBase = {BaseBelgrano2Foto}
          imagenInfoBase2 = {BaseBelgrano2Foto2}
          tituloInfoBase = {"BASE BELGRANO II"}
          textoInfoBase = {"La Base Belgrano II fue inaugurada el 5 de febrero de 1979 sobre el nunatak Bertrab en la Bahía Vahsel, al sur del mar de Weddell. La Base Belgrano II es la más austral de las bases argentinas y la tercera de las permanentes a nivel mundial. Su latitud determina que posea cuatro meses de completa luz solar, cuatro con penumbra y cuatro de noche polar."}
          textoInfoBase2 ={"Se trata de una zona de fuertes vientos con temperaturas constantemente negativas que llegan hasta los -54˚C. La flora se limita a algunos musgos y líquenes, mientras que la fauna se compone íntegramente de aves estivales como gaviotas, petreles y skúas. Esta ubicada en el nunatak Bertrab cerca de la bahía Vashel, costa Luitpold/Confín de la Tierra de Coats sobre el mar de Weddell 77°52′26″S 34°37′40″O "}
          />
    </div>
  );
}

export default BaseBelgrano2;