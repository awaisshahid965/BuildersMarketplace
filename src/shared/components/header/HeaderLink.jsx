import React from "react";
import { Link } from "react-router-dom";

function HeaderLink({ to = "", name = "" }) {
  if (!to && !name) {
    return null;
  }
  return (
    <li>
      {to.includes("#") && (
        <a href={to} className="navbar-link">
          {name}
        </a>
      )}
      {!to.includes("#") && (
        <Link to={to} className="navbar-link">
          {name}
        </Link>
      )}
    </li>
  );
}

export default HeaderLink;
