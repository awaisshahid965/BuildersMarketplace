import React from 'react'
import IconWithLabel from '../../shared/ui/icon-with-label/IconWithLabel'
import Blockquote from '../../shared/ui/blockquote/Blockquote'
import Button from '../../shared/ui/button/Button'

function HomepageAbout() {
  return (
    <section className='about'>
      <div className="container">
        <figure className="about-banner">
          <img src="/images/about-main.png" alt="House interior" />
          <img src="/images/about-sub.jpg" alt="House interior" className="abs-img" />
        </figure>

        <div className="about-content">
          <p className="section-subtitle">About Us</p>
          <h2 className="h2 section-title">The Leading Real Estate Rental Marketplace.</h2>
          <p className="about-text">
            Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage,
            combined with
            specialist services
          </p>

          <div className="about-list">
            <IconWithLabel Icon={<ion-icon name="home-outline" role="img" className="md hydrated" aria-label="home outline"></ion-icon>} label="Smart Home Design" />
            <IconWithLabel Icon={<ion-icon name="leaf-outline" role="img" className="md hydrated" aria-label="leaf outline"></ion-icon>} label="Beautiful Scene Around" />
            <IconWithLabel Icon={<ion-icon name="wine-outline" role="img" className="md hydrated" aria-label="wine outline"></ion-icon>} label="Exceptional Lifestyle" />
            <IconWithLabel Icon={<ion-icon name="shield-checkmark-outline" role="img" className="md hydrated" aria-label="shield checkmark outline"></ion-icon>} label="Complete 24/7 Security" />
          </div>
          <Blockquote text="Enimad minim veniam quis nostrud exercitation llamco laboris. Lorem ipsum dolor sit amet" />
          <Button href="#service" text="Our Services" />
        </div>
      </div>
    </section>
  )
}

export default HomepageAbout