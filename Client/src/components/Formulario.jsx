import '../styles/Formulario.css';

import { useState } from 'react';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Formulario({ setUser }){
    const [nombre, setNombre]= useState("");
    const [password, setPassword]= useState("");
    const [error, setError] = useState(false)
    
   
    const handleSubmit = (e) =>{
       e.preventDefault()
       if(nombre === "" || password === "") { 
        setError(true)
        return
       }
       setError(false)

       setUser([nombre])
    }

    return(
        <section className='preBody'>
             
    <section className='body'>
        <section className='inicio'>
             <Navbar />
             <section>
                    
                    <div className='mensaje-inicio'>
                    <h2>Descubre y vive una experiencia única e inigualable en la Antártida,</h2>
                    <h3>Accede con tu nombre de usuario y contraseña de Cody Creative</h3>
                    <h4>Disfruta de la experiencia!</h4>
                    </div> 
                   
                </section>
            
            <form className='formulario' onSubmit={handleSubmit}>
            <h3>Iniciar Sesión</h3>
              <input className='texto_form px-4'
              placeholder='Usuario'
              type="text"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              required
              />
              <input className='texto_form px-4' 
               placeholder='Contraseña'
               type="password" 
               value={password}
               onChange={e => setPassword(e.target.value)}
               required
              />
              <div className='bottom'>
                <div className='left'>
                    <input type="checkbox" id="check" /> <label htmlFor="check">Recordarme</label>
                </div>
                <div className='right'>
                    <label><a href="olvido"> Olvido su contraseña?</a></label>
                </div>
             </div>  
             
             <button id="registrarse-btn"
             className="text-decoration-none px-2 py-1 rounded-4">Ingresar</button>
             <a href="/Registrarme"/*</form>onClick={() => handleButtonClick()}*/>¿Nuevo en Cody App? Crear una cuenta</a>
            </form>
        {error && <h4>Todos los campos son obligatorios</h4> }  
        </section>
    </section>
    <Footer /> 
    </section>
      
    )
}

export default Formulario;
