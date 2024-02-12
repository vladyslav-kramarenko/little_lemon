import {useReducer} from "react";
import BookingForm from "./BookingForm";

const initializeTimes = () =>['17:00','18:00','19:00','20:00','21:00','22:00'];

const updateTimes = (state, selectedDate) => {
    return state;
}
function Main() {
    const [availableTimes,dispatch] = useReducer(updateTimes, initializeTimes());

    return <main>
        <div className={"container"}>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
        </div>
    </main>;
}

export default Main;