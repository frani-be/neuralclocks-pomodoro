import React from 'react'

const RangeInput = ({ label, value, onChange, disabled, inputFor }) => {
    const handleSliderChange = (event) => {
        onChange(event.target.value)
    }

    const inputClass = `form-range range-${inputFor}`
    return (
        <div className="w-100">
            <label htmlFor={inputFor} className="w-100">
                {label}: {value} minutes
                <input type="range" min="1" max="60" value={value} onChange={handleSliderChange} disabled={disabled} id={inputFor} className={inputClass} aria-label={label} style={{ '--track-fg-width': `${value * 100 / 60}%` }} />
            </label>
        </div>
    )
}

export default RangeInput