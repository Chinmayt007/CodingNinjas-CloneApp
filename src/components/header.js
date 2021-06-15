import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div className='main-header'>
            <img src='/images/logo.svg' alt='' height='30px' width='95px' />
            <div className='inner-wrapper'>
                <span>Home</span>
                <span>Courses</span>
                <span>Practice</span>
                <span>Events</span>
                <span>Campus Ninjas</span>
                <span>Blog</span>
                <span><img src='/images/cc.svg' alt='' height='30px' width='95px' /></span>
            </div>
            <div className='avatar-wrapper'>
                <span>My ClassRoom</span>
                <span><img className='avatar-img' src='/images/avatar.png' alt='' height='30px' width='95px' /></span>
            </div>
        </div>
    )
}

export default Header;