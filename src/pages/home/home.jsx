import { Link } from "react-router-dom";
import { useEffect } from "react";
import { home } from "../../utils/home";
import { useState } from "react";
import ChatBot from "../chatbot/chatbot-ai";
import ChatButton from "../chatbot/chat-button";
import { FcSurvey } from "react-icons/fc";

const roles = ["UX Designer", "Product Designer", "UX Engineer"];

const data = [
  {
    id: 1,
    imgSrc: home.OperateEase,
    imgAlt: "OperateEase",
    icon: "🔒",
    title: "Inventory optimization for improved management",
    subtitle:
      "Reducing missed-catering orders and recovering room-service losses",
    category: ["B2B", "SaaS"],
    percentage: ["20%", "15%"],
    highlight: [
      "targeted reduction on incorrect orders",
      "expected additional profit from delayed check-out penalties",
    ],
    link: "/operate",
  },
  {
    id: 2,
    imgSrc: home.Sakhi,
    imgAlt: "Sakhi",
    icon: "",
    title: "Reimagined onboarding experience to drive a targeted 20% CTR",
    subtitle:
      "Designed product contents for a direct in-store premium Indian brand, The Sakhi",
    category: ["B2C", "E-commerce", "start-up"],
    percentage: ["20%", "75%"],
    highlight: ["targeted search optimization", "targeted improved usability"],
    link: "/sakhi",
  },
  {
    id: 3,
    imgSrc: home.FoodDistro,
    imgAlt: "Food Distro",
    icon: "",
    title: "Search optimization for enhanced engagement",
    subtitle:
      "Low effort solution to improve search and messaging for locals for social service mobile app, Food Distro",
    category: ["Mobile App Design", "Non-Profit"],
    percentage: ["88%", "85%"],
    highlight: ["improved filter", "increased system reliability"],
    link: "/food-distro",
  },
];

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // About Roles
  const [currentRole, setCurrentRole] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // About Chatbot
  const [isChatOpen, setIsChatOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChatOpen(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  // Survey Pop-up
  const [visitedHomepage, setVisitedHomepage] = useState(false);
  const [visitedOtherPage, setVisitedOtherPage] = useState(false);
  const [showSurveyPopup, setShowSurveyPopup] = useState(false);
  const [showSurveyIcon, setShowSurveyIcon] = useState(false);
  useEffect(() => {
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <header className="lg:my-24 mx-auto px-5 md:px-0 lg:w-[80vw] w-11/12 mt-20 mb-82 2xl:my-28">
        <div className="p-10">
          <h1 className="md:text-5xl text-2xl md:py-5 text-blue-500 font-bold">
            John Jang
          </h1>
          <div className="md:mb-0">
            <div className="flex">
              <div className="relative w-full h-14 overflow-hidden md:text-5xl text-2xl text-blue-500 font-bold">
                <div className="scroll-container">
                  {roles.map((role, index) => (
                    <p
                      key={index}
                      className={`scroll-item ${
                        index === currentRole ? "visible" : ""
                      }`}
                    >
                      {role}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-5 md:my-5">
              <p className="md:text-2xl text-lg font-semibold">
                A curious-minded data-lover with a drive for elegance and
                simplicity
              </p>
              <p>
                I deliver meaningful results with inspiring designs that
                consider the business goals, the user needs, and the technical
                feasibility.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 md:my-12 md:pb-5 hidden md:block">
          <div className="md:grid md:grid-cols-3 gap-10">
            <h3 className="text-center md:text-2xl text-xl">Design Tools</h3>
            <h3 className="text-center md:text-2xl text-xl">Tech Tools</h3>
            <h3 className="text-center md:text-2xl text-xl">Applied Skills</h3>
          </div>
          <div className="md:grid md:grid-cols-3 items-start py-10 gap-10 space-y-5 md:space-y-0 xl:h-28">
            <div className="bg-white rounded-2xl p-3 h-full">
              <p>
                Figma, Miro, Wireframing, Sketching, Prototyping, Mock-ups,
                Usability Testing, AI-Insight, Adobe Creative Cloud, Business
                Canvas
              </p>
            </div>
            <div className="bg-white rounded-2xl p-3 h-full">
              <p>
                Notion, JIRA, Trello, Google Analytics, HTML, CSS, JavaScript
              </p>
            </div>
            <div className="bg-white rounded-2xl p-3 h-full">
              <p>
                Analyze how users interact with designs, implement different
                strategies to reach the target (i.e. raise CTR, SEO
                optimization, improvised workflow, etc.)
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="mt-10 md:my-12 md:pb-5 block md:hidden">
          <div className="md:grid md:grid-cols-3 gap-10 space-y-5">
            <div>
              <h3 className="text-center md:text-2xl text-xl">Design Tools</h3>
              <div className="bg-white rounded-2xl p-3 h-full">
                <p>
                  Figma, Miro, Wireframing, Sketching, Prototyping, Mock-ups,
                  Usability Testing, AI-Insight, Adobe Creative Cloud, Business
                  Canvas
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-center md:text-2xl text-xl">Tech Tools</h3>
              <div className="bg-white rounded-2xl p-3 h-full">
                <p>
                  Notion, JIRA, Trello, Google Analytics, HTML, CSS, JavaScript
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-center md:text-2xl text-xl">
                Applied Skills
              </h3>
              <div className="bg-white rounded-2xl p-3 h-full">
                <p>
                  Analyze how users interact with designs, implement different
                  strategies to reach the target (i.e. raise CTR, SEO
                  optimization, improvised workflow, etc.)
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="md:mx-36 mx-12 space-y-10 py-14 md:py-0">
        <div>
          <h3 className="py-5 text-center md:text-2xl text-xl">
            So, what is the story of my design portfolio?
          </h3>
          {data
            .filter((item) => item.id === 1)
            .map((item) => (
              <Link to={item.link} state={{ fromId: item.id }} key={item.id}>
                <div className="hover:cursor-pointer space-y-3 p-2 rounded-xl border-white border-2 hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:-translate-y-2 transition-transform duration-300 ease-in-out w-full">
                  <div className="md:w-[40vw] md:mx-auto">
                    <div className="bg-[#f6f6f6] md:py-3 rounded-xl">
                      <img
                        src={item.imgSrc}
                        alt={item.imgAlt}
                        className="rounded-xl mx-auto"
                      />
                    </div>
                    <div className="py-5">
                      <p className="font-bold">
                        {item.icon} {item.title}
                      </p>
                      {item.subtitle && (
                        <p className="font-normal">{item.subtitle}</p>
                      )}
                    </div>
                    <div className="flex md:space-x-5 space-x-1">
                      {item.category.map((category, index) => (
                        <span
                          key={index}
                          className="bg-slate-400 rounded-lg md:px-2 px-1 py-1 text-white text-xs md:text-sm"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 text-center py-3">
                      {item.percentage?.map((percentage, index) => (
                        <span key={index} className="md:text-2xl text-lg">
                          {percentage}
                        </span>
                      ))}
                      {item.highlight?.map((highlight, index) => (
                        <span key={index}>{highlight}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>
      <section className="md:my-20 my-10 md:mx-36 mx-12 md:space-y-0">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 space-y-10 md:space-y-0">
          {data
            .filter((item) => item.id !== 1)
            .map((item) => (
              <Link to={item.link} state={{ fromId: item.id }} key={item.id}>
                <div className="transition-transform duration-300 ease-in-out hover:-translate-y-2 space-y-3 p-2 rounded-xl w-full border-white border-2 hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                  <div className="p-3 rounded-xl bg-[#f6f6f6]">
                    <img
                      src={item.imgSrc}
                      alt={item.imgAlt}
                      className="rounded-xl mx-auto md:h-[300px]"
                    />
                  </div>
                  <div className="p-2">
                    <p className="font-bold">
                      {item.icon} {item.title}
                    </p>
                    <p className="font-normal">{item.subtitle}</p>
                  </div>
                  <div className="flex md:space-x-5 space-x-1">
                    {item.category.map((category, index) => (
                      <span
                        key={index}
                        className="bg-slate-400 rounded-lg md:px-2 px-1 py-1 text-white text-xs md:text-sm"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 text-center py-3">
                    {item.percentage?.map((percentage, index) => (
                      <span key={index} className="md:text-2xl text-lg">
                        {percentage}
                      </span>
                    ))}
                    {item.highlight?.map((highlight, index) => (
                      <span key={index}>{highlight}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>
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
      {showSurveyIcon && (
        <div
          className="fixed bottom-5 left-5 w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full shadow-lg cursor-pointer hover:bg-blue-600 z-50"
          onClick={() => setShowSurveyPopup(true)}
        >
          <FcSurvey />
        </div>
      )}

      <ChatButton onClick={() => setIsChatOpen(true)} />
      {isChatOpen && <ChatBot onClose={() => setIsChatOpen(false)} />}
    </div>
  );
}
