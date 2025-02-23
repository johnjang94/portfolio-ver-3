import { useEffect, useState } from "react";
import { OperateEase } from "../../utils/operate";
import ContentNav from "../../components/contentNav";
import Password from "../../components/lock/password";
import OtherMenu from "../../components/footer2";

import Issue from "./operate/issue";
import Solutions from "./operate/solutions";
import Impact from "./operate/impact";
import Business from "./operate/business";
import Sketch from "./operate/initial-sketch";
import Developers from "./operate/developers";
import Reflection from "./operate/retrospective";
import MidFi from "./operate/mid-fi";
import ChatButton from "../chatbot/chat-button";
import ChatBot from "../chatbot/chatbot-ai";

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

export default function OPERATE() {
  const [currentSection, setCurrentSection] = useState(1);
  const [isNdaLocked, setIsNdaLocked] = useState(true);

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

  useEffect(() => {
    if (!isNdaLocked) {
      window.scrollTo(0, 0);
    }
  }, [isNdaLocked]);

  const handleCorrectPassword = () => {
    setIsNdaLocked(false);
  };

  const PublicContent = () => (
    <div className="space-y-10">
      <div id={1}>
        <Issue />
      </div>
      <div>
        <Business isNdaLocked={true} />
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
        <Issue />
      </div>
      <div>
        <Business isNdaLocked={false} />
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
        </div>
      </section>

      <section className="flex justify-center">
        <div className="max-w-[1000px] w-full">
          {!isNdaLocked ? (
            <div className="md:flex">
              <div className="md:w-[15vw]">
                <ContentNav
                  currentSection={currentSection}
                  isDemoApplicable={false}
                  pathname="/operate"
                />
              </div>
              <div className="w-full">
                <PrivateContent />
              </div>
            </div>
          ) : (
            <>
              <div className="w-full">
                <PublicContent />
              </div>
              <div className="w-full">
                <Password onCorrectPassword={handleCorrectPassword} />
              </div>
            </>
          )}
        </div>
      </section>

      <ChatWidget />

      <footer className="my-5">
        <OtherMenu />
      </footer>
    </div>
  );
}
