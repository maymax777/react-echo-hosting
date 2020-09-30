import React from 'react'

function Slider() {
    return (
        <div className="slider-area slider-bg ">
            <div className="slider-active">
                
                <div className="single-slider d-flex align-items-center slider-height ">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-xl-5 col-lg-5 col-md-9 ">
                                <div className="hero__caption">
                                    <span data-animation="fadeInLeft" data-delay=".3s">Best Domain & hosting service provider</span>
                                    <h1 data-animation="fadeInLeft" data-delay=".6s ">Powerful web hosting</h1>
                                    <p data-animation="fadeInLeft" data-delay=".8s">Supercharge your WordPress hosting with detailed 
                                        website analytics, marketing tools, security, and data 
                                    backups all in one place.</p>
                                    
                                    <div className="slider-btns">                                        
                                        <a data-animation="fadeInLeft" data-delay="1s" href="industries.html" className="btn radius-btn">get started</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="hero__img d-none d-lg-block f-right">
                                    <img src={require("assets/img/hero/hero_right.png")} alt="" data-animation="fadeInRight" data-delay="1s" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>      
                
                {/* <div className="single-slider d-flex align-items-center slider-height">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-9 ">
                                <div className="hero__caption">
                                    <span data-animation="fadeInLeft" data-delay=".3s">Best Domain & hosting service provider</span>
                                    <h1 data-animation="fadeInLeft" data-delay=".6s">Powerful web hosting</h1>
                                    <p data-animation="fadeInLeft" data-delay=".8s">Supercharge your WordPress hosting with detailed 
                                        website analytics, marketing tools, security, and data 
                                    backups all in one place.</p>
                                    
                                    <div className="slider-btns">
                                        
                                        <a data-animation="fadeInLeft" data-delay="1s" href="industries.html" className="btn radius-btn">get started</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="hero__img d-none d-lg-block f-right">
                                    <img src="assets/img/hero/hero_right.png" alt="" data-animation="fadeInRight" data-delay="1s" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>       */}
            </div>
            
            <div className="slider-shape d-none d-lg-block">
                <img className="slider-shape1" src={require("assets/img/hero/top-left-shape.png")} alt="" />
            </div>
        </div>
    )
}

export default Slider
