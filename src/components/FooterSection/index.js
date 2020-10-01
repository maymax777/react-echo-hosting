import React from 'react'

function FooterSection({ title, items }) {
    return (
        <div className="single-footer-caption mb-50">
            <div className="footer-tittle">
                <h4>{ title }</h4>
                <ul>
                    { items.map(item => <li key={item.label}><a to={ item.to }>{ item.label }</a></li>) }
                </ul>
            </div>
        </div>
    )
}

export default FooterSection
