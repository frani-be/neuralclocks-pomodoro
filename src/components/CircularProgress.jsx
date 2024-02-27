import React from 'react'

const CircularProgress = ({ size, progress }) => {
  const strokeDasharray = 2 * Math.PI * 58
  const strokeDashoffset = strokeDasharray + (strokeDasharray * progress) / 100

  return (
    <svg width={size} height={size} viewBox="0 0 120 120" role="timer" className="svg-shadow-sm">
      <circle
        cx="60"
        cy="60"
        r="58"
        fill="#fff"
        className="progress-circle-static"
        strokeWidth="4"
      />
      <circle
        cx="60"
        cy="60"
        r="58"
        fill="none"
        className="progress-circle"
        strokeWidth="4"
        transform="rotate(-90 60 60)"
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
      />
    </svg>
  )
}

export default CircularProgress
