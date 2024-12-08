import { useEffect, useState } from "react";
import { televu } from "../../utils/televu";
import ContentNav from "../../components/contentNav";
import Overview from "./televu/overview";
// import AtIssue from "./televu/at-issue";
// import Opportunity from "./televu/opportunities";
// import CompetitiveAnalysis from "./televu/comparative-analysis";
import Solutions from "./televu/solutions";
// import NextSteps from "./televu/next-steps";
import OtherMenu from "../../components/footer2";
import Retrospective from "./televu/retrospective";
// import Sketching from "./televu/sketching";
import TheStory from "./televu/the-story";
// import Impact from "./televu/impact";

export default function TeleVU() {
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
        <div className="bg-gradient-to-b from-slate-500 to-transparent mx-10 p-5 rounded-xl">
          <div className="md:text-center space-y-2 md:text-3xl text-xl text-white py-10">
            <h1>
              Increasing the duration of the call by{" "}
              <span className=" bg-[#c6ff80] text-black p-2 rounded-2xl">
                60%
              </span>{" "}
            </h1>
          </div>
          <img
            src={televu.Demo}
            alt="Demo"
            width={1200}
            className="rounded-xl mx-auto"
          />
        </div>
        <div className="md:mx-12">
          <h1 className="text-center md:text-7xl text-lg my-5">
            TELEVU INNOVATION
          </h1>
          <div className="md:mx-44 space-y-5">
            <p className="px-8">
              We redesigned the internal communication portal to ensure smooth
              video-call between clinicians and patients.
            </p>
          </div>
          <div className="flex items-center space-x-5 my-10 md:mx-52 mx-8">
            <p>My role</p>
            <p className="font-bold">UX/UI Designer</p>
          </div>
          <div className="space-y-10 md:mx-52 mx-8">
            <div className="flex gap-10 text-black">
              <p>Team</p>
              <ul>
                <li>2 UX Designers</li>
                <li>2 UX Researchers</li>
                <li>1 Product Strategist</li>
                <li>1 Project Management</li>
              </ul>
            </div>
            <div className="flex gap-3 text-black">
              <p>Timeline</p>
              <p>8 weeks</p>
            </div>
          </div>
        </div>
      </section>
      <section className="md:flex md:flex-1 gap-10">
        <div>
          <ContentNav
            currentSection={currentSection}
            isDemoApplicable={false}
            pathname="/televu"
          />
        </div>
        <section className="md:w-4/6 mx-8 md:mx-0 my-5 md:my-28 space-y-20">
          <div id={1}>
            <TheStory />
          </div>
          <div className="space-y-5">
            <div id={2}>
              <Overview />
            </div>
            <div>
              <Solutions />
            </div>
          </div>
          {/* <div>
            <AtIssue />
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

          <div id={3}>
            <Impact />
          </div>
          <div>
            <NextSteps />
          </div> */}
          <div id={3}>
            <Retrospective />
          </div>
        </section>
      </section>
      <footer>
        <OtherMenu />
      </footer>
    </div>
  );
}
