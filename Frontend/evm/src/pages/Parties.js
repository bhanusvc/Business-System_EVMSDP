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
import '../css/Parties.css'
import Footer from '../components/Footer'


const theme = createTheme();

export default function Ceremonies() {
  return (
    <>
    <div><Navbar/></div>
    <div className='pa'>
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
              PARTIES
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph fontStyle="italic">
            Plan your social gatherings with refreshments.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button  href="/Ceremonies" ><WestRoundedIcon sx={{ fontSize: 40 }}></WestRoundedIcon>&nbsp;<h2>Ceremonies</h2></Button>
              &nbsp;
              &nbsp;
              <Button  href="/Celebrations" >&nbsp;<h2>CELEBRATIONS</h2><EastRoundedIcon sx={{ fontSize: 40 }}></EastRoundedIcon></Button>
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
                image="https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg"
                alt="Birthday Party"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'STXihei'}}>
                <b>Birthday Party</b>
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
                image="https://i.scdn.co/image/ab6765630000ba8aad2431b98aa88ff4c2828fbf"
                alt="Bachelor party"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'STXihei'}}>
                <b>Bachelor party</b>
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
                image="https://images.pexels.com/photos/619424/pexels-photo-619424.jpeg"
                alt="Halloween"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'STXihei'}}>
                <b>Halloween</b>
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
                image="http://www.casabellabanquet.com/wp-content/uploads/2018/02/kitty-party-1.png"
                alt="Kitty Party"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'STXihei'}}>
                <b>Kitty Party</b>
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
                image="http://genderrevealsmoke.com/wp-content/uploads/2019/06/gender-reveal-powder-cannons-pink-blue-1024x768.jpg"
                alt="Gender Reveal"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'STXihei'}}>
                <b>Gender Reveal</b>
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
                image="https://t3.ftcdn.net/jpg/02/95/32/10/240_F_295321051_AA2t0ZJBdhaOrHvK4OiXHm43zwbQwhSx.jpg"
                alt="Farewell Party"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'STXihei'}}>
                <b>Farewell Party</b>
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
    <div><Footer/></div>
    </>
  );
}
