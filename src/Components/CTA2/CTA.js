import React from 'react'
import { Link } from 'react-router-dom'
function CTA() {
    return (
        <div className='CTA'>
            <div className='CTA_Wrap'>
                <div className='CTA_Text'>
                    <p className='CTA_Title'>
                We are one of the UK's leading specialist cleaning suppliers</p>

                    <Link className='CTA_BTN_IN' to='#'>Contact us</Link>
                </div>
            </div>
        </div>
    )
}

export default CTA
