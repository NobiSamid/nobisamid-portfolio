import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HiveIcon from '@mui/icons-material/Hive';
import '../customcss/Custom.css';

export default function Navigation() {
    const nav = document?.getElementById?.("primary-navigation");
    const navToggle = document?.getElementById?.("mobile-nav-toggle");

    const [isExpand, setIsExpand] = useState(false)

    const handleToggle = () => {
        const visibility = nav?.getAttribute?.("data-visible");
        console.log(navToggle?.getAttribute('area-expanded'));
        if (visibility === "false") {
            nav?.setAttribute("data-visible", true);
            navToggle?.setAttribute("area-expanded", true);
        } else {
            nav?.setAttribute("data-visible", false);
            navToggle?.setAttribute("area-expanded", false);
        }
    }

    return (
        <div className="mynav primary-header flex" >
            <div>
                <HiveIcon className="logo" sx={{ fontSize: 60, color: 'wheat' }} />
            </div>
            <button onClick={() => { handleToggle() }} className="mobile-nav-toggle" id="mobile-nav-toggle" area-controls="primary-navigation"><span className="sr-only" area-expanded="false">Menu</span></button>
            <ul data-visible="false" id="primary-navigation" className="primary-navigation underline-indicators flex nav">
                <li className="active"><Link style={{ textDecoration: 'none' }} className="ff-sans-cond uppercase text-white letter-spacing-2" to="/">Home</Link></li>
                <li><Link className="ff-sans-cond uppercase text-white letter-spacing-2" to="contact">Contact</Link></li>
            </ul>
            {/* <Link to="/">Home</Link>
            <Link to="contact">Contact</Link> */}
        </div>
    )
}
