function Footer() {
    return <footer>
        <div className={"container"}>
        <div className="doormat">
            <img src="logo.png" alt="Logo"/>
        </div>

        <div className="navigation">
            <h3>Doormat Navigation</h3>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
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