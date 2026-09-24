import React from "react";

const ServicesOfferedIcon = ({ size = 20, color = "white", className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path opacity="0.85" d="M10.8359 9.28906H5.83594" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <path opacity="0.85" d="M1.66406 9.29215V5.4422C1.66406 3.7422 3.03906 2.36719 4.73906 2.36719H9.4224C11.1224 2.36719 12.4974 3.42552 12.4974 5.12552" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M14.5641 10.1667C14.1474 10.5667 13.9474 11.1833 14.1141 11.8167C14.3224 12.5917 15.0891 13.0833 15.8891 13.0833H16.6641V14.2917C16.6641 16.1333 15.1724 17.625 13.3307 17.625H4.9974C3.15573 17.625 1.66406 16.1333 1.66406 14.2917V8.45833C1.66406 6.61667 3.15573 5.125 4.9974 5.125H13.3307C15.1641 5.125 16.6641 6.625 16.6641 8.45833V9.66667H15.7641C15.2974 9.66667 14.8724 9.85 14.5641 10.1667Z" stroke={color} strokeWidth="1.5" />
      <path d="M18.3368 10.5141V12.2307C18.3368 12.6974 17.9534 13.0807 17.4784 13.0807H15.8701C14.9701 13.0807 14.1451 12.4224 14.0701 11.5224C14.0201 10.9974 14.2201 10.5057 14.5701 10.1641C14.8784 9.8474 15.3034 9.66406 15.7701 9.66406H17.4784C17.9534 9.66406 18.3368 10.0474 18.3368 10.5141Z" stroke={color} strokeWidth="1.5" />
    </svg>
  );
};

export default ServicesOfferedIcon;
