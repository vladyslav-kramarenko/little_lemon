import {useState} from "react";

function BookingForm({availableTimes, dispatch}) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');
    const handleDateChange = (e) =>{
        setDate(e.target.value);
        dispatch(e.target.value);
    }

    return <form className={'booking_form'} >
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date}
               onChange={e => setDate(e.target.value)}/>
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