import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-wrapper">
          <img src="/logo.svg" alt="logo-img" />
          <div className="icons">
            <a href="https://www.instagram.com/thefamiliahairstudio/?hl=en" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram fa-4x"></i>
            </a>
            <h4>21 E 26th St 
              Minneapolis MN 55404</h4>
            <h5>Copyright &copy; 2022 The Familia Hair Studio</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer