/**
 * The `CircularProgress` component in React renders a circular progress indicator with customizable
 * size and progress level.
 * @returns The `CircularProgress` component is being returned, which is a circular progress indicator
 * rendered using SVG elements. It consists of two circles, one static circle representing the
 * background and another animated circle representing the progress. The progress of the animated
 * circle is determined by the `progress` prop passed to the component.
 */
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
