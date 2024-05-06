import { useState } from "react";

const OpenPositions = () => {
  const [activeBox, setActiveBox] = useState(null);

  const handleBoxClick = (boxName) => {
    setActiveBox(activeBox === boxName ? null : boxName);
  };

  const positions = {
    Operations: ["Team Leader", "Process Associate", "Quality Analyst"],
    Quality: ["Quality Assurance Manager", "Quality Auditor"],
    Leadership: ["Operations Manager", "Project Manager"],
    CSE: ["Customer Service Executive", "Technical Support Specialist"],
  };

  return (
    <div className="mx-auto max-w-4xl ">
      <div className="mb-8 flex flex-wrap justify-between">
        {Object.keys(positions).map((boxName) => (
          <div
            key={boxName}
            className={`mb-4 w-full cursor-pointer rounded-lg px-6 py-4 transition-all duration-300 sm:mb-0 sm:mr-4 sm:w-auto ${
              activeBox === boxName
                ? "bg-gray-200 text-gray-800"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800"
            }`}
            onClick={() => handleBoxClick(boxName)}
          >
            {boxName}
          </div>
        ))}
      </div>
      {activeBox && (
        <div className="rounded-lg bg-gray-100 p-6">
          <h3 className="mb-4 text-xl font-semibold">{activeBox} Positions</h3>
          <ul className="list-disc pl-4">
            {positions[activeBox].map((position, index) => (
              <li key={index} className="mb-2">
                {position}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OpenPositions;
