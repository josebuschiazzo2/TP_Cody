import React, { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";
import ChatComponent from "react-chat";
import "../styles/chat.css"; // Agrega estilos CSS para alinear los mensajes

const api_key = "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";
const configuration = new Configuration({
  apiKey: api_key,
});
const chatGPT = new OpenAIApi(configuration);

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [botResponse, setBotResponse] = useState(""); // Estado para almacenar la respuesta del bot

  useEffect(() => {
    // Get the chat history from the server
    fetch("/api/v1/chat/history")
      .then((response) => response.json())
      .then((data) => setMessages(data.messages));
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = async () => {
    // Send the user message to the server
    fetch("/api/v1/chat/send", {
      method: "POST",
      body: JSON.stringify({
        message: input,
      }),
    });

    // Call the GPT-3 API to get a response
    try {
      const response = await chatGPT.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: input,
          },
        ],
      });

      const newMessage = {
        type: "user",
        content: input,
      };
      setMessages([...messages, newMessage]);

      const botResponseContent = response.data.choices[0].message.content;
      const botResponse = {
        type: "bot",
        content: botResponseContent,
      };
      setBotResponse(botResponseContent); // Actualiza el estado de la respuesta del bot
      setMessages([...messages, botResponse]);
    } catch (error) {
      console.error("Error fetching response from ChatGPT:", error);
    }

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div>
      <div>
        <ChatComponent
          messages={messages.map((msg) => ({
            ...msg,
            type: msg.type === "user" ? "user" : "bot", // Cambia el tipo de mensaje a "user" o "bot"
          }))}
        />
        <div>
          {botResponse && (
            <div>
              <p>Respuesta del Bot:</p>
              <p>{botResponse}</p>
            </div>
          )}
        </div>
      </div>
      <input
        type="text"
        placeholder="Hola! Soy Cody..En que te puedo Ayudar?"
        value={input}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default ChatBot;
