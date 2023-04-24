import React from 'react'

function ServiceCard({ imgSrc, title, description, linkTo = '#', linkName = '', classes = '' }) {
  return (
    <div class={`service-card ${classes}`}>
      <div class="card-icon">
        <img src={imgSrc} alt={title} />
      </div>
      <h3 class="h3 card-title">
        <a href={linkTo}>{title}</a>
      </h3>
      <p class="card-text">
        {description}
      </p>
      <a href={linkTo} class="card-link">
        <span>{linkName}</span>
        <ion-icon name="arrow-forward-outline" role="img" class="md hydrated" aria-label="arrow forward outline"></ion-icon>
      </a>
    </div>
  )
}

export default ServiceCard