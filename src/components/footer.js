import React from 'react'
import './footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';

const footer = () => {
    return (
        <div className='main-footer'>
            <div>
                <img className='dark-logo' src='/images/logodark.svg' alt='' height='76px' width='200' />
            </div>
            <div className='text-wrapper'>
            <div className='coding-ninjas'>
                <span><b>Coding Ninjas</b></span>
                <span>About Us</span>
                <span>Privacy And Policy</span>
                <span>Terms & Conditions</span>
                <span>Pricing & Refund Policy</span>
                <span>Bug Bounty</span>
                <span>Customers</span>
                <span>Press Release</span>
            </div>
            <div className='products'>
                <span><b>Courses</b></span>
                <span>Try Courses For Free</span>
                <span>Career Camp</span>
                <span>Hire Talent</span>
            </div>
            <div className='community'>
                <span><b>Code Studio</b></span>
                <span>Blog</span>
                <span>Events</span>
                <span>Campus Ninja</span>
                <span>Affilate</span>
            </div>
            <div className='follow-us'>
                <div><b>Follow Us On</b></div>
                <div className = 'icons'>
                <span><FacebookIcon /></span>
                <span><InstagramIcon /></span>
                <span><YouTubeIcon /></span>
                <span><TwitterIcon /></span>
                <span><LinkedInIcon /></span>
                <span><TelegramIcon /></span>
                </div>
                <span><b>Contact Us</b></span>
                <span>1800-123-3598</span>
                <span>contact@codingninjas.com</span>
            </div>
            </div>
        </div>
    )
}

export default footer;