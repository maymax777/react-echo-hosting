import React from 'react'
import TestimonialCard from '../../components/TestimonialCard'

function Testimonial() {
    return (
        <section class="testimonial-area section-bg1">    
            <div class="container" >   
                <div class="testimonial-wrapper">
                    <div class="row align-items-center justify-content-center">
                        <div class=" col-lg-10 col-md-12 col-sm-11">                            
                            <div class="h1-testimonial-active">                                
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
