import React from 'react'
import {Link} from 'react-router-dom'
import './styles/ServiceCardsStyles.css'

const ServiceCards = () => {
    return (
        <div className='cards'>
            <div className='card-container'>
                <div className='card'>
                    <h3>TRANSLATION</h3>
                    <span className='bar'></span>
                    <p>- Finnish to English -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3>PROOF READING</h3>
                    <span className='bar'></span>
                    <p>- low-level corrections -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3>REVISIONS</h3>
                    <span className='bar'></span>
                    <p>- heavy text revision -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3>CONSULTATION</h3>
                    <span className='bar'></span>
                    <p>- Let's talk language -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
            </div>
        </div>
    )
}

export default ServiceCards