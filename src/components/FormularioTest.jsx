import React,{useState} from "react";
import CardInfo from "./CardInfo";
import CardsContact from "./CardsContact";
export default function FormularioTest (){

    const [datos,setDatos] = useState({
        nombreCompleto: "",
        telefono: "",
        email:"",
        asunto:"",
        mensaje:"",

    })

    const handleInputChange = (e) =>{
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })

    }

    const enviarDatos = (e)=>{
        e.preventDefault()
        console.log(datos)
        

    }

    return (
        <form className="row" onSubmit={enviarDatos}>
        <div className="col-8 column-form ">
        <div className="row">
          <div className="col">
              <CardsContact
                nameInput="nombreCompleto"
                typeInput="text"
                value={datos.nombreCompleto}
                onChange={handleInputChange}
         
    
              >Nombre y Apellido</CardsContact>
    
              <CardsContact
                          nameInput="telefono"
                          typeInput="number"
                          
              >Telefono</CardsContact>
    
    
                
    
                
          </div> {/* dfdfdfsdfsdfsf */}
    
          <div className="col">
          <CardsContact
    
                nameInput="email"
                typeInput="email"
                value={datos.email}
                onChange={handleInputChange}
              >Email</CardsContact>
    
              <CardsContact
    
                nameInput="asunto"
                typeInput="text"
                value={datos.asunto}
                onChange={handleInputChange}
              >Asunto</CardsContact>
    
          </div>
          <div className="h-50">
            <label for="mensajeInput" className="form-label">Mensaje</label>
              <textarea
                className="form-control"
                name="mensaje"
                value={datos.mensaje}
                onChange={handleInputChange}
    /*                   placeholder="Deje un comentario aqui"
    */                ></textarea>
    
            </div>
        </div>
        <div className="d-grid gap-2">
            <button className="btn  " type="submit">
              Enviar
            </button>
            </div>
            </div>
            <CardInfo location="Tierra delFuego Antartida e islas del Atlanmtic Sur"
          phoneNumber="(+54)1111-111111"
          email="contact@website.com"
          textDescription="lorem dkjas lkopsak ok oakoka okaok okaoskodasko koa kokoklkdolksaok oo ko ko kok oksaodkaso kok ok oko koko kosk okoko kokokoko koko koko koko kok oko koko ko"
          nameCompany="Company.com">
    
    
          </CardInfo>
          
      
      </form>
      )

}

