import React from "react";

// Grid icon for the blog's "All Topics" tab. Stroke defaults to currentColor so it follows the
// tab's text colour (white when active, blue otherwise).
const AllTopicsIcon = ({ size = 24, color = "currentColor", className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M1 8.33333H23M1 15.6667H23M8.33333 1V23M15.6667 1V23M3.44444 1H20.5556C21.9056 1 23 2.09441 23 3.44444V20.5556C23 21.9056 21.9056 23 20.5556 23H3.44444C2.09441 23 1 21.9056 1 20.5556V3.44444C1 2.09441 2.09441 1 3.44444 1Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default AllTopicsIcon;
