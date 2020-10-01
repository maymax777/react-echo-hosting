import React from 'react'

function TestimonialCard({ content, name, job, avatar }) {
    return (
        <div class="single-testimonial text-center mt-55">
            <div class="testimonial-caption">
                <img src={require("assets/img/icon/quotes-sign.png")} alt="" class="quotes-sign" />
                <p>{ content }</p>
            </div>                                    
            <div class="testimonial-founder d-flex align-items-center justify-content-center">
                <div class="founder-img">
                    <img src={ avatar } alt="" />
                </div>
                <div class="founder-text">
                    <span>{ name }</span>
                    <p>{ job }</p>
                </div>
            </div>
        </div> 
    )
}

export default TestimonialCard
