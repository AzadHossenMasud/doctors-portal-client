import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import phone from '../../../assets/icons/phone.svg'
import location from '../../../assets/icons/marker.svg'


const InfoCards = () => {
    return (
        <div className=' my-20 mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                <div className=' px-8 py-12 rounded-md  bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] flex flex-col lg:flex-row gap-x-4 items-center text-white justify-around'>
                    <div><img  className='' src={clock} alt="" /></div>
                    <div>
                        <h1 className=' text-[20px] font-semibold mb-2'>Opening Hours</h1>
                        <p className=' font-thin text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores.</p>
                    </div>
                </div>

                <div className=' px-8 py-12 rounded-md  bg-[#3A4256] flex flex-col lg:flex-row gap-x-4 items-center text-white justify-around'>
                    <div><img  src={location} alt="" /></div>
                    <div>
                        <h1 className=' text-[20px] font-semibold mb-2'>Visit Our Location</h1>
                        <p className='font-thin text-base'>Brooklyn, NY 10036, United States.</p>
                    </div>
                </div>

                <div className=' px-8 py-12 rounded-md  bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] flex flex-col lg:flex-row gap-x-4 items-center text-white justify-around'>
                    <div><img  src={phone} alt="" /></div>
                    <div>
                        <h1 className=' text-[20px] font-semibold mb-2'>Contact Us Now</h1>
                        <p className=' font-thin text-base'>+000 123 456789</p>
                    </div>
                </div>

        </div>
    );
};

export default InfoCards;