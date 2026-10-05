import React from "react";

const TransparentAdviceIcon = ({ size = 22, color = "#134B96", className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M6.9375 12.998L9.3125 15.3976L14.0625 10.5984M20 14.1983C20 20.1973 15.8438 23.1968 10.9038 24.9365C10.6451 25.0251 10.3641 25.0209 10.1081 24.9245C5.15625 23.1968 1 20.1973 1 14.1983V5.79974C1 5.48153 1.12511 5.17636 1.34781 4.95135C1.57051 4.72634 1.87256 4.59994 2.1875 4.59994C4.5625 4.59994 7.53125 3.16018 9.5975 1.33648C9.84908 1.11932 10.1691 1 10.5 1C10.8309 1 11.1509 1.11932 11.4025 1.33648C13.4806 3.17218 16.4375 4.59994 18.8125 4.59994C19.1274 4.59994 19.4295 4.72634 19.6522 4.95135C19.8749 5.17636 20 5.48153 20 5.79974V14.1983Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default TransparentAdviceIcon;
