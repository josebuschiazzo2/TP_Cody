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
     
    const handelSubmit = async (e) => {
        e.preventDefault(); // para que el formulario no se envíe autom. sino despues de recibir los datos. 
        try {
          const response = await fetch('http://localhost:3003/auth/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: username,
              nombre: nombre,
              apellido: apellido,
              nacionalidad: nacionalidad,
              email: email,
              fechaNacimiento: fecha_nac,
              password: password,
            }),
          });
          if (response.ok) {
            alert('Registro exitoso') // acá se puede cambiar y redirigir a Home o a otra parte..
            setUsername('');
            setNombre('');
            setApellido('');
            setEmail('');
            setFechaNac('');
            setNacionalidad('');
            setPassword('');
          } 
          else{
            alert("el usuario ya existe")
          }
        } catch (error) {
          console.error("Error al registrar:", error);
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
            <div className='texto'>
            <h4>Para crear tu cuenta te pediremos algunos datos</h4>
                </div>
            <form  onSubmit={handelSubmit}  autoComplete='off'>
                <input className='control' type="text" placeholder='Nombre de Usuario' value={username} onChange={(e)=>(setUsername(e.target.value))} ></input>
                <input className='control' type="text" placeholder='Nombre' value={nombre} onChange={(e)=>(setNombre(e.target.value))} ></input>
                <input className='control' type="text" placeholder='Apellido' value={apellido} onChange={(e)=>(setApellido(e.target.value))}></input>
                <input className='control' type="text" placeholder='Nacionalidad' value={nacionalidad} onChange={(e)=>(setNacionalidad(e.target.value))}></input>
                <input className='control' type="text" placeholder='Correo Electrónico' value={email} onChange={(e)=>(setEmail(e.target.value))}></input>
                <input className='control' type="date" placeholder='Fecha de Nacimiento' value={fecha_nac} onChange={(e)=>(setFechaNac(e.target.value))}></input>
                <input className='control' type="text" placeholder='Contraseña' value={password} onChange={(e)=>(setPassword(e.target.value))} ></input>
                <button id='register_btn' type='submit'>Quiero Registrarme</button>
            </form>
            </section>
            </section>
            <Footer />  
        </section>
    )
}
export default FormularioRegistro;

