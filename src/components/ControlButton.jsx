/**
 * The ControlButton component in React renders a button with specified text, onClick function,
 * disabled state, button type, and label.
 * @returns The `ControlButton` component is being returned. It is a functional component that renders
 * a button element with the specified text, onClick function, disabled state, buttonType, and label.
 */
import React from 'react'

const ControlButton = ({ text, onClick, disabled, buttonType, label }) => {
    const buttonClass = `btn btn-${buttonType} shadow-sm`

    return (
        <button onClick={onClick} disabled={disabled} className={buttonClass} aria-label={label}>
            {text}
        </button>
    )
}

export default ControlButton