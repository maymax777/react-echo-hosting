import React from 'react'

function PriceCard({ image, price, title, items }) {
    return (
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-10">
            <div class="single-card text-center mb-30">
                <div class="card-top">
                    <img src={ image } alt="" />
                    <h4>{ title }</h4>
                    <p>Starting at</p>
                </div>
                <div class="card-mid">
                    <h4>${ price }<span>/ month</span></h4>
                </div>
                <div class="card-bottom">
                    <ul>
                        { items.map(item => (<li>{item}</li>)) }
                    </ul>
                    <a href="#" class="borders-btn">Get Started</a>
                </div>
            </div>
        </div>
    )
}

export default PriceCard
