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

const App = () => {
  return (
    <div>     
      <Router>
        <Routes> 
        <Route path= "/" element = {<Home />}/>
        <Route path= "/graficasClimaticas" element ={<Graficos/>}/>
        <Route path= "/noticias" element ={<Noticias/>}/>
        <Route path= "/comunidad" element ={<Comunidad/>}/>
        <Route path= "/sobrenosotros" element ={<SobreNosotros/>}/>
        <Route path= "/contacto" element ={<Contacto/>}/>
        <Route path= "/IniciarSecion" element ={<Formulario/>}/>
        <Route path= "/Registrarme" element ={<FormularioRegistro/>}/>

        {/* <Route path= "*" element = {<PageNotFound />}/> //-----> crear página  */ } 

       </Routes>
      </Router> 
    </div>
  );
}

export default App;
