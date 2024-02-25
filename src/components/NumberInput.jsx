import React from 'react'

const NumberInput = ({ label, value, onChange }) => {
    return (
        <div>
            <label>
                {label}:
                <input type="number" min="1" max="10" value={value} onChange={(e) => onChange(e.target.value)} />
            </label>
        </div>
    )
}

export default NumberInput