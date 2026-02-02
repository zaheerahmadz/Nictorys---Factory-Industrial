// ProgressBarList.jsx
import React, { useEffect, useState } from "react";

const ProgressBar = ({ label, percentage }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(percentage);
  }, [percentage]);

  return (
    <div className="mb-6 w-full">
      <div className="flex justify-between mb-1">
        <span className="font-semibold">{label}</span>
        <span className="font-semibold">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-300 rounded h-2">
        <div
          className="bg-orange-600 h-2 rounded transition-[width] duration-1000 ease-in-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

const ProgressBarList = () => {
  const bars = [
    { label: "PRODUCTION", percentage: 85 },
    { label: "INDUSTRIAL", percentage: 95 },
    { label: "CONSTRUCTION", percentage: 92 },
    { label: "SATISFACTION", percentage: 95 },
  ];

  return (
    <div className="w-full sm:w-[80vw] md:w-[60vw] lg:w-[40vw]">
      {bars.map((bar) => (
        <ProgressBar
          key={bar.label}
          label={bar.label}
          percentage={bar.percentage}
        />
      ))}
    </div>
  );
};

export default ProgressBarList;
