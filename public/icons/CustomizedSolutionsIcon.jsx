import React from "react";

const CustomizedSolutionsIcon = ({ size = 22, color = "#134B96", className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M8.71875 25H3.375C2.74511 25 2.14102 24.7471 1.69562 24.2971C1.25022 23.847 1 23.2365 1 22.6V3.40001C1 2.76349 1.25022 2.15304 1.69562 1.70295C2.14102 1.25286 2.74511 1.00001 3.375 1.00001H12.875M12.875 1.00001C13.2513 0.999076 13.6241 1.07346 13.9718 1.21887C14.3195 1.36428 14.6353 1.57783 14.9009 1.84721L19.1616 6.15281C19.4282 6.42121 19.6395 6.74031 19.7834 7.09168C19.9273 7.44305 20.0009 7.81974 20 8.20001M12.875 1.00001V7C12.875 7.31826 13.0001 7.62348 13.2228 7.84853C13.4455 8.07357 13.7475 8.2 14.0625 8.2L20 8.20001M20 8.20001V15.4M12.875 22.6L15.25 25L20 20.2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CustomizedSolutionsIcon;
