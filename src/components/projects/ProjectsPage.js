import { Grid, Paper } from '@mui/material'
import React from 'react'
import Navigation from '../navigation/Navigation'

export default function ProjectsPage() {
    return (
        <div style={{
            backgroundColor: '#000428',
            backgroundImage: 'linear-gradient(to right, #000428, #004e92)', height: '100vh'
        }}>
            <h3><Navigation></Navigation></h3>

            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Paper>xs=4</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>xs=4</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>xs=4</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>xs=4</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>xs=4</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>xs=4</Paper>
                </Grid>
            </Grid>
        </div>
    )
}
