import React from 'react'
import TeamCard from 'components/TeamCard'

function TeamService() {
    return (
        <section className="team-area section-padding40 section-bg1">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <div className="section-tittle text-center mb-105">
                            <h2>Most amazing features</h2>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <TeamCard 
                        title="Employee Owned" 
                        subtitle="Supercharge your WordPress hosting with detailed website analytics, marketing tools."
                        image={require("assets/img/icon/services1.svg")}
                        to="#"
                    />
                    <TeamCard 
                        title="Commitment to Security" 
                        subtitle="Supercharge your WordPress hosting with detailed website analytics, marketing tools."
                        image={require("assets/img/icon/services2.svg")}
                        to="#"
                    />
                    <TeamCard 
                        title="Passion for Privacy" 
                        subtitle="Supercharge your WordPress hosting with detailed website analytics, marketing tools."
                        image={require("assets/img/icon/services3.svg")}
                        to="#"
                    />
                    <TeamCard 
                        title="100% Uptime Guaranteed" 
                        subtitle="Supercharge your WordPress hosting with detailed website analytics, marketing tools."
                        image={require("assets/img/icon/services4.svg")}
                        to="#"
                    />
                    <TeamCard 
                        title="24/7 Support" 
                        subtitle="Supercharge your WordPress hosting with detailed website analytics, marketing tools."
                        image={require("assets/img/icon/services5.svg")}
                        to="#"
                    />
                    <TeamCard 
                        title="100% Uptime Guaranteed" 
                        subtitle="Supercharge your WordPress hosting with detailed website analytics, marketing tools."
                        image={require("assets/img/icon/services6.svg")}
                        to="#"
                    />                    
                </div>
            </div>
        </section>
    )
}

export default TeamService
