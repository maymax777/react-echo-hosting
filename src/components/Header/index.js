import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from 'components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/scss/style.scss';

function Header() {
    const menu = [
        {to: '/', label: 'Home', submenu: []},
        {to: '/', label: 'Packages', submenu: []},
        {to: '/', label: 'Help', submenu: []},
        {to: '/', label: 'Blog', submenu: [
            {to: '/', label: 'Blog'},
            {to: '/', label: 'Blog Details'},
            {to: '/', label: 'Element'}
        ]},
        {to: '/', label: 'Contact', submenu: []}        
    ];
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
                                        <Navigation menu={menu} />                                        
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
