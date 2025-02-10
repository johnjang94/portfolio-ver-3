import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { home } from "../../utils/home";
import ChatButton from "../chatbot/chat-button";
import ChatBot from "../chatbot/chatbot-ai";
/* eslint-disable react-refresh/only-export-components */
import { Helmet } from "react-helmet-async";

export { Home as Page, prerender };
const prerender = true;

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
    title: "Simplifying Complexity",
    subtitle: "Menu overhaul, targeting a 20% conversion lift",
    category: ["B2C", "E-commerce", "start-up"],
    percentage: ["20%", "75%"],
    highlight: ["targeted lift", "of new users found descriptions helpful"],
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

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [hasClosedChat, setHasClosedChat] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!hasClosedChat) {
      const chatTimeout = setTimeout(() => setIsChatOpen(true), 5000);
      return () => clearTimeout(chatTimeout);
    }
  }, [hasClosedChat]);

  return (
    <div>
      <Helmet>
        <title>Home - John Jang&#39;s Portfolio</title>
        <meta
          name="description"
          content="UX Designer / Product Designer with experience in B2B SaaS, E-commerce, Non-Profit, etc."
        />
      </Helmet>
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
                A curious data-lover driven by elegant simplicity.
              </p>
              <p>
                I craft design strategies that blend data insights with creative
                innovation to boost business performance and enhance user
                experiences.
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
        <ChatButton onClick={() => setIsChatOpen(true)} />
        {isChatOpen && (
          <ChatBot
            onClose={() => {
              setIsChatOpen(false);
              setHasClosedChat(true);
            }}
          />
        )}
      </section>
    </div>
  );
}
