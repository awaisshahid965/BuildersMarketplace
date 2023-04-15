import React from 'react'

function HeaderLink({ to = '', name = '' }) {
  if (!to && !name) {
    return null
  }
  return (
    <li>
      <a href={to} className="navbar-link">{name}</a>
    </li>
  )
}

export default HeaderLink