import React from 'react'
import ServiceCard from './ServiceCard'

function Services() {
    return (
        <div className='Services'>
            <p className='Section_Title'>Our Services</p>
            <ServiceCard ServiceClass='ServiceCard Service_1' name={'Air Hygiene & Ductwork System Cleaning'}/>
        </div>
    )
}

export default Services
