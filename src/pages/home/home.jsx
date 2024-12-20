import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { home } from "../../utils/home";

const methods = ["Product Designer.", "UX Designer.", "Web Designer."];

const data = [
  {
    id: 1,
    imgSrc: home.OperateEase,
    imgAlt: "OperateEase",
    icon: "🔒",
    title: "Coming soon: Inventory optimization for improved management",
    subtitle:
      "Increasing real-time change detection for inventory management (room status + catering)",
    category: ["Product Design", "SaaS product", "start-up"],
    link: "/operate",
  },
  {
    id: 2,
    imgSrc: home.Sakhi,
    imgAlt: "Sakhi",
    icon: "🔒",
    title: "User-Centric E-commerce Design",
    subtitle:
      "Designed product contents for a premium Indian brand, The Sakhi, to raise CTR",
    category: ["Product Design", "E-commerce", "start-up"],
    link: "/sakhi",
  },
  {
    id: 3,
    imgSrc: home.FoodDistro,
    imgAlt: "Food Distro",
    icon: "",
    title: "Search optimization for enhanced engagement",
    subtitle:
      "Low effort solution to improve search and reach out to each other",
    category: ["UX/UI Design", "Non-Profit"],
    link: "/food-distro",
  },
  {
    id: 4,
    imgSrc: home.TuGo,
    imgAlt: "TuGo",
    icon: "",
    title: "Revamping insurance UI to increase retention rate",
    subtitle: "Simplify navigation process to raise usability and aesthetics",
    category: ["UX/UI Design", "Web Redesign"],
    link: "/tugo-insurance",
  },
  {
    id: 5,
    imgSrc: home.TeleVU,
    imgAlt: "TeleVU",
    title: "Quality improvement for video-calls",
    subtitle: "Next level controls for remote clinic sessions",
    category: ["UX/UI Design", "Web Redesign"],
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
        <div className="p-10 bg-gradient-to-br border-white border-2 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; bg-[#f6f6f6] rounded-2xl">
          <h1 className="md:text-5xl text-2xl py-5">Hi, I&#39;m John Jang.</h1>
          <div className="md:text-xl text-base mb-3 md:mb-0">
            <h1>I&#39;m a {currentMethod}</h1>
            <p>
              A designer with technical expertise, ensuring designs are not only
              user-friendly but also feasible for implementation.
            </p>
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
            <div className="bg-white rounded-2xl p-3 h-full">
              <p>
                If B2B design challenges were a sport, I would probably have a
                few trophies by now.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-3 h-full">
              <p>
                In cross-functional teams, I am like the curious detective —-
                always asking questions, uncovering hidden insights, and making
                the process way more fun.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-3 h-full">
              <p>
                I live for that moment when users say my designs are
                &#39;better&#39; —- it&#39;s like I&#39;ve cracked the design
                code... one step at a time!
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
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
