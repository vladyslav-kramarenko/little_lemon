import {Link} from "react-router-dom";
import logo from './Logo.png';
import './Footer.css';

function Footer() {
    return <footer>
        <img className={"logo"} src={logo} alt="Little Lemon Logo"/>
        <div className={"doormat"}>
            <div className="navigation" aria-label="Footer navigation">
                <h3>Navigation</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/booking">Reservations</Link></li>
                    <li><Link to="/order">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>

            <div className="contact">
                <h3>Contact</h3>
                <ul>
                    <li>Address</li>
                    <li><a href="tel:(098) 765 43-21">(098) 765 43-21</a></li>
                    <li><a href="mailto:info@little-lemon.com">info@little-lemon.com</a></li>
                </ul>
            </div>

            <div className="social">
                <h3>Social</h3>
                <ul>
                    <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                </ul>
            </div>
        </div>
    </footer>;
}

export default Footer;