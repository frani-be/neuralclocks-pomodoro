import React from 'react'

const ControlButton = ({ text, onClick, disabled }) => {
    return (
        <button onClick={onClick} disabled={disabled}>
            {text}
        </button>
    )
}

export default ControlButton