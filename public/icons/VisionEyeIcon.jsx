import React from "react";

// Eye with rays (Vision). Line icon redrawn to match the design — replace the paths with the
// Figma export if exact artwork is needed.
const VisionEyeIcon = ({ size = 76, color = "white", className }) => {
  return (
    <svg
      width={size}
      height={(size * 84) / 76}
      viewBox="0 0 76 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3 42C12.5 29.5 24.5 23 38 23C51.5 23 63.5 29.5 73 42C63.5 54.5 51.5 61 38 61C24.5 61 12.5 54.5 3 42Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="38" cy="42" r="12" stroke={color} strokeWidth="2.5" />
      <circle cx="38" cy="42" r="4.5" stroke={color} strokeWidth="2.5" />
      <path d="M31 36.5C32.6 34.9 35.2 34 38 34" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path
        d="M38 2V12M38 72V82M10 10L16.5 16.5M66 10L59.5 16.5M10 74L16.5 67.5M66 74L59.5 67.5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default VisionEyeIcon;
