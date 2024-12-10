import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { home } from "../../utils/home";

const methods = ["Product Designer.", "UX Designer.", "Web Designer."];
const methods2 = ["user research.", "prototyping.", "usability tests."];

const data = [
  {
    id: 1,
    imgSrc: home.OperateEase,
    imgAlt: "OperateEase",
    icon: "🔒",
    title: "Coming soon: an innovative hospitality management platform",
    subtitle: "",
    category: ["Product Design", "SaaS product", "start-up"],
    link: "/operate",
  },
  {
    id: 2,
    imgSrc: home.Sakhi,
    imgAlt: "Sakhi",
    icon: "🔒",
    title: "Designing a premium Indian luxury - The Sakhi",
    category: ["Product Design", "E-commerce", "start-up"],
    link: "/sakhi",
  },
  {
    id: 3,
    imgSrc: home.FoodDistro,
    imgAlt: "Food Distro",
    icon: "",
    title: "Reduce the food waste - Food Distro",
    category: ["UX/UI Design", "Mobile App", "Social Service"],
    link: "/food-distro",
  },
  {
    id: 4,
    imgSrc: home.TuGo,
    imgAlt: "TuGo",
    icon: "",
    title: "Reintroducing your travel protection - TuGo Travel Insurance",
    category: ["UX/UI Design"],
    link: "/tugo-insurance",
  },
  {
    id: 5,
    imgSrc: home.TeleVU,
    imgAlt: "TeleVU",
    title: "Video-call for clinicians - TeleVU Innovation Incorporation",
    category: ["UX/UI Design", "Web App", "Mobile App"],
    link: "/televu",
  },
];

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currentMethod, setCurrentMethod] = useState("");
  const [methodIndex, setMethodIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (methodIndex < methods.length) {
      if (charIndex < methods[methodIndex].length) {
        const typingTimer = setTimeout(() => {
          setCurrentMethod((prev) => prev + methods[methodIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 100);

        return () => clearTimeout(typingTimer);
      } else {
        const pauseTimer = setTimeout(() => {
          setCurrentMethod("");
          setCharIndex(0);
          setMethodIndex((prev) => (prev + 1) % methods.length);
        }, 2000);

        return () => clearTimeout(pauseTimer);
      }
    }
  }, [charIndex, methodIndex]);

  const [currentMethod2, setCurrentMethod2] = useState("");
  const [methodIndex2, setMethodIndex2] = useState(0);
  const [charIndex2, setCharIndex2] = useState(0);

  useEffect(() => {
    if (methodIndex2 < methods2.length) {
      if (charIndex2 < methods2[methodIndex2].length) {
        const typingTimer = setTimeout(() => {
          setCurrentMethod2(
            (prev) => prev + methods2[methodIndex2][charIndex2]
          );
          setCharIndex2((prev) => prev + 1);
        }, 100);

        return () => clearTimeout(typingTimer);
      } else {
        const pauseTimer = setTimeout(() => {
          setCurrentMethod2("");
          setCharIndex2(0);
          setMethodIndex2((prev) => (prev + 1) % methods2.length);
        }, 2000);

        return () => clearTimeout(pauseTimer);
      }
    }
  }, [charIndex2, methodIndex2]);
  return (
    <div>
      <header className="lg:my-24 mx-auto px-5 md:px-0 lg:w-[80vw] w-11/12 mt-20 mb-82 2xl:my-28">
        <div className="p-10 bg-gradient-to-br border-white border-2 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; bg-[#f6f6f6] rounded-2xl">
          <h1 className="md:text-5xl text-2xl py-5">Hi, I&#39;m John Jang.</h1>
          <div className="md:text-xl text-base mb-3 md:mb-0">
            <h1>I&#39;m a {currentMethod}</h1>
            <h1>
              I help companies to foster{" "}
              <span className="font-bold">strong</span> and{" "}
              <span className="font-bold">reliable</span> relationships with
              their users using{" "}
              <span className="typewriter-text">{currentMethod2}</span>
            </h1>
          </div>
          <div>
            <p className="my-5 text-base">
              Currently, I&#39;m open to new Product Design or UX/UI Design
              roles!
            </p>
          </div>
        </div>
        <div className="mt-10 md:my-12 md:pb-5">
          <h3 className="text-center md:text-2xl text-xl">Fun Facts</h3>
          <div className="md:grid md:grid-cols-3 items-start py-10 gap-10 space-y-5 md:space-y-0 xl:h-28">
            <div className="bg-white rounded-2xl p-3">
              <p>
                I design high-quality, user-focused solutions for B2B products
                in SaaS, E-commerce or cloud-based PaaS platforms, with a unique
                ability to{" "}
                <span className="underline">
                  identify technical gaps in designs
                </span>{" "}
                thanks to my web development experience.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-3 h-full">
              <p>
                I thrive in cross-functional teams, working in both waterfall or
                agile environments, where my curiosity and ability to{" "}
                <span className="underline">ask the right questions</span> often
                lead to <span className="font-semibold">better solutions</span>.
                To me, collaboration is one of the biggest sources where great
                ideas come to life.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-3 h-full">
              <p>
                I find joy in hearing users describe my designs as
                &#39;better&#39;, &#39;clear&#39; or &#39;understandable&#39;,
                as it means I&#39;m{" "}
                <span className="underline">one-step closer</span> to the{" "}
                <span className="font-semibold">right solution</span>. To me,
                clarity is elegance.
              </p>
            </div>
          </div>
        </div>
        <div className="md:hidden flex justify-between">
          <Link
            to="/about"
            className="text-blue-500 hover:underline hover:cursor-pointer flex space-x-2 items-center"
          >
            <button>Click here to learn more about me</button>
            <FaArrowRight />
          </Link>
        </div>
      </header>
      <section className="md:mx-36 mx-12 space-y-10 py-14">
        <h3 className="text-center md:text-2xl text-base py-1">
          Hope you enjoy my design samples!
        </h3>
        <img
          src={home.Contributions}
          alt="Contribution"
          width={1200}
          className="mx-auto rounded-2xl"
        />
        <div>
          <h3 className="py-5 text-center md:text-2xl text-xl">
            So, what is the story of my design portfolio?
          </h3>
          {data.map((item) =>
            item.id === 1 ? (
              <Link to={item.link} state={{ fromId: item.id }} key={item.id}>
                <div
                  className={`hover:cursor-pointer space-y-3 p-2 rounded-xl border-white border-2 hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:-translate-y-2 transition-transform duration-300 ease-in-out w-full ${
                    item.id === 5 ? "w-full" : "w-auto"
                  }`}
                >
                  <div className="md:w-[40vw] md:mx-auto">
                    <div className="bg-[#f6f6f6] md:py-3 rounded-xl">
                      <img
                        src={item.imgSrc}
                        alt={item.imgAlt}
                        className="rounded-xl mx-auto"
                      />
                    </div>
                    <p className="font-bold">
                      {item.icon} {item.title}
                    </p>
                    {item.subtitle && (
                      <p className="font-bold">{item.subtitle}</p>
                    )}
                    <div className="flex md:space-x-5 space-x-1">
                      {item.category?.map((category, index) => (
                        <span
                          key={index}
                          className="bg-slate-400 rounded-lg md:px-2 px-1 py-1 text-white text-xs md:text-sm"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ) : null
          )}
        </div>
      </section>
      <section className="md:my-20 my-10 md:mx-36 mx-12 grid grid-cols-1 md:grid-cols-2 md:gap-20 space-y-10 md:space-y-0">
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
                <p className="font-bold">
                  {item.icon} {item.title}
                </p>
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
              </div>
            </Link>
          ))}
      </section>
    </div>
  );
}
