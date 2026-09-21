import React from "react";

const CircleXIcon = ({ size = 20, color = "#B11F24", className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.99935 18.3307C14.5827 18.3307 18.3327 14.5807 18.3327 9.99739C18.3327 5.41406 14.5827 1.66406 9.99935 1.66406C5.41601 1.66406 1.66602 5.41406 1.66602 9.99739C1.66602 14.5807 5.41601 18.3307 9.99935 18.3307Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M7.64453 12.3594L12.3586 7.64533" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.3586 12.3547L7.64453 7.64062" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default CircleXIcon;
