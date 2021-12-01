import { Grid, Paper } from '@mui/material'
import shadows from '@mui/material/styles/shadows';
import React from 'react'
import dp from '../../images/dp.jpeg';
import '../customcss/Custom.css'


export default function Banner() {
    return (
        <div>
            <div className="banner-content">
                <div className="half">
                    <p>
                        I have always been very passionate about technologies, so, I have just learned some basic technologies of Front-End developing such as M.E.R.N. I have found it so interesting that it encourages me more to increase my knowledge and competency on these kinds of technologies.
                        I am very much eager to work in any kind of technological sector to improve my skills, efficiency and to gather experience that will be helpful for my career in future.
                    </p>
                </div>
                <div className="half">
                    <img style={{ height: '40rem', width: "auto" }} className="dp" alt="dp" src={dp}></img>
                </div>
            </div>

        </div>
    )
}
