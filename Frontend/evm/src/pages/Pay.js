import React from 'react'
import '../index.css'
import pay from '../Media/pay.jpg'
function Pay() {
  return (
    <div>
      <h3>Payment Page</h3>
        <img src={pay} height="300px"></img>

        <h5 >You can pay using PhonePe, Gpay, PayTM</h5>
    </div>
  )
}

export default Pay
