import React from 'react'
import TextField from '@mui/material/TextField';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
function Info() {
  return (
    <>
        <Navbar/>
        <h3><b>Name</b></h3> <TextField  variant="outlined" />
        <Footer/>

    </>
  )
}

export default Info
