import React from 'react'
import PriceCard from 'components/common/PriceCard';

function Membership() {
    return (
        <section class="pricing-card-area fix">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-8 col-lg-8">
                        <div class="section-tittle text-center mb-90">
                            <h2>Choose plan which fit for you</h2>
                            <p>Supercharge your WordPress hosting with detailed website analytics, marketing tools. Our experts are just part of the reason Bluehost is the ideal home for your WordPress website. We're here to help you succeed!</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <PriceCard 
                        title="Shared Hosting" 
                        image={require("assets/img/icon/price1.svg")}
                        price="3.99"
                        items={[
                            "2 TB of space",
                            "unlimited bandwidth",
                            "full backup systems",
                            "free domain",
                            "unlimited database"
                        ]}
                    />
                    <PriceCard 
                        title="Dedicated Hosting" 
                        image={require("assets/img/icon/price2.svg")}
                        price="9.99"
                        items={[
                            "4 TB of space",
                            "unlimited bandwidth",
                            "full backup systems",
                            "free domain",
                            "unlimited database"
                        ]}
                    />
                    <PriceCard 
                        title="Cloud Hosting" 
                        image={require("assets/img/icon/price3.svg")}
                        price="49.99"
                        items={[
                            "8 TB of space",
                            "unlimited bandwidth",
                            "full backup systems",
                            "free domain",
                            "unlimited database"
                        ]}
                    />
                </div>
            </div>
        </section>
    )
}

export default Membership
