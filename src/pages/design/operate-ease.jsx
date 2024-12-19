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
// import StyleGuide from "./operate/style-guide";
import OtherMenu from "../../components/footer2";
import InitialSketch from "./operate/initial-sketch";
import TheStory from "./operate/the-story";
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
                Increasing real-time change detection for inventory management
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
              <p>August 2024 ~ Present (20 Weeks)</p>
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
        <section className="md:w-4/6 mx-10 my-5 md:my-28 ">
          <div className="space-y-5">
            <div id={1}>
              <Overview />
            </div>
            <div>
              <Solutions />
            </div>
          </div>
          {isPasswordCorrect && (
            <div className="my-5 md:my-28 space-y-20">
              <div id={2}>
                <TheStory />
              </div>
              <div>
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
              {/* <div>
                <StyleGuide />
              </div> */}
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

{
  /* <div className="bg-gradient-to-b from-slate-500 to-transparent mx-10 p-5 rounded-xl">
<div className="text-white my-10">
  <h1 className="text-center md:text-7xl text-lg my-5">
    OPERATE-EASE
  </h1>
  <div className="md:mx-44 space-y-5">
    <p className="px-8">
      This is a project that is currently in-progress. We are bringing
      an innovation in the management of hotel rooms and hotel
      restaurant services. The attempt to improve the internal
      communication and to offer a better solution on how to
      accommodate the guests is currently in-progress. I helped out in
      visualizing inventory management process.
    </p>
  </div>
</div>
<img
  src={OperateEase.Demo}
  alt="Demo showcase"
  width={800}
  className="rounded-3xl mx-auto my-5"
/>
</div>
<div className="md:mx-12">
<div className="flex items-center space-x-5 my-10 md:mx-52 mx-8">
  <p>My role</p>
  <p className="font-bold">Associate Product Designer</p>
</div>
<div className="space-y-10">
  <div className="flex gap-10 md:mx-52 mx-8">
    <p>Team</p>
    <ul>
      <li>6 UX Designers</li>
      <li>6 UX Researchers</li>
      <li>6 Product Strategists</li>
      <li>3 Project Management Associates</li>
    </ul>
  </div>
</div>
</div> */
}
