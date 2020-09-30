import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="footer-wrappr " data-background="assets/img/gallery/footer-bg.png">
                <div className="footer-area footer-padding ">
                    <div className="container">
                        <div className="row d-flex justify-content-between">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-caption mb-50">                                    
                                    <div className="footer-logo mb-25">
                                        <a href="index.html"><img src={require("assets/img/logo/logo2_footer.png")} alt="" /></a>
                                    </div>
                                    <div className="footer-tittle mb-50">
                                        <p>Subscribe our newsletter to get updates about our services</p>
                                    </div>
                                    
                                    <div className="footer-form">
                                        <div id="mc_embed_signup">
                                            <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="subscribe_form relative mail_part" novalidate="true">
                                                <input type="email" name="EMAIL" id="newsletter-form-email" placeholder=" Email Address " className="placeholder hide-on-focus" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your email address'" />
                                                <div className="form-icon">
                                                    <button type="submit" name="submit" id="newsletter-submit" className="email_icon newsletter-submit button-contactForm">
                                                        Subscribe
                                                    </button>
                                                </div>
                                                <div className="mt-10 info"></div>
                                            </form>
                                        </div>
                                    </div>
                                    
                                    <div className="footer-social mt-50">
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1"></div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-5">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Company</h4>
                                        <ul>
                                            <li><a href="#">Why choose us</a></li>
                                            <li><a href="#"> Review</a></li>
                                            <li><a href="#">Customers</a></li>
                                            <li><a href="#">Blog</a></li>
                                            <li><a href="#">Carrier</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-5">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Products</h4>
                                        <ul>
                                            <li><a href="#">Why choose us</a></li>
                                            <li><a href="#"> Review</a></li>
                                            <li><a href="#">Customers</a></li>
                                            <li><a href="#">Blog</a></li>
                                            <li><a href="#">Carrier</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-5">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Support</h4>
                                        <ul>
                                            <li><a href="#">Technology</a></li>
                                            <li><a href="#">Products</a></li>
                                            <li><a href="#">Customers</a></li>
                                            <li><a href="#">Quality</a></li>
                                            <li><a href="#">Sales geography</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom-area">
                    <div className="container">
                        <div className="footer-border">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="footer-copy-right text-center">                                        
                                        <p>Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://github.com/maymax777" target="_blank">maymax777</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
