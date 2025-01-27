import PropTypes from "prop-types";
import { useState, useRef, useEffect, useCallback } from "react";
import { IoIosSend } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

export default function ChatBot({ onClose }) {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hello, how may I help you?" },
  ]);
  const [input, setInput] = useState("");
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const messageContainerRef = useRef(null);

  const menuItems = ["General Inquiry", "FAQ"];

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    if (input.toLowerCase() === "menu") {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Here are the menu options again:" },
      ]);
      setIsMenuVisible(true);
      return;
    }

    let botResponse;
    if (input.toLowerCase() === "general inquiry") {
      botResponse = (
        <span>
          You can reach out using the contact page:{" "}
          <a
            href="https://www.johnjang.ca/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Contact
          </a>
        </span>
      );
    } else if (input.toLowerCase() === "faq") {
      botResponse = (
        <span>
          Visit John&#39;s introduction to learn more:{" "}
          <a
            href="https://www.johnjang.ca/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            About
          </a>
        </span>
      );
    } else {
      botResponse = (
        <span>
          I am happy to connect you with John Jang. Please check the following
          option:{" "}
          <a
            href="https://www.johnjang.ca/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Contact
          </a>
        </span>
      );
    }

    setMessages((prev) => [...prev, { role: "bot", text: botResponse }]);
  };

  const handleMenuClick = (menuOption) => {
    let botResponse;
    if (menuOption === "General Inquiry") {
      botResponse = (
        <span>
          You can reach out using the contact page:{" "}
          <a
            href="https://www.johnjang.ca/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Contact
          </a>
        </span>
      );
    } else if (menuOption === "FAQ") {
      botResponse = (
        <span>
          Visit the about to learn more:{" "}
          <a
            href="https://www.johnjang.ca/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            About
          </a>
        </span>
      );
    }

    setMessages((prev) => [
      ...prev,
      { role: "user", text: menuOption },
      { role: "bot", text: botResponse },
      {
        role: "bot",
        text: 'If you want to see the menu again, type "menu" in the chat.',
      },
    ]);
    setIsMenuVisible(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const scrollToBottom = useCallback(() => {
    if (!isScrolledUp) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [isScrolledUp]);

  const handleScroll = () => {
    const container = messageContainerRef.current;
    if (container) {
      const isAtBottom =
        container.scrollHeight - container.scrollTop <=
        container.clientHeight + 10;
      setIsScrolledUp(!isAtBottom);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  return (
    <div className="fixed bottom-[95px] right-9 bg-white rounded-2xl shadow-lg w-80">
      <div className="flex justify-between items-center bg-slate-200 p-2 rounded-t-2xl">
        <h2 className="text-lg font-bold">Do you need any help?</h2>
        <button onClick={onClose} className="text-red-500">
          ✖️
        </button>
      </div>

      <div
        ref={messageContainerRef}
        onScroll={handleScroll}
        className="h-64 overflow-y-scroll border-t p-4 space-y-5"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${msg.role === "bot" ? "text-left" : "text-right"}`}
          >
            <p
              className={`inline-block rounded-lg px-3 py-1 ${
                msg.role === "bot"
                  ? "bg-gray-200 text-black"
                  : "bg-blue-500 text-white"
              }`}
            >
              {typeof msg.text === "string" ? msg.text : msg.text}
            </p>
          </div>
        ))}
      </div>

      {isMenuVisible && (
        <div className="border-t m-4 space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Menu Options</h3>
            <button
              onClick={() => setIsMenuVisible(false)}
              className="text-red-500 hover:text-red-700"
            >
              <AiOutlineClose />
            </button>
          </div>
          <div className="flex flex-col gap-2 h-24 overflow-y-auto">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleMenuClick(item)}
                className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="border-t mx-4 my-4">
        <div className="flex mt-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 border rounded-l-lg px-2 py-1"
            placeholder="Type a message..."
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
