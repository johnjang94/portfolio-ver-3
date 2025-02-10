import { useEffect, useState } from "react";

import ContentNav from "../../components/contentNav";
import OtherMenu from "../../components/footer2";

import { sakhi } from "../../utils/sakhi";

import Summary from "./sakhi/summary";
import Issue from "./sakhi/issue";
import Solutions from "./sakhi/solution";
import Impact from "./sakhi/impact";
import Retrospective from "./sakhi/retrospective";
import NextSteps from "./sakhi/next-steps";

export default function SAKHI() {
  const [currentSection, setCurrentSection] = useState("1");

  useEffect(() => {
    window.scrollTo(0, 0);

    const sectionIds = ["1", "2"];

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

  const PublicContent = () => (
    <div className="space-y-20">
      <div id="1">
        <Summary />
      </div>
      <div>
        <Issue />
      </div>
      <div id="2">
        <Solutions />
      </div>
      <div>
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
              <h1 className="md:text-4xl text-xl text-white underline">
                Simplifying Complexity
              </h1>
              <h1 className="md:text-4xl text-xl text-white rounded-2xl">
                Menu Overhaul Targeting
              </h1>
              <h1 className="md:text-4xl text-xl text-white rounded-2xl">
                a{" "}
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
        <div>
          <ContentNav
            currentSection={currentSection}
            isDemoApplicable={false}
            pathname="/sakhi"
          />
        </div>
        <section className="md:w-4/6 mx-10 my-5 md:my-28">
          <PublicContent />
        </section>
      </section>
      <footer className="my-5">
        <OtherMenu />
      </footer>
    </div>
  );
}
