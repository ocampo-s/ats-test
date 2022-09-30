import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BannerImage from '../components/BannerImage'

const Pricing = () => {
    return (
        <div>
            <Navbar />
            <BannerImage heading='FORM NOT SENT' text='We are sorry. The form cannot be sent for now.' />
            <Footer />
        </div>
    )
}

export default Pricing