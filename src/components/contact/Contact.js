import React from 'react'
import Navigation from '../navigation/Navigation'

export default function Contact() {
    return (
        <div className="mycontact" style={{
            backgroundColor: '#000428',
            backgroundImage: 'linear-gradient(to right, #000428, #004e92)', height: '100vh'
        }}>
            <h3><Navigation></Navigation></h3>

            <h3>This is contact page</h3>
            <form action="https://formsubmit.co/nobisamid@gmail.com" method="POST">
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="email" placeholder="Email address" required /><br /><br /><br />
                <input type="hidden" name="_next" value="http://localhost:3000" />
                <input type="hidden" name="_subject" value="New Email from Portfolio" />
                <textarea style={{ width: '50%', height: '200px' }} type="text" placeholder="Write your message here" name="message" required /><br /><br />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}
