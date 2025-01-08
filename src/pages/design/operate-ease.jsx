import { useEffect, useState } from "react";
import { OperateEase } from "../../utils/operate";
import ContentNav from "../../components/contentNav";
import Password from "../../components/lock/password";
import Overview from "./operate/overview";
import Insight from "./operate/insights";
import ProblemStatement from "./operate/problem-statement";
import UserPersona from "./operate/user-persona";
import UserStory from "./operate/user-story";
import CompetitiveAnalysis from "./operate/competitive-analysis";
import Opportunity from "./operate/opportunities";
import Solutions from "./operate/solutions";
import Collaboration from "./operate/collaboration";
import Impact from "./operate/impact";
import Retrospective from "./operate/retrospective";
import OtherMenu from "../../components/footer2";
import InitialSketch from "./operate/initial-sketch";
import MidFi from "./operate/mid-fi";

export default function OPERATE() {
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
        <Overview />
      </div>
      <div>
        <Solutions />
      </div>
      <div>
        <Impact />
      </div>
    </div>
  );

  const PrivateContent = () => (
    <div className="space-y-20">
      <div id={1}>
        <Overview />
      </div>
      <div>
        <Solutions />
      </div>
      <div id={2}>
        <Insight />
      </div>
      <div>
        <UserPersona />
      </div>
      <div>
        <ProblemStatement />
      </div>
      <div>
        <UserStory />
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
      <div>
        <MidFi />
      </div>
      <div id={3}>
        <Impact />
      </div>
      <div>
        <Retrospective />
      </div>
      <div>
        <Collaboration />
      </div>
    </div>
  );

  return (
    <div>
      <section className="my-10 mx-auto">
        <div className="bg-gradient-to-b from-slate-500 to-transparent mx-10 rounded-xl text-white flex flex-col items-center justify-center">
          <div className="md:grid md:grid-cols-2 py-20 items-center w-full max-w-6xl">
            <div className="w-full my-20 space-y-5">
              <h1 className="text-4xl text-center text-white">
                Inventory Optimization for Improved Management
              </h1>
              <p className="text-white text-center">
                Reducing missed catering orders by{" "}
                <span className="font-bold underline">40%</span>
                <br /> and recovering{" "}
                <span className="font-bold underline">15%</span> in room booking
                losses <br />
                (room occupancy and food/beverage storage)
              </p>
            </div>
            <div className="space-y-5 w-full flex justify-center">
              <img
                src={OperateEase.Demo}
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
                <li>8 UX Designers</li>
                <li>4 UX Researchers</li>
                <li>2 Product Strategist</li>
                <li>2 Web Developers</li>
                <li>3 Project Management</li>
              </ul>
            </div>
            <div className="flex space-x-5 text-black">
              <p className="font-bold">Tools</p>
              <ul>
                <li>Figma</li>
                <li>Figjam</li>
                <li>Miro</li>
                <li>Slack</li>
                <li>JIRA</li>
              </ul>
            </div>
            <div className="flex space-x-5 text-black">
              <p className="font-bold">Timeline</p>
              <p>August 2024 ~ Present</p>
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
              pathname="/operate"
            />
          ) : (
            <div className="hidden md:block"></div>
          )}
        </div>
        <section className="md:w-4/6 mx-10 my-5 md:my-28">
          {isPasswordCorrect ? <PrivateContent /> : <PublicContent />}
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
