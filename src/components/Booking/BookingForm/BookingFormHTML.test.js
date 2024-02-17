import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import BookingForm from "./BookingForm";

describe('BookingForm HTML5 Validation', () => {
    it('applies correct attributes to the guests input field', () => {
        render(
            <MemoryRouter>
                <BookingForm availableTimes={['10:00', '11:00']} setSelectedDate={() => {
                }} submitForm={() => {
                }}/>
            </MemoryRouter>
        );

        const guestsInput = screen.getByLabelText('Number of guests');
        expect(guestsInput).toHaveAttribute('type', 'number');
        expect(guestsInput).toHaveAttribute('min', '1');
        expect(guestsInput).toHaveAttribute('max', '10');
    });

    it('applies correct attributes to the date input field', () => {
        render(
            <MemoryRouter>
                <BookingForm availableTimes={['10:00', '11:00']} setSelectedDate={() => {
                }} submitForm={() => {
                }}/>
            </MemoryRouter>
        );

        const dateInput = screen.getByLabelText('Choose date');
        expect(dateInput).toHaveAttribute('type', 'date');
    });

    it('ensures the time select field prompts for selection', () => {
        render(
            <MemoryRouter>
                <BookingForm availableTimes={['10:00', '11:00']} setSelectedDate={() => {
                }} submitForm={() => {
                }}/>
            </MemoryRouter>
        );

        const timeSelect = screen.getByLabelText('Choose time');
        const firstOption = timeSelect.firstChild;
        expect(firstOption).toHaveAttribute('value', '');
        expect(firstOption).toBeDisabled();
    });

    it('ensures the occasion select field prompts for selection', () => {
        render(
            <MemoryRouter>
                <BookingForm availableTimes={['10:00', '11:00']} setSelectedDate={() => {
                }} submitForm={() => {
                }}/>
            </MemoryRouter>
        );

        const occasionSelect = screen.getByLabelText('Occasion');
        const firstOption = occasionSelect.firstChild;
        expect(firstOption).toHaveTextContent('No Special Reason'); // Checking the text content of the placeholder option
    });
});