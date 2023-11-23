import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, useEffect, useState, Suspense } from "react";
import FormularioRegistro from "./components/FormularioRegistro";
import Home from "./components/Home";
import Formulario from './components/login';
import AuthContext from "./helpers/AuthContext";

const LazyComunidad = lazy(() => import("./components/Comunidad"));
const LazyContacto = lazy(() => import("./components/Contacto"));
const LazyGraficos = lazy(() => import("./components/Graficos"));
const LazyNoticias = lazy(() => import("./components/Noticias"));
const LazyPageNotFound = lazy(() => import("./components/PageNotFound"));
const LazySobreNosotros = lazy(() => import("./components/SobreNosotros"));
const App = () => {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    role: "",
    status: false,
  }); // desp va a contener la info del user--> pendiente
  // authState es un objeto porque tomamos la info del user que nos manda el backend, asi accedemos a la información del usuario desde el front, como el id, el username, y si está loggeado o no.

  useEffect(() => {
    // sin este hook, el usuario al recargar la página ve nuevamente el botón ingresar de la navbar
    // con useEffect se ejecuta la verificacion del token con el usuario y si esta ok el authState es true == no se muestra "ingresar" de la navbar
    fetch("http://localhost:3003/auth/auth", {
      // auth/auth verifica la autenticidad del usuario y a la vez devuelve los datos de su payload.
      // auth/auth  verifica que el token corresponda con el token activo del user para evitar que cualquier persona pegue un token falso en localStorage desde la consola.
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, // como es una solicitud y el token ya está guardado se obtiene así, como en los endpoints protegidos.
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unauthorized");
        }
        return response.json();
      })
      .then((data) => {
        if (data.error) {
          setAuthState({ ...authState, status: false }); // solo cambiamos el estado de status para no tocar los demás atributos.
        } else {
          setAuthState({
            username: data.username,
            id: data.id,
            role: data.role,
            status: true,
          }); // si está loggeado el usuario tiene token ---> se valida el token en el backend y se asigna en authState su username, id y estado para manipularlos en el front.
        }
      })
      .catch((error) => {
        setAuthState({ ...authState, status: false }); // Cambiar el estado a 'false' en caso de error
        console.error("Error en la solicitud:", error);
      });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/graficasClimaticas"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyGraficos />
                </Suspense>
              }
            />

            <Route
              path="/noticias"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyNoticias />
                </Suspense>
              }
            />

            <Route
              path="/comunidad"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyComunidad />
                </Suspense>
              }
            />

            <Route
              path="/sobrenosotros"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <LazySobreNosotros />
                </Suspense>
              }
            />
            <Route
              path="/contacto"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyContacto />
                </Suspense>
              }
            />
            <Route
              path="/login"
              element={
                <Suspense fallback={<div>Loading...</div>}>

                  <Formulario />
                  </Suspense>

              }
            />
            <Route path="/Registrarme" element={<FormularioRegistro />} />

            <Route path="*" element={
            <LazyPageNotFound />
            } />
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
