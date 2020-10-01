import React from 'react'

function FooterBottom() {
    const year = new Date().getFullYear();

    return (
        <div className="footer-bottom-area">
            <div className="container">
                <div className="footer-border">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="footer-copy-right text-center">                                        
                                <p>Copyright &copy;{ year } All rights reserved | Made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://github.com/maymax777" target="_blank">maymax777</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterBottom
