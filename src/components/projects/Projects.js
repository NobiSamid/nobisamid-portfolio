import React, { useState } from 'react'
import Carousel from "react-elastic-carousel";
import letsroll from '../../images/letsroll.png';
import spine from '../../images/spine.png';
import jump from '../../images/jump.png';
import eshop from '../../images/eshop.png';
import flesh from '../../images/flesh.png';
import { Button, Fade, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Backdrop from "@mui/material/Backdrop";
import ProjectDetail from './ProjectDetail';


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

const ProjectDetails = [
    {
        id: 1,
        name: " Let's Roll ",
        image: "letsroll"
    },
    {
        id: 2,
        name: 'Jump',
        image: 'jump'

    },
    {
        id: 3,
        name: 'Spine firm',
        image: 'spine'

    },
    {
        id: 4,
        name: 'Flesh dril',
        image: "flesh"
    },
    {
        id: 5,
        name: 'Eshop',
        image: 'eshop'
    }
]

export default function Projects() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 3 }
    ];


    return (
        <div>
            <Carousel breakPoints={breakPoints}
                easing="cubic-bezier(1,.15,.55,1.54)"
                tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
                transitionMs={700}>

                {
                    ProjectDetails.map(project => <ProjectDetail
                        key={project.id}
                        project={project}
                    ></ProjectDetail>)
                }

                {/* <div>
                    <img style={{ borderRadius: '2rem', width: "80%", margin: 'auto' }} src={letsroll} alt="letsroll" /><br />
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
                </div> */}
                {/* <div>
                    <img style={{ borderRadius: '2rem', width: "80%", margin: 'auto' }} src={spine} alt="letsroll" /><br />
                    <Button variant="outlined">Preview</Button>
                    <Button onClick={handleClickOpen} variant="outlined">Details</Button>
                </div>
                <div>
                    <img style={{ borderRadius: '2rem', width: "80%", margin: 'auto' }} src={jump} alt="letsroll" /><br />
                    <Button variant="outlined">Preview</Button>
                    <Button onClick={handleClickOpen} variant="outlined">Details</Button>
                </div>
                <div>
                    <img style={{ borderRadius: '2rem', width: "80%", margin: 'auto' }} src={flesh} alt="letsroll" /><br />
                    <Button variant="outlined">Preview</Button>
                    <Button onClick={handleClickOpen} variant="outlined">Details</Button>
                </div>
                <div>
                    <img style={{ borderRadius: '2rem', width: "80%", margin: 'auto' }} src={eshop} alt="letsroll" /><br />
                    <Button variant="outlined">Preview</Button>
                    <Button onClick={handleClickOpen} variant="outlined">Details</Button>
                </div> */}
            </Carousel>
        </div>
    )
}
