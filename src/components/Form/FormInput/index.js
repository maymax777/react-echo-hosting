import React from 'react'
import { useForm } from 'react-hook-form';

function FormInput({ className, label, placeholder, type, name, ref }) {
    const { register } = useForm();

    return (
        <div className={className}>
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} placeholder={placeholder} {...ref}/>
        </div>
    )
}

export default FormInput
