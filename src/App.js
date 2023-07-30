import './styles/App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import {BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import Graficos from './components/Graficos';
import Noticias from './components/Noticias';
import Comunidad from './components/Comunidad';
import SobreNosotros from './components/SobreNosotros';
import Contacto from './components/Contacto'

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
        {/* <Route path= "*" element = {<NotFound />}/> */}

       </Routes>
      </Router> 
    </div>
  );
}

export default App;
