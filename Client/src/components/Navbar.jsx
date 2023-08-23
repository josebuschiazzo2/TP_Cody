import '../styles/navbar.css';

import { Link } from 'react-router-dom';

import LogoCodyPNG from '../images/LogoCodyPNG.png';

function Navbar(props) {
  return (
      <header> 
      {/* navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container">
          {/* logo  */}
          <img className="logoCody" src={LogoCodyPNG} alt="logo" />
          {/* Toggle btn */}
          <button className="navbar-toggler shadow-none border-0 " style={{backgroundColor: '#537993' }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* sidebar */}
          <div className="sidebar offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

            {/* Sidebar Header */}
            <div className="offcanvas-header border-bottom">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">CODY</h5>
              <button type="button" className="btn-close-white btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            {/* sidebar body */}
            <div>

              {/*En <ul> se puede modificar la posicion del menu con la clase justify-content-center o justify-content-end  */}
              <ul className="navbar-nav justify-content-center  fs-5 p-2  pe-5">

                <li className=" nav-item mx-3">
                <Link id="inicioLink" className={`nav-link active ${props.claseHome}`} to="/">Inicio</Link>
                  <hr id="lineNavbar" />
                </li>
                <li className="nav-item mx-3">
                  <Link id="graficosLink" className={`nav-link active ${props.claseGraficas}`} to="/graficasClimaticas">Gráficas</Link>
                  <hr id="lineNavbar" />
                </li>
                <li className="nav-item mx-3">
                  <Link id="noticiasLink" className={`nav-link active ${props.claseNoticias}`} to="/noticias">Noticias</Link>
                  <hr id="lineNavbar" />
                </li>
                <li className="nav-item mx-3">
                  <Link id="comunidadLink" className={`nav-link active ${props.claseComunidad}`}  to="/comunidad">Comunidad</Link>
                  <hr id="lineNavbar" />
                </li>
                <li className="nav-item mx-3">
                  <Link id="nosotrosLink" className={`nav-link active ${props.claseSobreNosotros}`} to="/sobrenosotros">Contactenos</Link>
                  <hr id="lineNavbar"  />
                </li>
                <li className="nav-item ">
                 <Link id="IniciarLink"className= "nav-link active" to="/IniciarSecion">Ingresar</Link>
                 <hr id="lineNavbar" />
               </li>
              
            
              </ul>
              {/* Login / Sign up QUEIZAS DEBA SALIR DE AQUI YA QUE SE ABRE EN UNA VENTANA NUEVA ANTES DE RENDERIZAR EL HOME */}
             
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
