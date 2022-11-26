import React, { useState } from "react";
import chair from '../../../assets/images/chair.png' 
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    // console.log(selectedDate)
  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className=" w-full lg:w-1/2 rounded-lg shadow-2xl" alt=""
          />
          <div className=" w-full lg:w-1/2  ">
           <DayPicker className="flex justify-center"
           mode="single"
           selected={selectedDate}
           onSelect={setSelectedDate}></DayPicker>
           <p>You picked {format(selectedDate, 'PP')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
