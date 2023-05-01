import React from "react";
import "./Button.css";

const buttonStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
};

function Button({
  text,
  href,
  classes = "",
  disabled = false,
  onClick,
  leadingIcon = null,
  trailingIcon = null,
}) {
  const btnContent = () => {
    return (
      <div style={buttonStyles}>
        {leadingIcon}
        {text}
        {trailingIcon}
      </div>
    );
  };

  if (!!href && !onClick) {
    return (
      <a href={href} className={`btn ${classes}`} disabled={disabled}>
        {btnContent()}
      </a>
    );
  }
  return (
    <button className={`btn ${classes}`} disabled={disabled} onClick={onClick}>
      {btnContent()}
    </button>
  );
}

export default Button;
