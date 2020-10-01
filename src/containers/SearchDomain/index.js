import React from 'react'
import 'assets/css/themify-icons.css';
import 'assets/css/fontawesome-all.min.css';
import SearchForm from 'components/SearchForm';

function SearchDomain() {
    return (
        <div className="domain-search-area section-bg1">
           <div className="container">
               <div className="row">
                   <div className="col-xl-4 col-lg-5">
                       <h2>Search new domain</h2>
                       <p>Supercharge your WordPress hosting with detailed  website analytics, marketing tools.</p>
                   </div>
                   <div className="col-xl-8 col-lg-7">                    
                        <SearchForm />                        
                        <div className="single-domain pt-30 pb-30">
                            <ul>
                                <li><span>.com</span> <p>$15.99</p></li>
                                <li><span>.net</span> <p>$10.99</p></li>
                                <li><span>.rog</span> <p>$10.99</p></li>
                                <li><span>.me</span> <p>$10.99</p></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchDomain
