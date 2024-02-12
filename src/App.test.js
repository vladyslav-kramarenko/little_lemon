import { render, screen } from '@testing-library/react';
import Booking from "./components/Booking";

test('Renders the BookingForm heading', () => {
  render(<Booking />);
  const headingElement = screen.getByText("Make Your reservation");
  expect(headingElement).toBeInTheDocument();
})