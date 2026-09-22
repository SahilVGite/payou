import React from "react";

const StarIcon = ({ size = 24, color = "#FF9500", className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.0914 17.6761L4.5744 23.1051L7.53747 14.2756L0.000532746 8.8267H9.22781L12.0914 -0.00284243L14.9551 8.8267H24.1824L16.6454 14.2756L19.6085 23.1051L12.0914 17.6761Z"
        fill={color}
      />
    </svg>
  );
};

export default StarIcon;
