import '../styles/navbar.css';

import { Link } from 'react-router-dom';

import LogoCodyPNG from '../images/LogoCodyPNG.png';

function Navbar() {
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
          <div className="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

            {/* Sidebar Header */}
            <div class="offcanvas-header border-bottom">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">CODY</h5>
              <button type="button" className="btn-close-white btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            {/* sidebar body */}
            <div className=" offcanvas-body">

              {/*En <ul> se puede modificar la posicion del menu con la clase justify-content-center o justify-content-end  */}
              <ul className="navbar-nav   fs-5 p-2 flex-grow-1 pe-5">

                <li className=" nav-item mx-1">
                <Link id="inicioLink" class="nav-link active " to="/">Inicio</Link>
                  <hr id="lineNavbar" />
                </li>
                <li className="nav-item mx-1">
                  <Link id="graficosLink" class="nav-link active" to="/graficasClimaticas">Gráficas Climáticas</Link>
                  <hr id="lineNavbar" />
                </li>
                <li className="nav-item mx-1">
                  <Link id="noticiasLink" class="nav-link active" to="/noticias">Noticias</Link>
                  <hr id="lineNavbar" />
                </li>
                <li className="nav-item mx-1">
                  <Link id="comunidadLink" class="nav-link active" to="/comunidad">Comunidad</Link>
                  <hr id="lineNavbar" />
                </li>
                <li className="nav-item mx-1">
                  <Link id="nosotrosLink" class="nav-link active" to="/sobrenosotros">Sobre Nosotros</Link>
                  <hr id="lineNavbar"  />
                </li>
                <li className="nav-item mx-1">
                 
                 <Link id="climaLink" class="nav-link active" to="/contacto">Contacto</Link>
                 <hr id="lineNavbar" />
               </li>
                <li className="nav-item mx-1">
                 <Link id="IniciarLink" class="nav-link active" to="/IniciarSecion">Ingresá</Link>
                 <hr id="lineNavbar" />
               </li>
               <li className="nav-item mx-1">
                 <Link id="RegistrarmeLink" class="nav-link active" to="/Registrarme">Creá tu cuenta</Link>
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
