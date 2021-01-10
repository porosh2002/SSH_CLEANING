import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Images/SSH-Cleaning.png'
function Navigation() {
    return (
        <div className='Navigation'>
            <Link className='LinkLogo' to='#'><img src={Logo} alt='SSH Cleaning'/></Link>
            <nav>
                <ul className='NavigationUL'>
                    <li><Link className='MenuLink' to='#'>Home</Link></li>
                    <li><Link className='MenuLink' to='#'>Services</Link></li>
                    <li><Link className='MenuLink' to='#'>About us</Link></li>
                    <li><Link className='MenuLink' to='#'>Our Work</Link></li>
                    <li><Link className='MenuLink' to='#'>News</Link></li>
                    <li><Link className='MenuLink' to='#'>Contact us</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
