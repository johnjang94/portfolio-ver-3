import { useEffect, useState } from "react";
import { tugoInsurance } from "../../utils/tugo-insurance";
import ContentNav from "../../components/contentNav";
import Overview from "./tugo-insurance/overview";
import DataMetrics from "./tugo-insurance/data-metrics";
import Solutions from "./tugo-insurance/solutions";
import Outcome from "./tugo-insurance/outcome";
import Impact from "./tugo-insurance/impact";
import NextSteps from "./tugo-insurance/next-steps";
import Retrospective from "./tugo-insurance/retrospective";
import OtherMenu from "../../components/footer2";

export default function TuGo() {
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
        <div className="bg-gradient-to-b from-slate-500 to-transparent mx-10 rounded-xl text-white flex flex-col items-center justify-center">
          <div className="md:grid md:grid-cols-2 py-20 items-center w-full max-w-6xl">
            <div className="w-full my-20 space-y-5">
              <h1 className="md:text-3xl text-xl text-center text-white">
                Revamping insurance onboarding to increase retention rate
              </h1>
              <p className="text-white text-center md:text-3xl underline py-10">
                5% Boosted Conversion Rate
              </p>
            </div>
            <div className="space-y-5 w-full flex justify-center">
              <img
                src={tugoInsurance.Demo}
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
              <p className="font-bold">Tools</p>
              <ul>
                <li>Figma</li>
                <li>Figjam</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="md:flex md:flex-1 gap-10">
        <div>
          <ContentNav
            currentSection={currentSection}
            isDemoApplicable={false}
            pathname="/tugo-insurance"
          />
        </div>
        <section className="md:w-4/6 mx-10 my-5 md:my-28 space-y-20">
          <div id={1}>
            <Overview />
          </div>
          <div>
            <DataMetrics />
          </div>
          <div id={2}>
            <Solutions />
          </div>
          <div>
            <Outcome />
          </div>
          <div>
            <Impact />
          </div>
          <div>
            <NextSteps />
          </div>
          <div>
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
