import React, { useState, useRef } from 'react';
import '../styles/comunidad.css';
import Navbar from "./Navbar";
import likeBtn from "../images/like-btn-bnw-100px.png";
import TextareaAutosize from 'react-textarea-autosize';
import Footer from './Footer';

function Comunidad() {
  const [message, setMessage] = useState('');
  const [listaDePublicaciones, setListaDePublicaciones] = useState([]);

  const [respuesta, setRespuesta] = useState('');
  const [listaDeRespuestas, setListaDeRespuestas ] = useState([]);


  const comentarioRef = useRef(null);
  const [btnState, setBtnState] = useState(false);
  const [like, setLike] = useState(0);

// acá va la conexión con la base de datos, usando useEffect,}
// controlador con ruta /publicaciones y controlador con ruta /comentarios con las respectivas rutas.------ VER------
// adentro de la conexion con el controlador /comentarios se da el valor de la response a listaComentarios 
// (setListaComentarios(response.data))----> asi podemos acceder a la lista de comentarios de la base de datos y
// podemos mapear cada elemento para mostrarlos en un div nuevo


const enviarComentario=(event)=>{
    setRespuesta(event.target.value)
  }
  const contenidoPublicacion=(event)=>{
    setMessage(event.target.value) 
  }

  // Function to handle posting a comment
  const postComment = () => {
   if (respuesta.trim() !== ""){     
   setListaDeRespuestas([...listaDeRespuestas, respuesta]);
   setRespuesta(''); 
  }};
// cuando esté conectada la BBDD, la funcion postComment tiene que hacer la conexión, 
// pasarle al atributo de la tabla el valor del textArea(respuesta) y 
// el ID 

// localhost:3000/comments, {al comentario (ATRIBUTO en la tabla BBDD)le damos el valorDelTexArea}

  // Function to toggle  like
  const likeToggle = () => {
    if (btnState===false){
    setLike(like + 1);
    setBtnState(!btnState);
    }
    else{
      setLike(like  - 1);
      setBtnState(!btnState);
    }
    console.log(btnState)
  };
  // toggleClass permite que se intercambien las clases de estilo 
  // en el boton like, si esta activo se aplica la clase btn active
  const toggleClass = btnState ? ' active' : ' inactive';

  // Función que permite publicar al hacer click en enviar

  const publish = () => {
    if (message.trim() !== "") {
    setListaDePublicaciones([...listaDePublicaciones, message]);
    setMessage(''); 
  }};

// publish  se ejecuta cuando hacemos click en el boton enviar (por onSubmit)---> ahora uso onClick, creo que lo tengo que cambiar a onSubmit y usar tag form
// ADENTRO DE PUBLISH se inserta el POST con la URL (DEL BACKEND) y le paso la data(lo escrito por el usuario) al body.

  return ( <>
      <Navbar  claseComunidad="underline" />

<div className='d-flex flex-row'> 

<div   id='left-part' class=" p-3">
  <h4 className='tituloJumbotron'>¡Bienvenidos a nuestra Comunidad de Exploradores Antárticos!
</h4>
  <p className="textoJumbotron jumbotron">Nos emociona darte la bienvenida a este rincón en línea, donde científicos, investigadores y amantes de la Antártida se reúnen para compartir su curiosidad y conocimientos sobre este fascinante continente.</p>
</div>

    <div id='community' className='d-flex flex-column'>
   
<div class="mobile p-3">
  <h4 className='tituloJumbotron'>¡Bienvenidos a nuestra Comunidad de Exploradores Antárticos!
</h4>
  <p className="textoJumbotron jumbotron">Nos emociona darte la bienvenida a este rincón en línea, donde científicos, investigadores y amantes de la Antártida se reúnen para compartir su curiosidad y conocimientos sobre este fascinante continente.</p>
</div>


      <div className=' d-flex flex-row'>
      <img
          id='profilePic'
          src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
          alt='imagen de perfil'
        />
       
       <TextareaAutosize
     name='newPost'
     id='newPostField'
     value={message}
     onChange={contenidoPublicacion}
     placeholder='Añade una nueva publicación...'
    />

        <button id='publish-btn' onClick={publish}>
          publicar
        </button>
      </div>
      <div>

{/* acá empieza la creación de nuevos divs para cada comentario:
-la función map itera sobre el arreglo comments,
(comment, index) comment representa el valor actual del elemento actual en el arreglo,
index es su índice

*/}
        {listaDePublicaciones.map((comment, key) => (
          <div key={key} className='comment-container d-flex flex-column'>
            <div className='d-flex flex-row'>
            <img
          id='profilePic'
          src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
          alt='imagen de perfil'
        />
{/* aca deberán estar los datos extraidos de la tabla MySql distribuidos en 
sus respectivos elementos, por ejemplo el h6 deberá contener  {value.nombreDeUsuario}
y en un tag <p> deberá aparecer {value.textoPublicacion} siempre manteniendo
la correlacion de nombres con la base de datos. 
Por ahora, sin la conexion a la BBDD solo se muestra {comment} y el nombre de usuario
está fijo
        */}
                <h6 className="fw-bold text-primary mb-1">Nombre de usuario </h6>
                </div> 
                <div className='d-flex flex-column estiloComentario'>
                {comment}     
                </div> 
{/* div que contiene el like y el contador likes: */}
                  <div className=' like-btn-section d-flex'>
                    <button onClick={likeToggle} className={`like-btn btnToggle${toggleClass}`}>
                      <img src={likeBtn} alt="like-button" width="20" height="20" />
                    </button>
                    {like} 
                  </div>

 {/*  RESPUESTAS A LAS PUBLICACIONES:
               cada respuesta debe estar vinculada a una publicación.
               el bucle map permite agregar nuevos elementos al DOM 
               y mostrar las respuestas 


               HAY QUE OBTENER EL ID DE LA PUBLICACION PRINCIPAL
               */}

<div className='listaDeRespuestas'>
                  {listaDeRespuestas.map((respuesta1, index) =>(
  <div key={index} className='comentarioPublicado'>
   <h6 className="fw-bold text-primary mb-1">Nombre usuario </h6>
    <p>{respuesta1}</p>
  </div>
))}
</div>

     {/* al hacer click en el boton Comentar se cambia el valor de newReply (que inicialmente era false) y se vuelve true. 
     Al ser TRUE se ejecuta lo siguiente: 
     */}
                  <div id='newReplySection' className="py-3 border-1 d-flex flex-row" >
                    

                  <TextareaAutosize
 name='respuesta'                        
 maxLength={550}
 value={respuesta}
 id='newCommentField'
 inputRef={comentarioRef}
 onChange={enviarComentario}
 placeholder="Escribe tu comentario..."
 
    />
                                 
          <button onClick={postComment} id='sendComment-btn'>Enviar</button>

                      <div className='d-flex justify-content-end'>
                      </div>
                    
                  </div>
                
              </div>
           
        ))}
      </div>
    </div>
    </div> 
    <Footer/></>
  
  );
}

export default Comunidad;