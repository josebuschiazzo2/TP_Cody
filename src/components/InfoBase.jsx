import React from 'react'
function InfoBase(props) {
  return (
    <div className={props.claseInfoBase}>     
    <img src={props.imagenInfoBase} alt={props.altInfoBase} />
        <div> 
        <h1>{props.tituloInfoBase}</h1>
        <p>{props.textoInfoBase}</p>
        <a href="/"></a>
</div>
    </div>
  )
}
export default InfoBase
