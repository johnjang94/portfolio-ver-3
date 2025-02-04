import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Landing({ onComplete }) {
  const navigate = useNavigate();

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.5 } }}
    >
      <div className="absolute w-96 h-96 flex flex-wrap">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            exit="explode"
            style={{
              position: "absolute",
              top: `${Math.floor(i / 4) * 25}%`,
              left: `${(i % 4) * 25}%`,
            }}
          />
        ))}
      </div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-96 p-6 popup">
          <h2 className="text-xl font-bold mb-4 text-center">
            Can I ask for your feedback?
          </h2>
          <p className="text-gray-700 mb-6 mx-auto w-5/6 text-base">
            <span className="font-bold">30s</span> is all it takes. <br />
            wanna hear from you!
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => {
                navigate("/ho-me");
                onComplete();
              }}
              className="px-4 py-2 text-red-500 rounded-lg"
            >
              Not this time
            </button>
            <button
              onClick={() => navigate("/detail")}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-green-500"
            >
              Sure
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

Landing.propTypes = {
  onComplete: PropTypes.func.isRequired,
};
