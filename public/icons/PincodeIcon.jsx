import React from "react";

const PincodeIcon = ({ size = 24, color = "white", className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M17.347 9.05077L15.007 16.5908C14.447 18.3808 11.937 18.4108 11.347 16.6308L10.6471 14.5608C10.4571 13.9908 10.007 13.5308 9.43704 13.3508L7.35704 12.6508C5.58704 12.0608 5.61704 9.53078 7.40704 8.99078L14.9471 6.64077C16.4271 6.19077 17.817 7.58077 17.347 9.05077Z" stroke={color} strokeWidth="2" />
      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={color} strokeWidth="2" />
    </svg>
  );
};

export default PincodeIcon;
