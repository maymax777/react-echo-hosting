import React from 'react'

function FormInput({ className, label, placeholder, type, name }) {
    return (
        <div class={className}>
            <label for={name}>{label}</label>
            <input type={type} name={name} placeholder={placeholder} />
        </div>
    )
}

export default FormInput
