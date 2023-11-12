import '../styles/informacionBases.css';

import React from 'react';

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
        </div>
      </div>

    </div>
  )
}

export default InfoNotFound;
