import React, { useState, useEffect } from "react";
import "../styles/chat.css"; // Importamos el archivo CSS con los estilos del chat

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // Obtenemos el historial del chat del servidor
    fetch("/api/v1/chat/history")
      .then((response) => response.json())
      .then((data) => setMessages(data.messages));

    // Función para que el bot responda automáticamente al abrir el chat
    const initialMessage = "Hola"; // Mensaje inicial que envía el usuario al abrir el chat
    const botResponse = "Hola! soy Cody.. en que puedo ayudarte?"; // Respuesta automática del bot
    const botMessage = {
      type: "bot",
      content: botResponse,
    };

    setTimeout(() => {
      setMessages([...messages, botMessage]);
    }, 1500); // Simulamos una respuesta después de 1 segundo
  }, []); 

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const userMessage = {
        type: "user",
        content: input,
      };
      setMessages([...messages, userMessage]);
      setInput("");
    }
  };

  return (
    <div className="chat-wrapper">
      <div className="chat-container">
        {/* Renderizamos los mensajes del chat */}
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.type === "user" ? "user-message" : "bot-message"}`}
          >
            {message.content}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Realice aca su pregunta"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleSend} // Agrego el evento onKeyDown para detectar la pulsación de Enter
        />
      </div>
    </div>
  );
};

export default ChatBot;
