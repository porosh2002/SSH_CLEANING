import React from 'react'
import {Link} from 'react-router-dom'
function ServiceCard({name,ServiceClass}) {
    return (
        <Link to='#' className={ServiceClass} >
            <div className='ServiceName'>{name}</div>
        </Link>
    )
}

export default ServiceCard
