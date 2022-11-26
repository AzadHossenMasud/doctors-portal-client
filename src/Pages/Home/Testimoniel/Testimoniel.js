import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'

const Testimoniel = () => {
  return (
    <div className=" mt-20 ">
      <h4 className=" text-xl font-bold text-[#19D3AE]">Tesimoniel</h4>
      <div className=" flex justify-between">
        <h1 className=" text-3xl text-[#3A4256]  font-normal">
          What Our Patients Says
        </h1>
        <img className=" h-20 lg:h-36 " src={quote} alt="" />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-10 px-10">
        <div>
          <p>
            It is a long established fact that by the readable content of a lot
            layout. The point of using Lorem a more-or-less normal distribu to
            using Content here, content
          </p>
          <div className=" flex justify-start items-center gap-x-6 mt-6">
            <img className="p-1 h-16 w-16 border-2 border-[#19D3AE] rounded-full" src={people1} alt="" />
            <div >
                <h5 className=" text-xl text-[#3A4256]">Winson Herry</h5>
                <p className=" text-[#000000]">California</p>
            </div>
          </div>
        </div>
        <div>
          <p>
            It is a long established fact that by the readable content of a lot
            layout. The point of using Lorem a more-or-less normal distribu to
            using Content here, content
          </p>
          <div className=" flex justify-start items-center gap-x-6 mt-6">
            <img className="p-1 h-16 w-16 border-2 border-[#19D3AE] rounded-full" src={people1} alt="" />
            <div >
                <h5 className=" text-xl text-[#3A4256]">Winson Herry</h5>
                <p className=" text-[#000000]">California</p>
            </div>
          </div>
        </div>
        <div>
          <p>
            It is a long established fact that by the readable content of a lot
            layout. The point of using Lorem a more-or-less normal distribu to
            using Content here, content
          </p>
          <div className=" flex justify-start items-center gap-x-6 mt-6">
            <img className="p-1 h-16 w-16 border-2 border-[#19D3AE] rounded-full" src={people1} alt="" />
            <div >
                <h5 className=" text-xl text-[#3A4256]">Winson Herry</h5>
                <p className=" text-[#000000]">California</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimoniel;
