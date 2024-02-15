import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import Booking from "./components/Booking";
import {initializeTimes, updateTimes} from './components/Booking';
import ConfirmedBooking from "./components/ConfirmedBooking";
import {MemoryRouter} from "react-router-dom";
import {fetchAPI} from "./api";

test('Renders the BookingForm heading', () => {
    render(
        <MemoryRouter>
            <Booking />
        </MemoryRouter>
    );
    const headingElement = screen.getByText("Make Your reservation");
    expect(headingElement).toBeInTheDocument();
})

test('fetchAPI returns a non-empty array of times', async () => {
    const date=new Date('2024-02-11');
    const times = await fetchAPI(date);
    expect(Array.isArray(times)).toBe(true);
    expect(times.length).not.toBe(0);
});


test('Booking updates available times when selected date changes', async () => {
    const { getByLabelText, getAllByRole } = render(<Booking />);

    // Simulate changing the date
    fireEvent.change(getByLabelText(/choose date/i), { target: { value: '2024-02-11' } });

    // Wait for available times to update
    await waitFor(() => getAllByRole('option'));

    // Check that available times are not empty
    const times = getAllByRole('option');
    expect(times.length).not.toBe(0);
});


test('BookingForm can be submitted by the user', async () => {
    const {getByText} = render(
        <MemoryRouter initialEntries={['/']}>
            <Booking/>
            <ConfirmedBooking/>
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
