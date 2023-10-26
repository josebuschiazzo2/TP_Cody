import '../styles/FormularioRegistro.css';

import { useState } from 'react';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const FormularioRegistro = () => {

    const [username, setUsername] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [nacionalidad, setNacionalidad] = useState('');
    const [email, setEmail] = useState('');
    const [fecha_nac, setFechaNac] = useState('');
    const [password, setPassword] = useState('');

    //const [personas, setPersonas] = useState ([]);
     
    const handelSubmit = async ()=> {
        //e.preventDefault();
        console.log(username);
        console.log(nombre);
        console.log(apellido);
        console.log(nacionalidad);
        console.log(email);
        console.log(fecha_nac);
        console.log(password);

        // creacion de un arreglo de personas 'nuevaPersona' que contenga todos los datos "nombre, apellido etc..."
   // const nuevaPersona = { username: username, nombre: nombre, apellido: apellido, nacionalidad: nacionalidad, email: email, fechaNacimiento: fecha_nac, password: password  };

    try {
        // Realiza una solicitud POST al backend con los datos del formulario
        const response = await fetch('localhost:3003/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: username, nombre: nombre, apellido: apellido, nacionalidad: nacionalidad, email: email, fechaNacimiento: fecha_nac, password: password  }),
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data);
          }
        

        // aqui agregamos el arreglo de nuevaPersonas en el setPersonas y lo relacionamos para que se vayan cargando al arreglo 'personas'
       // setPersonas([nuevaPersona,...personas]);
       // setUsername('');
       // setNombre(''); // aqui setNombre vuelve a vacio una ves se haya hecho click en el boton Enviar
// setApellido(''); // aqui setApellido vuelve a vacio una ves se haya hecho click en el boton Enviar
        //setNacionalidad('');
       // setEmail('');
       // setFechaNac('');
       // setPassword('');
       // console.log(personas);  // muesta en arreglo de personas
    } catch (error) {
        console.error('Error al registrar:', error);
    }
    }

    return (
        
        <section> 
        <section className ="registro_inicio">
             <Navbar />
    
            <section className ="form">
                <div className='titulo'>
                    <h3>Formulario de Registro</h3>
                </div>
             
            <form onSubmit={handelSubmit} autoComplete='off'>
            <div className='texto'>
            <h4>Para crear tu cuenta te pediremos algunos datos</h4>
                </div>

                <input className='control' type="text" placeholder='Username' value={username} onChange={(e)=>(setUsername(e.target.value))} ></input>
                            
                <input className='control' type="text" placeholder='Nombre' value={nombre} onChange={(e)=>(setNombre(e.target.value))} ></input>
                
                <input className='control' type="text" placeholder='Apellido' value={apellido} onChange={(e)=>(setApellido(e.target.value))}></input>
            
                <input className='control' type="text" placeholder='Nacionalidad' value={nacionalidad} onChange={(e)=>(setNacionalidad(e.target.value))}></input>
                            
                <input className='control' type="text" placeholder='correo electrónico' value={email} onChange={(e)=>(setEmail(e.target.value))}></input>
                
                <input className='control' type="date" placeholder='fecha de nacimiento' value={fecha_nac} onChange={(e)=>(setFechaNac(e.target.value))}></input>

                <input className='control' type="text" placeholder='Password' value={password} onChange={(e)=>(setPassword(e.target.value))} ></input>

                <button type= "submit" >Quiero Registrarme</button>
            </form>
            </section>
            </section>
            <Footer />  
        </section>
    )
}
export default FormularioRegistro;

