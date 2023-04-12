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

        <div className="header-bottom-actions">
          <button className="header-bottom-actions-btn" aria-label="Search">
            <ion-icon name="search-outline"></ion-icon>
            <span>Search</span>
          </button>
          <button className="header-bottom-actions-btn" aria-label="Profile">
            <ion-icon name="person-outline"></ion-icon>
            <span>Profile</span>
          </button>
          <button className="header-bottom-actions-btn" aria-label="Cart">
            <ion-icon name="cart-outline"></ion-icon>
            <span>Cart</span>
          </button>
          <button className="header-bottom-actions-btn" data-nav-open-btn aria-label="Open Menu">
            <ion-icon name="menu-outline"></ion-icon>
            <span>Menu</span>
          </button>
        </div>

      </div>
    </div>

  </header>
  )
}

export default Header