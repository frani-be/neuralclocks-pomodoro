import React from 'react'

const ControlButton = ({ text, onClick, disabled, buttonType }) => {
    const buttonClass = `btn btn-${buttonType}`

    return (
        <button onClick={onClick} disabled={disabled} className={buttonClass}>
            {text}
        </button>
    )
}

export default ControlButton