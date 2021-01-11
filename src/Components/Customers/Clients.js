import React from 'react'
import Image_1 from '../../Images/Clients_1.png'
import Image_2 from '../../Images/Clients_2.png'
import Image_3 from '../../Images/Clients_3.png'
import Image_4 from '../../Images/Clients_4.png'
function Clients() {
    return (
        <div className='Client'>
           <p className='Section_Title'>SOME OF OUR CLIENTS</p> 
            <img className='CompanyLogoClient' src={Image_1} alt='Company_one'/>
            <img className='CompanyLogoClient' src={Image_2} alt='Company_one'/>
            <img className='CompanyLogoClient' src={Image_3} alt='Company_one'/>
            <img className='CompanyLogoClient' src={Image_4} alt='Company_one'/>
        </div>
    )
}

export default Clients
