import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Sending() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sendRequest = async () => {
      if (!location.state || !location.state.data) {
        navigate("/retry");
        return;
      }

      const data = location.state.data;
      const formPayload = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        formPayload.append(key, value);
      });

      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/contact`,
          {
            method: "POST",
            body: formPayload,
          }
        );

        if (response.ok) {
          navigate("/received");
        } else {
          navigate("/retry");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        navigate("/retry");
      }
    };

    sendRequest();
  }, [location.state, navigate]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white bg-opacity-80">
      <div className="h-16 w-16 border-4 border-t-4 border-gray-300 rounded-full animate-spin border-t-green-400"></div>
      <p className="mt-4 text-lg text-gray-700">
        Please wait, I am processing your request...
      </p>
    </div>
  );
}
