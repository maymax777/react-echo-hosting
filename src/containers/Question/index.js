import React from 'react'
import QuestionCard from 'components/QuestionCard';
import Button from 'components/Button';

function Question() {
    return (
        <section class="ask-questions section-bg1 section-padding30 fix">
            <div class="container">                
                <div class="row justify-content-center">
                    <div class="col-xl-8 col-lg-9 col-md-10 ">                        
                        <div class="section-tittle text-center mb-90">
                            <h2>Frequently ask questions</h2>
                            <p>Supercharge your WordPress hosting with detailed website analytics, marketing tools. Our experts are just part of the reason Bluehost is the ideal home for your WordPress website. We're here to help you succeed!</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <QuestionCard 
                        question="Why can't people connect to the web server on my PC?"
                        answer="We operate one of the most advanced 100 Gbit networks in the world, complete with Anycast support and extensive DDoS protection."
                    />
                    <QuestionCard 
                        question="What domain name should I choose for my site?"
                        answer="We operate one of the most advanced 100 Gbit networks in the world, complete with Anycast support and extensive DDoS protection."
                    />
                    <QuestionCard 
                        question="How can I make my website work without www. in front?"
                        answer="We operate one of the most advanced 100 Gbit networks in the world, complete with Anycast support and extensive DDoS protection."
                    />
                    <QuestionCard 
                        question="Why does Internet Information Server want a password?"
                        answer="We operate one of the most advanced 100 Gbit networks in the world, complete with Anycast support and extensive DDoS protection."
                    />                    
                </div>
                <div class="row">
                    <div class="col-xl-12 ">                        
                        <Button to="#" label="Go to Support"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Question
