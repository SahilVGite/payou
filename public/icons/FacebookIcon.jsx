import React from "react";

const FacebookIcon = ({ size = 24, color = "#134B96", className }) => {
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
        d="M14.9994 2H17.9992V6.00032H14.9994C14.7342 6.00032 14.4799 6.10569 14.2924 6.29324C14.1048 6.48079 13.9995 6.73516 13.9995 7.0004V10.0006H17.9992L16.9993 14.001H13.9995V22.0016H9.99978V14.001H7V10.0006H9.99978V7.0004C9.99978 5.67421 10.5265 4.40234 11.4641 3.46458C12.4018 2.52683 13.6734 2 14.9994 2Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default FacebookIcon;
