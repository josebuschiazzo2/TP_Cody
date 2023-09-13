import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importar Axios
import '../styles/comunidad.css';
import Navbar from "./Navbar";
import TextareaAutosize from 'react-textarea-autosize';
import Footer from './Footer';
import  expandBTN from '../images/expandirbtn.png'

function Comunidad() {
  const [publicacion, setPublicacion] = useState('');
  const [listaPublicaciones, setListaPublicaciones] = useState([]);

  const [respuesta, setRespuesta] = useState('');
  

const [toggleClass, setToggleClass] = useState('hola')



  const enviarComentario = () => {
    console.log("hice click en enviar comentario!")
  }
  //<-------MOSTRAR PUBLICACIONES AL EJECUTAR LA PÁGINA--------> 

  // useEffect: cada vez que actualizamos el estado de un elemento en la web, se renderiza de nuevo, 
  // como minimo se ejecuta 1 vez-> al iniciar la página, si
  useEffect(() => {
    const mostrarLista = async () => {
      try {
        const response = await axios.get('http://localhost:3003/comunidad/publicaciones');
        setListaPublicaciones(response.data);
      } catch (error) {
        console.error('Error al cargar la lista de publicaciones', error);
      }
    };
  
    mostrarLista(); // Llamar a la función al montar el componente
  }, []);
  
  // <----------FUNCION PUBLICAR------------->
  const publicar = async () => {
    try {
      const response = await axios.post('http://localhost:3003/comunidad/publicar', {
        "publicacion": publicacion
      });
      console.log(response)
    } catch (error) {
      console.log(error.response.data);
    }
  }

   // <----------FUNCION ELIMINAR---------->

 const eliminarPublicacion = (id) => {
   axios.delete(`http://localhost:3003/comunidad/eliminar/${id}`);
  console.log("hice click en eliminar")
  alert("está seguro que desea eliminar la publicación?")
}
  //<---------- MENU DESPLEGABLE-------------->  

  const toggleMenuDesplegable = async (id) => {
   const resp = await axios.put(`http://localhost:3003/comunidad/menu/${id}`);
//    let nuevo = []
//  nuevo = resp.data
//     console.log( nuevo)
  };

  useEffect(() => {
    if (publicacion.menu === true) {
      setToggleClass(' color1');
    } else {
      setToggleClass(' color2');
    }
  }, [publicacion.menu]);
  // -------------------------------------------
// ---------------------------------------
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

                {/* <div id='radio' className={`${toggleClass}`}  onClick={() => toggleMenuDesplegable(publicacion.id)}> */}
                <button  className={`opcionesDesplegables` } onClick={() => toggleMenuDesplegable(publicacion.id)}>
{/* ---- imagen del menu desplegable:    */}
                  <img src={expandBTN}alt="imagen botton" />
                  </button>
                  {/* {publicacion.menu ? ' color1' :' color2' } */}
                  <div className={`delete-btn ${toggleClass}`} >
                    <button id="eliminar-btn" className={`delete-btn`} onClick={() => eliminarPublicacion(publicacion.id)}>Eliminar</button>
                  </div>
                </div>
              </div>
              <div className='d-flex flex-column estiloComentario'>
                <p>{publicacion.textoPublicacion}</p>                
                <h6>{publicacion.createdAt}</h6>

              </div>

              {/* <div className='listaDeRespuestas'>
                  {listaDeRespuestas.map((respuesta1, index) =>(
  <div key={index} className='comentarioPublicado'>
   <h6 className="fw-bold text-primary mb-1">Nombre usuario </h6>
    <p>{respuesta1}</p>
  </div>
))}
</div> */}
              <div id='newReplySection' className="py-3 border-1 d-flex flex-row" >
                <TextareaAutosize
                  name='respuesta'
                  maxLength={550}
                  value={respuesta}
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