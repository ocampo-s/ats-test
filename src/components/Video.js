import React from 'react'
import { Link } from 'react-router-dom'
import './styles/VideoStyles.css'
//import logo from '../assets/atsLogoLV.png'
//import bgVideo from '../assets/bg_green.mp4'

const Video = () => {
    return (
        <div className='foregrnd'>
            <video autoPlay loop muted id='video'>
                <source src={process.env.PUBLIC_URL+"bg_green.mp4"} type='video/mp4' />
            </video>
            <div className='content'>
                <img src={process.env.PUBLIC_URL+"atsLogo.png"} className='img' alt=''/>
                <br/><br/><br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <br/><br/>
                <div>
                    <Link to='/services' className='btn'>SERVICES</Link>
                    <Link to='/contact' className='btn'>CONTACT US</Link>
                </div>
            </div>
        </div>
    )
}

export default Video