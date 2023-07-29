import logo from './logo.svg';
import './styles/App.css';
import Home from './components/Home';
import BaseCarlini from './components/BaseCarlini';
import BaseEsperanza from './components/BaseEsperanza';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import { Route, Routes } from 'react-router';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path= "/" {<Home/>}/>
        <Route path= "/Carlini" {<BaseCarlini/>}/>
        <Route path= "/Esperanza" {<BaseEsperanza/>}/>
      </Routes>
    </div>
  );
}

export default App;
