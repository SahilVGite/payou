import React from "react";

const IfscCodeIcon = ({ size = 20, color = "white", className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M1.66406 10.0026C1.66406 6.8599 1.66406 5.28856 2.64037 4.31225C3.61669 3.33594 5.18803 3.33594 8.33073 3.33594H11.6641C14.8067 3.33594 16.3781 3.33594 17.3544 4.31225C18.3307 5.28856 18.3307 6.8599 18.3307 10.0026C18.3307 13.1453 18.3307 14.7167 17.3544 15.6929C16.3781 16.6693 14.8067 16.6693 11.6641 16.6693H8.33073C5.18803 16.6693 3.61669 16.6693 2.64037 15.6929C1.66406 14.7167 1.66406 13.1453 1.66406 10.0026Z" stroke={color} strokeWidth="2" />
      <path opacity="0.85" d="M8.33333 13.75H5" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      <path opacity="0.85" d="M6.66667 11.25H5" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      <path opacity="0.85" d="M1.66406 8.33594H18.3307" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      <path opacity="0.85" d="M11.6641 12.5026C11.6641 11.7169 11.6641 11.3241 11.9081 11.08C12.1522 10.8359 12.5451 10.8359 13.3307 10.8359C14.1164 10.8359 14.5092 10.8359 14.7533 11.08C14.9974 11.3241 14.9974 11.7169 14.9974 12.5026C14.9974 13.2883 14.9974 13.6811 14.7533 13.9252C14.5092 14.1693 14.1164 14.1693 13.3307 14.1693C12.5451 14.1693 12.1522 14.1693 11.9081 13.9252C11.6641 13.6811 11.6641 13.2883 11.6641 12.5026Z" stroke={color} strokeWidth="1.2" />
    </svg>
  );
};

export default IfscCodeIcon;
