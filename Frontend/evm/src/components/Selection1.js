import React from 'react'
import { Button } from '@mui/material'
import '../css/Sele.css'
function Selection1() {
  return (
    <div className='ACMbody'>

      <div className='Buttons'>
        <Button href="/AdminLogin" variant='filled' sx={{fontFamily:'STXihei', fontSize:'40px',fontWeight:'bold',border: '2px solid #111', borderRadius:'10px',margin:'30px'}}>ADMIN</Button>&nbsp;&nbsp;
        <Button href="/Login" variant='filled' sx={{fontFamily:'STXihei', fontSize:'40px',fontWeight:'bold',border: '2px solid #111',  borderRadius:'10px',margin:'30px'}}>CLIENT</Button>&nbsp;&nbsp;
        <Button href="/EMLogin" variant='content' sx={{fontFamily:'STXihei', fontSize:'40px',  fontWeight:'bold',border: '2px solid #111',borderRadius:'10px',margin:'30px'}}>EVENT MANAGER</Button>
    
      </div>

    </div>
  )
}

export default Selection1
