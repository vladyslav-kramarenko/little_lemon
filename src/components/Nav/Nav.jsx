import {Link} from "react-router-dom";
import React from 'react';
import logo from './Logo.png';
import './Nav.css';

function Nav() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return <nav>
            <img className={"nav_logo"} src={logo} alt="Little Lemon Logo"/>
            <div className={"burger"} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`nav_links ${menuOpen ? "open" : ""}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><Link to="/order">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
    </nav>;
}

export default Nav;