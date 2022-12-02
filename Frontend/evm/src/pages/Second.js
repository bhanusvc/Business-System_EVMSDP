import React from 'react'
import { Button } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Home from './Home';

function Second() {
  return (
    <>
    <div className='Radio'>
        <FormControl>
      <FormLabel id="Role" sx={{fontSize:'50px', color:'black'}}>Who are you ???</FormLabel>
      <RadioGroup
        row
        aria-labelledby="choice"
        name="Role"
      >
        <Button><FormControlLabel value="Admin" control={<Radio />} label="Admin" /></Button>
        <FormControlLabel value="Event Planner" control={<Radio />} label="Event Planner" />
        <FormControlLabel value="Customer" control={<Radio />} label="Customer" />
      </RadioGroup>
    </FormControl>
    
    </div>
    <div>
    <button href="/home" element={<Home/>}></button>
    </div>
    </>
  )
}

export default Second
