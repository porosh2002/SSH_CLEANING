import React from 'react'
import NewsCard from './NewsCard'

function News() {
    return (
        <div className='News'>
            <p className='Section_Title'>LATEST NEWS</p>
            <NewsCard />
            <NewsCard />
            <NewsCard />
        </div>
    )
}

export default News
