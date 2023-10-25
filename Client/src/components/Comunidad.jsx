import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importar Axios
import '../styles/comunidad.css';
import Navbar from "./Navbar";
import TextareaAutosize from 'react-textarea-autosize';
import Footer from './Footer';

function Comunidad() {
  const [publicacion, setPublicacion] = useState('');
  const [listaPublicaciones, setListaPublicaciones] = useState([]);
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
  }, [])
  /**  useEffect permite que mostrarLista al menos se ejecute una vez,
 * es decir, se ejecuta al iniciar la página. 
 */

  // <----------FUNCION PUBLICAR------------->
  const publicar = async () => {
    try {
      const response = await fetch('http://localhost:3003/post/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ post: publicacion }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        const errorData = await response.json();
        console.log(errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  // <----------ELIMINAR PUBLICACIÓN------------->
  const eliminarPublicacion = (id) => {
    fetch(`http://localhost:3003/post/delete-post/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setListaPublicaciones(listaPublicaciones.filter((post) => post.id !== id));
        console.log("Publicación eliminada:", data);
      })
      .catch((error) => {
        console.error("Error al eliminar la publicación:", error);
      });
  };

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
          <form onSubmit={publicar} className='form_clase  d-flex flex-row'>   {/*  // FORM TAG  */}

            <TextareaAutosize
              name='newPost'
              id='newPostField'
              value={publicacion}
              onChange={(e) => setPublicacion(e.target.value)}  //  ONCHANGE
              placeholder='Añade una nueva publicación...'
            />
            <button id='publish-btn'> publicar</button>
          </form>
        </div>
        <div>
          {listaPublicaciones.map((publicacion) => ( // listaDePublicaciones cambiado a listaPublicaciones, key a index
            <div key={publicacion.id} className='comment-container d-flex flex-column'>
              <div className='d-flex flex-row'>
                <img
                  id='profilePic'
                  src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                  alt='imagen de perfil'
                />
                <div id='radio' >
                  <button className={"trashCan"} onClick={() => eliminarPublicacion(publicacion.id)}>
                      <span class="material-symbols-outlined">delete</span>
                  </button>
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