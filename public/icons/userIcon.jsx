import React from "react";

const userIcon = ({ size = 20, color = "#FFFFFF", className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.99935 8.33073C11.8403 8.33073 13.3327 6.83834 13.3327 4.9974C13.3327 3.15645 11.8403 1.66406 9.99935 1.66406C8.1584 1.66406 6.66602 3.15645 6.66602 4.9974C6.66602 6.83834 8.1584 8.33073 9.99935 8.33073Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M16.6673 14.5859C16.6673 16.657 16.6673 18.3359 10.0007 18.3359C3.33398 18.3359 3.33398 16.657 3.33398 14.5859C3.33398 12.5149 6.31875 10.8359 10.0007 10.8359C13.6826 10.8359 16.6673 12.5149 16.6673 14.5859Z"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};

export default userIcon;
