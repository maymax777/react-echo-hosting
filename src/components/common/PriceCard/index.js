import React from 'react'

function PriceCard({ image, price, title, items }) {
    return (
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10">
            <div className="single-card text-center mb-30">
                <div className="card-top">
                    <img src={ image } alt="" />
                    <h4>{ title }</h4>
                    <p>Starting at</p>
                </div>
                <div className="card-mid">
                    <h4>${ price }<span>/ month</span></h4>
                </div>
                <div className="card-bottom">
                    <ul>
                        { items.map(item => (<li key={item}>{item}</li>)) }
                    </ul>
                    <a href="#" className="borders-btn">Get Started</a>
                </div>
            </div>
        </div>
    )
}

export default PriceCard
