import React from "react";

const LoansTabIcon = ({ size = 20, color = "currentColor", className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_loans_tab_icon)">
        <path
          d="M4.99962 10H5.00795M15.0004 10H15.0087M3.33282 5H16.6672C17.5878 5 18.334 5.74619 18.334 6.66667V13.3333C18.334 14.2538 17.5878 15 16.6672 15H3.33282C2.41227 15 1.66602 14.2538 1.66602 13.3333V6.66667C1.66602 5.74619 2.41227 5 3.33282 5ZM11.6668 10C11.6668 10.9205 10.9206 11.6667 10 11.6667C9.07947 11.6667 8.33322 10.9205 8.33322 10C8.33322 9.07953 9.07947 8.33333 10 8.33333C10.9206 8.33333 11.6668 9.07953 11.6668 10Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_loans_tab_icon">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LoansTabIcon;
