import React from "react";
import cavity from '../../../assets/images/cavity.png'
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'

const OurServices = () => {
  return (
    <div className=" text-center">
        <h2 className=" text-[#19D3AE] text-base font-semibold uppercase mb-2">Our Sevices</h2>
        <h2 className=" text-[#3A4256] text-3xl  uppercase">Services We Provide</h2>
    
      <div className="mt-16 text-center grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6">
        <div className=" flex flex-col justify-center gap-5 p-5">
            <img className=" h-28 w-28 mx-auto" src={fluoride} alt="" />
            <div className="px-5">
                <h2 className=" font-semibold text-xl mb-2" >Fluoride Treatment</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        
        <div className=" flex flex-col justify-center gap-5 p-5">
            <img className=" h-28 w-28 mx-auto" src={cavity} alt="" />
            <div className="px-5">
                <h2 className=" font-semibold text-xl mb-2" >Cavity Filling</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        
        <div className=" flex flex-col justify-center gap-5 p-5">
            <img className=" h-28 w-28 mx-auto" src={whitening} alt="" />
            <div className="px-5">
                <h2 className=" font-semibold text-xl mb-2" >Teeth Whiteining</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default OurServices;
