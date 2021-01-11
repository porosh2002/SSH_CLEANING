import React from 'react'
import RecentWorkCard from './RecentWorkCard'
function RecentWork() {
    return (
        <div className='Recent'>
            <p style={{color:"#fff"}} className='Section_Title'>Our Recent Work</p>
            <RecentWorkCard ServiceClass='RecentCard RC_1' name={'THE HARD INTERCHANGE | BUILDER’S CLEAN'}/>
            <RecentWorkCard ServiceClass='RecentCard RC_2' name={'THE HARD INTERCHANGE | BUILDER’S CLEAN'}/>
            <RecentWorkCard ServiceClass='RecentCard RC_3' name={'THE HARD INTERCHANGE | BUILDER’S CLEAN'}/>
            {/* <RecentWorkCard ServiceClass='RecentCard RC_4' name={'THE HARD INTERCHANGE | BUILDER’S CLEAN'}/> */}
        </div>
    )
}

export default RecentWork
