import React from 'react'

const ControlButton = ({ text, onClick }) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

export default ControlButton