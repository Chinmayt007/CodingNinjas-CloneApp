import React from 'react'
import './eventbox.css'
import EventNoteIcon from '@material-ui/icons/EventNote';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import EventIcon from '@material-ui/icons/Event';
import DvrIcon from '@material-ui/icons/Dvr';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';

const eventbox = () => {
    return (
        <div className='main-eventbox'>
            <div className='event-wrapper'>
                <div className='events-wrapper'>
                    <div className='tab-event-category'>
                        <span className='e1'><EventNoteIcon /></span>
                        <span className='e2' >All Events</span>
                        <span><DesktopWindowsIcon /></span>
                        <span>Webinars</span>
                        <span><EventIcon /></span>
                        <span>Coding Events</span>
                        <span><DvrIcon /></span>
                        <span>Bootcamp Events</span>
                        <span><OndemandVideoIcon /></span>
                        <span>Workshop</span>
                    </div>
                    <div className='event-sub-categories'>
                        <span className='upc'>Upcoming</span>
                        <span>Archived</span>
                        <span>All Time Favorites</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default eventbox;