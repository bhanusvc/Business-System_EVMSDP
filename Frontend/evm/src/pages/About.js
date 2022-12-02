import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import * as React from 'react';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack'
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function About() {
  return (
      <>
      <Navbar/>
      <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={4}
        >      
      <div className='1'>
      <Card sx={{ maxWidth: 345 }}>
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
        </CardContent>
      </Card>
      </div>
      </Stack>
      <Footer/>
      </>
  );
}


export default About
