import React from 'react';
import {useLocation} from "react-router-dom";
import './ConfirmedBooking.css';

function ConfirmedBooking() {
    const location = useLocation(); // Access location object
    const reservation = location.state?.reservation; // Access reservation details passed as state

    return (
        <main className="confirmed-booking">
            <h2>Thank you for your reservation!</h2>
            {reservation && ( // Conditional rendering if reservation details exist
                <div className="reservation-details">
                    <p>Date: {reservation.date}</p>
                    <p>Time: {reservation.time}</p>
                    <p>Guests: {reservation.guests}</p>
                    <p>Occasion: {reservation.occasion}</p>
                </div>
            )}
        </main>
    );
}

export default ConfirmedBooking;
