/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import AppLogoWhite from '../../icons/AppLogoWhite'

function FooterBrand() {
  return (
    <div className="footer-brand">
      <a href="#" className="logo">
        <AppLogoWhite />
      </a>
      <p className="section-text">
        Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.
      </p>
      <ul className="contact-list">
        <li>
          <a href="#" className="contact-link">
            <ion-icon name="location-outline" role="img" className="md hydrated" aria-label="location outline"></ion-icon>
            <address>{process.env.REACT_APP_USER_ADRESS}</address>
          </a>
        </li>
        <li>
          <a href={`tel:${process.env.REACT_APP_USER_PHONE}`} className="contact-link">
            <ion-icon name="call-outline" role="img" className="md hydrated" aria-label="call outline"></ion-icon>
            <span>{process.env.REACT_APP_USER_PHONE}</span>
          </a>
        </li>
        <li>
          <a href={`mailto:${process.env.REACT_APP_USER_EMAIL}`} className="contact-link">
            <ion-icon name="mail-outline" role="img" className="md hydrated" aria-label="mail outline"></ion-icon>
            <span>{process.env.REACT_APP_USER_EMAIL}</span>
          </a>
        </li>
      </ul>
      <ul className="social-list">
        <li>
          <a href="#" className="social-link">
            <ion-icon name="logo-facebook" role="img" className="md hydrated" aria-label="logo facebook"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#" className="social-link">
            <ion-icon name="logo-twitter" role="img" className="md hydrated" aria-label="logo twitter"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#" className="social-link">
            <ion-icon name="logo-linkedin" role="img" className="md hydrated" aria-label="logo linkedin"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#" className="social-link">
            <ion-icon name="logo-youtube" role="img" className="md hydrated" aria-label="logo youtube"></ion-icon>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default FooterBrand