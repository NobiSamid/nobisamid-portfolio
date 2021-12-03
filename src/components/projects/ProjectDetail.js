import { Button, Fade, Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Backdrop from "@mui/material/Backdrop";
import letsroll from '../../images/letsroll.png';
import spine from '../../images/spine.png';
import jump from '../../images/jump.png';
import flesh from '../../images/flesh.png';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1000,
    height: 900,
    bgcolor: "white",
    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.027), rgba(255, 255, 255, 0))",
    backdropFilter: "blur(10px)",
    webkitBackdropFilter: "blur(10px)",
    border: "2px solid #000",
    borderRadius: "2rem",
    boxShadow: 24,
    p: 4

};

export default function ProjectDetail({ project }) {

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { name, image } = project;
    console.log(image);

    return (
        <div>
            <img style={{ borderRadius: '2rem', width: "80%", margin: 'auto' }} src={letsroll} alt="letsroll" /><br />
            <Typography>{name}</Typography>
            <Button variant="outlined">Preview</Button>
            <Button onClick={handleClickOpen} variant="outlined">Details</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}
