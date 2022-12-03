import Button from '@mui/material/Button';
import '../css/home.css'
import React from 'react'

function Home() {
  return (
    <>
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <h3 class="animate-charcter"> EventZ by RBK</h3>
        </div>
      </div>
    </div>
        <div>
      <Button href="/Selection1"variant="contained" size='large' style={{fontFamily:'Bahnschrift'}}>Get Started</Button>
        </div>
    </>
  )
}

export default Home