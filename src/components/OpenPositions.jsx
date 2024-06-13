import { useState } from "react";
import jobDescriptions from "./jobDescriptions.json"; // Adjust the path as necessary

const OpenPositions = () => {
  const [activeBox, setActiveBox] = useState(null);

  const handleBoxClick = (boxName) => {
    setActiveBox(activeBox === boxName ? null : boxName);
  };

  const positions = {
    Operations: ["Team Leader", "Operations Manager", "Assistant Manager"],
    Quality: ["Quality Assistant Manager", "Quality Analyst"],
    CSE: ["Customer Support Associate"],
    IT: ["Windows Server Administrator"],
    Training: ["Process Trainer"],
  };

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8 flex flex-wrap justify-between">
        {Object.keys(positions).map((boxName) => (
          <div
            key={boxName}
            className={`mb-4 w-full cursor-pointer rounded-lg px-6 py-4 transition-all duration-300 sm:mb-0 sm:mr-4 sm:w-auto ${
              activeBox === boxName
                ? "bg-sky-200 text-sky-800"
                : "bg-sky-100 text-sky-600 hover:bg-sky-200 hover:text-sky-800"
            }`}
            onClick={() => handleBoxClick(boxName)}
          >
            {boxName}
          </div>
        ))}
      </div>
      {activeBox && (
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h3 className="mb-4 text-2xl font-bold text-sky-800">
            {activeBox} Positions
          </h3>
          <ul className="space-y-6">
            {positions[activeBox].map((position, index) => (
              <li key={index} className="mb-6">
                <div className="rounded-lg bg-sky-50 p-4 shadow-inner">
                  <h4 className="text-xl font-bold text-sky-700">{position}</h4>
                  <p className="mt-2">
                    <strong>Role:</strong> {jobDescriptions[position].Role}
                  </p>
                  <p className="mt-2">
                    <strong>Location:</strong>{" "}
                    {jobDescriptions[position].Location}
                  </p>
                  {jobDescriptions[position].Mode && (
                    <p className="mt-2">
                      <strong>Mode:</strong> {jobDescriptions[position].Mode}
                    </p>
                  )}
                  {jobDescriptions[position].JobProfile && (
                    <p className="mt-2">
                      <strong>Job Profile:</strong>{" "}
                      {jobDescriptions[position].JobProfile}
                    </p>
                  )}
                  {jobDescriptions[position].Criteria && (
                    <div className="mt-2">
                      <p>
                        <strong>Criteria:</strong>
                      </p>
                      <ul className="list-disc pl-6">
                        {jobDescriptions[position].Criteria.map(
                          (criteria, i) => (
                            <li key={i}>{criteria}</li>
                          ),
                        )}
                      </ul>
                    </div>
                  )}
                  {jobDescriptions[position].Responsibilities && (
                    <div className="mt-2">
                      <p>
                        <strong>Responsibilities:</strong>
                      </p>
                      <ul className="list-disc pl-6">
                        {jobDescriptions[position].Responsibilities.map(
                          (responsibility, i) => (
                            <li key={i}>{responsibility}</li>
                          ),
                        )}
                      </ul>
                    </div>
                  )}
                  {jobDescriptions[position].Knowledge && (
                    <div className="mt-2">
                      <p>
                        <strong>Knowledge, Skills, Abilities:</strong>
                      </p>
                      <ul className="list-disc pl-6">
                        {jobDescriptions[position].Knowledge.map(
                          (knowledge, i) => (
                            <li key={i}>{knowledge}</li>
                          ),
                        )}
                      </ul>
                    </div>
                  )}
                  {jobDescriptions[position].Perks && (
                    <div className="mt-2">
                      <p>
                        <strong>Perks and Benefits:</strong>
                      </p>
                      <ul className="list-disc pl-6">
                        {jobDescriptions[position].Perks.map((perk, i) => (
                          <li key={i}>{perk}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {jobDescriptions[position].TechnicalSkills && (
                    <div className="mt-2">
                      <p>
                        <strong>Technical Skills:</strong>
                      </p>
                      <ul className="list-disc pl-6">
                        {jobDescriptions[position].TechnicalSkills.map(
                          (skill, i) => (
                            <li key={i}>{skill}</li>
                          ),
                        )}
                      </ul>
                    </div>
                  )}
                  {jobDescriptions[position].Benefits && (
                    <div className="mt-2">
                      <p>
                        <strong>Benefits:</strong>
                      </p>
                      <ul className="list-disc pl-6">
                        {jobDescriptions[position].Benefits.map(
                          (benefit, i) => (
                            <li key={i}>{benefit}</li>
                          ),
                        )}
                      </ul>
                    </div>
                  )}
                  {jobDescriptions[position].Contact && (
                    <a href="mailto:hr@woodrockgroup.in" target="_blank">
                      <p className="mt-2">
                        <strong>Contact:</strong> hr@woodrockgroup.in
                      </p>
                    </a>
                  )}
                  {/* {jobDescriptions[position].Salary && (
                    <p className="mt-2">
                      <strong>Salary:</strong>{" "}
                      {jobDescriptions[position].Salary}
                    </p>
                  )} */}
                  {jobDescriptions[position].WorkTiming && (
                    <p className="mt-2">
                      <strong>Work Timing:</strong>{" "}
                      {jobDescriptions[position].WorkTiming}
                    </p>
                  )}
                  {jobDescriptions[position].InterviewLocation && (
                    <p className="mt-2">
                      <strong>Interview Location:</strong>{" "}
                      {jobDescriptions[position].InterviewLocation}
                    </p>
                  )}
                  {jobDescriptions[position].InterviewTimings && (
                    <p className="mt-2">
                      <strong>Interview Timings:</strong>{" "}
                      {jobDescriptions[position].InterviewTimings}
                    </p>
                  )}
                  <button className="mt-4 inline-block rounded bg-sky-700 px-4 py-2 font-bold text-white shadow transition duration-200 hover:bg-sky-600">
                    Apply
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OpenPositions;
