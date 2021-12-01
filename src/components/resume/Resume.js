import { Button } from '@mui/material'

export default function Resume() {

    return (
        <div>
            <Button variant="outlined" style={{ margin: 'auto', borderRadius: '3rem', height: "10rem", fontSize: '5rem', fontWeight: "600" }} onClick={() => window.open('https://drive.google.com/file/d/1Ru_irL8ZzIcHAAfLLoB6-Yk0SSt_AVuk/view?fbclid=IwAR3p0xUpLZw8D_Quzz3NQCYmKAKiw0SeXP2oi8ZiDhL4GIUOqOqeG9muNrE', '_blank')}>Resume</Button>
        </div>
    )
}
