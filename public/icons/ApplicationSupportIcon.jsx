import React from "react";

const ApplicationSupportIcon = ({ size = 20, color = "white", className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M10.8335 17.4971H17.5008M17.6457 5.67431C18.0863 5.23384 18.3339 4.63638 18.334 4.01338C18.3341 3.39038 18.0867 2.79287 17.6461 2.35228C17.2056 1.9117 16.6081 1.66414 15.985 1.66406C15.362 1.66398 14.7644 1.9114 14.3238 2.35187L3.2011 13.4758C3.0076 13.6688 2.8645 13.9063 2.78439 14.1675L1.68346 17.7941C1.66192 17.8662 1.6603 17.9427 1.67875 18.0156C1.69721 18.0886 1.73507 18.1551 1.7883 18.2083C1.84154 18.2614 1.90817 18.2992 1.98112 18.3175C2.05408 18.3358 2.13063 18.3341 2.20268 18.3124L5.8305 17.2124C6.0915 17.1331 6.32902 16.9909 6.52223 16.7983L17.6457 5.67431Z" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export default ApplicationSupportIcon;
