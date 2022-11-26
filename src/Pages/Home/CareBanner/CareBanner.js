import React from "react";
import treatment from '../../../assets/images/treatment.png'

const CareBanner = () => {
  return (
    <div className=" w-full md:w-11/12 lg:w-3/4 mx-auto">
      <div className="hero my-20 bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-x-10">
          <img
            src={treatment}
            className=" rounded-lg shadow-2xl w-full md:w-1/2 my-10" alt=""
          />
          <div className="w-full md:w-1/2">
            <h1 className=" text-[#3A4256] text-4xl font-bold">Exceptional Dental Care, on Your Terms</h1>
            <p className="py-6 font-normal">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn border-none  bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareBanner;
