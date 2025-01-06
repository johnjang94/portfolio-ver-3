import { useEffect, useState } from "react";
import OtherMenu from "../../components/footer2";
import { foodDistro } from "../../utils/food-distro";
import ContentNav from "../../components/contentNav";
import Overview from "./food-distro/overview";
import ProblemStatement from "./food-distro/problem-statement";
import UserPersona from "./food-distro/user-persona";
import UserStory from "./food-distro/user-story";
import Opportunity from "./food-distro/opportunity";
// import CompetitiveAnalysis from "./food-distro/competitive-analysis";
import Sketching from "./food-distro/sketching";
import Solutions from "./food-distro/solutions";
import Retrospective from "./food-distro/retrospective";
import NextSteps from "./food-distro/next-steps";
import StyleGuide from "./food-distro/style-guide";
import MockUpPrototype from "./food-distro/mock-up-prototype";
import Impact from "./food-distro/impact";

export default function Food() {
  const [currentSection, setCurrentSection] = useState(1);

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

  return (
    <div>
      <section className="my-10">
        <div className="bg-gradient-to-b from-slate-500 to-transparent mx-10 rounded-xl text-white flex flex-col items-center justify-center">
          <div className="md:grid md:grid-cols-2 py-20 items-center w-full max-w-6xl">
            <div className="w-full my-20 space-y-5">
              <h1 className="text-4xl text-center text-white">
                Search Optimization for Enhanced Engagement
              </h1>
              <p className="text-white text-center">
                Low effort solution to improve search for food and connect
                locals by <span className="underline font-bold">15%</span>
              </p>
            </div>
            <div className="space-y-5 w-full flex justify-center">
              <img
                src={foodDistro.Demo}
                alt="Demo showcase"
                className="rounded-xl mx-auto w-full"
              />
            </div>
          </div>
          <div className="space-y-10 md:space-y-0 md:flex md:flex-wrap md:items-start justify-center md:gap-10 my-0 md:my-20">
            <div className="flex space-x-5 text-black">
              <p className="font-bold">My Role</p>
              <p>Associate UX Designer</p>
            </div>
            <div className="flex space-x-5 text-black">
              <p className="font-bold">Team</p>
              <ul>
                <li>4 UX Designers</li>
                <li>4 UX Researchers</li>
                <li>4 Product Strategist</li>
                <li>1 Project Management</li>
              </ul>
            </div>
            <div className="flex space-x-5 text-black">
              <p className="font-bold">Tools</p>
              <ul>
                <li>Figma</li>
                <li>Figjam</li>
                <li>Miro</li>
                <li>Slack</li>
              </ul>
            </div>
            <div className="flex space-x-5 text-black">
              <p className="font-bold">Timeline</p>
              <p>April ~ July 2023 (17 Weeks)</p>
            </div>
          </div>
        </div>
      </section>
      {/* Main content */}
      <section className="md:flex md:flex-1 gap-10">
        <div>
          <ContentNav
            currentSection={currentSection}
            isDemoApplicable={false}
            pathname="/food-distro"
          />
        </div>
        <section className="md:w-4/6 mx-10 my-5 md:my-28 space-y-20">
          <div className="space-y-5">
            <div id={1}>
              <Overview />
            </div>
            <div>
              <Solutions />
            </div>
          </div>
          <div>
            <ProblemStatement />
          </div>
          <div>
            <UserPersona />
          </div>
          <div>
            <UserStory />
          </div>
          <div id={2}>
            <Opportunity />
          </div>
          {/* <div>
            <CompetitiveAnalysis />
          </div> */}
          <div>
            <Sketching />
          </div>
          <div>
            <StyleGuide />
          </div>
          <div>
            <MockUpPrototype />
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
        </section>
      </section>
      <footer>
        <OtherMenu />
      </footer>
    </div>
  );
}
