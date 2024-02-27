import React from 'react'

const NumberInput = ({ label, value, onChange, disabled }) => {
    
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
