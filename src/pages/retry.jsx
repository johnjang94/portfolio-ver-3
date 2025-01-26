import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Retry() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/contact");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white bg-opacity-80">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-red-500">
          Something went wrong
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          We were unable to process your request. Redirecting you back to the
          contact form.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          (This will take just a moment...)
        </p>
      </div>
    </div>
  );
}
