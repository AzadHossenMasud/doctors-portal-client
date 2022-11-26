import React from "react";
import contactbg from "../../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div
      className=" mt-20 py-10"
      style={{
        backgroundImage: `url(${contactbg})`,
      }}
    >
      <h4
        className=" text-center text-[#19D3AE] font-bold text-xl
"
      >
        Contact Us
      </h4>
      <h2 className=" text-center text-3xl text-white">
        Stay connected with us
      </h2>
      <div className=" md:1/2 lg:w-1/3 mx-auto ">
        <form action="" className=" flex flex-col justify-center items-center px-5">
          <input
            type="text"
            placeholder="Email"
            className="input w-full my-5"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input w-full mb-5"
          />

          <textarea className="textarea w-full mb-5" placeholder="Your Message"></textarea>
          <button className="btn border-none bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] px-10">Submit</button>

        </form>
      </div>
    </div>
  );
};

export default ContactUs;
