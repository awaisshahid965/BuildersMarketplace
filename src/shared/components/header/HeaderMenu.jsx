import React from "react";
import { useAuth } from "../../../context/auth/AuthContext";

const AuthBasedMenuItems = ({ isAuthenticated, logout }) => {
  switch (isAuthenticated) {
    case true:
      return (
        <>
          <button className="header-bottom-actions-btn">
            <ion-icon name="person-outline"></ion-icon>
            <span>Profile</span>
          </button>
          <button className="header-bottom-actions-btn" onClick={logout}>
            <ion-icon name="log-out-outline"></ion-icon>
            <span>Logout</span>
          </button>
        </>
      );
    case false:
    default:
      return null;
  }
};

function HeaderMenu({ toggleNavbar }) {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="header-bottom-actions">
      <AuthBasedMenuItems isAuthenticated={isAuthenticated} logout={logout} />
      <button
        className="header-bottom-actions-btn"
        aria-label="Open Menu"
        onClick={toggleNavbar}
      >
        <ion-icon name="menu-outline"></ion-icon>
        <span>Menu</span>
      </button>
    </div>
  );
}

export default HeaderMenu;
