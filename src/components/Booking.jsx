import { useReducer } from "react";
import BookingForm from "./BookingForm";

export const initializeTimes = () => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

export const updateTimes = (state, selectedDate) => {
    return state;
}

function Booking() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <div className={"container"}>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </div>
    );
}

export default Booking;
