import './styles/App.css';
import Home from './components/Home';
import Carlini from './components/BaseCarlini';
import ClimaAntartico from './components/ClimaAntartico';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import {BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import Graficos from './components/Graficos';
import Noticias from './components/Noticias';
import Comunidad from './components/Comunidad';
import SobreNosotros from './components/SobreNosotros';
const App = () => {
  return (
    <div>
      <Router>
        <Routes> 
        <Route path= "/" element = {<Home />}/>
        <Route path= "/Carlini" element ={<Carlini/>}/>
        <Route path= "/clima_antartico" element ={<ClimaAntartico/>}/>
        <Route path= "/graficos" element ={<Graficos/>}/>
        <Route path= "/noticias" element ={<Noticias/>}/>
        <Route path= "/comunidad" element ={<Comunidad/>}/>
        <Route path= "/sobrenosotros" element ={<SobreNosotros/>}/>


        {/* <Route path= "*" element = {<NotFound />}/> */}

       </Routes>
      </Router>
    </div>
  );
}

export default App;
