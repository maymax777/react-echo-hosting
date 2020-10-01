import React, { useState } from 'react'

function FooterForm() {

    const [placeholder, setPlaceHolder] = useState('Email Address');
    const onBlur = () => setPlaceHolder('Your email address');
    const onFocus =() => setPlaceHolder('');
    
    return (
        <div className="footer-form">
            <div id="mc_embed_signup">
                <form target="_blank" action="#" method="get" className="subscribe_form relative mail_part" noValidate={true}>
                    <input type="email" name="EMAIL" id="newsletter-form-email" placeholder={ placeholder } className="placeholder hide-on-focus" onFocus={onFocus} onBlur={onBlur} />
                    <div className="form-icon">
                        <button type="submit" name="submit" id="newsletter-submit" className="email_icon newsletter-submit button-contactForm">
                            Subscribe
                        </button>
                    </div>
                    <div className="mt-10 info"></div>
                </form>
            </div>
        </div>
    )
}

export default FooterForm
