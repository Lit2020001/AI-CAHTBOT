import { AppBar, Toolbar } from '@mui/material';
import Logo from './shared/Logo';
import React from 'react'

const Header = () => {
  return (
    <AppBar sx={{ bgcolor: "transparent",position: "static" , boxShadow: "none"}}>
        <Logo />
        <Toolbar sx={{ display: "flex"}}>
        </Toolbar>
    </AppBar>
  )
}

export default Header;