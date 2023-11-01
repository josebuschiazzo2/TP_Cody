import '../styles/Formulario.css';
import { useState, useContext } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AuthContext from '../helpers/AuthContext';
import { useNavigate } from 'react-router-dom';


function Formulario() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const { setAuthState } = useContext(AuthContext) // context desde donde agarramos el valor setAuthState
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault() // prevé el envio del formulario antes de que se procese la solicitud
    try {
      const response = await fetch("http://localhost:3003/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // el encabezado de la solicitud indica que la info que se manda es formato JSON
        },
        body: JSON.stringify({ email: email, password: password }), // identifica los objetos del body de la solicitud para enviar al backend. Convierte los datos a JSON y los envia.
      });
      if (!response.ok) {
        const errorData = await response.json(); //lee el msje de error en la respuesta de la solicitud
        alert(errorData.error);
      } else {
        const token = await response.text(); // se transforma la respuesta a texto--> el token de JWT se envia desde el backend en formato texto, por eso, para extraerlo correctamente
        // se extrae del cuerpo de la respuesta como cadena de texto. 
        localStorage.setItem("token", token);
        setAuthState(true);
        navigate('/')
        console.log(response.data)
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
