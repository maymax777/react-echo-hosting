import React from 'react'
import QuestionCard from 'components/QuestionCard';
import Button from 'components/Button';
import SectionHeader from 'components/SectionHeader';

function Question() {
    return (
        <section className="ask-questions section-bg1 section-padding30 fix">
            <div className="container">                
                <SectionHeader 
                    title="Frequently ask questions"
                    subtitle="Supercharge your WordPress hosting with detailed website analytics, marketing tools. Our experts are just part of the reason Bluehost is the ideal home for your WordPress website. We're here to help you succeed!"
                />
                <div className="row">
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
                <div className="row">
                    <div className="col-xl-12 ">                        
                        <Button to="#" label="Go to Support"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Question
