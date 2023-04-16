import React from 'react'

function FooterLinkItem({ to, name }) {
  return (
    <div>
      <a href={to} className="footer-link">{name}</a>
    </div>
  )
}

export default FooterLinkItem