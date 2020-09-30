import React from 'react'

function About() {
    return (
        <div style={{ background:'white' }}>
            <div className="about-area1 section-padding40">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-5 col-lg-5 col-md-8 col-sm-10">
                            
                            <div className="about-img ">
                                <img src={require("assets/img/gallery/about1.png")} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-12">
                            <div className="about-caption ">
                                
                                <div className="section-tittle section-tittle2 mb-30">
                                    <h2>Global server location</h2>
                                </div>
                                <p className="mb-40">Supercharge your WordPress hosting with detailed website analytics, marketing tools. Our experts are just part of the reason Bluehost is the ideal home for your WordPress website. We're here to help you succeed!</p>
                                <ul>
                                    <li>
                                        <img src="assets/img/icon/right.svg" alt="" />
                                        <p>WordPress hosting with detailed website</p>
                                    </li>
                                    <li>
                                        <img src="assets/img/icon/right.svg" alt="" />
                                        <p>Our experts are just part of the reason</p>
                                    </li>
                                    <li>
                                        <img src="assets/img/icon/right.svg" alt="" />
                                        <p> Detailed website analytics</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-area1 pb-bottom">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-7 col-lg-7 col-md-12">
                            <div className="about-caption about-caption3 mb-50">                        
                                <div className="section-tittle section-tittle2 mb-30">
                                    <h2>Dedicated support</h2>
                                </div>
                                <p className="mb-40">Supercharge your WordPress hosting with detailed website analytics, marketing tools. Our experts are just part of the reason Bluehost is the ideal home for your WordPress website. We're here to help you succeed!</p>
                                <ul className="mb-30">
                                    <li>
                                        <img src="assets/img/icon/right.svg" alt="" />
                                        <p>WordPress hosting with detailed website</p>
                                    </li>
                                    <li>
                                        <img src="assets/img/icon/right.svg" alt="" />
                                        <p>Our experts are just part of the reason</p>
                                    </li>
                                </ul>
                                <a href="#" className="btn"><i className="fas fa-phone-alt"></i>(10) 892-293 2678</a>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-8 col-sm-10">                    
                            <div className="about-img ">
                                <img src={require("assets/img/gallery/about2.png")} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
