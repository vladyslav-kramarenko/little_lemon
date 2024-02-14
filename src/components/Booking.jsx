import { useEffect, useState } from 'react';
import BookingForm from './BookingForm';
import fakeAPI from '../api';
import {useNavigate} from "react-router-dom";
function Booking() {
const [selectedDate, setSelectedDate] = useState(new Date());
    const [availableTimes, setAvailableTimes] = useState([]);
    const navigate = useNavigate(); // Добавьте эту строку
    const submitForm = (formData) => {
        if (fakeAPI.submitAPI(formData)) {
            navigate('/thank-you');
        }
    };

    useEffect(() => {
        fakeAPI.fetchAPI(new Date(selectedDate))
            .then(times => {
                setAvailableTimes(times);
            })
            .catch(error => {
                console.error('Error fetching available times:', error);
            });
    }, [selectedDate]);

    return (
        <div className="container">1
            <BookingForm availableTimes={availableTimes} selectedDate={selectedDate} setSelectedDate={setSelectedDate} submitForm={submitForm}/>
        </div>
    );
}

export default Booking;
