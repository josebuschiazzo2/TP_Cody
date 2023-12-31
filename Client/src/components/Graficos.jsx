import '../styles/graficos.css';

import React from 'react';

import {
  TableauEventType,
  TableauViz,
} from 'https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js';

import Footer from './Footer';
import Navbar from './Navbar';

const viz = new TableauViz();

viz.src = 'https://my-server/views/my-workbook/my-view';
viz.toolbar = 'hidden';
viz.addEventListener(TableauEventType.MarkSelectionChanged, handleMarkSelection);

//document.getElementById('tableauViz').appendChild(viz);

function handleMarkSelection() {
  alert('Mark(s) selected!');
  // code to handle the mark selection goes here
  <script type="module" src="https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"></script>

}

const Graficos = () => {
  return (
    <div id="Graficos">
      <Navbar  claseGraficas="underline" />
      <div className="container">
        <div className='textoGraficas'>
        <h3 className='titulo_graficas text-center mt-5'>¡Bienvenidos a la página de gráficos climáticos de la Antártida!</h3>
<p className='mb-3'> Aquí encontrarás información detallada y visualmente atractiva sobre las condiciones climáticas en esta región única y fascinante. Nuestros gráficos presentan datos meticulosamente recopilados que muestran el promedio del clima mensual en la Antártida, así como información específica sobre el clima en diferentes bases antárticas</p>
     <p className='mb-5'>Nuestros gráficos presentan datos meticulosamente recopilados que muestran el promedio del clima mensual en la Antártida, así como información específica sobre el clima en diferentes bases antárticas. Sumérgete en la belleza y la complejidad de los patrones climáticos antárticos a través de nuestros gráficos informativos.</p>
     </div> 

  
     <script type="module" src="https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"></script>
     
        <tableau-viz id="tableauViz"       
          src='https://public.tableau.com/views/Cody2/Dashboard1?:language=es-ES&:display_count=n&:origin=viz_share_link'      
          toolbar="bottom" hide-tabs
          style={{ width: '100%', height: '100%', marginBottom: '20px' }}>
        </tableau-viz>
        <tableau-viz id="tableauViz"    
          src='https://public.tableau.com/views/Cody_16915087213600/Dashboard2?:language=es-ES&:display_count=n&:origin=viz_share_link'      
          toolbar="bottom" hide-tabs
          style={{ width: '100%', height: '100%', marginBottom: '20px' }}>
        </tableau-viz>

      

        </div>
      <Footer />
    </div>
  );
};

export default Graficos;