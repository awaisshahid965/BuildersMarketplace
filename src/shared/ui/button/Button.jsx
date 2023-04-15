import React from 'react'

function Button({ text, href, classes, disabled = false, onClic }) {
  if (!!href) {
    return <a href={href} className={`btn ${classes}`} disabled={disabled}>
      {text}
    </a>
  }
  return (
    <button className={`btn ${classes}`} disabled={disabled}>
      {text}
    </button>
  )
}

export default Button