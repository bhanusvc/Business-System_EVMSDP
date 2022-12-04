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
import '../css/BEvents.css'
import Footer from '../components/Footer'


const theme = createTheme();

export default function BusinessEvents() {
  return (
    <>
    <div><Navbar/></div>
    <div className='be'>
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
              BUSINESS EVENTS
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph fontStyle="italic">
            Plan your Business Events with ease.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button  href="/Celebrations" ><WestRoundedIcon sx={{ fontSize: 40 }}></WestRoundedIcon>&nbsp;<h2>Celebrations</h2></Button>
              &nbsp;
              &nbsp;
              <Button  href="/Booking" >&nbsp;<h2>Not Here!<br></br>Contact Us</h2><EastRoundedIcon sx={{ fontSize: 40 }}></EastRoundedIcon></Button>
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
                image="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg"
                alt="Conferences"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'STXihei'}}>
                <b>Conferences</b>
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
                image="https://media.istockphoto.com/vectors/people-at-the-seminar-presentation-conference-vector-illustration-vector-id1184658011?k=20&m=1184658011&s=612x612&w=0&h=fNnr7TouyLy2327tLJaELlwWc5ZiEc8LTLBOqMGOy6E="
                alt="Seminars"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'STXihei'}}>
                <b>Seminars</b>
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
                image="https://www.eventbrite.com/blog/wp-content/uploads/2022/04/standout-conference-tipsheet-featured-1.jpg"
                alt="Interactivity"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'STXihei'}}>
                <b>Interactivity</b>
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
                image="https://heartlandgardening.files.wordpress.com/2012/01/2010midamtradeshowfloor11.jpg"
                alt="Trade Shows"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'STXihei'}}>
                <b>Trade Shows</b>
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
                image="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/03/CELEBRATING-10-YEARS.jpg"
                alt="Milestone Events"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'STXihei'}}>
                <b>Milestone Events</b>
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
                image="https://megaeventsauctions.com/wp-content/uploads/2018/04/mega-events-auctions-landing-1500x630.jpg"
                alt="Auctions"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'STXihei'}}>
                <b>Auctions</b>
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
