import React from 'react'

function TeamCard({ title, subtitle, image, to }) {
    return (
        <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="single-cat">
                <div className="cat-icon">
                    <img src={ image } alt="" />
                </div>
                <div className="cat-cap">
                    <h5><a href={ to }>{ title }</a></h5>
                    <p>{ subtitle }</p>
                </div>
            </div>
        </div>
    )
}

export default TeamCard
