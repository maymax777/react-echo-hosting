import React from 'react'
import { Link } from 'react-router-dom';

function FooterSocialIcons() {
    return (
        <div className="footer-social mt-50">
            <Link to="#"><i className="fab fa-twitter"></i></Link>
            <Link to="#"><i className="fab fa-facebook-f"></i></Link>
            <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
        </div>
    )
}

export default FooterSocialIcons
