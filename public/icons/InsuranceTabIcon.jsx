import React from "react";

// Briefcase icon for the blog's "Insurance" tab. Stroke defaults to currentColor so it follows
// the tab's text colour (white when active, blue otherwise).
const InsuranceTabIcon = ({ size = 24, color = "currentColor", className }) => {
  return (
    <svg
      width={(size * 26) / 24}
      height={size}
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M17.8 23V3.44444C17.8 2.79614 17.5471 2.17438 17.0971 1.71596C16.647 1.25754 16.0365 1 15.4 1H10.6C9.96348 1 9.35303 1.25754 8.90294 1.71596C8.45286 2.17438 8.2 2.79614 8.2 3.44444V23M3.4 5.88889H22.6C23.9255 5.88889 25 6.9833 25 8.33333V20.5556C25 21.9056 23.9255 23 22.6 23H3.4C2.07452 23 1 21.9056 1 20.5556V8.33333C1 6.9833 2.07452 5.88889 3.4 5.88889Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default InsuranceTabIcon;
