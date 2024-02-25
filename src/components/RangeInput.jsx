import React from 'react'

const RangeInput = ({ label, value, onChange, disabled }) => {
    return (
        <div className="my-3">
            <label>
                {label}: {value} minutes
                <input type="range" min="1" max="60" value={value} onChange={(e) => onChange(e.target.value)} disabled={disabled} className="form-range" aria-label={label} />
            </label>
        </div>
    )
}

export default RangeInput