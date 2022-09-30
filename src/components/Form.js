import React from 'react'
import './styles/FormStyles.css'
import { useNavigate } from "react-router-dom"

const Form = () => {
    const navigate = useNavigate()
    return (
        <div className='form'>
            <form>
                <input type='text' placeholder='Your Name'></input>
                <input type='email' placeholder='Email'></input>
                <input type='text' placeholder='Subject'></input>
                <select>
                    <option style={{background: '#353230'}}>CHOOSE A SERVICE</option>
                    <option style={{background: '#353230'}}>Translation</option>
                    <option style={{background: '#353230'}}>Proof Reading</option>
                    <option style={{background: '#353230'}}>Consultation</option>
                </select>
                <textarea rows='6' placeholder='Type a short message here' />
                <button className='btn' onClick={() => navigate('/nomatch')}>SUBMIT</button>
            </form>
        </div>
    )
}

export default Form