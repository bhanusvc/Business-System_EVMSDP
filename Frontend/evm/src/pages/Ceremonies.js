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
import '../css/Ceremonies.css'
import Footer from '../components/Footer'

const theme = createTheme();

export default function Ceremonies() {
  return (
    <>
    <div><Navbar/></div>
    <div className='ce'>
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
              CEREMONIES
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph fontStyle="italic">
            Plan your ceremonies in a unified ritualistic way with us. 
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button  href="/Events" ><WestRoundedIcon sx={{ fontSize: 40 }}></WestRoundedIcon>&nbsp;<h2>EVENTS</h2></Button>
              &nbsp;
              &nbsp;
              <Button  href="/Parties" >&nbsp;<h2>PARTIES</h2><EastRoundedIcon sx={{ fontSize: 40 }}></EastRoundedIcon></Button>
            </Stack>
          </Container>
        </Box>
        <Container  fixed>
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
                image="https://images.pexels.com/photos/888899/pexels-photo-888899.jpeg"
                alt="Marriage"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'STXihei'}}>
                <b>Marriage</b>
                </Typography>
                <Typography variant="body2" color="text.secondary" fontStyle="italic" fontFamily="STXihei">
                Plan your ceremonies in a unified ritualistic way with us. 
                <br/>
                <b>Adv Amount : ₹10000</b> 
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
                image="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg"
                alt="Half Saree Function"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'STXihei'}}>
                <b>Half Saree Function</b>
                </Typography>
                <Typography variant="body2" color="text.secondary" fontStyle="italic" fontFamily="STXihei">
                Plan your ceremonies in a unified ritualistic way with us. 
                <br/>
                <b>Adv Amount : ₹10000</b> 
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
                image="https://5.imimg.com/data5/HE/LN/MY-45596354/white-dhoties-500x500.jpg"
                alt="Dhoti Function"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'STXihei'}}>
                <b>Dhoti Function</b>
                </Typography>
                <Typography variant="body2" color="text.secondary" fontStyle="italic" fontFamily="STXihei">
                Plan your ceremonies in a unified ritualistic way with us. 
                <br/>
                <b>Adv Amount : ₹10000</b> 
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
                image="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg"
                alt="Graduation"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'STXihei'}}>
                <b>Graduation</b>
                </Typography>
                <Typography variant="body2" color="text.secondary" fontStyle="italic" fontFamily="STXihei">
                Plan your ceremonies in a unified ritualistic way with us. 
                <br/>
                <b>Adv Amount : ₹10000</b> 
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
                image="https://wallpaperaccess.com/full/3682398.jpg"
                alt="Award Giving"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'STXihei'}}>
                <b>Award Giving</b>
                </Typography>
                <Typography variant="body2" color="text.secondary" fontStyle="italic" fontFamily="STXihei">
                Plan your ceremonies in a unified ritualistic way with us. 
                <br/>
                <b>Adv Amount : ₹10000</b> 
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
                image="https://medilodgeofcasscity.com/wp-content/uploads/sites/26/2018/12/retirement-party-web.jpg"
                alt="Retirement"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'STXihei'}}>
                <b>Retirement</b>
                </Typography>
                <Typography variant="body2" color="text.secondary" fontStyle="italic" fontFamily="STXihei">
                Plan your ceremonies in a unified ritualistic way with us. 
                <br/>
                <b>Adv Amount : ₹10000</b> 
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
        <div className='seventh'>
                <Card sx={{ maxWidth: 265, minHeight:265,marginRight:7,marginBottom:5}} >
            <CardActionArea>
                <CardMedia
                component="img"
                height="160"
                image="https://media.istockphoto.com/vectors/grand-opening-invitation-banner-with-levitating-gold-ribboons-and-vector-id1137409760?k=20&m=1137409760&s=612x612&w=0&h=eI0MEg-Z4fH1LWFg4bCR3O-SCUGKvCRxhcOnH6ioEFY="
                alt="Grand Opening"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'STXihei'}}>
                <b>Grand Opening</b>
                </Typography>
                <Typography variant="body2" color="text.secondary" fontStyle="italic" fontFamily="STXihei">
                Plan your ceremonies in a unified ritualistic way with us. 
                <br/>
                <b>Adv Amount : ₹10000</b> 
                </Typography>
                <br></br>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" a color="primary" href="/Booking" variant='contained'>
                View Details
                </Button>
            </CardActions>
            </Card>
        </div>
          <div className='eighth'>
                <Card sx={{ maxWidth: 265, minHeight:265,marginRight:7,marginLeft:7,marginBottom:5}} >
            <CardActionArea>
                <CardMedia
                component="img"
                height="160"
                image="https://m.media-amazon.com/images/I/41WO33eRCuL.jpg"
                alt="Naming Ceremony"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'STXihei'}}>
                <b>Naming Ceremony</b>
                </Typography>
                <Typography variant="body2" color="text.secondary" fontStyle="italic" fontFamily="STXihei">
                Plan your ceremonies in a unified ritualistic way with us. 
                <br/>
                <b>Adv Amount : ₹10000</b> 
                </Typography>
                <br></br>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" a color="primary" href="/Booking" variant='contained'>
                View Details
                </Button>
            </CardActions>
            </Card>
        </div>
        <div className='ninth'>
                <Card sx={{ maxWidth: 265, minHeight:265,marginLeft:7,marginBottom:5}} >
            <CardActionArea>
                <CardMedia
                component="img"
                height="160"
                image="https://3.imimg.com/data3/MM/UN/MY-9342207/seemantham-500x500.gif"
                alt=""
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'STXihei'}}>
                <b>Seemantham</b>
                </Typography>
                <Typography variant="body2" color="text.secondary" fontStyle="italic" fontFamily="STXihei">
                Plan your ceremonies in a unified ritualistic way with us. 
                <br/>
                <b>Adv Amount : ₹10000</b> 
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
