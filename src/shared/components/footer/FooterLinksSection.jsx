import React from 'react'
import FooterLinkItem from './FooterLinkItem'

function FooterLinksSection({ title, links }) {
  return (
    <div className='footer-list'>
      <p className="footer-list-title">{title}</p>
      {
        links.map((link, i) => {
          return <FooterLinkItem to={link.to} name={link.name} key={link.name + i} />
        })
      }
    </div>
  )
}

export default FooterLinksSection