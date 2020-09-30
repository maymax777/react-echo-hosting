import React from 'react'

function FormSubmit({ className, value }) {
    return (
        <div className={className}>
            <input type="submit" name="submit" value={value} />
        </div>
    )
}

export default FormSubmit
