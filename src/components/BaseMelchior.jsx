import '../styles/informacionBases.css';

import BaseMelchiorFoto from '../images/BaseMelchiorFoto.jpg';
import BaseMelchiorFoto2 from '../images/BaseMelchiorFoto2.jpg';
import InfoBase from './InfoBase';

function BaseMelchior() {

  return (
    <div className='baseCard'>
      <InfoBase 
          imagenInfoBase = {BaseMelchiorFoto}
          imagenInfoBase2 = {BaseMelchiorFoto2}
          tituloInfoBase = {"BASE MELCHIOR"}
          textoInfoBase = {" La base antártica Melchior o base Melchior (64°19.5′S 62°58.5′O) es una estación científica de la Antártida perteneciente a la República Argentina. Fue inaugurada el 31 de marzo de 1947 como destacamento naval Melchior, siendo la primera fundada en la península Antártica y la segunda base argentina después de la base Orcadas establecida en 1904. En la década de 1990 su nombre fue modificado al actual. Se halla en la isla Observatorio (caleta Observatorio, puerto Melchior, canal Principal) del archipiélago Melchior en la bahía Dallmann dentro del archipiélago Palmer. A 2008 la base estaba compuesta de 4 edificios que pueden albergar un máximo de 36 personas. Tiene una enfermería básica de 6 m² atendida por un paramédico."}
          textoInfoBase2 = {" En 1952 Melchior se volvió la principal fuente de pronósticos climáticos de la Antártida, realizando reportes 3 veces por día. Instalaciones astronómicas más grandes fueron inauguradas en 1955. Durante el Año Geofísico Internacional (1957-1958), el primer mareómetro automático en la Antártida fue instalado en la base. Desde 1947 al 30 de noviembre de 1961 Melchior sirvió como una base permanente, pero desde esa fecha adquirió un estatus de base de carácter estival. En la campaña antártica de verano 1962–1963, cuatro científicos del Museo Argentino de Ciencias Naturales condujeron investigaciones de biología marina. Desde la campaña antártica de verano de 1968–1969 las instalaciones han sido usadas periódicamente para esta disciplina por el Servicio de Hidrografía Naval. En la campaña antártica de verano 2016-2017 la base fue abierta el 30 de enero de 2017 para operar durante 40 días. La dotación fue embarcada en el transporte ARA Bahía San Blas."}
          />
    </div>
  );
}

export default BaseMelchior;