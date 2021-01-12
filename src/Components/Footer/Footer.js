import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Images/SSH-Cleaning.png';
import {HiOutlineMail} from 'react-icons/hi'
import {FaPhoneAlt} from 'react-icons/fa'
import { AiFillFacebook,AiFillLinkedin,AiFillTwitterSquare } from "react-icons/ai";
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
                <Link to='#' className='FooterDes'><span className='FooterIcon'><HiOutlineMail /></span>
                
                <span className='FooterContactDes'>office@thesshgroup.co.uk</span>
                </Link>
                <Link to='#' className='FooterDes'><span className='FooterIcon'><FaPhoneAlt /></span><span className='FooterContactDes'>02392 839114</span></Link>
            </div>
            <div className='FooterContent'>
                <p className='Footertitle'>Follow us on</p>
<Link className='FooterSocialIcon' to='#'><AiFillFacebook /></Link>
<Link className='FooterSocialIcon' to='#'><AiFillLinkedin /></Link>
<Link className='FooterSocialIcon' to='#'><AiFillTwitterSquare /></Link>
            </div>
        </div>
    )
}

export default Footer
