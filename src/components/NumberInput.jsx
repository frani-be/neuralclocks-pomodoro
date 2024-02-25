import React, { useState } from 'react';

const NumberInput = ({ label, defaultValue=4, onChange, disabled }) => {
    const [lastValidValue, setLastValidValue] = useState(defaultValue)

    const handleInputChange = (e) => {
        const newValue = e.target.value

        if (newValue === '') {
            onChange(lastValidValue)
            e.target.value = lastValidValue
        } else {
            const numericValue = parseInt(newValue, 10)
            if (!isNaN(numericValue) && numericValue >= 1 && numericValue <= 10) {
                onChange(numericValue)
                setLastValidValue(numericValue)
            } else {
                e.target.value = lastValidValue
            }
        }
    }
    return (
        <div className="my-3">
            <label>
                {label}:
                <input type="number" min="1" max="10" value={lastValidValue} onChange={handleInputChange} disabled={disabled} className="form-control" aria-label={label} />
            </label>
        </div>
    )
}

export default NumberInput