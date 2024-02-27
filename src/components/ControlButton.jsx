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