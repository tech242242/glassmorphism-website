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
          src="https://i.ibb.co/zHVPDbt1/abed00ed7b867030f62f7b7637f2bbc9-1.png"
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
