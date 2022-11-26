import React from "react";
import PrimaryButton from "../../../Components/PrimaryButton";

const AppointmentCard = ({ option, setTreatMent }) => {
    const {_id, name, slots, price} = option
  // console.log(option);
  return (
    <div>
      <div className="card  shadow-xl">
        <div className="card-body text-center">
          <h2 className=" text-xl font-semibold text-[#19D3AE]">{name}</h2>
          <p className=" text-sm">
            {
                slots.length > 0 ? slots[0] : 'No available today'
            }
          </p>
          <p className=" text-xs"> {slots.length}
            {
                slots.length > 0 ? ' SPACES AVAILABLE' : 'SPACE AVAILABLE'
            }
          </p>
          <p className=" text-xs">
            Price: {price}
          </p>
          <div className="card-actions justify-center">
            <label onClick={()=>setTreatMent(option)} htmlFor="booking-modal" className="btn border-none bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]">Book Appointment</label>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
