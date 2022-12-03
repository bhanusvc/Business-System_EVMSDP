import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import * as React from 'react';
import {FaLinkedin} from "react-icons/fa"
import Card from '@mui/material/Card';  
import Button from '@mui/material/Button';
import {IconContext} from "react-icons"
import Grid from '@mui/material/Grid';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function About() {
  return (
      <div className='ab' >
      <Navbar/>  
      <div>
      <Grid container spacing={4} sx={{ display:'flex',justifyContent:"space-evenly"}}>
      <div className='1' >
      <Card padding-top="20px"sx={{ maxWidth: 345,margin:10 }}>
        <CardHeader
          title="Rohith Venkata Sai"
          subheader="KL CSE(H)"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://media-exp1.licdn.com/dms/image/D4D03AQEE3VCXM4RLAA/profile-displayphoto-shrink_400_400/0/1662531790756?e=1675296000&v=beta&t=uJ_JLgUILfrTqMokUln8O3qMHjIGjxg_dGnVFAAyJEE"
          alt="Rohith"
        />
        <CardContent>
          <Typography variant="body2" color="text.primary">
            I am a 2nd Year Student.
          </Typography>
          <br/><br/>
          <IconContext.Provider value={{ style: {fontSize: '30px', color: "rgb(0, 123, 255)"}}}>
            <Button href='https://www.linkedin.com/in/rohith-k-13063324b/ ' target="_blank"><FaLinkedin/></Button>
          </IconContext.Provider>
        </CardContent>
      </Card>

      </div>
      <div className='2'>
      <Card sx={{ maxWidth: 345 ,margin:10}}>
        <CardHeader
          title="Bhanu.S.V.C"
          subheader="KL CSE(H)"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://media-exp1.licdn.com/dms/image/D5603AQHhByMLq5Yasw/profile-displayphoto-shrink_400_400/0/1668181635886?e=1675296000&v=beta&t=wSI3C3mMBSFvfpMnq4dz2b70mjOQ_dXTsdH44jAKsWk"
          alt="Bhanu"
        />
        <CardContent>
          <Typography variant="body2" color="text.primary">
          I am a 2nd Year Student.
          </Typography>
          <br/><br/>
          <IconContext.Provider value={{ style: {fontSize: '30px', color: "rgb(0, 123, 255)"}}}>
            <Button href='https://www.linkedin.com/in/bhanu-nimmala-b725a7244/' target="_blank"><FaLinkedin/></Button>
          </IconContext.Provider>
        </CardContent>
      </Card>
      </div>
      <div className='3'>
      <Card sx={{ maxWidth: 345,margin:10 }}>
        <CardHeader
          title="Sai Koushik Sarma"
          subheader="KL CSE(H)"
        />
        <CardMedia
          component="img"
          height="194"
          
          image="https://media-exp1.licdn.com/dms/image/C4E03AQHCKkIsGeCaPQ/profile-displayphoto-shrink_400_400/0/1652009590483?e=1675296000&v=beta&t=eI3dJsFJzY_NkhfmG1D1-i6LY_nPnO4WMVrXH8uMzXk"
          alt="Koushik"
        />
        <CardContent>
          <Typography variant="body2" color="text.primary">
          I am a 2nd Year Student.
          </Typography>
          <br/><br/>
          <IconContext.Provider value={{ style: {fontSize: '30px', color: "rgb(0, 123, 255)"}}}>
            <Button href='https://www.linkedin.com/in/koushik-sarma-474191226/' target="_blank"><FaLinkedin/></Button>
          </IconContext.Provider>
        </CardContent>
      </Card>
      </div>
      </Grid>
      </div>
      <Footer/>
      
      </div>
  );
}


export default About