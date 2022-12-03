import React from 'react'
import Button from '@mui/material/Button';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {IconContext} from "react-icons"
import {FaWhatsapp} from "react-icons/fa"
import {FaGoogle} from "react-icons/fa"
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
          <IconContext.Provider value={{ style: {fontSize: '50px', color: 'rgb(43 183 65)'}}}>
          <Button href="https://wa.me/+916300741007" target="_blank" rel="noreferrer"><FaWhatsapp/></Button>
          </IconContext.Provider>
      
      <br/><br/>
      <br/>
      <br/>
      <br/>
        <h3>Contact us through mail!!</h3>
        <IconContext.Provider value={{ style: {fontSize: '50px', color: 'rgb(219 74 57)'}}}>
        <Button target="_blank" rel="noreferrer" href="mailto:evm.businesssystem@gmail.com"><FaGoogle/></Button>
          </IconContext.Provider>
      
      <br/>
      <br/>
      <br/>
      <br/>
      </div>
      <br></br>
      <div className='Foot'>
        <Footer/>
      </div>
    </div>
    
  )
}
export default Contact
