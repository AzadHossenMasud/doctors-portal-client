import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AppointmentOptions from '../AppointmentOptions/AppointmentOptions';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate]= useState( new Date())

    return (
        <div className=' mx-5'>
            <AppointmentBanner 
            selectedDate={selectedDate} setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailableAppointment selectedDate={selectedDate}></AvailableAppointment>
            <AppointmentOptions selectedDate={selectedDate}></AppointmentOptions>
        </div>
    );
};

export default Appointment;