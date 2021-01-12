import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Images/SSH-Cleaning.png';
import {HiOutlineMail} from 'react-icons/hi'
import {FaPhoneAlt} from 'react-icons/fa'
function Footer() {
    return (
        <div className='Footer'>
            <div className='FooterContent'>
            <img src={Logo} className='FooterLogo' alt='SSH Cleaning' />
            </div>
            <div className='FooterContent'>
                <p className='Footertitle'>About us</p>
                <Link to='#' className='FooterDes'>Job Vacancies</Link>
                <Link to='#' className='FooterDes'>Our Values</Link>
                <Link to='#' className='FooterDes'>Staff Training</Link>
                <Link to='#' className='FooterDes'>Our Services</Link>
            </div>
            <div className='FooterContent'>
                <p className='Footertitle'>Contact us</p>
                <Link to='#' className='FooterDes'><span className='FooterIcon'><HiOutlineMail /></span>office@thesshgroup.co.uk</Link>
                <Link to='#' className='FooterDes'><span className='FooterIcon'><FaPhoneAlt /></span>02392 839114</Link>
            </div>
            <div className='FooterContent'>
                <p className='Footertitle'>Follow us on</p>
                <Link to='#' className='FooterDes'><span className='FooterIcon'><HiOutlineMail /></span>office@thesshgroup.co.uk</Link>
                <Link to='#' className='FooterDes'><span className='FooterIcon'><FaPhoneAlt /></span>02392 839114</Link>
            </div>
        </div>
    )
}

export default Footer
