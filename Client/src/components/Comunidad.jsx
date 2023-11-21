import React, { useState, useEffect } from 'react';
import '../styles/comunidad.css';
import Navbar from "./Navbar";
import TextareaAutosize from 'react-textarea-autosize';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../helpers/AuthContext'; //1. authContext importado
import { useContext } from 'react';

function Comunidad() {
  const [publicacion, setPublicacion] = useState("");
  const [listaPublicaciones, setListaPublicaciones] = useState([]);
  const [comentario, setComentario] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { authState } = useContext(AuthContext); //2. declaramos el valor de Authcontext a usar. --> de App.js, por que se encuentra en el nivel más alto de la página. 
  const [btnState, setBtnState] = useState({});
  const [publicacionEliminada, setPublicacionEliminada] = useState(false);

  //   const [respuesta, setRespuesta] = useState('');

  //<-------MOSTRAR PUBLICACIONES AL EJECUTAR LA PÁGINA-------->
  useEffect(() => { // ->
    const mostrarLista = async () => {
      fetch('http://localhost:3003/comment/get') // devuelve publicaciones y su array de comentarios
        .then(resp => resp.json())
        .then(data => setListaPublicaciones(data))
        .catch(error => {
          console.log("no se pudo obtener las publicaciones", error)
        })
    }
    mostrarLista();
  }, [listaPublicaciones])
  /**  useEffect permite que mostrarLista al menos se ejecute una vez,
 * es decir, se ejecuta al iniciar la página.
 */


  // <----------- FUNCIÓN PUBLICAR ------------>
  const publicar = async () => {
    if (!token) {
      navigate('/login');
      return;
    }
    await fetch('http://localhost:3003/post/new', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify({ post: publicacion })
    })
      .then(response => {
        console.log(response);
        return response.text();
      })
      .then(data => {
        setPublicacion('')

        console.log(data);
      })
      .catch(error => {
        console.error("Error en la solicitud:", error);
        console.log("Mensaje de error:", error.message);
      });
  };

  // <----------ELIMINAR PUBLICACIÓN------------->
  const eliminarPublicacion = (id) => {
    fetch(`http://localhost:3003/post/delete-post/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setListaPublicaciones(listaPublicaciones.filter((post) => post.id !== id));
        console.log("Publicación eliminada:", data);
        setPublicacionEliminada(true)
      })
      .catch((error) => {
        console.error("Error al eliminar la publicación:", error);
      });
  }
  // <----------ENVIAR COMENTARIO------------->
  const enviarComentario = (id) => {
    if (!token) {
      navigate('/login');
      return;
    }
    fetch(`http://localhost:3003/comment/add/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify({ comment: comentario })
    })
      .then(response => {
        console.log(response);
        return response.text();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error("Error en la solicitud:", error);
        console.log("Mensaje de error:", error.message);
      });

  }
  //     fetch(`http://localhost:3003/comment/get/${id}`

  // <----------ELIMINAR COMENTARIO------------->
  const eliminarComentario = (id) => {
    fetch(`http://localhost:3003/comment/delete-comment/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("Publicación eliminada:", data);
      })
      .catch((error) => {
        console.error("Error al eliminar la publicación:", error);
      });
  }

  // like a post
  const likePost = (id) => {
    fetch(`http://localhost:3003/like/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        }
      })
      .then(response => {
        console.log(response.text())
      })
      .then(data => {
        console.log(data);
        setBtnState(prevState => ({
          ...prevState,
          [id]: !prevState[id] // Cambia el estado de like para la publicación específica
        }));// liked. 
console.log(btnState)
      })
      .catch(error => {
        console.error("Error en la solicitud:", error);
        console.log("Mensaje de error:", error.message);
      });
  }
  const likeToggle = (id) => btnState[id] ? ' active-btn' : ' inactive-btn';

  return (<>
    <Navbar  claseComunidad="underline" />
    <div className='d-flex flex-row'>
      <div id='left-part' className=" p-3">
        <h4 className='tituloJumbotron'>¡Bienvenidos a nuestra Comunidad de Exploradores Antárticos!
        </h4>
        <p className="textoJumbotron jumbotron">Nos emociona darte la bienvenida a este rincón en línea, donde científicos, investigadores y amantes de la Antártida se reúnen para compartir su curiosidad y conocimientos sobre este fascinante continente.</p>
      </div>
      <div id='community' className='d-flex flex-column'>
        <div className="mobile p-3">
          <h4 className='tituloJumbotron'>¡Bienvenidos a nuestra Comunidad de Exploradores Antárticos!
          </h4>
          <p className="textoJumbotron jumbotron">Nos emociona darte la bienvenida a este rincón en línea, donde científicos, investigadores y amantes de la Antártida se reúnen para compartir su curiosidad y conocimientos sobre este fascinante continente.</p>
        </div>
        <div className='d-flex flex-row'>
          <TextareaAutosize
            name='publicacion'
            value={publicacion}
            id='newPostField'
            onChange={(e) => setPublicacion(e.target.value)}
            placeholder='Añade una nueva publicación...'
          />
          <button id='publish-btn' onClick={publicar}> publicar</button>
        </div>
        {/* mapeo y representación de publicaciones y comentarios*/}
        <div>
          {listaPublicaciones.map((publicacion, key) => (
            <div key={key} className='publicacion-container d-flex flex-column'>
              <div className='d-flex flex-row'>


              </div>
              <div className='d-flex flex-column publicacionCreada'>
                <div className='d-flex flex-row'>
                  <div className='nombreYfecha'> 
                  <p className='publicacion_nombre card-title'>{publicacion.username} </p>
                  <p className='publicacion_fecha card-subtitle ml-5 text-body-secondary'>{publicacion.createdAt}</p>
</div>
                  <div id='radio'>
                    <div >
                      {authState.username === publicacion.username && (  //si el usuario que inicio sesión es el mismo de la publicación, se muestra el botón eliminar. 
                        <>
                          <button className={"trashCan"} onClick={() => eliminarPublicacion(publicacion.id)}>
                            <span className="material-symbols-outlined">delete</span>
                          </button>
                        </>
                      )}

                    </div>
                  </div>
                </div>
                <p>{publicacion.post}</p>
                <div className='d-flex flex-direction-row'>
                  <button className={`like-btn btnToggle${likeToggle(publicacion.id)}`}  onClick={() => likePost(publicacion.id)}>
                    <span className="material-symbols-outlined">thumb_up</span>
                  </button>
                  <div >
                      {authState.role === "admin" && (  //si el el admin, se muestra el botón eliminar. 
                        <>
                          <button className={"trashCan"} onClick={() => eliminarPublicacion(publicacion.id)}>
                            <span className="material-symbols-outlined">delete</span>
                          </button>
                        </>
                      )}

                    </div>
                  {/* // total de likes por publicación  */}
                  {
                  publicacion.like.length > 0 &&
                    <p> {publicacion.like.length}</p>
                    }
                </div>


              </div>

              <div>
                {publicacion.comment.map((comentario, i) => (
                  <div key={i}>
                    <div className='comentarios_contenedor'>
                      <div className='comentarios_publicados'>
                        <p className='comentario_nombre card-title' >{comentario.username}: </p>
                        <p className='comentario_txt '>{comentario.comment}</p>

                        <div className='eliminarComentario'>
                          {authState.username === comentario.username && (  //si el usuario que inicio sesión es el mismo del comentario, se muestra el botón eliminar. 
                            <>
                              <button className={"trashCan"} onClick={() => eliminarComentario(comentario.id)}>
                                <span className="material-symbols-outlined">delete</span>
                              </button>
                            </>
                          )}</div>
                      </div>

                    </div>
                  </div>
                )
                )}
              </div>

              <div id='newReplySection' className="py-3 border-1 d-flex flex-row" >
                <TextareaAutosize
                  name='comentario'
                  maxLength={550}
                  id='newCommentField'
                  onChange={(e) => setComentario(e.target.value)}
                  placeholder="Escribe tu comentario..."
                />
                <button onClick={() => enviarComentario(publicacion.id)} id='sendComment-btn'>Enviar</button>
                <div className='d-flex justify-content-end'>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </>
  );
}
export default Comunidad