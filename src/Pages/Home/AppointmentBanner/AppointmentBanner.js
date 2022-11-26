import React from "react";
import doctor from '../../../assets/images/doctor.png'
import bgdoctor from '../../../assets/images/appointment.png'

const AppointmentBanner = () => {
  return (
    <section  className=" ">
      <div className="hero bg-base-200"  style={{ 
      backgroundImage: `url(${bgdoctor})` 
    }}>
        <div className="hero-content flex-col lg:flex-row gap-x-6">
          <img
            src={doctor}
            className=" -mt-36 hidden lg:flex rounded-lg shadow-2xl lg:w-1/2 " alt=""
          />
          <div className=" lg:w-1/2  ">
            <h4 className=" text-sm font-bold text-[#19D3AE]">Appointment</h4>
            <h1 className="text-white text-3xl font-bold">Make an appointment Today</h1>
            <p className="text-white py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn border-none bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
