import React from "react";
import AppLogo from "../../icons/AppLogo";
import HeaderLink from "./HeaderLink";

function HeaderNav({ headerNavbarRef, toggleNavbar }) {
  return (
    <nav className="navbar" ref={headerNavbarRef}>
      <div className="navbar-top">
        <a href="/" className="logo">
          <AppLogo />
        </a>
        <button
          className="nav-close-btn"
          aria-label="Close Menu"
          onClick={toggleNavbar}
        >
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>
      <div className="navbar-bottom">
        <ul className="navbar-list">
          <HeaderLink to="/" name="Home" />
          <HeaderLink to="/#about" name="About" />
          <HeaderLink to="/builders" name="Builders" />
        </ul>
      </div>
    </nav>
  );
}

export default HeaderNav;
