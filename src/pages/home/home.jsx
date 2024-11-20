import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { home } from "../../utils/home";

const methods = ["user research.", "prototyping.", "usability tests."];

const data = [
  {
    id: 1,
    imgSrc: home.OperateEase,
    imgAlt: "OperateEase",
    icon: "🔒",
    title: "Reimagined Hospitality Management - OperateEase",
    category: ["Product Design", "SaaS product", "start-up"],
    link: "/operate",
  },
  {
    id: 2,
    imgSrc: home.Sakhi,
    imgAlt: "Sakhi",
    icon: "🔒",
    title: "Designing a Premium Indian Luxury - The Sakhi",
    category: ["Product Design", "E-commerce", "start-up"],
    link: "/sakhi",
  },
  {
    id: 3,
    imgSrc: home.FoodDistro,
    imgAlt: "Food Distro",
    icon: "",
    title: "Reconnect the Communities - Food Distro",
    category: ["UX/UI Design", "Mobile App", "Social Service"],
    link: "/food-distro",
  },
  {
    id: 4,
    imgSrc: home.TuGo,
    imgAlt: "TuGo",
    icon: "",
    title: "Envision Safety on your Travel - TuGo Travel Insurance",
    category: ["UX/UI Design"],
    link: "/tugo-insurance",
  },
  {
    id: 5,
    imgSrc: home.TeleVU,
    imgAlt: "TeleVU",
    title: "Remote Aids - TeleVU Innovation Incorporation",
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
  return (
    <div>
      <header className="lg:my-24 mx-auto px-5 md:px-0 lg:w-[80vw] w-11/12 mt-20 mb-82 2xl:my-28">
        <div className="p-6 bg-gradient-to-br border-white border-2 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; bg-[#f6f6f6] rounded-2xl">
          <h1 className="md:text-5xl text-2xl py-5">Hi, I&#39;m John Jang.</h1>
          <div className="md:text-2xl text-base mb-3 md:mb-0">
            <h1>
              I&#39;m a Product Designer who help companies to foster strong and
              reliable relationships with their users using{" "}
              <span className="typewriter-text">{currentMethod}</span>
            </h1>
          </div>
          <div>
            <p className="my-5 text-base">
              Currently, I&#39;m open to new Product Design or UX/UI Design
              roles!
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-center md:text-2xl text-xl">Fun Facts</h3>
          <div className="md:grid md:grid-cols-2 items-start py-10 gap-40 space-y-5 md:space-y-0">
            <div className="bg-white rounded-2xl p-3">
              <p>
                I deliver high-quality, user-focused designs for (but not
                limited to) B2B products in food and lodging, E-commerce or
                non-profit platforms.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-3 h-24">
              <p>
                I have development experience in web and mobile applications,
                bringing practically usable product.
              </p>
            </div>
          </div>
        </div>
        <div className="md:hidden flex justify-between">
          <Link
            to="/about"
            className="text-blue-500 hover:underline hover:cursor-pointer flex space-x-2 items-center"
          >
            <button>More about me</button>
            <FaArrowRight />
          </Link>
        </div>
      </header>
      <section className="md:mx-36 mx-12 space-y-10 mt-10">
        <h3 className="text-center md:text-2xl text-base py-1">
          Brief Overview of my Previous Projects
        </h3>
        <div className="bg-black md:p-5 p-1 rounded-2xl">
          <img
            src={home.Contributions}
            alt="Contribution"
            width={1200}
            className="mx-auto"
          />
        </div>
        <div>
          <h3 className="py-5 text-center md:text-2xl text-xl">
            So, how do I design?
          </h3>

          {data.map((item) =>
            item.id === 1 ? (
              <div
                key={item.id}
                className="space-y-3 p-2 rounded-xl border-white border-2 hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:-translate-y-2 transition-transform duration-300 ease-in-out w-full"
              >
                <div className="w-[40vw] mx-auto">
                  <Link to={item.link}>
                    <div className="bg-[#f6f6f6] md:py-3 rounded-xl">
                      <img
                        src={item.imgSrc}
                        alt={item.imgAlt}
                        className="rounded-xl mx-auto"
                      />
                    </div>
                  </Link>
                  <p className="font-bold">
                    {item.icon} {item.title}
                  </p>
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
            ) : null
          )}
        </div>
      </section>
      <section className="md:my-20 my-10 md:mx-36 mx-12 grid grid-cols-1 md:grid-cols-2 md:gap-20 space-y-10 md:space-y-0">
        {data
          .filter((item) => item.id !== 1)
          .map((item) => (
            <div
              key={item.id}
              className="transition-transform duration-300 ease-in-out hover:-translate-y-2 space-y-3 p-2 rounded-xl w-full border-white border-2 hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
            >
              <div className="p-3 rounded-xl bg-[#f6f6f6]">
                <Link to={item.link} state={{ fromId: item.id }}>
                  <img
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    className="rounded-xl mx-auto md:h-[300px]"
                  />
                </Link>
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
          ))}
      </section>
    </div>
  );
}
