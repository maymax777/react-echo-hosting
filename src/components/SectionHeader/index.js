import React from 'react'

function SectionHeader({ title, subtitle }) {
    return (
        <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-10 ">                        
                <div className="section-tittle text-center mb-90">
                    <h2>{ title }</h2>
                    <p>{ subtitle }</p>
                </div>
            </div>
        </div>
    )
}

export default SectionHeader
