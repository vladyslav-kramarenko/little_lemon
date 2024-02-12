import { render, screen } from '@testing-library/react';
import Booking from "./components/Booking";
import {initializeTimes, updateTimes } from './components/Booking'; // Adjust the path accordingly

// Write your tests here

test('Renders the BookingForm heading', () => {
  render(<Booking />);
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
