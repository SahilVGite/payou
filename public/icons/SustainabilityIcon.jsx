import React from "react";

const SustainabilityIcon = ({ size = 39, color = "white", className }) => {
  return (
    <svg
      width={size}
      height={(size * 41) / 39}
      viewBox="0 0 39 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M1.5 38.7578C1.5 33.0736 5.00531 28.602 11.1254 27.3894C15.7107 26.4799 20.4476 23.5999 22.3424 21.7052M18.5524 36.8631C15.2253 36.8732 12.0159 35.6324 9.5608 33.387C7.10569 31.1416 5.58416 28.0555 5.298 24.7408C5.01183 21.426 5.98192 18.1248 8.01587 15.4918C10.0498 12.8589 12.9991 11.0865 16.2787 10.5262C27.0788 8.44202 29.9209 7.45676 33.7105 2.75781C35.6052 6.54729 37.5 10.6778 37.5 17.9157C37.5 28.3368 28.443 36.8631 18.5524 36.8631Z" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
};

export default SustainabilityIcon;
