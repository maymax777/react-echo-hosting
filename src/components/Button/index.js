import React from 'react'
import { Link } from 'react-router-dom';

function Button({ label, to }) {
    return (
        <div className="more-btn text-center mt-20">
            <Link to={ to } className="btn">{ label }</Link>
        </div>
    )
}

export default Button
