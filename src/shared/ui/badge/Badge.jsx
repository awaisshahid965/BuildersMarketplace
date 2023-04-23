import React from 'react'

function Badge({ title, classes = '' }) {
  if (!title) {
    return null
  }
  return (
    <p className={`section-subtitle ${classes}`}>
      {title}
    </p>
  )
}

export default Badge