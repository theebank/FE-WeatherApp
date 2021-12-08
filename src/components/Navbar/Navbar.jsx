import React from 'react'
import { AppBar,Toolbar,Typography } from '@mui/material'

import logo from '../../assets/logo.jpg'

const Navbar = () => {
    return (
        <div>
            <AppBar position = "fixed" color = "inherit">
                <Toolbar>
                    <Typography>
                    <img src = {logo} alt = "Weather.js" height="25px"/>
                        Theeban24
                    </Typography>


                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
