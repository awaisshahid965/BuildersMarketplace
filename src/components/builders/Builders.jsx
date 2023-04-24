import React from "react";
import ProfileCard from "../../shared/components/profile-card/ProfileCard";
import "./Builders.css";

function Builders() {
  return (
    <div className="builders">
      <h2 className="builders__heading">Builder Profiles</h2>
      <div className="builders__wrapper">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </div>
  );
}

export default Builders;
