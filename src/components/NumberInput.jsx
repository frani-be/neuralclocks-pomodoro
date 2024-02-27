/**
 * The NumberInput component in React is designed to accept numerical input within a specified range
 * and restricts the input to values between 1 and 10.
 * @returns The NumberInput component is being returned. It is a functional component that renders a
 * label and an input field for entering numbers within the range of 1 to 10. The input field has event
 * handlers for onChange and onFocus, and it can be disabled based on the disabled prop passed to the
 * component.
 */
import React from 'react'

const NumberInput = ({ label, value, onChange, disabled }) => {
    
    /**
     * The function `handleInputChange` ensures that the input value is a number between 1 and 10 and
     * calls the `onChange` function with the updated value.
     */
    const handleInputChange = (e) => {
        let newValue = parseInt(e.target.value, 10)

        if (!isNaN(newValue)) {
            newValue = Math.max(1, Math.min(newValue, 10))
            onChange(newValue.toString())
        }
    }

    const handleInputFocus = (e) => {
        e.target.select()
    }

    return (
        <div>
            <label>
                {label}:
                <input type="number" min="1" max="10" value={value} onChange={handleInputChange} onFocus={handleInputFocus} disabled={disabled} className="form-control" aria-label={label}
                />
            </label>
        </div>
    )
}

export default NumberInput
