import React from "react";

const ProductLeadershipIcon = ({ size = 39, color = "white", className }) => {
  return (
    <svg
      width={size}
      height={(size * 45) / 39}
      viewBox="0 0 39 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M1.5 43.5V29.5M13.6034 43.5V21.8824M37.5 43.5V1.5M25.7069 43.5V10.7647" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
};

export default ProductLeadershipIcon;
