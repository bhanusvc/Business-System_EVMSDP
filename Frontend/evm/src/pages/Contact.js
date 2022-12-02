import React from 'react'
import Button from '@mui/material/Button';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div>
      <br></br>
    <Button href="https://wa.me/+918247306195" target="_blank" rel="noreferrer" variant='contained'>
          Chat with us !</Button>
    </div>
    <br></br>
    <div>
    <iframe width="640px" height="480px" title='Contact'src="https://forms.office.com/Pages/ResponsePage.aspx?id=PsiMgEal50egP3Oh67ok8zXqVwLdSztGqlmiFhPOs75UMFBUNDAzWE1FUTlIUzFJRk83NzBVVVBPTS4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" sx={{border: "none", maxWidth:"100%", maxHeight:"100vh"}} allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}
export default Contact
