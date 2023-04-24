/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./ProfileCard.css";

function ProfileCard() {
  return (
    <div className="profile_card">
      <div className="profile_card__media">
        <img
          src="/images/profile-card-placeholder.webp"
          className="profile_card__image"
          alt="profile"
        />
      </div>
      <div className="profile_card__body">
        <p className="profile_card__head">Olivia Morgan</p>
        <p className="profile_card__bio">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          iusto, hic repudiandae pariatur fuga itaque.
        </p>
        <div className="profile_card__actions">
          <a href="#" className="profile_card__link">
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
