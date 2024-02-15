import {Link} from "react-router-dom";
import restaurantFood from './restaurantFood.jpg';
import './Header.css';
function Header(){
    return <header >
        <div className={"container"}>
        {/*    <div>*/}
                <div className="text-section">
                    <h1 className={"restaurant-name"}>Little Lemon</h1>
                    <p className={"restaurant-location"}>Chicago</p>
                    <p className={"restaurant-description"}>
                        We are a family owned Mediterranean restaurant,
                        focused on traditional recipes served with a modern twist.
                    </p>
                    <Link to="/booking">
                        <button>Reserve a Table</button>
                    </Link>
                </div>
                <div className={"image-section"}>
                    <img src={restaurantFood} alt={"restaurantFood"}/>
                </div>
            {/*</div>*/}

        </div>
    </header>
}

export default Header;