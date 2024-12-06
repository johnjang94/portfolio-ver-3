import { useEffect, useState } from "react";
import ContentNav from "../../components/contentNav";
import Summary from "./sakhi/summary";
import Password from "../../components/lock/password";
import CompetitiveAnalysis from "./sakhi/competitive-analysis";
import Insights from "./sakhi/insights";
import UserPersona from "./sakhi/user-persona";
import Opportunity from "./sakhi/opportunity";
import Solutions from "./sakhi/solution";
import Impact from "./sakhi/impact";
import { sakhi } from "../../utils/sakhi";
import Retrospective from "./sakhi/retrospective";
import NextSteps from "./sakhi/next-steps";
import OtherMenu from "../../components/footer2";
import InitialSketch from "./sakhi/sketching";

export default function SAKHI() {
  const [currentSection, setCurrentSection] = useState(1);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const sectionIds = [{ id: 1 }, { id: 2 }, { id: 3 }];

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }, options);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const handleCorrectPassword = () => {
    setIsPasswordCorrect(true);
  };

  return (
    <div>
      <section>
        <div className="bg-gradient-to-b from-slate-500 to-transparent my-10 rounded-xl mx-10 md:gap-3">
          <div className="text-center space-y-2 md:text-3xl text-xl text-white py-10">
            <h1>
              Reaching CTR of{" "}
              <span className=" bg-[#c6ff80] text-black p-2 rounded-2xl">
                3.5%
              </span>{" "}
            </h1>
          </div>
          <div className="md:flex md:items-start md:px-3">
            <div className="text-white md:w-3/6">
              <h1 className="text-center md:text-5xl text-lg my-5">
                THE SAKHI
              </h1>
              <div className="space-y-5">
                <p className="px-5">
                  We reintroduce unique and traditional Indian products for
                  extraordinary life events such as wedding, festival, etc. in a
                  friendly way
                </p>
              </div>
              <div className="mx-5 my-10 text-black">
                <p>My role</p>
                <p className="font-bold">Associate Product Designer</p>
              </div>
              <div className="space-y-10">
                <div className="flex gap-10 mx-5 text-black">
                  <p>Team</p>
                  <ul>
                    <li>2 UX Designers</li>
                    <li>2 UX Researchers</li>
                    <li>1 Product Strategist</li>
                    <li>1 Project Management</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-5">
              <img
                src={sakhi.Demo}
                alt="Demo showcase"
                width={750}
                className="rounded-3xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="md:flex md:flex-1">
        <div className={isPasswordCorrect ? "" : "md:w-[15vw]"}>
          {isPasswordCorrect ? (
            <ContentNav
              currentSection={currentSection}
              isDemoApplicable={false}
              pathname="/sakhi"
            />
          ) : (
            <div className="hidden md:block"></div>
          )}
        </div>
        <section className="md:w-4/6 mx-10 my-5 md:my-28">
          <div className="space-y-5">
            <div id={1}>
              <Summary />
            </div>
            <div>
              <Solutions />
            </div>
          </div>
          {isPasswordCorrect && (
            <div className="my-5 md:my-28 space-y-20">
              <div>
                <UserPersona />
              </div>
              <div id={2}>
                <Insights />
              </div>
              <div>
                <CompetitiveAnalysis />
              </div>
              <div>
                <Opportunity />
              </div>
              <div>
                <InitialSketch />
              </div>
              <div id={3}>
                <Impact />
              </div>
              <div>
                <Retrospective />
              </div>
              <div>
                <NextSteps />
              </div>
            </div>
          )}
        </section>
      </section>
      {!isPasswordCorrect && (
        <section className="w-full">
          <Password onCorrectPassword={handleCorrectPassword} />
        </section>
      )}
      <footer className="my-5">
        <OtherMenu />
      </footer>
    </div>
  );
}
