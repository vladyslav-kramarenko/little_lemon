import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import Booking from "./components/Booking";
import {initializeTimes, updateTimes} from './components/Booking';
import ThankYouPage from "./components/ThankYouPage";
import {MemoryRouter} from "react-router-dom";

test('Renders the BookingForm heading', () => {
    render(
        <MemoryRouter>
            <Booking />
        </MemoryRouter>
    );
    const headingElement = screen.getByText("Make Your reservation");
    expect(headingElement).toBeInTheDocument();
})

test('initializeTimes returns the expected array of times', () => {
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const actualTimes = initializeTimes();
    expect(actualTimes).toEqual(expectedTimes);
});

test('updateTimes returns the same value as provided in the state', () => {
    // Define the initial state
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    // Define the selected date
    const selectedDate = '2024-02-11';

    // Call the updateTimes function with the initial state and selected date
    const nextState = updateTimes(initialState, selectedDate);

    // Assert that the returned value is the same as the initial state
    expect(nextState).toEqual(initialState);
});

test('BookingForm can be submitted by the user', async () => {
    const {getByText} = render(
        <MemoryRouter initialEntries={['/']}>
            <Booking/>
            <ThankYouPage/>
        </MemoryRouter>
    );

    // Simulate user input
    fireEvent.change(screen.getByLabelText('Choose date'), {target: {value: '2024-02-11'}});
    fireEvent.change(screen.getByLabelText('Choose time'), {target: {value: '18:00'}});
    fireEvent.change(screen.getByLabelText('Number of guests'), {target: {value: '2'}});
    fireEvent.change(screen.getByLabelText('Occasion'), {target: {value: 'Birthday'}});

    // Simulate form submission
    fireEvent.click(screen.getByText('Make Your reservation'));

    await waitFor(() => expect(getByText('Thank you for your reservation!')).toBeInTheDocument());

});
