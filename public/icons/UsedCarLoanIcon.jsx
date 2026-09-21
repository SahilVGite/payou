import React from "react";

const UsedCarLoanIcon = ({ size = 22, color = "#134B96", className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        opacity="0.2"
        d="M19.25 15.8125V17.875C19.25 18.0573 19.1776 18.2322 19.0486 18.3611C18.9197 18.4901 18.7448 18.5625 18.5625 18.5625H16.5C16.3177 18.5625 16.1428 18.4901 16.0139 18.3611C15.8849 18.2322 15.8125 18.0573 15.8125 17.875V15.8125H19.25Z"
        fill={color}
      />
      <path
        opacity="0.2"
        d="M6.1875 15.8125V17.875C6.1875 18.0573 6.11507 18.2322 5.98614 18.3611C5.8572 18.4901 5.68234 18.5625 5.5 18.5625H3.4375C3.25516 18.5625 3.0803 18.4901 2.95136 18.3611C2.82243 18.2322 2.75 18.0573 2.75 17.875V15.8125H6.1875Z"
        fill={color}
      />
      <path
        opacity="0.2"
        d="M19.25 10.3125L16.6815 4.53328C16.6274 4.41175 16.5393 4.3085 16.4278 4.23604C16.3163 4.16357 16.1862 4.125 16.0532 4.125H5.94679C5.8138 4.125 5.68367 4.16357 5.57216 4.23604C5.46065 4.3085 5.37256 4.41175 5.31854 4.53328L2.75 10.3125H19.25Z"
        fill={color}
      />
      <path d="M1.375 10.3125H20.625" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M19.25 15.8125V17.875C19.25 18.0573 19.1776 18.2322 19.0486 18.3611C18.9197 18.4901 18.7448 18.5625 18.5625 18.5625H16.5C16.3177 18.5625 16.1428 18.4901 16.0139 18.3611C15.8849 18.2322 15.8125 18.0573 15.8125 17.875V15.8125"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.1875 15.8125V17.875C6.1875 18.0573 6.11507 18.2322 5.98614 18.3611C5.8572 18.4901 5.68234 18.5625 5.5 18.5625H3.4375C3.25516 18.5625 3.0803 18.4901 2.95136 18.3611C2.82243 18.2322 2.75 18.0573 2.75 17.875V15.8125"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5.5 13.0625H6.875" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.125 13.0625H16.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M19.25 10.3125L16.6815 4.53328C16.6274 4.41175 16.5393 4.3085 16.4278 4.23604C16.3163 4.16357 16.1862 4.125 16.0532 4.125H5.94679C5.8138 4.125 5.68367 4.16357 5.57216 4.23604C5.46065 4.3085 5.37256 4.41175 5.31854 4.53328L2.75 10.3125V15.8125H19.25V10.3125Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UsedCarLoanIcon;
