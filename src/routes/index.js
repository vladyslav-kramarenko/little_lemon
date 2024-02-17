import React from 'react';
import {Route, Routes as RouterRoutes} from 'react-router-dom';
import Menu from '../components/Menu';
import Contacts from '../components/Contacts';
import About from '../components/About';
import Main from "../components/Main";
import Booking from "../components/Booking/Booking";
import ConfirmedBooking from "../components/Booking/ConfirmedBooking";

const Routes = () => (
    <RouterRoutes>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        {/*<Route path="/about" element={<About/>}/>*/}
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/thank-you" element={<ConfirmedBooking />} />
        <Route path="*" element={<Main/>}/>
    </RouterRoutes>
);

export default Routes;
