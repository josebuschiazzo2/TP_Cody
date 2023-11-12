import '../styles/Formulario.css';

import {
  useContext,
  useState,
} from 'react';

import { useNavigate } from 'react-router-dom';

import AuthContext from '../helpers/AuthContext';
import Footer from './Footer';
import Navbar from './Navbar';

function Formulario() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const { setAuthState } = useContext(AuthContext) // context desde donde agarramos el valor setAuthState
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault(); 
  try {
    const response = await fetch("http://localhost:3003/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),// identifica los objetos del body de la solicitud para enviar al backend. Convierte los datos a JSON y los envia.
    });
    if (!response.ok) {
       await response.json();
       console.log("usuario o contraseña no coinciden ")
       // ejecutar algo en caso de errores! 

    } else {
      const responseData = await response.json(); // responseData es una variable que almacena la respuesta del backend.
      const { token, username, id, role } = responseData; // responseData como conserva la respuesta del server, que es un objeto json, se desestructura para usar los datos de forma separada
      localStorage.setItem("token", token); //al hacer login se almacena el token en el localStorage para la persistencia de la sesión.
      setAuthState({ status: true, username, id, role }); // se asignan los datos del usuario a su estado de autenticación para que se ejecuten los cambios al hacer login. 
      // console.log(username) // para verificar si llega el dato desde el backend
      // console.log(responseData); // Mostrar toda la respuesta, depuración, ver estructura. 
      navigate('/');
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
};


  return (
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
            <h2>Bienvenido</h2>
            <input className='texto_form px-4'
              placeholder='Correo Electrónico'
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
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
                {/*<input type="checkbox" id="check" /> <label htmlFor="check">Recordarme</label>*/}
              </div>
              <div className='right'>
                {/* <label><a href="olvido"> Olvido su contraseña?</a></label>*/}
              </div>
            </div>

            <button id="login-btn"
              className="text-decoration-none">Iniciar Sesión</button>
            <a href="/Registrarme"/*</form>onClick={() => handleButtonClick()}*/>¿Nuevo en Cody App? Crear una cuenta</a>
          </form>
          {error && <h4>Todos los campos son obligatorios</h4>}
        </section>
      </section>
      <Footer />
    </section>

  )
}

export default Formulario;
