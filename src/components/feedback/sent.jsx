import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sent() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("surveyClosed", "true");
    localStorage.setItem("chatClosed", "true");
    navigate("/ho-me");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 text-center">
        <h2 className="text-xl font-bold mb-4">Thank You!</h2>
        <p className="text-gray-700 mb-6">I appreciate your feedback. 😊</p>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
