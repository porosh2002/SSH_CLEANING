import React from 'react'
import { Link } from 'react-router-dom'
function CTA() {
    return (
        <div className='CTA2'>
            <div className='CTA_Wrap'>
                <div className='CTA_Text'>
                    <p className='CTA_Title'>
                    Our work does the talking</p>

                    <Link className='CTA_BTN_IN' to='#'>Contact us</Link>
                </div>
            </div>
        </div>
    )
}

export default CTA
