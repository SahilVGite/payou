import React from "react";

const TwoWheelerLoanIcon = ({ size = 23, color = "#134B96", className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        opacity="0.2"
        d="M17.9375 17.1875C19.836 17.1875 21.375 15.6485 21.375 13.75C21.375 11.8515 19.836 10.3125 17.9375 10.3125C16.039 10.3125 14.5 11.8515 14.5 13.75C14.5 15.6485 16.039 17.1875 17.9375 17.1875Z"
        fill={color}
      />
      <path
        opacity="0.2"
        d="M4.1875 17.1875C6.08598 17.1875 7.625 15.6485 7.625 13.75C7.625 11.8515 6.08598 10.3125 4.1875 10.3125C2.28902 10.3125 0.75 11.8515 0.75 13.75C0.75 15.6485 2.28902 17.1875 4.1875 17.1875Z"
        fill={color}
      />
      <path
        d="M17.9375 6.875C17.9375 6.51033 17.7926 6.16059 17.5348 5.90273C17.2769 5.64487 16.9272 5.5 16.5625 5.5H13.125L17.9375 13.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.9375 17.1875C19.836 17.1875 21.375 15.6485 21.375 13.75C21.375 11.8515 19.836 10.3125 17.9375 10.3125C16.039 10.3125 14.5 11.8515 14.5 13.75C14.5 15.6485 16.039 17.1875 17.9375 17.1875Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.1875 17.1875C6.08598 17.1875 7.625 15.6485 7.625 13.75C7.625 11.8515 6.08598 10.3125 4.1875 10.3125C2.28902 10.3125 0.75 11.8515 0.75 13.75C0.75 15.6485 2.28902 17.1875 4.1875 17.1875Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.1875 5.5H6.59375L11.4062 13.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6794 8.25H8.19795L4.1875 13.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TwoWheelerLoanIcon;
