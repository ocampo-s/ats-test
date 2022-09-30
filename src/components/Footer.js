import React from 'react'
import './styles/FooterStyles.css'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { ImLocation } from "react-icons/im"
import { GrMail } from "react-icons/gr"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <ImLocation size={20} style={{ color: '#ffffff', marginRight: '.7rem' }} />
                        <div>
                            <p>Helsinki | FINLAND</p>
                        </div>
                    </div>
                    
                    <div className='email'>
                        <p><GrMail size={20} style={{ color: '#ffffff', marginRight: '.7rem' }} /> ats@someemail.fi</p>
                    </div>
                </div>
                <div className='right'>
                    <h4>OUR TEAM</h4>
                    <p>enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
                    <br/><br/>
                    <div className='social'>
                        <FaFacebook size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        <FaTwitter size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        <FaLinkedin size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer