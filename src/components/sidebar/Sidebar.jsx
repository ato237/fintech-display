import React from 'react'
import './sidebar.css'
import {LineStyle, Error,Timeline, TrendingUp,Assessment, Feedback, Message, Storefront, PersonOutline, AttachMoney, MailOutline, Note} from '@material-ui/icons'

function Sidebar() {
    return (
        <div className = "sidebar">
            <div className="siedbarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                             <LineStyle className='sidebarIcon'/>
                             Home
                        </li>
                        <li className="sidebarListItem">
                             <Timeline className='sidebarIcon'/>
                             Analytics
                        </li>
                        <li className="sidebarListItem">
                             <TrendingUp className='sidebarIcon'/>
                             Sales
                        </li>
                        
                    </ul>
                
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                             <PersonOutline className='sidebarIcon'/>
                             Users
                        </li>
                        <li className="sidebarListItem">
                             <Storefront className='sidebarIcon'/>
                             Products
                        </li>
                        <li className="sidebarListItem">
                             <AttachMoney className='sidebarIcon'/>
                             Transactions
                        </li>
                        <li className="sidebarListItem">
                             <Assessment className='sidebarIcon'/>
                             Reports
                        </li>
                    </ul>
                
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                             <MailOutline className='sidebarIcon'/>
                             Mail
                        </li>
                        <li className="sidebarListItem">
                             <Feedback className='sidebarIcon'/>
                             Feedback
                        </li>
                        <li className="sidebarListItem">
                             <Message className='sidebarIcon'/>
                             Messages
                        </li>
                        
                    </ul>
                
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                             <Note className='sidebarIcon'/>
                             Manage
                        </li>
                        <li className="sidebarListItem">
                             <Timeline className='sidebarIcon'/>
                             Analytics
                        </li>
                        <li className="sidebarListItem">
                             <Error className='sidebarIcon'/>
                             Reports
                        </li>
                        
                    </ul>
                
                </div>
            </div>
        </div>
    )
}

export default Sidebar
