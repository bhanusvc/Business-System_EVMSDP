import React from 'react'
import TextField from '@mui/material/TextField';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
function Booking() {
  return (
    <>
    <div>
        <Navbar/>
        <h3><b>Name</b></h3> <TextField  variant="outlined" />
        <Footer/>
    </div>
    </>
  )
}

export default Info
