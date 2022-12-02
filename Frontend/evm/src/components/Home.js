import Button from '@mui/material/Button';
import '../css/home.css'
import React from 'react'

function Home() {
  return (
    <>
    <div className="Home">
      <div>
          <h1  style={{fontFamily:'Candara', fontSize:'80px',charSet:'utf-8'}} >Event Management System </h1>
          <h5 style={{fontFamily:'Lucida Fax', fontSize:'25px'}}>Everything at your Fingertips</h5>
      </div>
      <div className="button">
        
      <Button href="/Selection1"variant="contained" style={{position:'relative',top:'50px',fontFamily:'Bahnschrift'}}>Get Started</Button>
        </div>
    </div>
    </>
  )
}

export default Home
