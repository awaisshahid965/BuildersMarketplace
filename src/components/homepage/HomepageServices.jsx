import React from 'react'
import ServiceCard from '../../shared/components/service-sard/ServiceCard'
import Badge from '../../shared/ui/badge/Badge'

function HomepageServices() {
  return (
    <section class="service" id="service">
      <div class="container">
        <Badge title="Our Services" />
        <h2 class="h2 section-title">Our Main Focus</h2>
        <div class="service-list">
          <ServiceCard imgSrc="/images/service-1.png" title="Home Renovations" description="Transform your living space with custom renovations tailored to your needs and style." linkTo='#' linkName='Find One' />
          <ServiceCard imgSrc="/images/service-2.png" title="Commercial Construction" description="Build a new commercial space or renovate an existing one with high-quality materials and expert craftsmanship." linkTo='#' linkName='Find One' />
          <ServiceCard imgSrc="/images/service-3.png" title="Custom Home Building" description="Design and build your dream home from the ground up, with personalized attention to every detail." linkTo='#' linkName='Find One' />
        </div>
      </div>
    </section>
  )
}

export default HomepageServices