import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../components/Navbar'
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import WestRoundedIcon from '@mui/icons-material/WestRounded';
import '../css/Celeb.css'
import Footer from '../components/Footer'


const theme = createTheme();

export default function Celebrations() {
  return (
    <>
    <div><Navbar/></div>
    <div className='cel'>
    <ThemeProvider theme={theme}>
      <main>
        <Box
          sx={{
            pt: 8,
            pb: 4,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              fontFamily="Bookman Old Style"
            >
              CELEBRATIONS
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph fontStyle="italic">
            Plan your Celebrations with your friends and family.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button  href="/Parties" ><WestRoundedIcon sx={{ fontSize: 40 }}></WestRoundedIcon>&nbsp;<h2>Parties</h2></Button>
              &nbsp;
              &nbsp;
              <Button  href="/BusinessEvents" >&nbsp;<h2>Business Events</h2><EastRoundedIcon sx={{ fontSize: 40 }}></EastRoundedIcon></Button>
            </Stack>
          </Container>
        </Box>
        <Container fixed>
          {/* End hero unit */}
          <Grid container spacing={2}
          maxWidth='ms'
          marginLeft={8}
          >
          <div className='first'>
                <Card sx={{ maxWidth: 265, minHeight:265,marginRight:7,marginBottom:5}} >
            <CardActionArea>
                <CardMedia
                component="img"
                height="160"
                image="https://images.pexels.com/photos/13078613/pexels-photo-13078613.jpeg"
                alt="Ganesh Chathurdhi"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'STXihei'}}>
                <b>Ganesh Chathurdhi</b>
                </Typography>
                <Typography variant="body2" color="text.secondary" fontStyle="italic" fontFamily="STXihei">
                Plan your ceremonies in a unified ritualistic way with us. 
                Explore more 
                </Typography>
                <br></br>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" a color="primary" href="/Booking" variant='contained' >
                View Details
                </Button>
            </CardActions>
            </Card>
        </div>
          <div className='second'>
                <Card sx={{ maxWidth: 265, minHeight:265,marginRight:7,marginLeft:7,marginBottom:5}} >
            <CardActionArea>
                <CardMedia
                component="img"
                height="160"
                image="https://images.news18.com/telugu/uploads/2021/01/FotoJet113.jpg"
                alt="Sankranthi"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'STXihei'}}>
                <b>Sankranthi</b>
                </Typography>
                <Typography variant="body2" color="text.secondary" fontStyle="italic" fontFamily="STXihei">
                Plan your ceremonies in a unified ritualistic way with us. 
                Explore more 
                </Typography>
                <br></br>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" a color="primary" href="/Booking" variant='contained' >
                View Details
                </Button>
            </CardActions>
            </Card>
        </div>
        <div className='third'>
                <Card sx={{ maxWidth: 265, minHeight:265,marginLeft:7,marginBottom:5}} >
            <CardActionArea>
                <CardMedia
                component="img"
                height="160"
                image="https://png.pngtree.com/png-clipart/20191009/ourlarge/pngtree-free-happy-navratri-greeting-card-design-happy-dussehra-png-image_1774151.jpg"
                alt="Dusshera"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'STXihei'}}>
                <b>Dusshera</b>
                </Typography>
                <Typography variant="body2" color="text.secondary" fontStyle="italic" fontFamily="STXihei">
                Plan your ceremonies in a unified ritualistic way with us. 
                Explore more 
                </Typography>
                <br></br>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" a color="primary" href="/Booking" variant='contained' >
                View Details
                </Button>
            </CardActions>
            </Card>
        </div>
          <div className='fourth'>
                <Card sx={{ maxWidth: 265, minHeight:265,marginRight:7,marginBottom:5}} >
            <CardActionArea>
                <CardMedia
                component="img"
                height="160"
                image="https://www.sampleposts.com/wp-content/uploads/2020/05/happy-new-year.jpg"
                alt="New Year"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'STXihei'}}>
                <b>New Year</b>
                </Typography>
                <Typography variant="body2" color="text.secondary" fontStyle="italic" fontFamily="STXihei">
                Plan your ceremonies in a unified ritualistic way with us. 
                Explore more 
                </Typography>
                <br></br>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" a color="primary" href="/Booking" variant='contained' >
                View Details
                </Button>
            </CardActions>
            </Card>
        </div>
        <div className='fifth'>
                <Card sx={{ maxWidth: 265, minHeight:265,marginRight:7,marginLeft:7,marginBottom:5}} >
            <CardActionArea>
                <CardMedia
                component="img"
                height="160"
                image="https://images.hindustantimes.com/img/2021/08/29/original/Janmashtami2_960_(1)_1630234683522.jpg"
                alt="Krishnastami"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'STXihei'}}>
                <b>Krishnastami</b>
                </Typography>
                <Typography variant="body2" color="text.secondary" fontStyle="italic" fontFamily="STXihei">
                Plan your ceremonies in a unified ritualistic way with us. 
                Explore more 
                </Typography>
                <br></br>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" a color="primary" href="/Booking" variant='contained' >
                View Details
                </Button>
            </CardActions>
            </Card>
        </div>
          <div className='sixth'>
                <Card sx={{ maxWidth: 265, minHeight:265,marginLeft:7,marginBottom:5}} >
            <CardActionArea>
                <CardMedia
                component="img"
                height="160"
                image="https://image.shutterstock.com/image-illustration/people-logo-together-hand-260nw-293626955.jpg"
                alt="Success Meet"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'STXihei'}}>
                <b>Success Meet</b>
                </Typography>
                <Typography variant="body2" color="text.secondary" fontStyle="italic" fontFamily="STXihei">
                Plan your ceremonies in a unified ritualistic way with us. 
                Explore more 
                </Typography>
                <br></br>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" a color="primary" href="/Booking" variant='contained' >
                View Details
                </Button>
            </CardActions>
            </Card>
        </div>
          </Grid>
          
        </Container>
      </main>
    </ThemeProvider>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
}
