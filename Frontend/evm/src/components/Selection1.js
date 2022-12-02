import React from 'react'
import { Button } from '@mui/material'
import '../css/Sele.css'
function Selection1() {
  return (
    <>
    <br></br>
      <div className='ACM'>
        <Button href="/AdminLogin" variant='contained'sx={{fontFamily:'STXihei', fontSize:'40px', backgroundColor:'black', borderRadius:'50px',margin:'30px'}}>ADMIN</Button>&nbsp;&nbsp;
        <Button href="/Login" variant='contained' sx={{fontFamily:'STXihei', fontSize:'40px', backgroundColor:'black', borderRadius:'50px',margin:'30px'}}>CLIENT</Button>&nbsp;&nbsp;
        <Button href="/EMLogin" variant='contained' sx={{fontFamily:'STXihei', fontSize:'40px', backgroundColor:'black', borderRadius:'50px',margin:'30px'}}>EVENT MANAGER</Button>
    
      </div>

    </>
  )
}

export default Selection1
