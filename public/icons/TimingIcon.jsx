import React from "react";

const TimingIcon = ({ size = 20, color = "white", className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path opacity="0.85" d="M10 5.83594V10.2771L12.9167 12.5026" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.5 10C2.5 5.85769 5.85769 2.5 10 2.5C14.1423 2.5 17.5 5.85769 17.5 10C17.5 12.4 16.3692 14.5462 14.6154 15.9192H14.6038C13.3346 16.9115 11.7423 17.5 10 17.5C8.28077 17.5 6.7 16.9231 5.43077 15.9423H5.41923C3.64231 14.5692 2.5 12.4231 2.5 10Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default TimingIcon;
