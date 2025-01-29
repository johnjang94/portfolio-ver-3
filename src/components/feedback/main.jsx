import { useState } from "react";
import PropTypes from "prop-types";

export default function Main({
  showSurveyPopup,
  setShowSurveyPopup,
  onNotThisTime,
}) {
  const [showSurveyFormPopup, setShowSurveyFormPopup] = useState(false);
  const [showThankYouPopup, setShowThankYouPopup] = useState(false);
  const [formData, setFormData] = useState({
    foundWhatLookingFor: "",
    whatLookingFor: "",
    improvementSuggestions: "",
    reachSource: "",
  });

  const handleNotThisTime = () => {
    setShowSurveyPopup(false);
    onNotThisTime();
  };

  const completeSurvey = () => {
    setShowSurveyFormPopup(true);
    setShowSurveyPopup(false);
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
    localStorage.setItem("surveyCompleted", "true");
    setShowSurveyFormPopup(false);
    setShowThankYouPopup(true);
  };

  const closeAllPopups = () => {
    setShowThankYouPopup(false);
    setShowSurveyPopup(false);
    setShowSurveyFormPopup(false);
  };

  return (
    <div className="survey-popup">
      {showSurveyPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6 text-center popup">
            <h2 className="text-xl font-bold mb-4">Can I ask for your 30s?</h2>
            <p className="text-gray-700 mb-6">
              I would really appreciate your two cents!
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleNotThisTime}
                className="px-4 py-2 text-red-500 rounded-lg"
              >
                Not this time
              </button>
              <button
                onClick={completeSurvey}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-green-500"
              >
                Sure
              </button>
            </div>
          </div>
        </div>
      )}

      {showSurveyFormPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[500px] p-6">
            <h2 className="text-xl font-semibold mb-4">
              Website Feedback Survey
            </h2>
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
  onNotThisTime: PropTypes.func.isRequired, // Add prop validation
};
