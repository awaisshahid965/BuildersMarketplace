import React from "react";

function ServiceCard({
  imgSrc,
  title,
  description,
  linkTo = "#",
  linkName = "",
  classes = "",
}) {
  return (
    <div className={`service-card ${classes}`}>
      <div className="card-icon">
        <img src={imgSrc} alt={title} />
      </div>
      <h3 className="h3 card-title">
        <a href={linkTo}>{title}</a>
      </h3>
      <p className="card-text">{description}</p>
      <a href={linkTo} className="card-link">
        <span>{linkName}</span>
        <ion-icon
          name="arrow-forward-outline"
          role="img"
          className="md hydrated"
          aria-label="arrow forward outline"
        ></ion-icon>
      </a>
    </div>
  );
}

export default ServiceCard;
