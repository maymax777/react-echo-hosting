import React from 'react';
import FooterSection from 'components/FooterSection';
import FooterContact from 'components/FooterContact';

function Footer() {
    return (
        <footer>
            <div className="footer-wrappr " data-background="assets/img/gallery/footer-bg.png">
                <div className="footer-area footer-padding ">
                    <div className="container">
                        <div className="row d-flex justify-content-between">
                            <FooterContact />
                            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1"></div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-5">
                                <FooterSection 
                                    title="Company" 
                                    items={[
                                        {to: '#', label: 'Why choose us'},
                                        {to: '#', label: 'Review'},
                                        {to: '#', label: 'Customers'},
                                        {to: '#', label: 'Blog'},
                                        {to: '#', label: 'Carrier'}
                                    ]}
                                />
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-5">
                                <FooterSection 
                                    title="Products" 
                                    items={[
                                        {to: '#', label: 'Why choose us'},
                                        {to: '#', label: 'Review'},
                                        {to: '#', label: 'Customers'},
                                        {to: '#', label: 'Blog'},
                                        {to: '#', label: 'Carrier'}
                                    ]}
                                />
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-5">
                                <FooterSection 
                                    title="Support" 
                                    items={[
                                        {to: '#', label: 'Technology'},
                                        {to: '#', label: 'Products'},
                                        {to: '#', label: 'Customers'},
                                        {to: '#', label: 'Quality'},
                                        {to: '#', label: 'Sales geography'}
                                    ]}
                                />
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
