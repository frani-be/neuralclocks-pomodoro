import React from 'react'

const RangeInput = ({ label, value, onChange, disabled }) => {
    return (
        <div>
            <label>
                {label}: {value} minutes
                <input type="range" min="1" max="60" value={value} onChange={(e) => onChange(e.target.value)} disabled={disabled} />
            </label>
        </div>
    )
}

export default RangeInput