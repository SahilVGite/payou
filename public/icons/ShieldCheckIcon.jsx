import React from "react";

const ShieldCheckIcon = ({ size = 18, color = "#07519C", className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.86862 1.67438L4.12609 3.08438C3.26359 3.40688 2.55859 4.42687 2.55859 5.34187V10.9144C2.55859 11.7994 3.14359 12.9619 3.85609 13.4944L7.08109 15.9019C8.13862 16.6969 9.87862 16.6969 10.9361 15.9019L14.1611 13.4944C14.8736 12.9619 15.4586 11.7994 15.4586 10.9144V5.34187C15.4586 4.41937 14.7536 3.39937 13.8911 3.07687L10.1486 1.67438C9.51112 1.44187 8.49112 1.44187 7.86862 1.67438Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M6.78906 8.90033L7.99658 10.1078L11.2216 6.88281"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ShieldCheckIcon;
