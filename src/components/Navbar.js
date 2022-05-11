import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <img className="navbar-logo" src="/logo.svg" alt="logo-img"/>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="https://www.instagram.com/thefamiliahairstudio/?hl=en" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram fa-3x"></i>
            </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar