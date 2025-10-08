import React from "react";
import { motion } from "framer-motion";
import "./RotatingLogo.css";

export default function RotatingLogo() {
  return (
    <div className="rotating-logo-fixed">
      {/* Outer rotating ring */}
      <a
        href="https://ibb.co/k6VhL5M4"
        target="_blank"
        rel="noopener noreferrer"
        className="outer-ring"
      >
        <motion.img
          src="https://i.ibb.co/sJpFTbtK/1ce88644e964bdfbd268f4ab3973494e.webp"
          alt="Outer Ring"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 8,
          }}
        />
      </a>

      {/* Inner Logo */}
      <a
        href="https://ibb.co/W86FbbC"
        target="_blank"
        rel="noopener noreferrer"
        className="inner-logo"
      >
        <img
          src="https://i.ibb.co/gq3w55Y/Picsart-25-10-08-17-53-43-447.png"
          alt="Inner Logo"
        />
      </a>
    </div>
  );
}
