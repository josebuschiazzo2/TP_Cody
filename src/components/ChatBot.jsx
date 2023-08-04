import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Chat from "react-chat";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // Get the chat history from the server
    fetch("/api/v1/chat/history")
      .then(response => response.json())
      .then(data => setMessages(data.messages));
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();

    // Send the message to the server
    fetch("/api/v1/chat/send", {
      method: "POST",
      body: JSON.stringify({
        message: input,
      }),
    });

    setInput("");
  };

  return (
    <div>
      <Chat messages={messages} />
      <input
        type="text"
        placeholder="En que te puedo Ayudar?"
        value={input}
        onChange={handleInputChange}
      />
      <button onClick={handleSend}>Enviar</button>
    </div>
  );
};

export default ChatBot;