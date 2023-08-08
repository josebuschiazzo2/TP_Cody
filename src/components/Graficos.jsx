import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import '../styles/graficos.css';

import {
  TableauViz,
  TableauEventType,
} from 'https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js';

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
      <Navbar />
      <div className="container">
        <h1 className="p-5 m-5">Gráficos</h1>
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
       
        <tableau-viz id="tableauViz"       
          src='https://public.tableau.com/views/ANTARCTICA/Dashboard3?:language=es-ES&:display_count=n&:origin=viz_share_link'      
          toolbar="bottom" hide-tabs
          style={{ width: '100%', height: '100%' }}>
        </tableau-viz>
        </div>
      <Footer />
    </div>
  );
};

export default Graficos;