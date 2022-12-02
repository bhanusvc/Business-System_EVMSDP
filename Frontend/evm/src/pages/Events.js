import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions , Grid} from '@mui/material';
import "../css/Events.css";
import h from '../Media/h.mp4'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Events() {
  return (
    
    <>
        <Navbar/>
        <div className='He'></div>
        <video id='video'autoPlay loop muted playsInline src={h}></video>
        <div className='Head'><center><b><h2 style={{fontFamily : 'Agency FB',color:'black' ,height:'79px',fontSize:'55px' }}><marquee direction = "right"> Types of Events </marquee></h2></b></center></div>
        <br></br>
        <div style={{ padding: 10,paddingLeft:115 }}>
        <Grid 
              container
              spacing={-15}
              justifyContent='center'
              >
        <div className='first'>
                <Button href="/Ceremonies"><Card sx={{ maxWidth: 265, minHeight:265,margin:1}} >
            <CardActionArea>
                <CardMedia
                component="img"
                height="160"
                image="https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Ceremonies"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'cursive'}}>
                <b>Ceremonies</b>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Plan your ceremonies in a unified ritualistic way with us. 
                Explore more 
                </Typography>
                <br></br>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" a color="primary" href="/Ceremonies" variant='contained'>
                Explore!
                </Button>
            </CardActions>
            </Card>
            </Button>
        </div>
        &nbsp;
        <div className='second'>
        <Button href="/Parties"><Card sx={{ maxWidth: 265, minHeight:265,margin:1}}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="https://images.pexels.com/photos/698907/pexels-photo-698907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Parties"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'cursive'}}>
                    <b>Parties</b>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Plan your social gathering of invited guests with refreshments like food and beverages
                and Events with entertainment.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" href="/Parties" variant='contained'>
                Explore!
                </Button>
            </CardActions>
            </Card>
            </Button>
        </div>
        &nbsp;
        <div className='third'>
        <Button href="/Celebrations"><Card sx={{ maxWidth: 265, minHeight:265,margin:1}}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="179"
                image="https://images.pexels.com/photos/399610/pexels-photo-399610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Celebrations"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div"  sx={{fontFamily:'cursive'}}>
                    <b>Celebrations</b>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Plan your Celebrations to celebrate with your friends and family.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" href="/Celebrations" variant='contained'>
                Explore!
                </Button>
            </CardActions>
            </Card>
            </Button>
        </div>
        &nbsp;
        <div className='fourth'>
        <Button href="/BusinessEvents"><Card sx={{ maxWidth: 265, minHeight:265,margin:1}}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Business Events"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'cursive'}}>
                    <b>Business Events</b>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Plan your Professional Gatherings with us.
                From Meetings to Conferences and Seminars to Webinars.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" href="/BusinessEvents" variant='contained'>
                Explore!
                </Button>
            </CardActions>
            </Card>
            </Button>
        </div>
        </Grid>
        </div>
        <div>
            <Footer/>
        </div>
    </>
    
  )
}
export default Events
