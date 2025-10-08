import React from "react";
import { motion } from "framer-motion";
import "./RotatingLogo.css";

export default function RotatingLogo() {
  return (
    <div className="rotating-logo-scroll">
      {/* Outer rotating ring */}
      <div className="outer-ring">
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
      </div>

      {/* Inner logo */}
      <div className="inner-logo">
        <img
          src="https://i.ibb.co/gq3w55Y/Picsart-25-10-08-17-53-43-447.png"
          alt="Inner Logo"
        />
      </div>
    </div>
  );
}
