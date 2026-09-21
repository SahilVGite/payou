import React from "react";

const YouTubeIcon = ({ size = 24, color = "#134B96", className }) => {
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
        d="M2.50048 7.00365C1.80192 10.3 1.80192 13.7061 2.50048 17.0024C2.59226 17.3372 2.76961 17.6423 3.01507 17.8877C3.26053 18.1331 3.56565 18.3105 3.90043 18.4022C9.26369 19.2909 14.7366 19.2909 20.0999 18.4022C20.4347 18.3105 20.7398 18.1331 20.9853 17.8877C21.2307 17.6423 21.4081 17.3372 21.4998 17.0024C22.1984 13.7061 22.1984 10.3 21.4998 7.00365C21.4081 6.6689 21.2307 6.3638 20.9853 6.11837C20.7398 5.87293 20.4347 5.6956 20.0999 5.60382C14.7366 4.71539 9.2637 4.71539 3.90043 5.60382C3.56565 5.6956 3.26053 5.87293 3.01507 6.11837C2.76961 6.3638 2.59226 6.6689 2.50048 7.00365Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10 8.5L16 12L10 15.5V8.5Z"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default YouTubeIcon;
