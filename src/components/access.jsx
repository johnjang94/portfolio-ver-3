import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function Access({ onCorrectPassword }) {
  const PASSWORD = import.meta.env.VITE_PASSCODE;
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.trim() === PASSWORD) {
      navigate("/email-template");
      if (onCorrectPassword) {
        onCorrectPassword();
      }
    } else {
      setErrorMessage("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center transform translate-x-[12px]">
      <div className="py-10 md:w-[55vw] w-5/6 bg-slate-300 rounded-3xl">
        <h1 className="text-center text-3xl mt-10 text-red-500">
          Restricted Access
        </h1>
        <div className="py-5 text-center">
          <p>Password Required</p>
        </div>
        <form
          className="flex items-center mb-3 w-4/6 mx-auto"
          onSubmit={handleSubmit}
        >
          <input
            type="password"
            className="p-2 w-full rounded-l-lg bg-gray-200 hover:bg-slate-100 text-black"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            aria-label="Password Input"
          />
          <button type="submit" className="p-2 rounded-r-lg bg-cyan-400">
            OK
          </button>
        </form>
        {errorMessage && (
          <p className="text-[#FF00FF] text-center">{errorMessage}</p>
        )}
      </div>
    </div>
  );
}

Access.propTypes = {
  onCorrectPassword: PropTypes.func,
};
