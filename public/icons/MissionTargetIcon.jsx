import React from "react";

// Target with arrow (Mission). Line icon redrawn to match the design — replace the paths with
// the Figma export if exact artwork is needed.
const MissionTargetIcon = ({ size = 76, color = "white", className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 76 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M62.5 30.5C63.5 33.2 64 36.1 64 39C64 55.6 50.6 69 34 69C17.4 69 4 55.6 4 39C4 22.4 17.4 9 34 9C37.6 9 41.1 9.6 44.3 10.8"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M52.6 36C52.9 37 53 38 53 39C53 49.5 44.5 58 34 58C23.5 58 15 49.5 15 39C15 28.5 23.5 20 34 20C35.6 20 37.1 20.2 38.6 20.6"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M42 39C42 43.4 38.4 47 34 47C29.6 47 26 43.4 26 39C26 34.6 29.6 31 34 31"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M34 39L62 11" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path
        d="M62 11L63 3L71 2L70 10L62 11ZM56 17L56.5 9.5M56 17L63.5 16.5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MissionTargetIcon;
