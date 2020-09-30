import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/scss/style.scss';

function Header() {
    return (
        <div>
            <header>
                <div className="header-area header-transparent">
                    <div className="main-header ">
                        <div className="header-bottom  header-sticky">
                            <div className="container-fluid">
                                <div className="row align-items-center">
                                    <div className="col-xl-2 col-lg-2">
                                        <div className="logo">
                                            <Link to="/"><img src={require("assets/img/logo/logo.png")} alt="" /></Link>
                                        </div>
                                    </div>
                                    <div className="col-xl-10 col-lg-10">
                                        <div className="menu-wrapper d-flex align-items-center justify-content-end">
                                            <div className="main-menu d-none d-lg-block">
                                                <nav>
                                                    <ul id="navigation">
                                                        <li><Link to="/">Home</Link></li>
                                                        <li><Link to="packages">Packages</Link></li>
                                                        <li><Link to="help">Help</Link></li>
                                                        <li><Link to="#">Blog</Link>
                                                            <ul className="submenu">
                                                                <li><Link to="blog">Blog</Link></li>
                                                                <li><Link to="blog_details">Blog Details</Link></li>
                                                                <li><Link to="elements">Element</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li><Link to="contact">Contact</Link></li>
                                                        <li className="button-header margin-left "><Link to="register" className="btn">Sign Up</Link></li>
                                                        <li className="button-header"><Link to="login" className="btn3">Sign In</Link></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mobile_menu d-block d-lg-none"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
