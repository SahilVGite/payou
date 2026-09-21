import React from "react";

const ConsumerDurableLoanIcon = ({ size = 22, color = "#134B96", className }) => {
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
        d="M11 13.75C14.0376 13.75 16.5 11.2876 16.5 8.25C16.5 5.21243 14.0376 2.75 11 2.75C7.96243 2.75 5.5 5.21243 5.5 8.25C5.5 11.2876 7.96243 13.75 11 13.75Z"
        fill={color}
      />
      <path
        d="M11 13.75C14.0376 13.75 16.5 11.2876 16.5 8.25C16.5 5.21243 14.0376 2.75 11 2.75C7.96243 2.75 5.5 5.21243 5.5 8.25C5.5 11.2876 7.96243 13.75 11 13.75Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M2.66211 18.5617C3.50736 17.0987 4.72273 15.8838 6.18613 15.0392C7.64954 14.1946 9.30944 13.75 10.9991 13.75C12.6887 13.75 14.3486 14.1947 15.812 15.0393C17.2754 15.8839 18.4908 17.0988 19.336 18.5619"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ConsumerDurableLoanIcon;
