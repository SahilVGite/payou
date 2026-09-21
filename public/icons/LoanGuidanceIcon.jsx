import React from "react";

const LoanGuidanceIcon = ({ size = 20, color = "white", className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M13.3336 16.6641V3.33073C13.3336 2.8887 13.158 2.46478 12.8454 2.15222C12.5328 1.83966 12.1089 1.66406 11.6668 1.66406H8.33322C7.89115 1.66406 7.4672 1.83966 7.15461 2.15222C6.84202 2.46478 6.66642 2.8887 6.66642 3.33073V16.6641M3.33282 4.9974H16.6672C17.5878 4.9974 18.334 5.74359 18.334 6.66406V14.9974C18.334 15.9179 17.5878 16.6641 16.6672 16.6641H3.33282C2.41227 16.6641 1.66602 15.9179 1.66602 14.9974V6.66406C1.66602 5.74359 2.41227 4.9974 3.33282 4.9974Z" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export default LoanGuidanceIcon;
