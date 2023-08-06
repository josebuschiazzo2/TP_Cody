import '../styles/informacionBases.css';

import React from 'react';

function InfoBase(props) {


  return (
   
    <div className={props.claseInfoBase}> 
       
      <div >
       <h1 className='titulo'>{props.tituloInfoBase}</h1>
        <div className='cardBaseIzq'>
          <div>
            <img src={props.imagenInfoBase} alt={props.altInfoBase}  />
          </div>
          <div>
            <p>{props.textoInfoBase} </p>
          </div>
        </div>
        <div className='cardBaseDer'>
          <div>
            <p>{props.textoInfoBase2} </p>
          </div>
            <div>
              <img src={props.imagenInfoBase2} alt={props.altInfoBase2} />
          </div>
          
        </div>
       
        {/*<a href="/">{props.tituloInfoBase} </a>*/} 
      </div>

    </div>
  )
}

export default InfoBase;
