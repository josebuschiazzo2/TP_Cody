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
    //constantes de validaciones en el formulario para evitar que se envíe si hay errores
    //const [usernameError, setUsernameError] = useState('');

    //funciones que verifiquen las condiciones para cada campo.
    // ** EL BACKEND VALIDA CORRECTAMENTE * FALTA LAS VALIDACIONES EN EL FRONTEND
    // ** Aunque el back no hacepta el regsitro con error, el front muestra Registro Exitoso.. 
const validateUsername = (value) => /^[a-zA-Z]/.test(value);
const validateName = (value) => /^[a-zA-Z]+$/.test(value);
const validateApellido = (value) => /^[a-zA-Z]+$/.test(value);
const validateNacionalidad = (value) => /^[a-zA-Z]+$/.test(value);
const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]/.test(value);
const validateFechaNac = (value) => true; // se puede agregar una validación específica si es necesario
const validatePassword = (value) => value.length >= 4;

console.log(username);
console.log(validateUsername(username));

     
    const handelSubmit = async (e) => {
        e.preventDefault(); // para que el formulario no se envíe autom. sino despues de recibir los datos. 
       
        // Antes de enviar los datos al servidor, se verifican que los datos sean válidos.
        if (
          validateUsername(username) &&
          validateName(nombre) &&
          validateApellido(apellido) &&
          validateNacionalidad(nacionalidad) &&
          validateEmail(email) &&
          validateFechaNac(fecha_nac) &&
          validatePassword(password)
        ) {
          // Los datos son válidos, enviar al servidor
          try {
            // ... (código para enviar al servidor)
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
                alert("Error al registar el usuario o el usuario ya existe")
              }
            } catch (error) {
              console.error("Error al registrar:", error);
            }
          } catch (error) {
            console.error("Error al registrar:", error);
          }
        } else {
          //CAMBIAR A UN MENSAJE EN LA PANTALLA
          alert('Por favor, verifica los datos ingresados.  USERNAME: letras y números, sin espacios, caracteres: nin: 5, max 12. // NOMBRE, APELLIDO Y NACIONALIDAD: letras, sin espacios, caracteres: nin: 3, max 20. // FECHA DE NACIMIENTO: fecha del calendario. // EMAIL: correo válido, caracteres: nin: 7, max 45. // Pasword: letras y/o números, caracteres: nin: 4, max: 15.   ');
          
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
               <input className='control' 
                type="text" 
                placeholder='Nombre de Usuario'
                value={username} 
                onChange={(e) => {
                  setUsername(e.target.value);
                  validateUsername(e.target.value);
                  }}
                style={{ borderColor: validateUsername(username) ? ' initial' : ' red' }} >
                </input>

                <input className='control' 
                type="text" 
                placeholder='Nombre' 
                value={nombre} 
                onChange={(e)=>{
                  setNombre(e.target.value);
                  validateName(e.target.value);
                  }} 
                style={{ borderColor: validateName(nombre) ? ' initial' : ' red' }}>
                </input>

                <input className='control' 
                type="text" 
                placeholder='Apellido' 
                value={apellido} 
                onChange={(e)=>{
                  setApellido(e.target.value);
                  validateApellido(e.target.value);
                  }}
                style={{ borderColor: validateApellido(apellido) ? ' initial' : ' red' }}>
                </input>

                <input className='control' 
                type="text" 
                placeholder='Nacionalidad' 
                value={nacionalidad} 
                onChange={(e)=> {
                  setNacionalidad(e.target.value);
                  validateNacionalidad(e.target.value);
                  }}
                style={{ borderColor: validateNacionalidad(nacionalidad) ? ' initial' : ' red' }}>
                </input>

                <input className='control' 
                type="text" 
                placeholder='Correo Electrónico' 
                value={email} 
                onChange={(e)=> {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                  }}
                style={{ borderColor: validateEmail(email) ? ' initial' : ' red' }}>
                </input>

                <input className='control' 
                type="date" 
                placeholder='Fecha de Nacimiento' 
                value={fecha_nac} 
                onChange={(e)=>{
                  setFechaNac(e.target.value);
                  validateFechaNac(e.target.value);
                  }}
                style={{ borderColor: validateFechaNac(fecha_nac) ? ' initial' : ' red' }}>
                </input>

                <input className='control' 
                type="text" 
                placeholder='Contraseña' 
                value={password} 
                onChange={(e)=>{
                  setPassword(e.target.value);
                  validatePassword(e.target.value);
                  }}
                style={{ borderColor: validateFechaNac(fecha_nac) ? ' initial' : ' red' }}>
                </input>
                  <button id='register_btn' type='submit'>Quiero Registrarme</button>
              
            </form>
            </section>
            </section>
            <Footer />  
        </section>
    )
}
export default FormularioRegistro;
