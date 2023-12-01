import '../styles/contacto.css';

import { useState } from 'react';

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [consulta, setConsulta] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // agregar la lógica para enviar el correo 
    setEnviado(true);
  }

  return (
    <div>
      <div className='texto_contacto text-center'>
      <h4>¡Contáctanos!</h4>
      <h5> Nos emociona recibir tus comentarios, preguntas y sugerencias. 
Utiliza el formulario a continuación para enviarnos tus mensajes.Tu retroalimentación nos ayuda a mejorar y a ofrecerte un mejor contenido en nuestra página.</h5>
  <h5> ¡Gracias por ser parte de nuestra comunidad informativa!</h5> </div>
    <div className="contact-form">
      {enviado ? (
        <h4 className='text-center'>Gracias por contactarnos. Tu consulta ha sido enviada con exito!.</h4>
      ) : (
        <form className='formulario2' onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Correo Electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
          <textarea
            placeholder="Escribe tu consulta aquí..."
            value={consulta}
            onChange={(e) => setConsulta(e.target.value)}
            required
          />
          <button type="submit">Enviar</button>
        </form>
      )}
    </div></div>
  );
}

export default Contacto;
