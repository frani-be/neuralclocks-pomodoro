/**
 * The Checkbox component is a React functional component that renders a checkbox input with a label,
 * checked state, onChange event handler, and disabled attribute.
 * @returns The `Checkbox` component is being returned. It is a functional component that renders a
 * checkbox input with a label, using the props `label`, `checked`, `onChange`, and `disabled`.
 */
import React from 'react'

const Checkbox = ({ label, checked, onChange, disabled }) => {
    return (
        <div className="form-check form-switch my-3">
            <label>
                {label}
                <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} role="switch" className="form-check-input" aria-label={label} />
            </label>
        </div>
    )
}

export default Checkbox
