import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Root from "./pages/root";

// Home page & About Me
import Home from "./pages/home/home";
import About from "./pages/about/about";

// Design section
import TeleVU from "./pages/design/televu";
import Food from "./pages/design/food-distro";
import TuGo from "./pages/design/tugo";
import SAKHI from "./pages/design/the-sakhi";
import OPERATE from "./pages/design/operate-ease";

// Contact & Extra
import Contact from "./pages/contact";
import Received from "./pages/received";
import Sending from "./pages/sending";
import Retry from "./pages/retry";
import Template from "./pages/email/template";
import Access from "./components/access";

// Wrong link
import NotFound from "./pages/notfound";
import Resume from "./pages/resume/resume";

import { FcSurvey } from "react-icons/fc";
import { useEffect } from "react";
import { useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      // Design section
      { path: "/televu", element: <TeleVU /> },
      { path: "/food-distro", element: <Food /> },
      { path: "/tugo-insurance", element: <TuGo /> },
      { path: "/sakhi", element: <SAKHI /> },
      { path: "/operate", element: <OPERATE /> },
      // Other
      { path: "/contact", element: <Contact /> },
      { path: "/sending", element: <Sending /> },
      { path: "/received", element: <Received /> },
      { path: "/retry", element: <Retry /> },

      { path: "/resume", element: <Resume /> },
      { path: "/email-template", element: <Template /> },
      { path: "/access", element: <Access /> },
      // For any wrong URL, redirect to:
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  // Survey Pop-up
  const [visitedHomepage, setVisitedHomepage] = useState(false);
  const [visitedOtherPage, setVisitedOtherPage] = useState(false);
  const [showSurveyPopup, setShowSurveyPopup] = useState(false);
  const [showSurveyIcon, setShowSurveyIcon] = useState(false);
  useEffect(() => {
    console.log("Visited Homepage:", visitedHomepage);
    console.log("Visited Other Page:", visitedOtherPage);

    const surveyCompleted = localStorage.getItem("surveyCompleted");

    if (surveyCompleted) return;

    if (location.pathname === "/") {
      if (visitedOtherPage) {
        setShowSurveyPopup(true);
      } else {
        setVisitedHomepage(true);
      }
    } else {
      if (visitedHomepage) {
        setVisitedOtherPage(true);
      }
    }
  }, [visitedHomepage, visitedOtherPage]);

  const completeSurvey = () => {
    localStorage.setItem("surveyCompleted", "true");
    setShowSurveyPopup(false);
    setShowSurveyIcon(false);
  };

  const closeSurveyPopup = () => {
    setShowSurveyPopup(false);
    setShowSurveyIcon(true);
  };

  return (
    <div>
      <RouterProvider router={router} />
      <Analytics />
      {showSurveyIcon && (
        <div
          className="fixed bottom-5 left-5 w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full shadow-lg cursor-pointer hover:bg-blue-600 z-50"
          onClick={() => setShowSurveyPopup(true)}
        >
          <FcSurvey />
        </div>
      )}
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
    </div>
  );
}

export default App;
