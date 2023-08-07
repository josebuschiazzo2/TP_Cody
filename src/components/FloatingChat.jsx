import React, { useState } from "react";
import ChatBot from "./ChatBot.jsx"; 
import '../styles/floatingChat.css';
import CodyIcon from "../images/CodyIcon.jpg";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {isOpen && <div className="chat-overlay" onClick={toggleChat} aria-label="Hola Soy Chatboy Cody"/>} {/* Capa de fondo semitransparente */}
      <div className={`floating-chat ${isOpen ? "open" : ""}`}>
        <button className="chat-toggle" onClick={toggleChat}>
          <div className="chat-icon-container">
            <img src={CodyIcon} alt="Chatbot" className="chat-icon" />
            <div className="chatbot-name">ChatBot Cody</div>
          </div>
        </button>
        {isOpen && <ChatBot />} {/* Muestra el componente ChatBot cuando el chat está abierto */}
      </div>
    </div>
  );
};

export default FloatingChat;
