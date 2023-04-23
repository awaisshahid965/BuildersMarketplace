import React from 'react'

function Blockquote({ text, classes }) {
  return (
    <p className={`callout ${classes}`}>
      {'"'}{text}{'"'}
    </p>
  )
}

export default Blockquote