import React from 'react'
import {Link} from 'react-router-dom'
function RecentWorkCard({name,ServiceClass}) {
    return (
        <Link to='#' className={ServiceClass} >
            <div className='RecentWorkName'>{name}</div>
        </Link>
    )
}

export default RecentWorkCard
