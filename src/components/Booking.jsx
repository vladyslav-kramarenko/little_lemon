import { useEffect, useState } from 'react';
import { fetchAPI } from '../api';
import BookingForm from './BookingForm';

function Booking() {
const [selectedDate, setSelectedDate] = useState(new Date());
    const [availableTimes, setAvailableTimes] = useState([]);

    useEffect(() => {
        fetchAPI(new Date(selectedDate))
            .then(times => {
                setAvailableTimes(times);
            })
            .catch(error => {
                console.error('Error fetching available times:', error);
            });
    }, [selectedDate]);

    return (
        <div className="container">
            <BookingForm availableTimes={availableTimes} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </div>
    );
}

export default Booking;
