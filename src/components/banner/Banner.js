import { Grid, Paper } from '@mui/material'
import React from 'react'

export default function Banner() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Paper>xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper>xs=6</Paper>
            </Grid>
        </Grid>
    )
}
