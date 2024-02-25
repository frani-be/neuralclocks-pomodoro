import React from 'react'

const Checkbox = ({ label, checked, onChange, disabled }) => {
    return (
        <div className="form-check form-switch">
            <label>
                {label}
                <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} role="switch" className="form-check-input" />
            </label>
        </div>
    )
}

export default Checkbox
