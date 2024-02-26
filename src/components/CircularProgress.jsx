import React from 'react';

const CircularProgress = ({ size, progress }) => {
  const strokeDasharray = 2 * Math.PI * 50; // Longitud del círculo (r=50)
  const strokeDashoffset = strokeDasharray + (strokeDasharray * progress) / 100;

  return (
    <svg width={size} height={size} viewBox="0 0 120 120" role="timer">
      <circle
        cx="60"
        cy="60"
        r="50"
        fill="none"
        stroke="#e9ecef"
        strokeWidth="4"
      />
      <circle
        cx="60"
        cy="60"
        r="50"
        fill="none"
        className="progress-circle"
        strokeWidth="4"
        transform="rotate(-90 60 60)"
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CircularProgress;
