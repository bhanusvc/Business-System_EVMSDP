import React from 'react'
import Button from '@mui/material/Button';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../css/contact.css'

function Contact() {
  return (
    <div className='Con'>
      <div>
        <Navbar/>
      </div >
      <div >
        <h3>Connect With us through Whatsapp</h3>
        
          <br></br>
        <Button href="https://wa.me/+916300741007" target="_blank" rel="noreferrer" variant='contained'>
              Chat with us !</Button>
      
      <br></br>
      
        <h3>Contact us through mail!!</h3>
      <Button target="_blank" rel="noreferrer" variant='contained'href="mailto:evm.businesssystem@gmail.com">Send Email</Button>
      
      <br></br>
      </div>
      <br></br>
      <div className='Foot'>
        <Footer/>
      </div>
    </div>
    
  )
}
export default Contact
