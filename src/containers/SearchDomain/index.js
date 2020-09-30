import React from 'react'
import 'assets/css/themify-icons.css';
import 'assets/css/fontawesome-all.min.css';

function SearchDomain() {
    return (
        <div class="domain-search-area section-bg1">
           <div class="container">
               <div class="row">
                   <div class="col-xl-4 col-lg-5">
                       <h2>Search new domain</h2>
                       <p>Supercharge your WordPress hosting with detailed  website analytics, marketing tools.</p>
                   </div>
                   <div class="col-xl-8 col-lg-7">
                    
                        <form action="#" class="search-box">
                            <div class="input-form">
                                <input type="text" placeholder="Search for a domain" />
                                
                                <div class="search-form">
                                    <button><i class="ti-search"></i></button>
                                </div>
                                
                                <div class="world-form">
                                    <i class="fas fa-globe"></i>
                                </div>
                            </div>
                        </form>	
                        
                        <div class="single-domain pt-30 pb-30">
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
