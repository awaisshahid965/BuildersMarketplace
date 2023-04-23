import React from 'react'
import HomepageBanner from './HomepageBanner'
import HomepageAbout from './HomepageAbout'
import HomepageServices from './HomepageServices'
import HomepageCTA from './HomepageCTA'

function Homepage() {
  return (
    <>
      <HomepageBanner />
      <HomepageAbout />
      <HomepageServices />
      <HomepageCTA />
    </>
  )
}

export default Homepage