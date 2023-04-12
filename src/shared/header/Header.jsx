/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import AppLogo from '../icons/AppLogo'
import HeaderContactBar from './HeaderContactBar'
import HeaderLink from './HeaderLink'

function Header() {
  return (
    <header className="header" data-header>
        <HeaderContactBar />

    <div className="overlay" data-overlay></div>

    

    <div className="header-bottom">
      <div className="container">
        <a href="/" className="logo">
          <AppLogo />
        </a>
        <nav className="navbar" data-navbar>
          <div className="navbar-top">
            <a href="/" className="logo">
              <AppLogo />
            </a>
            <button className="nav-close-btn" data-nav-close-btn aria-label="Close Menu">
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>
          <div className="navbar-bottom">
            <ul className="navbar-list">
              <HeaderLink to="/" name="Home" />
              <HeaderLink to="#" name="About" />
              <HeaderLink to="#" name="Contact Us" />
            </ul>
          </div>
        </nav>

        

      </div>
    </div>

  </header>
  )
}

export default Header