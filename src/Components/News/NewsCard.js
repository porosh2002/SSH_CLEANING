import React from 'react'
import {Link} from 'react-router-dom'
function NewsCard() {
    return (
        <Link className='NewsCard' to='#'>
            <p className='NewsTitle'>SSH OPERATIVES PASS THEIR IPAF</p>
            <p className='NewsTime'>18 February 2016</p>
            <p className='NewsDes'>Well done to our team for the making the final short-list in The News Business Excellence Awards 2016. Congratulations to NA Curtain Walling for winning the Medium Business category, and to all short-listed companies who made the final. It is fantastic to see so many successful companies representin...</p>
            <p className='NewsBTN'>{'READ MORE >'}</p>
        </Link>
    )
}

export default NewsCard
