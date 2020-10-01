import React from 'react'
import FooterForm from 'components/FooterForm';
import SocialIcons from 'components/SocialIcons';

function FooterContact() {
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="single-footer-caption mb-50">                                    
                <div className="footer-logo mb-25">
                    <a href="index.html"><img src={require("assets/img/logo/logo2_footer.png")} alt="" /></a>
                </div>
                <div className="footer-tittle mb-50">
                    <p>Subscribe our newsletter to get updates about our services</p>
                </div>
                
                <FooterForm />
                <SocialIcons />
            </div>
        </div>
    )
}

export default FooterContact
