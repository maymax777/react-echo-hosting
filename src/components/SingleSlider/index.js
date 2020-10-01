import React from 'react'

function SingleSlider({ title, subtitle, content}) {
    return (
        <div className="single-slider d-flex align-items-center slider-height ">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-xl-5 col-lg-5 col-md-9 ">
                        <div className="hero__caption">
                            <span data-animation="fadeInLeft" data-delay=".3s">{ title }</span>
                            <h1 data-animation="fadeInLeft" data-delay=".6s ">{ subtitle }</h1>
                            <p data-animation="fadeInLeft" data-delay=".8s">{ content }</p>
                            
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
    )
}

export default SingleSlider
