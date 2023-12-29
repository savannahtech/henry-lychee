import React from "react";

const AttentionIcon = ({tooltip}) => {
  return (
    <div title={tooltip}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="7.5" stroke="black" />
        <path d="M8 4V7.55556" stroke="#191C26" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8 11.1133H8.00889" stroke="#191C26" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  );
};

export default AttentionIcon;
