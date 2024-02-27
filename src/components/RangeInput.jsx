/**
 * The RangeInput component in JavaScript React allows users to select a value within a specified range
 * and displays the selected value in minutes.
 * The `min="1" max="60"` attributes in the `<input>` element of
 * the RangeInput component are setting the minimum and maximum
 * values that the user can select using the range input. In this
 * case, the user can select a value between 1 and 60 minutes. This
 * ensures that the user cannot select a value lower than 1 minute
 * or higher than 60 minutes using the range input.
 * The `--track-fg-width': `${value * 100 / 60}%` is setting a custom CSS variable `--track-fg-width` for the range input element. 
 * This CSS variable is used to dynamically adjust the width of the foreground track of the range input based on the selected value.
 */
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