import { Button } from "@mui/material";
import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <div className="main-footer">
    <u><Button href="/Events"  sx={{color:'white',fontFamily:'STXihei'}}>Events</Button></u>
    &nbsp;
    <u><Button href="/Contact" sx={{color:'white',fontFamily:'STXihei'}}>Contact</Button></u>
    &nbsp;
    <u><Button href="/AboutUs"  sx={{color:'white',fontFamily:'STXihei'}}>About Us</Button></u>
    <hr/>
       
          <p className="col-sm">
            &copy;{new Date().getFullYear()} EventZ | All Rights Reserved.
          </p>
        </div>
  );
}

export default Footer;