import React from "react";

function HeaderMenu({ toggleNavbar }) {
    return (
        <div className="header-bottom-actions">
            <button className="header-bottom-actions-btn" aria-label="Search">
                <ion-icon name="search-outline"></ion-icon>
                <span>Search</span>
            </button>
            <button className="header-bottom-actions-btn" aria-label="Profile">
                <ion-icon name="person-outline"></ion-icon>
                <span>Profile</span>
            </button>
            <button className="header-bottom-actions-btn" aria-label="Cart">
                <ion-icon name="cart-outline"></ion-icon>
                <span>Cart</span>
            </button>
            <button className="header-bottom-actions-btn" data-nav-open-btn aria-label="Open Menu" onClick={toggleNavbar}>
                <ion-icon name="menu-outline"></ion-icon>
                <span>Menu</span>
            </button>
        </div>
    );
}

export default HeaderMenu;
