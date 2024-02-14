import {useState} from "react";
import {useNavigate} from "react-router-dom";
import fakeAPI from '../api';

function BookingForm({availableTimes, setSelectedDate}) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');

    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleDateChange = (e) => {
        setDate(e.target.value);
        setTime('--- Select a Time ---'); // Reset the time when the date changes
        setSelectedDate(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            date,
            time,
            guests,
            occasion
        };
        if(fakeAPI.submitAPI(formData)) {
            setSubmitted(true);
            navigate('/thank-you');
        }
    };

    return <form onSubmit={handleSubmit} className={'booking_form'} >
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date}
               onChange={handleDateChange}/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time}
                onChange={e => setTime(e.target.value)}>
            {
                availableTimes.map(
                    (time,index) =>
                        <option key={index}>{time}</option>
                )
            }
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests"
               value={guests}
               onChange={e => setGuests(e.target.value)}/>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion}
                onChange={e => setOccasion(e.target.value)}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation"/>
    </form>;
}
export default BookingForm;
