import React, { useRef } from "react";
import AppLogo from "../../icons/AppLogo";
import HeaderContactBar from "./HeaderContactBar";
import HeaderMenu from "./HeaderMenu";
import HeaderNav from "./HeaderNav";

function Header() {
  const headerNavbarRef = useRef(null)
  const headerOverlayRef = useRef(null)

  const toggleNavbar = () => {
    headerNavbarRef?.current.classList.toggle('active')
    headerOverlayRef?.current.classList.toggle('active')
  }

  return (
    <header className="header" data-header>
      <HeaderContactBar />
      <div ref={headerOverlayRef} className="overlay" data-overlay></div>

      <div className="header-bottom">
        <div className="container">
          <a href="/" className="logo">
            <AppLogo />
          </a>
          <HeaderNav headerNavbarRef={headerNavbarRef} toggleNavbar={toggleNavbar} />
          <HeaderMenu toggleNavbar={toggleNavbar} />
        </div>
      </div>
    </header>
  );
}

export default Header;
