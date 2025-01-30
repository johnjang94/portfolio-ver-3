import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Return() {
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
        <h2 className="text-xl font-bold text-red-500">Oops!</h2>
        <p>
          I think that there has been a technical glitch! 🥹 I am sorry, but I
          would appreciate your comment during your next visit! 🙏🏻
        </p>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg mt-4"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
