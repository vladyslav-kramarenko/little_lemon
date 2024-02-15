import {Link} from "react-router-dom";
import logo from './Logo.png';
import './Nav.css';

function Nav() {
    return <nav>
        <div className={"container"}>
            <ul className={"nav_links"}>
                <li><img className={"nav_logo"} src={logo} alt="Logo"/></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><Link to="/order">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </div>
    </nav>;
}

export default Nav;