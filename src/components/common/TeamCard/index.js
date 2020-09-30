import React from 'react'

function TeamCard({ title, subtitle, image, to }) {
    return (
        <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="single-cat">
                <div class="cat-icon">
                    <img src={ require(`${image}`) } alt="" />
                </div>
                <div class="cat-cap">
                    <h5><a href={ to }>{ title }</a></h5>
                    <p>{ subtitle }</p>
                </div>
            </div>
        </div>
    )
}

export default TeamCard
