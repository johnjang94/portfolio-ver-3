import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const initialSections = [
  { id: 1, label: "Summary" },
  { id: 2, label: "Problem Statement" },
  { id: 3, label: "Solutions" },
];

export default function ContentNav({ currentSection, pathname }) {
  const updateSections = (sections, pathname) => {
    let updatedSections;

    if (pathname === "/televu") {
      updatedSections = [
        { id: 1, label: "Background" },
        { id: 2, label: "Overview" },
        { id: 3, label: "Retrospect" },
      ];
    } else if (pathname === "/food-distro") {
      updatedSections = [
        { id: 1, label: "Summary" },
        { id: 2, label: "Opportunity" },
        { id: 3, label: "Impact" },
      ];
    } else if (pathname === "/tugo-insurance") {
      updatedSections = [
        { id: 1, label: "Summary" },
        { id: 2, label: "Opportunity" },
        { id: 3, label: "Solutions" },
      ];
    } else if (pathname === "/sakhi") {
      updatedSections = [
        { id: 1, label: "Summary" },
        { id: 2, label: "Insights" },
        { id: 3, label: "Testing Outcome" },
      ];
    } else if (pathname === "/operate") {
      updatedSections = [
        { id: 1, label: "Summary" },
        { id: 2, label: "Background" },
        { id: 3, label: "Impact" },
      ];
    } else {
      updatedSections = sections;
    }

    return updatedSections;
  };

  const sections = updateSections(initialSections, pathname);
  const [selectedSection, setSelectedSection] = useState(currentSection);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setSelectedSection(id);
    }
  };

  useEffect(() => {
    const handleWindowScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      let newSelectedSection = selectedSection;

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.offsetHeight;

          if (
            scrollY >= sectionTop &&
            scrollY < sectionTop + sectionHeight &&
            selectedSection !== section.id
          ) {
            newSelectedSection = section.id;
          }

          if (
            scrollY + windowHeight < sectionTop &&
            selectedSection === section.id
          ) {
            newSelectedSection = section.id - 1 >= 1 ? section.id - 1 : 1;
          }
        }
      });

      if (newSelectedSection !== selectedSection) {
        setSelectedSection(newSelectedSection);
      }
    };

    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, [sections, selectedSection]);

  useEffect(() => {
    setSelectedSection(currentSection);
  }, [currentSection]);

  return (
    <div className="sticky top-10 z-10">
      <div className="mx-10 mt-28 space-y-5 p-2 border-l-4 border-l-zinc-200 hidden md:block">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`rounded-xl p-2 ${
              selectedSection === section.id ? "bg-gray-300" : ""
            }`}
          >
            <button onClick={() => handleScroll(section.id.toString())}>
              {section.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

ContentNav.propTypes = {
  currentSection: PropTypes.number.isRequired,
  pathname: PropTypes.string.isRequired,
};
