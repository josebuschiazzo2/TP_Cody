import '../styles/informacionBases.css';

import pageNotFound2 from '../images/pageNotFound2.jpg';
import InfoNotFound from './InfoNotFound';

function PageNotFound() {

  return (
    <div className='container '>
      <InfoNotFound
          imagenInfoBase = {pageNotFound2}
          tituloInfoBase = {"PAGINA NO ENCONTRADA"}
          textoInfoBase2 = {" error 404 ¡Oh, explorador intrépido! Parece que te has aventurado demasiado lejos en la vastedad gélida de la Antártida digital. No temas!! Con un clic astuto, podrás regresar al cálido refugio de la página principal.  "}
          
          />
    </div>
  );
}

export default PageNotFound;