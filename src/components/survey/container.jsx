import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const SurveyPopup = () => {
  const location = useLocation();
  const [visitedHomepage, setVisitedHomepage] = useState(false);
  const [visitedOtherPage, setVisitedOtherPage] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  const SURVEY_DISPLAYED_KEY = "surveyDisplayed";
  const SURVEY_COMPLETED_KEY = "surveyCompleted";

  useEffect(() => {
    const surveyDisplayed = localStorage.getItem(SURVEY_DISPLAYED_KEY);
    const surveyCompleted = localStorage.getItem(SURVEY_COMPLETED_KEY);

    if (surveyCompleted) return;

    if (!surveyDisplayed) {
      if (location.pathname === "/") {
        if (visitedOtherPage) {
          setShowPopup(true);
          localStorage.setItem(SURVEY_DISPLAYED_KEY, "true");
        } else {
          setVisitedHomepage(true);
        }
      } else {
        if (visitedHomepage) {
          setVisitedOtherPage(true);
        }
      }
    } else {
      setShowIcon(true);
    }
  }, [location.pathname, visitedHomepage, visitedOtherPage]);

  const closeModal = () => {
    setShowPopup(false);
    setShowIcon(true);
  };

  const completeSurvey = () => {
    setShowPopup(false);
    setShowIcon(false);
    localStorage.setItem(SURVEY_COMPLETED_KEY, "true");
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6 text-center">
            <h2 className="text-xl font-bold mb-4">Can I ask for your 30s?</h2>
            <p className="text-gray-700 mb-6">
              I would really appreciate your two cents.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={completeSurvey}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Done
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
              >
                X
              </button>
            </div>
          </div>
        </div>
      )}

      {showIcon && (
        <div
          className="fixed bottom-5 left-5 w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full shadow-lg cursor-pointer hover:bg-blue-600 z-50"
          onClick={() => setShowPopup(true)}
        >
          Survey
        </div>
      )}
    </>
  );
};

export default SurveyPopup;
