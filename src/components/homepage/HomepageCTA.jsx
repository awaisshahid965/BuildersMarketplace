import React from "react";
import Button from "../../shared/ui/button/Button";

function HomepageCTA() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-card">
          <div className="card-content">
            <h2 className="h2 card-title">Want to build your dream home?</h2>
            <p className="card-text">
              Our team of expert builders can help you design and build the home
              you've always dreamed of, tailored to your unique style and needs.
            </p>
          </div>
          <Button
            text="Explore More"
            classes="cta-btn"
            trailingIcon={
              <ion-icon
                name="arrow-forward-outline"
                role="img"
                className="md hydrated"
                aria-label="arrow forward outline"
              ></ion-icon>
            }
          />
        </div>
      </div>
    </section>
  );
}

export default HomepageCTA;
