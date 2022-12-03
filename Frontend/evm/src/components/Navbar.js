import React from 'react'
import '../css/Nav.css'
import EventAvailableTwoToneIcon from '@mui/icons-material/EventAvailableTwoTone';
function Navbar() {
  return (
    <div className='Nav1'>
     
    <body>
        <header>
            <a class="logo" href="/mslider"><EventAvailableTwoToneIcon fontSize='large'></EventAvailableTwoToneIcon></a>
            <nav>
                <ul class="nav__links">
                    <li><a href="/Events">Events</a></li>
                    <li><a href="/AboutUs">About Us</a></li>
                    <li><a href="/Contact">Contact</a></li>
                    <li><a href="https://forms.office.com/r/qmsDGmJ0vg?embed=true"  target="_blank" rel="noreferrer">Feedback</a></li>
                </ul>
            </nav>
            <button><a class="cta" href="/Login">Log Out</a></button>
            
        </header>
        
        
    </body>

    </div>
  )
}

export default Navbar