import React from 'react'

function QuestionCard({ question, answer }) {
    return (
        <div className="col-lg-6 col-md-6">
            <div className="single-question d-flex mb-50">
                <span> Q.</span>
                <div className="pera">
                    <h2>{ question }</h2>
                    <p>{ answer} </p>
                </div>
            </div>
        </div>
    )
}

export default QuestionCard
