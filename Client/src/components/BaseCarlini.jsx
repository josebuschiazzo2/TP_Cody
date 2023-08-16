import '../styles/informacionBases.css';

import CarliniFoto from '../images/CarliniFoto.jpg';
import CarliniFoto2 from '../images/CarliniFoto2.jpg';
import InfoBase from './InfoBase';

function BaseCarlini() {

  return (
    <div className='baseCard'>
      <InfoBase 
          imagenInfoBase = {CarliniFoto}
          imagenInfoBase2 = {CarliniFoto2}
          tituloInfoBase = {"BASE CARLINI"}
          textoInfoBase = {"La base antártica Carlini, anteriormente conocida como base Jubany hasta el 5 de marzo de 2012, es una estación científica permanente de la República Argentina en la Antártida. Se encuentra ubicada en la península Potter de la isla 25 de Mayo (o Rey Jorge), que forma parte del archipiélago de las Shetland del Sur.  Las actividades científicas en la base están agrupadas en el Laboratorio Antártico Multidisciplinario en Base Carlini (LACAR, anteriormente conocido como LAJUB), así como en el Laboratorio Dallmann. La operación y administración de la base están a cargo de la Dirección Nacional del Antártico, un organismo dependiente del Ministerio de Relaciones Exteriores de Argentina. "}
          textoInfoBase2 ={"Los planes científicos son implementados y supervisados por el Instituto Antártico Argentino, tanto para los científicos que trabajan durante el verano como para los que permanecen durante el invierno. Para las tareas logísticas durante el invierno, se cuenta con personal invernante proporcionado por el Ejército Argentino. La base Carlini cuenta con una capilla católica llamada Nuestra Señora del Valle y en las cercanías de la base, en la península Potter, se encuentran los refugios Albatros y Elefante, que dependen de ella. Además, la base cuenta con un helipuerto y tiene la capacidad de recibir aviones tipo Twin Otter con esquíes en el cercano glaciar Fourcade durante todo el año."}
          />
    </div>
  );
}

export default BaseCarlini;

