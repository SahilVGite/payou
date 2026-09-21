import React from "react";

const InterestRateEnquiryIcon = ({ size = 20, color = "white", className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M15.8327 4.16919L4.16723 15.8347M7.50023 5.41906C7.50023 6.56954 6.56759 7.50219 5.41711 7.50219C4.26663 7.50219 3.33398 6.56954 3.33398 5.41906C3.33398 4.26858 4.26663 3.33594 5.41711 3.33594C6.56759 3.33594 7.50023 4.26858 7.50023 5.41906ZM16.666 14.5848C16.666 15.7353 15.7333 16.6679 14.5829 16.6679C13.4324 16.6679 12.4997 15.7353 12.4997 14.5848C12.4997 13.4343 13.4324 12.5017 14.5829 12.5017C15.7333 12.5017 16.666 13.4343 16.666 14.5848Z" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export default InterestRateEnquiryIcon;
