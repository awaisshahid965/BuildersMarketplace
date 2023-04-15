/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function HeaderContactBar() {
  return (
    <div className="header-top">
      <div className="container">
        <ul className="header-top-list">
          <li>
            <a href={`mailto:${process.env.REACT_APP_USER_EMAIL}`} className="header-top-link">
              <ion-icon name="mail-outline"></ion-icon>
              <span>{process.env.REACT_APP_USER_EMAIL}</span>
            </a>
          </li>
          <li>
            <a href="#" className="header-top-link">
              <ion-icon name="location-outline"></ion-icon>
              <address>{process.env.REACT_APP_USER_ADRESS}</address>
            </a>
          </li>
        </ul>
        <div className="wrapper">
          <ul className="header-top-social-list">
            <li>
              <a href="#" className="header-top-social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="header-top-social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="header-top-social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="header-top-social-link">
                <ion-icon name="logo-pinterest"></ion-icon>
              </a>
            </li>
          </ul>
          <button className="header-top-btn">Add Listing</button>
        </div>
      </div>
    </div>
  )
}

export default HeaderContactBar