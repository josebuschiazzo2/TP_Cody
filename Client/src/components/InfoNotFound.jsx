import '../styles/informacionBases.css';

import React from 'react';

import { Link } from 'react-router-dom';

function InfoNotFound(props) {


  return (
   
    <div className={props.claseInfoBase}> 
      <div className='basesHome' >
       <h1 className='tituloBase'>{props.tituloInfoBase}</h1>

        <div className='not_found'>
         <img className='img_not_found' src={props.imagenInfoBase} alt={props.altInfoBase}  />         
        </div>

        <div className='texto_not_found'>
          <div>
            <p className=''>{props.textoInfoBase2} </p>
          </div> 
              {/* Agrega el botón para volver al inicio */}
            <div id='volver_btn'>
              <Link to="/">
                <button className='volver_btn'>Volver al inicio</button>
              </Link>
            </div>   
         </div>
      </div>

    </div>
  )
}

export default InfoNotFound;
