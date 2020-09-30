import React from 'react'

function QuestionCard({ question, answer }) {
    return (
        <div class="col-lg-6 col-md-6">
            <div class="single-question d-flex mb-50">
                <span> Q.</span>
                <div class="pera">
                    <h2>{ question }</h2>
                    <p>{ answer} </p>
                </div>
            </div>
        </div>
    )
}

export default QuestionCard
