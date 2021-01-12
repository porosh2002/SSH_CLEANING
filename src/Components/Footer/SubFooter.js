import React from 'react'
import { Link } from 'react-router-dom'

function SubFooter() {
    return (
        <div className='SubFooter'>
            <p  className="SubFooterLink">© The SSH Group Ltd. All rights reserved.</p>
            <Link to='#' className="SubFooterLink">Privacy & Policy</Link>
            <Link to='#' className="SubFooterLink">Terms and Condition</Link>
        </div>
    )
}
export default SubFooter;
