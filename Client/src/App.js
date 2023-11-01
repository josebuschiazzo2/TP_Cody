import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Comunidad from './components/Comunidad';
import Contacto from './components/Contacto';
import Formulario from './components/Formulario';
import FormularioRegistro from './components/FormularioRegistro';
import Graficos from './components/Graficos';
import Home from './components/Home';
import Noticias from './components/Noticias';
import SobreNosotros from './components/SobreNosotros';
import AuthContext from './helpers/AuthContext';
import { useState, useEffect } from 'react';


const App = () => {
const [authState, setAuthState] = useState(false) // desp va a contener la info del user--> pendiente

useEffect(() => { // sin este hook, el usuario al recargar la página ve nuevamente el botón ingresar de la navbar
 // con useEffect se ejecuta la verificacion del token con el usuario y si esta ok el authState es true == no se muestra "ingresar" de la navbar
  fetch("http://localhost:3003/auth/auth", { 
    // auth/auth  verifica que el token corresponda con el token activo del user para evitar que cualquier persona pegue un token falso en localStorage desde la consola.
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`// como es una solicitud y el token ya está guardado se obtiene así, como en los endpoints protegidos.
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Unauthorized');
      }
      return response.json();
    })
    .then(data => {
      if (data.error) {
        setAuthState(false);
      } else {
        setAuthState(true);
      }
    })
    .catch(error => {
      setAuthState(false); // Cambiar el estado a 'false' en caso de error
      console.error("Error en la solicitud:", error);
    });
}, []);

  return (
    <div> 
     < AuthContext.Provider value={{authState,setAuthState }}>
      <Router>
        <Routes> 
        <Route path= "/" element = {<Home />}/>
        <Route path= "/graficasClimaticas" element ={<Graficos/>}/>
        <Route path= "/noticias" element ={<Noticias/>}/>
        <Route path= "/comunidad" element ={<Comunidad/>}/>
        <Route path= "/sobrenosotros" element ={<SobreNosotros/>}/>
        <Route path= "/contacto" element ={<Contacto/>}/>
        <Route path= "/login" element ={<Formulario/>}/>
        <Route path= "/Registrarme" element ={<FormularioRegistro/>}/>

        {/* <Route path= "*" element = {<PageNotFound />}/> //-----> crear página  */ } 

       </Routes>
      </Router> 
      </AuthContext.Provider>
    </div>
  );
}

export default App;
