import '../styles/informacionBases.css';

import BaseSanMartinFoto from '../images/baseSanMartinFoto.jpg';
import BaseSanMartinFoto2 from '../images/baseSanMartinFoto2.jpg';
import InfoBase from './InfoBase';

function BaseSanMartin() {

  return (
    <div className='baseCard'>
      <InfoBase 
          imagenInfoBase = {BaseSanMartinFoto}
          imagenInfoBase2 = {BaseSanMartinFoto2}
          tituloInfoBase = {"BASE SAN MARTÍN"}
          textoInfoBase = {"La Base San Martín está localizada en el islote San Martín del grupo de islotes Debenham en Bahía Margarita, al oeste de la Península Antártica, siendo la más occidental de las bases argentinas. San Martín fue inaugurada el 21 de marzo de 1951 como Base de Ejército General San Martín, en honor del gran héroe de la independencia. Esta ubicada en el islote Barry/San Martín del grupo de los islotes Debenham en la caleta Sanavirón de la bahía Margarita. En la costa Fallières de la península Antártica 68°07′47″S 67°06′10″O "}
          textoInfoBase2 = {"Si bien la flora se limita a algunos líquenes y musgos, la fauna es diversa: orcas, focas cangrejeras y de Weddell, pingüinos Adelia, skúas, gaviotas y cormoranes. Se trata de una zona de fuertes vientos de hasta más de 200 km/h y temperaturas que en invierno alcanzan los -37ºC, pero en verano se han registrado hasta 8ºC. Entre junio y noviembre el mar se congela lo que permite realizar patrullas con medios terrestres sobre la capa de hielo marino. "}
          />
    </div>
  );
}

export default BaseSanMartin;