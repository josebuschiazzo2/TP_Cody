import '../styles/informacionBases.css';

import BaseMatienzoFoto from '../images/BaseMatienzoFoto.jpg';
import BaseMatienzoFoto2 from '../images/BaseMatienzoFoto2.jpg';
import InfoBase from './InfoBase';

function BaseMatienzo() {

  return (
    <div className='baseCard'>
      <InfoBase 
          imagenInfoBase = {BaseMatienzoFoto}
          imagenInfoBase2 = {BaseMatienzoFoto2}
          tituloInfoBase = {"BASE MATIENZO"}
          textoInfoBase = {"La base antártica Matienzo o base Matienzo es una estación científica de la Antártida perteneciente a la República Argentina ubicada en las coordenadas 64°58′S 60°08′O. Llevó el nombre de base aérea Teniente Benjamín Matienzo hasta que en la década de 1990 su nombre fue modificado al actual. Se encuentra en el nunatak Larsen, del grupo de nunataks Foca, en la barrera de hielo Larsen sobre el mar de Weddell. Estos nunataks se alzan a lo largo de unos 45 kilómetros en la parte sur de la costa de Nordenskjöld en la península Antártica. Lleva su nombre en homenaje a Benjamín Matienzo, militar y pionero de la aviación argentina. La base cuenta con una pista de hielo y nieve de 1500 m, ubicada en un glaciar a 2 km, que permite el aterrizaje con esquíes de aeronaves de cualquier tipo. El helipuerto está a 1500 m al sur de la base."}
          textoInfoBase2 = {"Fue clausurada durante la campaña 1972-1973, reabierta el 8 de septiembre de 1974 y vuelta a clausurar durante la campaña 1984-1985, quedando como una base no permanente. La siguiente fue la dotación del personal de Fuerza Aérea que realizó la campaña de septiembre de 1974 a abril de 1975: García, Iacurto, Velázquez, Héctor Dimas Sosa, Reishl, Martinovich, Gallardo, Mignani y Nieto. El 4 de enero de 2009 la base fue reabierta para albergar por tres meses a 9 mujeres integrantes de la Fuerza Aérea Argentina, bajo cuya jurisdicción se halla la base. Fue la primera vez que una base antártica estuvo habitada únicamente por personal femenino."}
          />
    </div>
  );
}

export default BaseMatienzo;