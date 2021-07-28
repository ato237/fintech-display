import React from 'react'
import './topbar.css'
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">ato-admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBadge">5</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                        <span className="topIconBadg"></span>
                    </div>
                    <img src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/83503810_1844210712377405_5153236228576903168_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=3aUYJdXyZCoAX8U4uVE&_nc_ht=scontent-cdt1-1.xx&oh=5071b25c520d8bb7d7540a2d48786b67&oe=61251477" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar
