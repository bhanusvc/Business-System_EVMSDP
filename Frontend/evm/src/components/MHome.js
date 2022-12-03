import React from 'react'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material'
import ImageSlider from '../pages/ImageSlider'
import Navbar from './Navbar'
import '../css/mhome.css'
import Footer from './Footer';

const MHome = () => {
    const slides = [
      { url: "https://wallpaperaccess.com/full/1623493.jpg", title: "beach" },
      { url: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg", title: "boat" },
      { url: "https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg", title: "forest" },
      { url: "http://www.cynber.com/wp-content/uploads/2016/05/Event-management-1024x576.jpg", title: "city" },
      { url: "https://images.pexels.com/photos/154147/pexels-photo-154147.jpeg", title: "italy" },
    ];
    const containerStyles = {
      width: "1000px",
      height: "500px",
      margin: "0 auto",
    };
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <br></br>
    <div className='mar'>
      <h3 style={{fontFamily : 'Agency FB',color:'black' ,height:'79px',fontSize:'55px' }}><marquee>Christmas Offer : 20% off on Bookings</marquee></h3>
    </div>
    <div style={containerStyles}>
        <ImageSlider slides={slides} />
    </div>
    <br></br>
    <br></br>
    <div className='Info'>          
            <Typography
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
              fontFamily="STXihei"
            >
              <b> Our Provisions</b>
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph fontStyle="italic">
            {'>>'} Hiring of Service Staff<br></br>
            {'>>'} Contract Negotiations<br></br>
            {'>>'} Minimizing administration efforts<br></br>
            {'>>'} Obtaining Permits<br></br>
            {'>>'} Marketing & Advertising<br></br>
            {'>>'} Ongoing Supporting Team<br></br>
            {'>>'} Easy cost estimations<br></br>
            {'>>'} Securing Sponsorships
            </Typography>
            <br>
            </br>
            <Typography
              
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
              fontFamily="STXihei"
            >
              Click on &nbsp;&nbsp;     ⬇️
              <br></br>
              To Know More about the <Button id="Button" href="/Events" variant='h3'sx={{fontSize:'45px', fontFamily:'STXihei',color:'blue'}}><b>Events</b></Button> WE manage
            </Typography>
    </div>
      <Footer/>
    </>
  )
}
export default MHome