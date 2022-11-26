import { format } from "date-fns";
import React from "react";

const AvailableAppointment = ({ selectedDate }) => {
  console.log();
  return (
    <section className=" my-10">
      <p
        className=" text-center text-[22px] text-[#19D3AE]
"
      >
        Available Appointments on {format(selectedDate, "PP")}
      </p>
    </section>
  );
};

export default AvailableAppointment;
