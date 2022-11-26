import React from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import CareBanner from '../CareBanner/CareBanner';
import ContactUs from '../ContactUs/ContactUs';
import InfoCards from '../InfoCards/InfoCards';
import OurServices from '../OurServices/OurServices';
import Testimoniel from '../Testimoniel/Testimoniel';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <OurServices></OurServices>
            <CareBanner></CareBanner>
            <AppointmentBanner></AppointmentBanner>
            <Testimoniel></Testimoniel>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;