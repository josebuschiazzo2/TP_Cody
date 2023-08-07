import { useState } from 'react';
import '../styles/contacto.css';

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
    <div className="contact-form">
      {enviado ? (
        <h4>Gracias por contactarnos. Tu consulta ha sido enviada con exito!.</h4>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Contactanos</h2>
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
    </div>
  );
}

export default Contacto;
