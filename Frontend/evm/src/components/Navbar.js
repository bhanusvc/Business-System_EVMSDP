import React from 'react'
import '../css/Nav.css'
function Navbar() {
  return (
    <div className='Nav1'>
     
    <body>
        <header>
            <a class="logo" href="/mhome"><img src="" alt="EVM"/></a>
            <nav>
                <ul class="nav__links">
                    <li><a href="/Events">Events</a></li>
                    <li><a href="/AboutUs">About Us</a></li>
                    <li><a href="/Contact">Contact</a></li>
                </ul>
            </nav>
            <button><a class="cta" href="/Logout">Log Out</a></button>
            
        </header>
        
        
    </body>

    </div>
  )
}

export default Navbar