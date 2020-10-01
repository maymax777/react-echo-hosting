import React from 'react'
import TestimonialCard from '../../components/TestimonialCard'

function Testimonial() {
    return (
        <section className="testimonial-area section-bg1">    
            <div className="container" >   
                <div className="testimonial-wrapper">
                    <div className="row align-items-center justify-content-center">
                        <div className=" col-lg-10 col-md-12 col-sm-11">                            
                            <div className="h1-testimonial-active">                                
                                <TestimonialCard 
                                    content="Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se."
                                    name="Jacson Miller"
                                    job="Designer"
                                    avatar={require("assets/img/icon/testimonial.png")}
                                />                                
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
