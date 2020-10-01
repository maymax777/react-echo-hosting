import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/Button';

function Navigation({ menu }) {
    const menuItem = item => {
        return (
            <li key={item.label}>
                <Link to={ item.to }>{ item.label }</Link>
                { item.submenu.length > 0 ? subMenuItem(item.submenu): [] }
            </li>
        );
    }
    const subMenuItem = subItem => {
        return (
            <ul className="submenu">
                { subItem.map(item => <li key={item.label}><Link to={ item.to }>{ item.label }</Link></li>) }
            </ul>
        );
    }
    return (
        <div className="menu-wrapper d-flex align-items-center justify-content-end">
            <div className="main-menu d-none d-lg-block">
                <nav>
                    <ul id="navigation">
                        { menu.map(item => menuItem(item)) }                               
                        <li className="button-header margin-left "><Button to="register" label="Sign Up"/></li>
                        <li className="button-header"><Link to="login" className="btn3">Sign In</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navigation
