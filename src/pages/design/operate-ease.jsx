import { useEffect, useState } from "react";
import { OperateEase } from "../../utils/operate";
import ContentNav from "../../components/contentNav";
import OtherMenu from "../../components/footer2";

import Issue from "./operate/issue";
import Solutions from "./operate/solutions";
import Impact from "./operate/impact";
import Business from "./operate/business";
import Developers from "./operate/developers";
import Reflection from "./operate/retrospective";
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
      <div>
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
        <div className="bg-gradient-to-b from-slate-500 to-transparent my-10 rounded-xl mx-10 md:gap-3">
          <div className="md:grid md:grid-cols-2 md:py-20 py-5 items-center">
            <div className="w-full md:my-20 my-10 space-y-5 text-center md:m-5">
              <h1 className="md:text-4xl text-xl text-white underline">
                20% efficiency boost
              </h1>
              <h1 className="md:text-2xl text-xl text-white rounded-2xl">
                with a new B2B SaaS Inventory Management Platform
              </h1>
            </div>
            <div className="space-y-5">
              <img
                src={OperateEase.Demo}
                alt="Demo showcase"
                className="rounded-xl mx-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-start">
        <div
          className={`hidden md:block md:w-[200px] md:sticky md:top-[120px] h-screen transition-opacity duration-500
          }`}
        >
          <ContentNav
            currentSection={currentSection}
            isDemoApplicable={false}
            pathname="/operate"
          />
        </div>

        <div className="w-full flex">
          <div className="max-w-[1000px] w-full">
            <div className="w-full">
              <PublicContent />
            </div>
          </div>
        </div>
      </div>

      <ChatWidget />

      <footer className="my-5">
        <OtherMenu />
      </footer>
    </div>
  );
}
