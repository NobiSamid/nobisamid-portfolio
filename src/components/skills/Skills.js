import React from 'react'
import './Skills.css';

export default function Skills() {
    return (
        <div>
            <h3>Skillsssssssss</h3>
            <div className="all-skills">
                <div className="candidate">
                    <div className="info">
                        <h3 className="name">HTML</h3>
                        <h6 className="percentage-num">86%</h6>
                    </div>
                    <div className="progressBar">
                        <span className="bar"> <span className="html"></span></span>
                    </div>
                </div>
                <div className="candidate">
                    <div className="info">
                        <h3 className="name">CSS</h3>
                        <h6 className="percentage-num">90%</h6>
                    </div>
                    <div className="progressBar">
                        <span className="bar"> <span className="css"></span></span>
                    </div>
                </div>
                <div className="candidate">
                    <div className="info">
                        <h3 className="name">JS</h3>
                        <h6 className="percentage-num">80%</h6>
                    </div>
                    <div className="progressBar">
                        <span className="bar"> <span className="js"></span></span>
                    </div>
                </div>
            </div>
        </div >
    )
}
