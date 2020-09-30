import React from 'react'

function Testimonial() {
    return (
        <section class="testimonial-area section-bg1">    
            <div class="container" >   
                <div class="testimonial-wrapper">
                    <div class="row align-items-center justify-content-center">
                        <div class=" col-lg-10 col-md-12 col-sm-11">                            
                            <div class="h1-testimonial-active">                                
                                <div class="single-testimonial text-center mt-55">
                                    <div class="testimonial-caption">
                                        <img src={require("assets/img/icon/quotes-sign.png")} alt="" class="quotes-sign" />
                                        <p>Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.</p>
                                    </div>                                    
                                    <div class="testimonial-founder d-flex align-items-center justify-content-center">
                                        <div class="founder-img">
                                            <img src={require("assets/img/icon/testimonial.png")} alt="" />
                                        </div>
                                        <div class="founder-text">
                                            <span>Jacson Miller</span>
                                            <p>Designer @Colorlib</p>
                                        </div>
                                    </div>
                                </div>                                
                                <div class="single-testimonial text-center mt-55">
                                    <div class="testimonial-caption">
                                        <img src={require("assets/img/icon/quotes-sign.png")} alt="" class="quotes-sign" />
                                        <p>Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.</p>
                                    </div>
                                    
                                    <div class="testimonial-founder d-flex align-items-center justify-content-center">
                                        <div class="founder-img">
                                            <img src={require("assets/img/icon/testimonial.png")} alt="" />
                                        </div>
                                        <div class="founder-text">
                                            <span>Jacson Miller</span>
                                            <p>Designer @Colorlib</p>
                                        </div>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
