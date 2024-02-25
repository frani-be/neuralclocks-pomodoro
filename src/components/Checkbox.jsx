import React from 'react'

const Checkbox = ({ label, checked, onChange, disabled }) => {
    return (
        <label>
            {label}
            <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} />
        </label>
    )
}

export default Checkbox
