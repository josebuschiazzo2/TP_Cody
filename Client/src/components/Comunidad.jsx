import React, { useState, useEffect } from 'react';
import '../styles/comunidad.css';
import Navbar from "./Navbar";
import TextareaAutosize from 'react-textarea-autosize';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../helpers/AuthContext'; //1. authContext importado
import { useContext} from 'react';

function Comunidad() {
  const [publicacion, setPublicacion] = useState('');
  const [listaPublicaciones, setListaPublicaciones] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const {authState} = useContext(AuthContext)  //2. declaramos el valor de Authcontext a usar. --> de App.js, por que se encuentra en el nivel más alto de la página. 

  //   const [respuesta, setRespuesta] = useState('');

  //<-------MOSTRAR PUBLICACIONES AL EJECUTAR LA PÁGINA-------->
  useEffect(() => { // ->
    const mostrarLista = async () => {
      fetch('http://localhost:3003/post/get-posts')
        .then(resp => resp.json())
        .then(data => setListaPublicaciones(data))
        .catch(error => {
          console.log("no se pudo obtener las personas", error)
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
      })
      .catch((error) => {
        console.error("Error al eliminar la publicación:", error);
      });
  }
  // <----------ENVIAR COMENTARIO------------->
  const enviarComentario = () => {
    console.log("hice click en enviar comentario!")
  }
  // <----------ELIMINAR COMENTARIO------------->
  /****pendiente****/

  return (<>
    <Navbar />
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
        <div className=''>
          {/* <form onSubmit={publicar}> */}
          <TextareaAutosize
            name='publicacion'
            id='newPostField'
            value={publicacion}
            onChange={(e) => setPublicacion(e.target.value)}  //  ONCHANGE
            placeholder='Añade una nueva publicación...'
          />
          <button id='publish-btn' onClick={publicar}> publicar</button>
          {/* </form> */}
        </div>
        <div>
          {listaPublicaciones.map((publicacion, key) => ( // listaDePublicaciones cambiado a listaPublicaciones, key a index
            <div key={key} className='comment-container d-flex flex-column'>
              <div className='d-flex flex-row'>
                <div id='radio' >

                {authState.username === publicacion.username && ( 
                    <>
                  <button className={"trashCan"} onClick={() => eliminarPublicacion(publicacion.id)}>
                     <span class="material-symbols-outlined">delete</span>
                    </button>
                    </>
                    )}
                    
                  <div>
                  </div>
                </div>
              </div>
              <div className='d-flex flex-column estiloComentario'>
                <h5>{publicacion.username}</h5>
                <p>{publicacion.post}</p>
              </div>

              {/* mapeo y representación de comentarios */}


              <div id='newReplySection' className="py-3 border-1 d-flex flex-row" >
                <TextareaAutosize
                  name='respuesta'
                  maxLength={550}
                  // value={}
                  id='newCommentField'
                  onChange={enviarComentario}
                  placeholder="Escribe tu comentario..."
                />
                <button onClick={enviarComentario} id='sendComment-btn'>Enviar</button>
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