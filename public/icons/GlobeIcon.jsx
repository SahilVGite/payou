import React from "react";

const GlobeIcon = ({ size = 24, color = "#134B96", className }) => {
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
        d="M22.0016 12.0008C22.0016 17.5241 17.5241 22.0016 12.0008 22.0016M22.0016 12.0008C22.0016 6.47751 17.5241 2 12.0008 2M22.0016 12.0008H2M12.0008 22.0016C6.47751 22.0016 2 17.5241 2 12.0008M12.0008 22.0016C9.43283 19.3052 8.00048 15.7244 8.00048 12.0008C8.00048 8.27724 9.43283 4.69637 12.0008 2M12.0008 22.0016C14.5688 19.3052 16.0011 15.7244 16.0011 12.0008C16.0011 8.27724 14.5688 4.69637 12.0008 2M12.0008 2C6.47751 2 2 6.47751 2 12.0008"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default GlobeIcon;
