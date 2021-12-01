import React from 'react'
import './Skills.css';
import { ReactComponent as Html } from '../../images/icons8-html-5.svg';
import { ReactComponent as Css } from '../../images/icons8-css3.svg';
import { ReactComponent as Js } from '../../images/icons8-javascript.svg';
import { ReactComponent as Reactlogo } from '../../images/icons8-react-native.svg';
import { ReactComponent as Bootstrap } from '../../images/icons8-bootstrap.svg';
import { ReactComponent as Material } from '../../images/icons8-material-ui.svg';
import { ReactComponent as Firebase } from '../../images/icons8-firebase.svg';
import { ReactComponent as Node } from '../../images/icons8-nodejs.svg';
import { ReactComponent as Mongo } from '../../images/icons8-mongodb.svg';
import { ReactComponent as Express } from '../../images/expressjs.svg';
import { ReactComponent as Git } from '../../images/icons8-github.svg';
import { ReactComponent as Vs } from '../../images/icons8-visual-studio-code-2019.svg';
import { ReactComponent as Heroku } from '../../images/icons8-heroku.svg';
import { ReactComponent as Stripe } from '../../images/icons8-stripe.svg';

export default function Skills() {
    return (
        <div>
            <h2>Skillsssssssss</h2>
            <div className="all-skills">
                <div className="candidate">
                    <div className="info">
                        <h3 className="name">Front-End</h3>
                        <h5>Working skill</h5>
                    </div>
                    <div className="progressBar">
                        <span className="html"></span>
                    </div>
                    <div>
                        <h4>Technologies</h4>
                        <Html style={{ height: '5rem', width: 'auto' }} />
                        <Css style={{ height: '5rem', width: 'auto' }} />
                        <Js style={{ height: '5rem', width: 'auto' }} />
                        <Reactlogo style={{ height: '5rem', width: 'auto' }} />
                        <Bootstrap style={{ height: '5rem', width: 'auto' }} />
                        <Material style={{ height: '5rem', width: 'auto' }} />
                    </div>
                </div>
                <div className="candidate">
                    <div className="info">
                        <h3 className="name">Back-End</h3>
                        <h5>Working skill</h5>
                    </div>
                    <div className="progressBar">
                        <span className="css"></span>
                    </div>
                    <div>
                        <h4>Technologies</h4>
                        <Node style={{ height: '5rem', width: 'auto' }} />
                        <Mongo style={{ height: '5rem', width: 'auto' }} />
                        <Express style={{ height: '3.5rem', width: 'auto' }} />
                    </div>
                </div>
                <div className="candidate">
                    <div className="info">
                        <h3 className="name">Front-End</h3>
                        <h5>Working skill</h5>
                    </div>
                    <div className="progressBar">
                        <span className="js"></span>
                    </div>
                    <div>
                        <h4>Technologies</h4>
                        <Firebase style={{ height: '5rem', width: 'auto' }} />
                        <Git style={{ height: '5rem', width: 'auto' }} />
                        <Vs style={{ height: '5rem', width: 'auto' }} />
                        <Heroku style={{ height: '5rem', width: 'auto' }} />
                        <Stripe style={{ height: '5rem', width: 'auto' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
