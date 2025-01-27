import PropTypes from "prop-types";
import { useState, useRef, useEffect, useCallback } from "react";
import { IoIosSend } from "react-icons/io";

import websiteContent from "./website-content";

export default function ChatBot({ onClose }) {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hello! Welcome to John's portfolio. How may I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const messageContainerRef = useRef(null);

  const fetchChatGPTResponse = async (input) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: "unique-user-id", message: input }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch response from the server.");
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      return "Sorry, I encountered an error while trying to assist you.";
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const faqMatch = websiteContent.faq.find((faq) =>
      input.toLowerCase().includes(faq.question.toLowerCase())
    );

    if (faqMatch) {
      setMessages((prev) => [...prev, { role: "bot", text: faqMatch.answer }]);
      return;
    }

    const botResponse = await fetchChatGPTResponse(input.trim());

    setMessages((prev) => [...prev, { role: "bot", text: botResponse }]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const scrollToBottom = useCallback(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  return (
    <div className="fixed bottom-10 right-10 bg-white rounded-2xl shadow-lg w-80">
      <div className="flex justify-between items-center bg-slate-200 p-2 rounded-t-2xl">
        <h2 className="text-lg font-bold">Ask me anything!</h2>
        <button onClick={onClose} className="text-red-500">
          ✖️
        </button>
      </div>

      <div
        ref={messageContainerRef}
        className="h-64 overflow-y-scroll border-t p-4 space-y-5"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`text-${msg.role === "bot" ? "left" : "right"}`}
          >
            <p
              className={`inline-block rounded-lg px-3 py-1 ${
                msg.role === "bot"
                  ? "bg-gray-200 text-black"
                  : "bg-blue-500 text-white"
              }`}
            >
              {msg.text}
            </p>
          </div>
        ))}
      </div>

      <div className="border-t mx-4 my-4">
        <div className="flex mt-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 border rounded-l-lg px-2 py-1"
            placeholder="Type your question..."
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white px-4 py-1 rounded-r-lg"
          >
            <IoIosSend />
          </button>
        </div>
      </div>
    </div>
  );
}

ChatBot.propTypes = {
  onClose: PropTypes.func.isRequired,
};
