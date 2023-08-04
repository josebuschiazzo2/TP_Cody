import React, { useState } from "react";
import ChatBot from "./ChatBot"; 
import '../styles/floatingChat.css';
import CodyIcon from "../images/CodyIcon.jpg";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {isOpen && <div className="chat-overlay" onClick={toggleChat} />} {/* Capa de fondo semitransparente */}
      <div className={`floating-chat ${isOpen ? "open" : ""}`}>
        <button className="chat-toggle" onClick={toggleChat}>
          <img src={CodyIcon} alt="Chatbot" className="chat-icon" />
        </button>
        {isOpen && <ChatBot />} {/* Muestra el componente ChatBot cuando el chat está abierto */}
      </div>
    </div>
  );
};

export default FloatingChat;
