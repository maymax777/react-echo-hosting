import React from 'react'
import TeamCard from 'components/common/TeamCard'

function TeamService() {
    return (
        <section class="team-area section-padding40 section-bg1">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-12">
                        <div class="section-tittle text-center mb-105">
                            <h2>Most amazing features</h2>
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <TeamCard 
                        title="Employee Owned" 
                        subtitle="Supercharge your WordPress hosting with detailed website analytics, marketing tools."
                        image="assets/img/icon/services1.svg"
                        to="#"
                    />
                    <TeamCard 
                        title="Commitment to Security" 
                        subtitle="Supercharge your WordPress hosting with detailed website analytics, marketing tools."
                        image="assets/img/icon/services2.svg"
                        to="#"
                    />
                    <TeamCard 
                        title="Passion for Privacy" 
                        subtitle="Supercharge your WordPress hosting with detailed website analytics, marketing tools."
                        image="assets/img/icon/services3.svg"
                        to="#"
                    />
                    <TeamCard 
                        title="100% Uptime Guaranteed" 
                        subtitle="Supercharge your WordPress hosting with detailed website analytics, marketing tools."
                        image="assets/img/icon/services4.svg"
                        to="#"
                    />
                    <TeamCard 
                        title="24/7 Support" 
                        subtitle="Supercharge your WordPress hosting with detailed website analytics, marketing tools."
                        image="assets/img/icon/services5.svg"
                        to="#"
                    />
                    <TeamCard 
                        title="100% Uptime Guaranteed" 
                        subtitle="Supercharge your WordPress hosting with detailed website analytics, marketing tools."
                        image="assets/img/icon/services6.svg"
                        to="#"
                    />                    
                </div>
            </div>
        </section>
    )
}

export default TeamService
