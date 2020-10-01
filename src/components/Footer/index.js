import React from 'react';
import FooterSection from 'components/FooterSection';
import FooterContact from 'components/FooterContact';
import FooterBottom from 'components/FooterBottom';

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
                
                <FooterBottom />
            </div>
        </footer>
    )
}

export default Footer
