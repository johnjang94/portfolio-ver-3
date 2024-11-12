import { useState } from "react";
import WorkHistory from "./work-history.json";

export default function Work() {
  const defaultJob = WorkHistory.find(
    (job) => job.company === "TuGo Travel Insurance"
  );
  const [selectedJobId, setSelectedJobId] = useState(defaultJob.id);

  const handleClick = (job) => {
    setSelectedJobId(job.id);
  };

  const getTextSize = (job) => {
    if (job.id === 3) {
      return "md:text-lg text-sm";
    } else {
      return "md:text-xl";
    }
  };

  const renderJobButtons = () => {
    return WorkHistory.map((job) => (
      <div key={job.id}>
        <button
          className={`${getTextSize(job)} ${
            selectedJobId === job.id ? "underline pb-2" : ""
          }`}
          onClick={() => handleClick(job)}
        >
          {job.company}
        </button>
      </div>
    ));
  };

  const renderSelectedJobInfo = () => {
    const selectedJob = WorkHistory.find((job) => job.id === selectedJobId);
    if (!selectedJob) return null;

    return (
      <div>
        <h2 className="font-bold my-5 text-xl md:text-2xl">
          {selectedJob.position} @ {selectedJob.company}
        </h2>
        <p>Mission Objective: {selectedJob.missionObjective}</p>
        <ul className="space-y-3 mt-3">
          {selectedJob.responsibilities.map((responsibility, index) => (
            <li key={index}>- {responsibility}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="md:-mx-20">
      <header className="md:flex justify-between items-center">
        <h1 className="md:text-4xl text-2xl text-center md:text-start mb-3">
          PLACES I WORKED AT
        </h1>
        <div className="bg-slate-400 md:w-3/6 w-full h-1"></div>
      </header>
      <section className="flex flex-col md:flex-row">
        <div className="border-r border-gray-500 md:w-5/12 space-y-8 my-6 md:block hidden">
          {renderJobButtons()}
        </div>
        <div className="md:hidden flex flex-col space-y-3 mx-auto border-b-2 border-gray-300">
          {renderJobButtons()}
        </div>
        <div className="md:w-5/6 pl-4">{renderSelectedJobInfo()}</div>
      </section>
    </div>
  );
}
