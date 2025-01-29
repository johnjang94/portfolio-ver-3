import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FcSurvey } from "react-icons/fc";
import PropTypes from "prop-types";

export default function Main({ showSurveyPopup, setShowSurveyPopup }) {
  const location = useLocation();
  const [showSurveyIcon, setShowSurveyIcon] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showSurveyFormPopup, setShowSurveyFormPopup] = useState(false);
  const [showThankYouPopup, setShowThankYouPopup] = useState(false);
  const [formData, setFormData] = useState({
    foundWhatLookingFor: "",
    whatLookingFor: "",
    improvementSuggestions: "",
    reachSource: "",
  });

  useEffect(() => {
    const currentPage = location.pathname;
    const isHomePage = currentPage === "/home";

    const blockedDomains = [
      "johnjang.ca",
      "portfolio-ver-3.vercel.app",
      "localhost:5173",
    ];

    const currentDomain = window.location.hostname;
    const isBlockedDomain = blockedDomains.some((domain) =>
      currentDomain.includes(domain)
    );

    if (isBlockedDomain) {
      setShowSurveyPopup(false);
      setShowSurveyIcon(false);
      return; // 블록된 도메인에서는 survey 동작 안 함
    }

    const surveyCompleted = localStorage.getItem("surveyCompleted") === "true";
    if (surveyCompleted || !isHomePage) {
      setShowSurveyPopup(false);
      return;
    }

    const timer = setTimeout(() => {
      setShowSurveyPopup(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, [location]);

  const closeSurveyPopup = () => {
    setShowSurveyPopup(false);
    setShowSurveyIcon(true);
    localStorage.setItem("surveyDismissed", "true");
  };

  const completeSurvey = () => {
    setShowSurveyFormPopup(true);
    setShowSurveyPopup(false);
    setShowSurveyIcon(false);
    localStorage.setItem("surveyCompleted", "true");
    localStorage.removeItem("surveyDismissed");
  };

  const handleSelection = (value) => {
    setFormData({ ...formData, foundWhatLookingFor: value });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Survey Data:", formData);

    setShowSurveyFormPopup(false);
    setShowThankYouPopup(true);
  };

  const closeAllPopups = () => {
    setShowThankYouPopup(false);
    setShowSurveyPopup(false);
    setShowSurveyFormPopup(false);
    setShowSurveyIcon(false);
  };

  return (
    <div>
      {/* 설문조사 버튼 */}
      {showSurveyIcon && (
        <button
          onClick={() => setShowSurveyPopup(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`fixed bottom-10 left-5 flex items-center gap-2 rounded-full shadow-lg 
                     transition-all duration-500 ease-in-out
                     ${
                       isHovered
                         ? "bg-green-500 px-6 py-3 w-auto h-12"
                         : "bg-blue-500 px-4 py-4 w-12 h-12 justify-center"
                     }`}
        >
          <FcSurvey className="transition-all duration-500 ease-in-out text-xl" />
          {isHovered && (
            <span className="text-white font-bold transition-opacity duration-500 ease-in-out opacity-100">
              Survey
            </span>
          )}
        </button>
      )}

      {/* 설문조사 요청 팝업 */}
      {showSurveyPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6 text-center">
            <h2 className="text-xl font-bold mb-4">Can I ask for 30s?</h2>
            <p className="text-gray-700 mb-6">
              I would really appreciate your two cents!
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={closeSurveyPopup}
                className="px-4 py-2 text-red-500 rounded-lg"
              >
                Not this time
              </button>
              <button
                onClick={completeSurvey}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-green-500"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 설문조사 양식 팝업 */}
      {showSurveyFormPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[500px] p-6">
            <h2 className="text-xl font-semibold mb-4">
              Website Feedback Survey
            </h2>

            <div>
              <label>Have you found what you were looking for?</label>
              <div className="flex gap-4 mt-2">
                <button
                  type="button"
                  className={`px-4 py-2 rounded ${
                    formData.foundWhatLookingFor === "yes"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => handleSelection("yes")}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 rounded ${
                    formData.foundWhatLookingFor === "no"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => handleSelection("no")}
                >
                  No
                </button>
              </div>
            </div>

            {/* Conditional Questions */}
            {formData.foundWhatLookingFor === "yes" && (
              <div>
                <label>
                  Could you please tell me what you were looking for?
                </label>
                <textarea
                  name="whatLookingFor"
                  value={formData.whatLookingFor}
                  onChange={handleChange}
                  placeholder="Your response..."
                  className="w-full p-2 border rounded"
                />
              </div>
            )}

            {formData.foundWhatLookingFor === "no" && (
              <div>
                <label>How can I do better for you next time?</label>
                <textarea
                  name="improvementSuggestions"
                  value={formData.improvementSuggestions}
                  onChange={handleChange}
                  placeholder="Your feedback..."
                  className="w-full p-2 border rounded"
                />
              </div>
            )}

            <div>
              <label>How did you find our website?</label>
              <input
                type="text"
                name="reachSource"
                placeholder="e.g. Google, social media"
                value={formData.reachSource}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-2"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full p-2 bg-blue-500 text-white rounded mt-4"
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {/* Thank You 팝업 */}
      {showThankYouPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6 text-center">
            <h2 className="text-xl font-bold mb-4">Thank You!</h2>
            <p className="text-gray-700 mb-6">
              We appreciate your feedback. 😊
            </p>
            <button
              onClick={closeAllPopups}
              className="px-4 py-2 bg-green-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

Main.propTypes = {
  showSurveyPopup: PropTypes.bool.isRequired,
  setShowSurveyPopup: PropTypes.func.isRequired,
};
