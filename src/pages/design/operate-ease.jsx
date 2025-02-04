import Head from "next/head";
import { useEffect, useState } from "react";
import { OperateEase } from "../../utils/operate";
import ContentNav from "../../components/contentNav";
import Password from "../../components/lock/password";
import Overview from "./operate/overview";
import MarketAnalysis from "./operate/market-analysis";
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
    <div className="space-y-10">
      <div id={1}>
        <Overview />
      </div>
      <div>
        <Solutions isPasswordCorrect={false} />
      </div>
      <div>
        <Impact isPasswordCorrect={false} />
      </div>
      <div>
        <Collaboration />
      </div>
    </div>
  );

  const PrivateContent = () => (
    <div className="space-y-10">
      <div id={1}>
        <Overview />
      </div>
      <div>
        <Solutions isPasswordCorrect={true} />
      </div>
      <div id={2}>
        <MarketAnalysis />
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
        <Impact isPasswordCorrect={true} />
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
      <Head>
        <title>Operate-Ease</title>
        <meta
          name="description"
          content="B2B SaaS hotelier project that I improved 40% of the task efficiency, and reduced manual errors by 20%"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className="my-10 mx-auto">
        <div className="bg-gradient-to-b from-slate-500 to-transparent mx-10 rounded-xl text-white flex flex-col items-center justify-center">
          <div className="md:grid md:grid-cols-2 md:py-20 py-10 items-center w-full max-w-6xl">
            <div className="w-full md:my-20 my-5 space-y-5">
              <h1 className="md:text-4xl text-xl font-bold md:font-normal text-center text-white">
                Optimizing Inventory Management System
              </h1>
              <div className="hidden md:block">
                <div className="grid grid-cols-2 gap-5">
                  <div className="text-center space-y-3">
                    <p className="text-white text-2xl">
                      to target stock-out reduction by{" "}
                    </p>
                  </div>
                  <div className="text-center space-y-3">
                    <p className="text-white text-2xl">
                      to improve the turnover rate by{" "}
                    </p>
                  </div>
                  <div>
                    <p className="underline bg-white rounded-2xl p-3 text-green-400 w-fit mx-auto">
                      20%
                    </p>
                  </div>
                  <div>
                    <p className="underline bg-white rounded-2xl p-3 text-green-400 w-fit mx-auto">
                      15%
                    </p>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="md:hidden block">
                <div className="md:grid md:grid-cols-2 md:gap-5 space-y-5">
                  <div className="text-center space-y-3">
                    <p className="text-white">
                      to reduce accidental catering orders by{" "}
                    </p>
                    <p className="underline bg-white rounded-2xl p-1 text-green-400 w-fit mx-auto">
                      40%
                    </p>
                  </div>
                  <div className="text-center space-y-3">
                    <p className="text-white">
                      to recover the financial loss from late check-outs by{" "}
                    </p>
                    <p className="underline bg-white rounded-2xl p-1 text-green-400 w-fit mx-auto">
                      15%
                    </p>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
            <div className="space-y-5 w-full flex justify-center">
              <img
                src={OperateEase.Demo}
                alt="Demo showcase"
                className="rounded-xl mx-auto w-full"
              />
            </div>
          </div>
          <div className="space-y-10 md:space-y-0 md:flex md:flex-wrap md:items-start justify-center md:gap-10 my-0 md:my-20 mx-5 md:mx-0">
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
