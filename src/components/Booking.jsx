import { useEffect, useState } from 'react';
import BookingForm from './BookingForm/BookingForm';
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

    const updateTimes = async (selectedDate) => {
        try {
            const times = await fakeAPI.fetchAPI(new Date(selectedDate));
            setAvailableTimes(times);
        } catch (error) {
            console.error('Error fetching available times:', error);
        }
    };

    useEffect(() => {
        updateTimes(selectedDate);
    }, [selectedDate]);

    return (
        <div className="container">
            <BookingForm availableTimes={availableTimes}
                         selectedDate={selectedDate}
                         setSelectedDate={setSelectedDate}
                         submitForm={submitForm}/>
        </div>
    );
}

export default Booking;
