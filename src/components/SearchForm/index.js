import React from 'react'

function SearchForm() {
    return (
        <form action="#" className="search-box">
            <div className="input-form">
                <input type="text" placeholder="Search for a domain" />
                
                <div className="search-form">
                    <button><i className="ti-search"></i></button>
                </div>
                
                <div className="world-form">
                    <i className="fas fa-globe"></i>
                </div>
            </div>
        </form>	
    )
}

export default SearchForm
