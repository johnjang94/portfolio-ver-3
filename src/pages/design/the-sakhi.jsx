import { useEffect, useState } from "react";

import ContentNav from "../../components/contentNav";
import Password from "../../components/lock/password";
import OtherMenu from "../../components/footer2";

import { sakhi } from "../../utils/sakhi";

import Summary from "./sakhi/summary";
import Solutions from "./sakhi/solution";
import CompetitiveAnalysis from "./sakhi/competitive-analysis";
import Opportunity from "./sakhi/opportunity";
import InitialSketch from "./sakhi/sketching";
import ABTesting from "./sakhi/ab-testing";
import Impact from "./sakhi/impact";
import Retrospective from "./sakhi/retrospective";
import NextSteps from "./sakhi/next-steps";

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

  const PublicContent = () => (
    <div className="space-y-20">
      <div id={1}>
        <Summary />
      </div>
      <div>
        <Solutions />
      </div>
      <div id={2}>
        <CompetitiveAnalysis />
      </div>
      <div id={3}>
        <Impact />
      </div>
    </div>
  );

  const PrivateContent = () => (
    <div className="space-y-20">
      <div id={1}>
        <Summary />
      </div>
      <div>
        <Solutions />
      </div>
      <div id={2}>
        <CompetitiveAnalysis />
      </div>
      <div>
        <Opportunity />
      </div>
      <div>
        <InitialSketch />
      </div>
      <div>
        <ABTesting />
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
  );

  return (
    <div>
      <section>
        <div className="bg-gradient-to-b from-slate-500 to-transparent my-10 rounded-xl mx-10 md:gap-3">
          <div className="md:grid md:grid-cols-2 md:py-20 py-5 items-center">
            <div className="w-full md:my-20 my-10 space-y-5 text-center md:m-5">
              <h1 className="md:text-4xl text-xl text-white">
                Simplifying Complexity
              </h1>
              <h1 className="md:text-4xl text-xl text-white rounded-2xl">
                Data-Driven Menu Overhaul to Enhance User Engagement and
              </h1>
              <h1 className="md:text-4xl text-xl text-white rounded-2xl">
                Target a{" "}
                <span className="underline p-3 bg-white text-green-500 rounded-2xl">
                  20%
                </span>{" "}
                Conversion Lift
              </h1>
            </div>
            <div className="space-y-5">
              <img
                src={sakhi.Demo}
                alt="Demo showcase"
                className="rounded-xl mx-auto w-full"
              />
            </div>
          </div>
          <div className="space-y-10 md:space-y-0 md:flex md:items-start justify-center md:gap-2 my-0 md:my-20">
            <div className="flex md:space-x-10 gap-5 md:gap-0 md:mx-8 mx-5 text-black">
              <p className="font-bold">My Role</p>
              <p>Product Designer</p>
            </div>
            <div className="flex space-x-10 mx-5 text-black">
              <p className="font-bold">Team</p>
              <ul>
                <li>2 UX Designers</li>
                <li>2 UX Researchers</li>
                <li>1 Product Strategist</li>
                <li>1 Project Management</li>
              </ul>
            </div>
            <div className="flex space-x-10 mx-5 text-black">
              <p className="font-bold">Tools</p>
              <ul>
                <li>Figma</li>
                <li>Figjam</li>
                <li>Miro</li>
                <li>Google Spreadsheet</li>
                <li>Slack</li>
              </ul>
            </div>
            <div className="flex space-x-10 mx-5 text-black">
              <p className="font-bold">Timeline</p>
              <p>From June 2024 (for 21 Weeks)</p>
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
          {isPasswordCorrect ? (
            <PrivateContent isPasswordCorrect={isPasswordCorrect} />
          ) : (
            <PublicContent isPasswordCorrect={isPasswordCorrect} />
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
