import React from "react";

function CardsContact({label,name,tipo,valorInput,estado,cambiarValor}){

/*   const [values,setValues] = useState({
    nombreCompleto:"hola",
    telefono:"1212",
    email:"fdsfs",
    asunto:"dasdsa",
    mensaje:"dasds",



});  */


/*   {/* div className="col" */

    const onChange=(e)=>{
      cambiarValor({...estado,[ e.target.name] : e.target.value})
    }
 


  
    return(
    
    <>
        <label className="form-label">{label}</label>
        <input
          className="form-control"
           name={name}
           type={tipo}
           id={name}
           value={valorInput}
           onChange={onChange}
          ></input>

      </> 
    
    )
}


export default CardsContact;