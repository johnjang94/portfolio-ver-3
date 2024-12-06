import { useEffect, useState } from "react";
import OtherMenu from "../../components/footer2";
import { foodDistro } from "../../utils/food-distro";
import ContentNav from "../../components/contentNav";
import Overview from "./food-distro/overview";
import ProblemStatement from "./food-distro/problem-statement";
import UserPersona from "./food-distro/user-persona";
import UserStory from "./food-distro/user-story";
import Opportunity from "./food-distro/opportunity";
import CompetitiveAnalysis from "./food-distro/competitive-analysis";
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
      <section className="my-10 mx-auto">
        <div className="bg-gradient-to-b from-slate-500 to-transparent mx-10 p-5 rounded-xl text-white">
          <div className="my-10">
            <h1 className="text-center md:text-7xl text-lg my-5">
              Food Distro
            </h1>
            <p className="md:w-4/6 mx-auto">
              We connected the locals to donate some food to each other to
              reduce the environmental pollution and increase social awareness
              on genuine support.
            </p>
            <div className="flex items-center space-x-5 my-10 md:w-4/6 mx-auto">
              <p>My role</p>
              <p className="font-bold">Associate UX/UI Designer</p>
            </div>
            <div className="space-y-10">
              <div className="flex gap-10 md:mx-56">
                <p>Team</p>
                <ul>
                  <li>5 UX Designers</li>
                  <li>5 UX Researchers</li>
                  <li>3 Product Strategist</li>
                  <li>2 Project Management</li>
                </ul>
              </div>
              <div className="flex gap-3 md:mx-56">
                <p>Timeline</p>
                <p>12 weeks</p>
              </div>
            </div>
          </div>
          <div className="md:mx-44 space-y-5">
            <img
              src={foodDistro.Demo}
              alt="Demo showcase"
              className="rounded-xl mx-auto w-64"
            />
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
          <div>
            <CompetitiveAnalysis />
          </div>
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
