import React from 'react'

function IconWithLabel({ Icon = null, label = '', classes = '', iconClasses = '', labelClasses = '' }) {
  return (
    <div className={`about-item ${classes}`}>
      <div className={`about-item-icon ${iconClasses}`}>
        {Icon}
      </div>
      <p className={`about-item-text ${labelClasses}`}>
        {label}
      </p>
    </div>
  )
}

export default IconWithLabel