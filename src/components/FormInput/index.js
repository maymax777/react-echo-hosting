import React from 'react'

function FormInput({ className, label, placeholder, type, name }) {
    return (
        <div className={className}>
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} placeholder={placeholder} />
        </div>
    )
}

export default FormInput
