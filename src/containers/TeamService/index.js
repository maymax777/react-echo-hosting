import React from 'react'
import TeamCard from 'components/TeamCard'
import SectionHeader from 'components/SectionHeader'

function TeamService() {
    return (
        <section className="team-area section-padding40 section-bg1">
            <div className="container">
                <SectionHeader title="Most amazing features"/>                
                
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
