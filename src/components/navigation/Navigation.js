import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HiveIcon from '@mui/icons-material/Hive';
import '../customcss/Custom.css';

export default function Navigation() {

    const [isExpand, setIsExpand] = useState(false);

    return (
        <div className="mynav primary-header flex" >
            <div>
                <HiveIcon className="logo" sx={{ fontSize: 60, color: 'wheat' }} />
            </div>
            <button onClick={() => setIsExpand(!isExpand)} className="mobile-nav-toggle" id={isExpand ? "navBtn" : ""} area-controls="primary-navigation"><span className="sr-only" area-expanded="false">Menu</span></button>
            <ul data-visible="false" id={isExpand ? "hidden" : ""} className="primary-navigation underline-indicators flex nav">
                <li className="active"><Link style={{ textDecoration: 'none' }} className="ff-sans-cond uppercase text-white letter-spacing-2" to="/">Home</Link></li>
                <li><Link className="ff-sans-cond uppercase text-white letter-spacing-2" style={{ textDecoration: 'none' }} to="/contact">Contact</Link></li>
                <li><Link className="ff-sans-cond uppercase text-white letter-spacing-2" style={{ textDecoration: 'none' }} to="/projects">Projects</Link></li>
            </ul>
        </div>
    )
}
