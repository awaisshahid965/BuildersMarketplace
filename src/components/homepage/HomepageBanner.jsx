import React from 'react'
import Button from '../../shared/ui/button/Button'

function HomepageBanner() {
  return (
    <section className="hero" id="home">
      <div className="container">

        <div className="hero-content">
          <p className="hero-subtitle">
            <ion-icon name="cog-outline"></ion-icon>
            <span>Builders Marketplace</span>
          </p>

          <h2 className="h1 hero-title">Find the Perfect Builder for Your Next Project</h2>

          <p className="hero-text">
            Get connected with the best builders in your area and start your project off right.
            Our builder's marketplace offers a wide range of professionals with expertise in every aspect of construction.
            From residential to commercial, our builders have the experience and knowledge to get the job done.
          </p>

          <Button text="Make An Enquiry" />
        </div>

        <figure className="hero-banner">
          <img src="/images/homepage-banner.png" alt="Modern house model" className="w-100" />
        </figure>
      </div>
    </section>
  )
}

export default HomepageBanner