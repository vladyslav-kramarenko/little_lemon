import {Link} from 'react-router-dom';
import Bruschetta from './Bruschetta.svg';
import GreekSalad from './greek salad.jpg';
import LemonDessert from './lemon dessert.jpg'
import React from "react";
import './Specials.css';

function Specials() {
    return (
        <>
            <div className={"specials-header"}>
                <h2 className={"specials-title"}>Specials</h2>
                <Link to="/menu" className="button">Online Menu</Link>
            </div>
            <div className={"specials-food"}>
                <div className={"food-item"}>
                    <div className="food-item-img-container">
                        <img className="specials-food-item-img" src={GreekSalad} alt="Greek Salad"/>
                    </div>
                    {/*<img className={"specials-food-item-img"} src={GreekSalad}/>*/}
                    <h3>Greek Salad</h3>
                    <div className={"food-item-description"}>
                        The famous greek salad of crispy lettuce,
                        peppers, olives and our Chicago style feta cheese,
                        garnished with crunchy garlic and rosemary croutons.
                    </div>
                    <button className={"order-delivery-btn"}>Order Delivery</button>
                </div>

                <div className={"food-item"}>
                    <div className="food-item-img-container">
                        <img className="specials-food-item-img" src={Bruschetta} alt="Greek Salad"/>
                    </div>
                    {/*<img className={"specials-food-item-img"} src={Bruschetta}/>*/}
                    <h3>Bruschetta</h3>
                    <div className={"food-item-description"}>
                        Our Bruschetta is made from homemade grilled bread
                        that has been smeared with garlic and seasoned with salt and olive oil.
                        Topped with fresh vegetables.
                    </div>
                    <button className={"order-delivery-btn"}>Order Delivery</button>
                </div>

                <div className={"food-item"}>

                    <div className="food-item-img-container">
                        <img className="specials-food-item-img" src={LemonDessert} alt="Greek Salad"/>
                    </div>
                    {/*<img className={"specials-food-item-img"} src={LemonDessert}/>*/}
                    <h3>Lemon Cake</h3>
                    <div className={"food-item-description"}>
                        This comes straight from grandma’s recipe book,
                        every last ingredient has been sourced and is as authentic as can be imagined.
                    </div>
                    <button className={"order-delivery-btn"}>Order Delivery</button>
                </div>
            </div>
        </>
    );
}

export default Specials;
