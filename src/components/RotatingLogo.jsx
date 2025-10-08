import React from "react";
import "./RotatingLogo.css";

export default function RotatingLogo() {
  return (
    <div className="logo-fixed">
      {/* 🌀 Outer rotating circle with link 1 */}
      <a
        href="https://ibb.co/k6VhL5M4"
        target="_blank"
        rel="noopener noreferrer"
        className="outer-link"
      >
        <img
          src="https://i.ibb.co/sJpFTbtK/1ce88644e964bdfbd268f4ab3973494e.webp"
          alt="Rotating Circle"
          className="outer-rotate"
        />
      </a>

      {/* 🪙 Inner main logo with link 2 */}
      <a
        href="https://ibb.co/W86FbbC"
        target="_blank"
        rel="noopener noreferrer"
        className="inner-link"
      >
        <img
          src="https://i.ibb.co/gq3w55Y/Picsart-25-10-08-17-53-43-447.png"
          alt="Main Logo"
          className="inner-logo"
        />
      </a>
    </div>
  );
}
