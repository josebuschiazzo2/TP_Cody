import '../styles/comunidad.css';

import {
  useContext,
  useEffect,
  useState,
} from 'react';

import { useNavigate } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';

import AuthContext from '../helpers/AuthContext';
import Footer from './Footer';
import Navbar from './Navbar';

function Comunidad() {
  const [publicacion, setPublicacion] = useState("");
  const [listaPublicaciones, setListaPublicaciones] = useState([]);
  const [comentario, setComentario] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { authState } = useContext(AuthContext);
  const [btnState, setBtnState] = useState({});
  const [publicacionEliminada, setPublicacionEliminada] = useState(false);
  const [editMode, setEditMode] = useState({ id: null, content: "" });
  const [editModeComentario, setEditModeComentario] = useState({ id: null, content: "" });
  const [nuevoContenido, setNuevoContenido] = useState("")
  const [mostrarModal, setMostrarModal] = useState(false)
  const [contenidoModal, setContenidoModal] = useState("");



  useEffect(() => {
    const mostrarLista = async () => {
      fetch('http://localhost:3003/comment/get')
        .then(resp => resp.json())
        .then(data => setListaPublicaciones(data))
        .catch(error => {
          console.log("no se pudo obtener las publicaciones", error)
        })
    }
    mostrarLista();
  }, [listaPublicaciones]);
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



  // ********** Editar Publicación **********//
  const activarEdicion = (id, contenido) => {
    setMostrarModal(true);
    setEditMode({ id: id, content: contenido });
    setContenidoModal(contenido); // Inicializar contenidoModal con el contenido actual
    setNuevoContenido(contenido);
  };
  const handleTextareaChange = (event) => {
    const contenidoText = event.target.value;
    setNuevoContenido(contenidoText);
  };

  const editarPublicacion = (id, nuevoContenido) => {
    fetch(`http://localhost:3003/post/actualizar/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify({ post: nuevoContenido })
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("Publicación editada:", data);
        setEditMode({ id: null, content: "" });
      })
      .catch((error) => {
        console.error("Error al editar la publicación:", error);
      });
  };
  const aceptarEdicion = () => {
    if (nuevoContenido.trim() !== "") {
      editarPublicacion(editMode.id, nuevoContenido);
    }
    setMostrarModal(false);
  };
  const cancelarEdicion = () => {
    setMostrarModal(false);
    setNuevoContenido(""); // Restablecer a un valor vacío o algún valor predeterminado
  };
  


  // ********** Editar Comentario **********//
  const activarEdicionComentario = (id, contenido) => {
    const nuevoComentario = prompt('Edita tu comentario!:', contenido);
    if (nuevoComentario !== null) {
      editarComentario(id, nuevoComentario);
    }
  };
  const editarComentario = (id, comentarioEditado) => {
    fetch(`http://localhost:3003/comment/editar/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify({ comment: comentarioEditado })
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("Comentario editado:", data);
        setEditModeComentario({ id: null, content: "" });
      })
      .catch((error) => {
        console.error("Error al editar el comentario:", error);
      });
  };
  // *********** eliminar publicación ***********//
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
        if (data.statusCode === 404) {
          alert("no se ha podido eliminar")
        }
      })
      .catch((error) => {
        console.error("Error al eliminar la publicación:", error);
      });
  }

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
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error("Error en la solicitud:", error);
        console.log("Mensaje de error:", error.message);
      });
  }


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

  const likePost = (id) => {
    fetch(`http://localhost:3003/like/${id}`, {
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
          [id]: !prevState[id]
        }));
        console.log(btnState)
      })
      .catch(error => {
        console.error("Error en la solicitud:", error);
        console.log("Mensaje de error:", error.message);
      });
  }

  const likeToggle = (id) => btnState[id] ? ' active-btn' : ' inactive-btn';

  return (
    <div className='backk'>
      <Navbar claseComunidad="underline" />
      <div className='d-flex flex-column container justify-content-center'>
        <div id='left-part'>
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
          <div className='d-flex flex-column'>
            <TextareaAutosize
              minRows='5'
              name='publicacion'
              value={publicacion}
              id='newPostField'
              onChange={(e) => setPublicacion(e.target.value)}
              placeholder='Añade una nueva publicación...'
            />
            <div id='btn-publicar'>
              <button type='text' className="btn-publicar" onClick={publicar}> Publicar</button>
            </div>
          </div>
          <div>
            {listaPublicaciones.map((publicacion, key) => (
              <div key={key} className='publicacion-container d-flex flex-column'>
                <div className='d-flex flex-row'>
                </div>
                <div className='d-flex flex-column publicacionCreada'>
                  <div className='d-flex flex-row '>
                    <div className='nombreYfecha'>
                      <p className='publicacion_nombre card-title'>{publicacion.username} </p>
                      <p className='publicacion_fecha card-subtitle ml-5 text-body-secondary'>{publicacion.createdAt}</p>
                    </div>

                    {mostrarModal && (
                      <div className='container contenedorModal'>
                        <textarea className='modalEstilo '
                          value={nuevoContenido}
                          onChange={handleTextareaChange}
                          placeholder='Edita tu publicación... '
                        >
                        </textarea>  
                         <div className='contenedorCerrar'>
                        <button className='aceptar_modal' onClick={aceptarEdicion}>Aceptar</button>
                        <button className='cerrar_modal' onClick={cancelarEdicion}>Cancelar</button>
                        </div>
                      </div>

                    )}
                    <div className='  botones_user'>
                      <div>
                        {authState.username === publicacion.username && authState.role === "user" && (
                          <>
                            {editMode.id === publicacion.id ? (
                              <span className="material-symbols-outlined" onClick={() => activarEdicion(publicacion.id,publicacion.post)}
                                style={{ cursor: 'pointer' }}>
                                edit_square
                              </span>
                            ) : (
                              <span className="material-symbols-outlined" onClick={() => activarEdicion(publicacion.id, publicacion.post)}
                                style={{ cursor: 'pointer' }}>
                                edit_square
                              </span>
                            )}
                          </>
                        )}
                      </div>
                      <div>

                        {authState.username === publicacion.username && authState.role === "user" && (
                          <button className={"trashCan divv"} onClick={() => eliminarPublicacion(publicacion.id)}>
                            <span className="material-symbols-outlined">delete</span>
                          </button>
                        )}
                      </div>

                      <div>
                        {authState.role === "admin" && (
                          <div id="radio">
                            <button className={"trashCan"} onClick={() => eliminarPublicacion(publicacion.id)}>
                              <span className="material-symbols-outlined">delete</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <p>{publicacion.post}</p>

                  <div className='contenedor_like'>
                    <div className='d-flex flex-direction-row'>

                      <button className={`like-btn btnToggle${likeToggle(publicacion.id)}`} onClick={() => likePost(publicacion.id)}>
                        <span className="material-symbols-outlined">thumb_up</span>
                      </button>


                      {publicacion.like.length > 0 &&
                        <p> {publicacion.like.length}</p>
                      }


                    </div>
                  </div>
                </div>
                <div>
                  {publicacion.comment.map((comentario, i) => (
                    <div key={i}>
                      <div className='comentarios_contenedor'>
                        <div className='comentarios_publicados'>
                          <p className='comentario_nombre card-title' >{comentario.username}: </p>
                          <p className='comentario_txt '>{comentario.comment}</p>




                          <div>
                            {authState.username === comentario.username && authState.role === "user" && (
                              <>
                                {editModeComentario.id === comentario.id ? (
                                  <span className="material-symbols-outlined" onClick={() => editarComentario(comentario.id)}
                                    style={{ cursor: 'pointer' }}>
                                    edit_square
                                  </span>
                                ) : (
                                  <span className="material-symbols-outlined" onClick={() => activarEdicionComentario(comentario.id, comentario.comment)}
                                    style={{ cursor: 'pointer' }}>
                                    edit_square
                                  </span>
                                )}
                              </>
                            )}
                          </div>

                          <div className='eliminarComentario'>
                            {authState.username === comentario.username && (
                              <>
                                <button className={"trashCan"} onClick={() => eliminarComentario(comentario.id)}>
                                  <span className="material-symbols-outlined">delete</span>
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div id='newReplySection' className="py-3 border-1 d-flex flex-row" >
                  <TextareaAutosize
                    name='comentario'
                    maxLength={550}
                    id='newCommentField'
                    onChange={(e) => setComentario(e.target.value)}
                    placeholder="Escribe tu comentario..."
                  />
                  <button onClick={() => enviarComentario(publicacion.id)} className='btn-enviar'>Enviar</button>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default Comunidad;