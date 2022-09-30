import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BannerImage from '../components/BannerImage'

const Pricing = () => {
    return (
        <div>
            <Navbar />
            <BannerImage heading='PRICING' text='€ XX to € YY per thousand words.' />
            <Footer />
        </div>
    )
}

export default Pricing