import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import * as React from 'react';
import {FaLinkedin} from "react-icons/fa"
import Card from '@mui/material/Card';  
import Button from '@mui/material/Button';
import {IconContext} from "react-icons"
import '../css/about.css'
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function About() {
  return (
      <div className='ab'>
      <Navbar/>  
      <div>
      <div className='1'>
      <Card padding-top="20px"sx={{ maxWidth: 345 }}>
        <CardHeader
          title="Rohith Venkata Sai"
          subheader="KL CSE(H)"
        />
        <CardMedia
          component="img"
          height="194"
          image=""
          alt="Rohith"
        />
        <CardContent>
          <Typography variant="body2" color="text.primary">
            I am a 2nd Year Student.
          </Typography>
          <IconContext.Provider value={{ style: {fontSize: '30px', color: "rgb(0, 123, 255)"}}}>
            <Button href='https://www.linkedin.com/in/rohith-k-13063324b/'><FaLinkedin/></Button>
          </IconContext.Provider>
        </CardContent>
      </Card>
      </div>
      <div className='2'>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          title="Bhanu.S.V.C"
          subheader="KL CSE(H)"
        />
        <CardMedia
          component="img"
          height="194"
          image=""
          alt="Bhanu"
        />
        <CardContent>
          <Typography variant="body2" color="text.primary">
          I am a 2nd Year Student.
          </Typography>
          <IconContext.Provider value={{ style: {fontSize: '30px', color: "rgb(0, 123, 255)"}}}>
            <Button href='https://www.linkedin.com/in/bhanu-nimmala-b725a7244/'><FaLinkedin/></Button>
          </IconContext.Provider>
        </CardContent>
      </Card>
      </div>
      <div className='3'>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          title="Sai Koushik Sarma"
          subheader="KL CSE(H)"
        />
        <CardMedia
          component="img"
          height="194"
          image=""
          alt="Koushik"
        />
        <CardContent>
          <Typography variant="body2" color="text.primary">
          I am a 2nd Year Student.
          </Typography>
          <IconContext.Provider value={{ style: {fontSize: '30px', color: "rgb(0, 123, 255)"}}}>
            <Button href='https://www.linkedin.com/in/koushik-sarma-474191226/'><FaLinkedin/></Button>
          </IconContext.Provider>
        </CardContent>
      </Card>
      </div>
      </div>
      <Footer/>
      </div>
  );
}


export default About
