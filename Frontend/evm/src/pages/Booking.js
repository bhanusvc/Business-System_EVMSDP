import React from 'react'
import TextField from '@mui/material/TextField';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
function Booking() {
  return (
    <>
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <h3><b>Name</b></h3> <TextField  variant="outlined" />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default Booking
