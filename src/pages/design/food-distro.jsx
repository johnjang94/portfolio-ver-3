import { useEffect, useState } from "react";

import { foodDistro } from "../../utils/food-distro";

import Overview from "./food-distro/overview";
import Solutions from "./food-distro/solutions";

import ProblemStatement from "./food-distro/problem-statement";
import UserPersona from "./food-distro/user-persona";
import UserStory from "./food-distro/user-story";
import Opportunity from "./food-distro/opportunity";
import Sketching from "./food-distro/sketching";
import Impact from "./food-distro/impact";

import Retrospective from "./food-distro/retrospective";
import NextSteps from "./food-distro/next-steps";

import ContentNav from "../../components/contentNav";
import ChatButton from "../chatbot/chat-button";
import ChatBot from "../chatbot/chatbot-ai";
import OtherMenu from "../../components/footer2";

function ChatWidget() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [hasClosedChat, setHasClosedChat] = useState(
    localStorage.getItem("chatClosed") === "true"
  );

  useEffect(() => {
    if (!hasClosedChat && !isChatOpen) {
      const timer = setTimeout(() => {
        setIsChatOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [hasClosedChat, isChatOpen]);

  const handleChatClose = () => {
    setIsChatOpen(false);
    setHasClosedChat(true);
    localStorage.setItem("chatClosed", "true");
  };

  return (
    <section>
      <ChatButton
        onClick={() => setIsChatOpen(true)}
        status={isChatOpen ? "open" : "closed"}
      />
      {isChatOpen && <ChatBot onClose={handleChatClose} />}
    </section>
  );
}

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

    sectionIds.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div>
      <section className="my-10">
        <div className="bg-gradient-to-b from-slate-500 to-transparent mx-10 rounded-xl text-white flex flex-col items-center justify-center">
          <div className="md:grid md:grid-cols-2 py-20 items-center w-full max-w-6xl">
            <div className="w-full my-20 space-y-5">
              <h1 className="text-3xl text-center text-white">
                Reduce bounce-off rate down to{" "}
                <span className="underline">10%</span>
              </h1>
            </div>
            <div className="space-y-5">
              <img
                src={foodDistro.Demo}
                alt="Demo showcase"
                width={1200}
                className="rounded-xl mx-auto"
              />
            </div>
          </div>
          <div className="space-y-10 md:space-y-0 md:flex md:flex-wrap md:items-start justify-center md:gap-10 my-0 md:my-20 mx-5">
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
              <p>From April 2023 (for 17 Weeks)</p>
            </div>
          </div>
        </div>
      </section>

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
            <Sketching />
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
        <ChatWidget />
      </section>

      <footer>
        <OtherMenu />
      </footer>
    </div>
  );
}
