import '../styles/navbar.css';

import { useContext } from 'react';

import { Link } from 'react-router-dom';

import AuthContext from '../helpers/AuthContext'; //1. authContext importado
import LogoCodyPNG from '../images/LogoCodyPNG.png';

function Navbar(props) {
  const { authState, setAuthState } = useContext(AuthContext)  //2. declaramos el valor de Authcontext a usar. --> de App.js, por que se encuentra en el nivel más alto de la página. 
  const cerrarSesion = () => {
    localStorage.removeItem("token")
    setAuthState({username:"", id:0, role:"", status:false}) // limpiamos la info de los atributos en el front para que no sigan apareciendo al cerrar sesión. 
  }
  return (
    <header>
      {/* navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container">
          {/* logo  */}
          <Link    to="/"><img id="logoCody"  src={LogoCodyPNG} alt="logo"/></Link>
          
        
          {/* Toggle btn */}
          <button className="navbar-toggler shadow-none border-0 " style={{ backgroundColor: '#537993' }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
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
              <ul className="navbar-nav pe-5">
              {/* fs-5 */}
<li>
</li>
                <li className=" nav-item">
                  <Link id="inicioLink" className={`nav-link active ${props.claseHome}`} to="/">Inicio</Link>
                  <hr id="lineNavbar" />
                </li>
                <li className="nav-item">
                  <Link id="graficosLink" className={`nav-link active ${props.claseGraficas}`} to="/graficasClimaticas">Gráficas</Link>
                  <hr id="lineNavbar" />
                </li>
               
                <li className="nav-item">
                  <Link id="noticiasLink" className={`nav-link active ${props.claseNoticias}`} to="/noticias">Noticias</Link>
                  <hr id="lineNavbar" />
                </li>
                <li className="nav-item">
                  <Link id="comunidadLink" className={`nav-link active ${props.claseComunidad}`} to="/comunidad">Comunidad</Link>
                  <hr id="lineNavbar" />
                </li>
                <li className="nav-item">
                  <Link id="nosotrosLink" className={`nav-link active ${props.claseSobreNosotros}`} to="/sobrenosotros">Contactenos</Link>
                  <hr id="lineNavbar" />
                </li>
                {/* saludo + boton iniciar / cerrar sesión */}
    <li className="nav-item auth_options">
                  {!authState.status ? ( // si authState es true no se muestra en pantalla el botón Ingresar de la navbar. Al hacer Login se cambia el estado de false --> a true
                    <>           
                      <Link id="IniciarLink" className="nav-link active" to="/login">Ingresar</Link>
                    </>
                  ) : (              
                    <>   
                  <p className='nombreUsuarioNav'> ¡Hola, {authState.username}!</p>
                    <button id="IniciarLink" className='nav-link cerrar_sesion ' onClick={cerrarSesion}>Cerrar Sesión</button>
               </>    
                 )}
                  <hr id="lineNavbar" />
                </li>

           {/* </div> */}
           </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
