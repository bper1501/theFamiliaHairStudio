import React from 'react';
import './Bookinfo.css';

function Bookinfo() {
  return (
    <>
      <div className="steps-container">
        <div className="shadow">
          <h1>How to Book:</h1>
          <ol>
            <li>1. Choose your barber</li>
            <li>2. Click 'Book Now' - this will take you to their booking platform</li>
            <li>3. Complete booking through their link</li>
          </ol>
        </div>
      </div>
    </>
  )
}

export default Bookinfo