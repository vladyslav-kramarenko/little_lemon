import {Link} from "react-router-dom";

function Footer() {
    return <footer>
        <div className={"container"}>
        <div className="doormat">
            <img src="logo.png" alt="Logo"/>
        </div>

        <div className="navigation">
            <h3>Doormat Navigation</h3>
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
                    <li>phone</li>
                    <li>email</li>
                </ul>
            </div>

            <div className="social">
                <h3>Social</h3>
                <ul>
                    <li>Address</li>
                    <li>phone</li>
                    <li>email</li>
                </ul>
            </div>
        </div>
    </footer>;
}

export default Footer;