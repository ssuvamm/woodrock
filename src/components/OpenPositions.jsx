// import { useState } from "react";

// const OpenPositions = () => {
//   const [activeBox, setActiveBox] = useState(null);

//   const handleBoxClick = (boxName) => {
//     setActiveBox(activeBox === boxName ? null : boxName);
//   };

//   const positions = {
//     Operations: ["Team Leader", "Process Associate", "Quality Analyst"],
//     Quality: ["Quality Assurance Manager", "Quality Auditor"],
//     Leadership: ["Operations Manager", "Project Manager"],
//     CSE: ["Customer Service Executive", "Technical Support Specialist"],
//   };

//   return (
//     <div className="mx-auto max-w-4xl ">
//       <div className="mb-8 flex flex-wrap justify-between">
//         {Object.keys(positions).map((boxName) => (
//           <div
//             key={boxName}
//             className={`mb-4 w-full cursor-pointer rounded-lg px-6 py-4 transition-all duration-300 sm:mb-0 sm:mr-4 sm:w-auto ${
//               activeBox === boxName
//                 ? "bg-sky-200 text-sky-800"
//                 : "bg-sky-100 text-sky-600 hover:bg-sky-200 hover:text-sky-800"
//             }`}
//             onClick={() => handleBoxClick(boxName)}
//           >
//             {boxName}
//           </div>
//         ))}
//       </div>
//       {activeBox && (
//         <div className="rounded-lg bg-sky-100 p-6">
//           <h3 className="mb-4 text-xl font-semibold">{activeBox} Positions</h3>
//           <ul className="list-disc pl-4">
//             {positions[activeBox].map((position, index) => (
//               <li key={index} className="mb-2">
//                 {position}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OpenPositions;
import { useState } from "react";
import jobDescriptions from "./jobDescriptions.json"; // Adjust the path as necessary

const OpenPositions = () => {
  const [activeBox, setActiveBox] = useState(null);

  const handleBoxClick = (boxName) => {
    setActiveBox(activeBox === boxName ? null : boxName);
  };

  const positions = {
    Operations: ["Team Leader"],
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
        <div className="rounded-lg bg-sky-100 p-6">
          <h3 className="mb-4 text-xl font-semibold">{activeBox} Positions</h3>
          <ul className="list-disc pl-4">
            {positions[activeBox].map((position, index) => (
              <li key={index} className="mb-2">
                <h4 className="font-bold">{position}</h4>
                <p>
                  <strong>Role:</strong> {jobDescriptions[position].Role}
                </p>
                <p>
                  <strong>Location:</strong>{" "}
                  {jobDescriptions[position].Location}
                </p>
                {jobDescriptions[position].Mode && (
                  <p>
                    <strong>Mode:</strong> {jobDescriptions[position].Mode}
                  </p>
                )}
                {jobDescriptions[position].JobProfile && (
                  <p>
                    <strong>Job Profile:</strong>{" "}
                    {jobDescriptions[position].JobProfile}
                  </p>
                )}
                {jobDescriptions[position].Criteria && (
                  <div>
                    <p>
                      <strong>Criteria:</strong>
                    </p>
                    <ul className="list-disc pl-4">
                      {jobDescriptions[position].Criteria.map((criteria, i) => (
                        <li key={i}>{criteria}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {jobDescriptions[position].Responsibilities && (
                  <div>
                    <p>
                      <strong>Responsibilities:</strong>
                    </p>
                    <ul className="list-disc pl-4">
                      {jobDescriptions[position].Responsibilities.map(
                        (responsibility, i) => (
                          <li key={i}>{responsibility}</li>
                        ),
                      )}
                    </ul>
                  </div>
                )}
                {jobDescriptions[position].Knowledge && (
                  <div>
                    <p>
                      <strong>Knowledge, Skills, Abilities:</strong>
                    </p>
                    <ul className="list-disc pl-4">
                      {jobDescriptions[position].Knowledge.map(
                        (knowledge, i) => (
                          <li key={i}>{knowledge}</li>
                        ),
                      )}
                    </ul>
                  </div>
                )}
                {jobDescriptions[position].Perks && (
                  <div>
                    <p>
                      <strong>Perks and Benefits:</strong>
                    </p>
                    <ul className="list-disc pl-4">
                      {jobDescriptions[position].Perks.map((perk, i) => (
                        <li key={i}>{perk}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {jobDescriptions[position].TechnicalSkills && (
                  <div>
                    <p>
                      <strong>Technical Skills:</strong>
                    </p>
                    <ul className="list-disc pl-4">
                      {jobDescriptions[position].TechnicalSkills.map(
                        (skill, i) => (
                          <li key={i}>{skill}</li>
                        ),
                      )}
                    </ul>
                  </div>
                )}
                {jobDescriptions[position].Benefits && (
                  <div>
                    <p>
                      <strong>Benefits:</strong>
                    </p>
                    <ul className="list-disc pl-4">
                      {jobDescriptions[position].Benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {jobDescriptions[position].Contact && (
                  <p>
                    <strong>Contact:</strong>{" "}
                    {jobDescriptions[position].Contact}
                  </p>
                )}
                {jobDescriptions[position].Salary && (
                  <p>
                    <strong>Salary:</strong> {jobDescriptions[position].Salary}
                  </p>
                )}
                {jobDescriptions[position].WorkTiming && (
                  <p>
                    <strong>Work Timing:</strong>{" "}
                    {jobDescriptions[position].WorkTiming}
                  </p>
                )}
                {jobDescriptions[position].InterviewLocation && (
                  <p>
                    <strong>Interview Location:</strong>{" "}
                    {jobDescriptions[position].InterviewLocation}
                  </p>
                )}
                {jobDescriptions[position].InterviewTimings && (
                  <p>
                    <strong>Interview Timings:</strong>{" "}
                    {jobDescriptions[position].InterviewTimings}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OpenPositions;
