import { useEffect, useState } from "react";
import { OperateEase } from "../../utils/operate";
import ContentNav from "../../components/contentNav";
import Password from "../../components/lock/password";
import OtherMenu from "../../components/footer2";

import Summary from "./operate/summary";
import Issue from "./operate/issue";
import Solutions from "./operate/solutions";
import Impact from "./operate/impact";
import Business from "./operate/business";
import Sketch from "./operate/initial-sketch";
import Developers from "./operate/developers";
import Reflection from "./operate/retrospective";
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

  useEffect(() => {
    if (isPasswordCorrect) {
      window.scrollTo(0, 0);
    }
  }, [isPasswordCorrect]);

  const handleCorrectPassword = () => {
    setIsPasswordCorrect(true);
  };

  const PublicContent = () => (
    <div className="space-y-10">
      <div id={1}>
        <Summary isNdaLocked={true} />
      </div>
      <div>
        <Issue isNdaLocked={true} />
      </div>
      <div id={2}>
        <Solutions isNdaLocked={true} />
      </div>
      <div>
        <Impact />
      </div>
      <div id={3}>
        <Developers />
      </div>
    </div>
  );

  const PrivateContent = () => (
    <div className="space-y-10">
      <div id={1}>
        <Business />
      </div>
      <div>
        <Summary isNdaLocked={false} />
      </div>
      <div>
        <Issue isNdaLocked={false} />
      </div>
      <div>
        <Sketch />
      </div>
      <div>
        <MidFi />
      </div>
      <div id={2}>
        <Solutions isNdaLocked={false} />
      </div>
      <div>
        <Impact />
      </div>
      <div id={3}>
        <Developers />
      </div>
      <div>
        <Reflection />
      </div>
    </div>
  );

  return (
    <div>
      <section className="my-10 mx-auto">
        <div className="bg-gradient-to-b from-slate-500 to-transparent mx-10 rounded-xl text-white flex flex-col items-center justify-center">
          <div className="md:grid md:grid-cols-2 py-10 items-center mx-10 gap-10">
            <div className="w-full my-5 space-y-5">
              <h1 className="md:text-4xl text-xl font-bold md:font-normal text-center text-green-400 p-2 rounded-2xl bg-white">
                20% Efficiency Boost
              </h1>
              <h1 className="md:text-4xl text-xl font-bold md:font-normal text-center text-white">
                with a new B2B SaaS Inventory Management Platform
              </h1>
            </div>
            <div className="space-y-5 w-full flex justify-center">
              <img
                src={OperateEase.Demo}
                alt="Demo showcase"
                className="rounded-xl mx-auto w-[2000px]"
              />
            </div>
          </div>
          <div className="space-y-10 md:space-y-0 md:flex md:flex-wrap md:items-start justify-center md:gap-10 my-0 mx-5 md:mx-0">
            <div className="flex space-x-5 text-black">
              <p className="font-bold">My Role</p>
              <p>Associate Product Designer</p>
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
              <p>October 2024 ~ Present</p>
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
        <section className="md:w-4/6 mx-10 my-5 md:my-10">
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
