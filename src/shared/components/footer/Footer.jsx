import React from 'react'
import FooterCopyright from './FooterCopyright'
import FooterLinksSection from './FooterLinksSection';
import { companySection, customerCareSection, servicesSection } from './FooterData.js'
import FooterBrand from './FooterBrand';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <FooterBrand />
          <div className="footer-link-box">
            <FooterLinksSection title={companySection.title} links={companySection.links} />
            <FooterLinksSection title={servicesSection.title} links={servicesSection.links} />
            <FooterLinksSection title={customerCareSection.title} links={customerCareSection.links} />
          </div>
        </div>
      </div>
      <FooterCopyright />
    </footer>
  )
}

export default Footer;