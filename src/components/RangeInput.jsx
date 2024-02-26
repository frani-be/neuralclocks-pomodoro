import React from 'react'

const RangeInput = ({ label, value, onChange, disabled, inputFor }) => {
    const inputClass = `form-range range-${inputFor}`
    return (
        <div className="my-3 w-100">
            <label for={inputFor} className="w-100">
                {label}: {value} minutes
                <input type="range" min="1" max="60" value={value} onChange={(e) => onChange(e.target.value)} disabled={disabled} id={inputFor} className={inputClass} aria-label={label} />
            </label>
        </div>
    )
}

export default RangeInput