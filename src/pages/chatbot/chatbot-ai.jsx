import PropTypes from "prop-types";
import { useState, useRef, useEffect, useCallback } from "react";
import { IoIosSend } from "react-icons/io";
import { useLocation } from "react-router-dom";
import websiteContent from "./website-content";

export default function ChatBot({ onClose }) {
  const location = useLocation();
  const routeKey = location.pathname.substring(1);
  const pathMessages = {
    "/operate":
      "Want to dive deeper into our hotel management strategy? Ask your detailed questions!",
    "/sakhi":
      "Curious about the nuanced design of our Indian luxury clothing platform? Let's discuss!",
    "/food-distro":
      "Ready to explore the finer points of our local food donation project? Ask away!",
  };
  const defaultMessage =
    pathMessages[location.pathname] ||
    "Welcome to my portfolio —-- ask me deep questions on blending data with creativity, navigating design challenges, and turning diverse insights into innovation.";
  const projectMapping = {
    "/operate": {
      name: "Hotel Management Project",
      description:
        "This Hotel Management Project is a comprehensive solution designed to streamline hotel operations. It offers a SaaS platform with a user-friendly dashboard, real-time data visualization, and features aimed at enhancing operational efficiency.",
      keywords: [
        "hotel",
        "management",
        "operate",
        "efficiency",
        "SaaS",
        "MVP",
        "UX",
        "dashboard",
        "data visualization",
        "scalability",
        "team collaboration",
        "late check-out",
        "user research",
      ],
    },
    "/sakhi": {
      name: "Indian Luxury Clothing E-commerce Project",
      description:
        "This project focuses on building a luxurious e-commerce experience for Indian clothing, emphasizing cultural insights and a refined user interface.",
      keywords: [
        "sakhi",
        "clothing",
        "fashion",
        "luxury",
        "conversion",
        "UX research",
        "usability",
        "iterative design",
        "cultural insight",
        "brand identity",
        "visual hierarchy",
        "documentation",
        "teamwork",
      ],
    },
    "/food-distro": {
      name: "Locals Donating Food Project",
      description:
        "This project enables locals to donate food with ease, featuring intuitive search, mapping, and scheduling tools to enhance the donation experience.",
      keywords: [
        "food",
        "donation",
        "donate",
        "locals",
        "search",
        "mapping",
        "filtering",
        "scheduling",
        "reviews",
        "UX",
        "collaboration",
        "metrics",
        "usability",
        "iteration",
        "feature prioritization",
      ],
    },
  };
  const projectInquiryPhrases = [
    "tell me about the project",
    "what is this project about",
    "explain the project",
    "project details",
    "describe the project",
    "what does this project do",
    "project overview",
  ];
  const [messages, setMessages] = useState([
    { role: "bot", text: defaultMessage },
  ]);
  const [input, setInput] = useState("");
  const messageContainerRef = useRef(null);
  const fetchChatGPTResponse = async (input) => {
    try {
      const projectContext =
        projectMapping[location.pathname]?.description || "";
      const enhancedMessage = `Project Context: ${projectContext}\nUser Question: ${input}`;
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/chat`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: "unique-user-id",
            message: enhancedMessage,
          }),
        }
      );
      if (!response.ok)
        throw new Error("Failed to fetch response from the server.");
      const data = await response.json();
      if (data.response.trim() === "warm-up-test") return null;
      return data.response;
    } catch (error) {
      return "I'm sorry, but my response capability is currently limited due to network issues.";
    }
  };
  const containsWholeWord = (text, word) => {
    const regex = new RegExp(`\\b${word}\\b`, "i");
    return regex.test(text);
  };
  const handleSendMessage = async () => {
    if (!input.trim()) return;
    const trimmedInput = input.trim();
    const userMessage = { role: "user", text: trimmedInput };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    const globalFaqs = websiteContent.faq.filter((faq) => {
      if (Array.isArray(faq.route))
        return faq.route.includes(location.pathname);
      return faq.route === location.pathname;
    });
    const projectFaqs = websiteContent[routeKey] || [];
    const currentFaqs = [...globalFaqs, ...projectFaqs];
    const faqMatch = currentFaqs.find((faq) =>
      trimmedInput.toLowerCase().includes(faq.question.toLowerCase())
    );
    if (faqMatch) {
      setMessages((prev) => [...prev, { role: "bot", text: faqMatch.answer }]);
      return;
    }
    if (
      projectMapping[location.pathname] &&
      projectInquiryPhrases.some((phrase) =>
        trimmedInput.toLowerCase().includes(phrase)
      )
    ) {
      const project = projectMapping[location.pathname];
      const response = project.description || `This is the ${project.name}.`;
      setMessages((prev) => [...prev, { role: "bot", text: response }]);
      return;
    }
    const currentProject = projectMapping[location.pathname];
    const currentProjectKeywords = currentProject
      ? currentProject.keywords
      : [];
    const currentProjectMatch = currentProjectKeywords.some((keyword) =>
      containsWholeWord(trimmedInput.toLowerCase(), keyword.toLowerCase())
    );
    if (currentProjectMatch) {
      const botResponse = await fetchChatGPTResponse(trimmedInput);
      setMessages((prev) => [...prev, { role: "bot", text: botResponse }]);
      return;
    }
    for (const [path, info] of Object.entries(projectMapping)) {
      if (location.pathname !== path) {
        for (const keyword of info.keywords) {
          if (
            containsWholeWord(trimmedInput.toLowerCase(), keyword.toLowerCase())
          ) {
            setMessages((prev) => [
              ...prev,
              {
                role: "bot",
                text: `Although I am happy to answer your question, this question is more related to ${info.name}, so I would like to suggest you to redirect yourself to ${path} and ask me again.`,
              },
            ]);
            return;
          }
        }
      }
    }
    const botResponse = await fetchChatGPTResponse(trimmedInput);
    setMessages((prev) => [...prev, { role: "bot", text: botResponse }]);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSendMessage();
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
        <h2 className="text-lg font-bold">Do you need help?</h2>
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
            className={`flex items-start ${
              msg.role === "bot" ? "justify-start" : "justify-end"
            }`}
          >
            {msg.role === "bot" && (
              <img
                src="/profile.jpeg"
                alt="Bot Profile"
                className="w-8 h-8 rounded-full mr-2"
              />
            )}
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
