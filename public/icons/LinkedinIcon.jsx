import React from "react";

const LinkedinIcon = ({ size = 24, color = "#134B96", className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20.2441 9.75769C19.1188 8.63242 17.5925 8.00025 16.0011 8.00025C14.4097 8.00025 12.8834 8.63242 11.7581 9.75769C10.6328 10.883 10.0006 12.4091 10.0006 14.0005V21.0008H14.001V14.0005C14.001 13.47 14.2117 12.9613 14.5868 12.5862C14.9619 12.2111 15.4706 12.0004 16.0011 12.0004C16.5316 12.0004 17.0403 12.2111 17.4154 12.5862C17.7905 12.9613 18.0013 13.47 18.0013 14.0005V21.0008H22.0016V14.0005C22.0016 12.4091 21.3694 10.883 20.2441 9.75769Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6.00032 9.00029H2V21.0008H6.00032V9.00029Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4.00016 6.00017C5.10482 6.00017 6.00032 5.1047 6.00032 4.00008C6.00032 2.89547 5.10482 2 4.00016 2C2.8955 2 2 2.89547 2 4.00008C2 5.1047 2.8955 6.00017 4.00016 6.00017Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LinkedinIcon;
