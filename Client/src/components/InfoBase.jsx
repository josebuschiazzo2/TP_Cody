import '../styles/informacionBases.css';

import React from 'react';

function InfoBase(props) {


  return (
   
    <div className={props.claseInfoBase}> 
      <div className='basesHome' >
       <h1 className='tituloBase'>{props.tituloInfoBase}</h1>

        <div className='cardBaseIzq'>
          
            <img className='img_base' src={props.imagenInfoBase} alt={props.altInfoBase}  />
         
          <div>
            <p className='texto_bases'>{props.textoInfoBase} </p>
          </div>
        </div>
        <div className='cardBaseDer'>
          <div>
            <p className='texto_bases'>{props.textoInfoBase2} </p>
          </div>
              <img className='img_base' src={props.imagenInfoBase2} alt={props.altInfoBase2} />          
        </div>
       
        {/*<a href="/">{props.tituloInfoBase} </a>*/} 
      </div>

    </div>
  )
}

export default InfoBase;
