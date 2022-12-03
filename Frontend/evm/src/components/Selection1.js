import React from 'react'
import { Button } from '@mui/material'
import '../css/Sele.css'
function Selection1() {
  return (
    <div className='ACMbody'>
        <h2>Your Role 🧐</h2>
      <div className='b1'>
        <Button href="/Login" variant='filled' sx={{fontFamily:'STXihei', fontSize:'30px',fontWeight:'bold',border: '3px solid ',  borderRadius:'10px',margin:'30px'}}>Customer</Button>&nbsp;&nbsp;
        </div>
        <div className='b2'>
        <Button href="/EMLogin" variant='filled' sx={{fontFamily:'STXihei', fontSize:'30px',  fontWeight:'bold',border: '3px solid ',borderRadius:'10px',margin:'30px'}}>Event Manager</Button>
    
      </div>

    </div>
  )
}

export default Selection1
