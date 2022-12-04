import React from 'react'
import '../css/booking.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Footer from '../components/Footer'
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Navbar from '../components/Navbar'
function Booking() {
  const [value, setValue] = React.useState(dayjs('2022-04-07'));
  return (
    <>
    <div>
      <div>
        <Navbar/>
      </div>
      <div className='te'>
        <br/>
        <b sx={{fontSize:"20px"}}>Name:</b> &nbsp;<TextField  variant="outlined" size='small'/>
        <br/>
        <b sx={{fontSize:"20px"}}>Ph No:</b> &nbsp;<TextField  variant="outlined" size='small'/>
        <br/>
        <b sx={{fontSize:"20px"}}>Email:</b> &nbsp;<TextField  variant="outlined" size='small'/>
        <br/>
        <b sx={{fontSize:"20px"}}>Date:</b> &nbsp;  
        <LocalizationProvider dateAdapter={AdapterDayjs}><DesktopDatePicker
          label=""
          value={value}
          minDate={dayjs('2017-01-01')}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
        <br/>
        <b sx={{fontSize:"20px"}}>Adv Amt(₹):</b> &nbsp;< TextField value={10000}/>
        <br/>
        <Button href='/pay' variant='contained'>Pay</Button>
      </div>
      <br/>
      <div>
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default Booking
