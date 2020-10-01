import React from 'react'
import SingleSlider from '../../components/SingleSlider'

function Slider() {
    return (
        <div className="slider-area slider-bg ">
            <div className="slider-active">
                <SingleSlider 
                    title="Best Domain & hosting service provider"
                    subtitle="Powerful web hosting"
                    content="Supercharge your WordPress hosting with detailed website analytics, marketing tools, security, and data backups all in one place."
                />                
            </div>
            
            <div className="slider-shape d-none d-lg-block">
                <img className="slider-shape1" src={require("assets/img/hero/top-left-shape.png")} alt="" />
            </div>
        </div>
    )
}

export default Slider
