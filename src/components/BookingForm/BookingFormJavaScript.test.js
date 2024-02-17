import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import BookingForm from "./BookingForm";
import userEvent from "@testing-library/user-event";
import {act} from "react-dom/test-utils";

describe('BookingForm JavaScript Validation', () => {
    it('displays error message when date is in the past', async () => {
        render(
            <MemoryRouter>
                <BookingForm availableTimes={['10:00', '11:00']} setSelectedDate={() => {
                }} submitForm={() => {
                }}/>
            </MemoryRouter>
        );

        const dateInput = screen.getByLabelText('Choose date');
        fireEvent.change(dateInput, {target: {value: '2022-01-01'}});
        fireEvent.blur(dateInput); // Simulate field blur to trigger validation

        const errorMessage = await screen.findByText(/Reservation date cannot be in the past/);
        expect(errorMessage).toBeInTheDocument();
    });

    it('displays error message when date is more then 1 year in the future', async () => {
        render(
            <MemoryRouter>
                <BookingForm availableTimes={['10:00', '11:00']} setSelectedDate={() => {
                }} submitForm={() => {
                }}/>
            </MemoryRouter>
        );

        const dateInput = screen.getByLabelText('Choose date');
        fireEvent.change(dateInput, {target: {value: '2032-01-01'}});
        fireEvent.blur(dateInput); // Simulate field blur to trigger validation

        const errorMessage = await screen.findByText(/Reservation date cannot be more than one year in the future/);
        expect(errorMessage).toBeInTheDocument();
    });

    it('validates number of guests is within the allowed range', async () => {
        render(
            <MemoryRouter>
                <BookingForm availableTimes={['10:00', '11:00']} setSelectedDate={() => {
                }} submitForm={() => {
                }}/>
            </MemoryRouter>
        );

        const guestsInput = screen.getByLabelText('Number of guests');
        fireEvent.change(guestsInput, {target: {value: '0'}});
        fireEvent.blur(guestsInput);

        const errorMessage = await screen.findByText(/At least one guest is required/);
        expect(errorMessage).toBeInTheDocument();
    });

    it('allows submission with valid data', async () => {
        const submitMock = jest.fn();
        render(
            <MemoryRouter>
                <BookingForm availableTimes={['10:00', '11:00']} setSelectedDate={() => {
                }} submitForm={submitMock}/>
            </MemoryRouter>
        );

        await act(async () => {
            const dateInput = screen.getByLabelText('Choose date');
            fireEvent.change(dateInput, {target: {value: '2024-05-05'}});

            userEvent.selectOptions(screen.getByLabelText('Choose time'), ['10:00']);

            const guestsInput = screen.getByLabelText('Number of guests');
            fireEvent.change(guestsInput, {target: {value: '2'}});

            const occasionInput =screen.getByLabelText('Occasion')
            userEvent.selectOptions(occasionInput, ['Birthday']);
        });

        await act(async () => {
            const submit = screen.getByRole('button', {name: /make your reservation/i})
            userEvent.click(submit);
        });

        await waitFor(() => {
            expect(submitMock).toHaveBeenCalled();
        });
    });
});