import React from 'react'

function TestimonialCard({ content, name, job, avatar }) {
    return (
        <div className="single-testimonial text-center mt-55">
            <div className="testimonial-caption">
                <img src={require("assets/img/icon/quotes-sign.png")} alt="" className="quotes-sign" />
                <p>{ content }</p>
            </div>                                    
            <div className="testimonial-founder d-flex align-items-center justify-content-center">
                <div className="founder-img">
                    <img src={ avatar } alt="" />
                </div>
                <div className="founder-text">
                    <span>{ name }</span>
                    <p>{ job }</p>
                </div>
            </div>
        </div> 
    )
}

export default TestimonialCard
