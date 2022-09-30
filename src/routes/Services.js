import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ServiceCards from '../components/ServiceCards'
import BannerImage from '../components/BannerImage'

const Services = () => {
    return (
        <div>
            <Navbar />
            <BannerImage heading='SERVICES' text='BOOK A SERVICE' />
            
            <ServiceCards />
            <Footer />
        </div>
    )
}

export default Services