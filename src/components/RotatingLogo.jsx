import React from "react";
import { motion } from "framer-motion";
import "./RotatingLogo.css";

export default function RotatingLogo() {
  return (
    <div className="rotating-logo">
      {/* Outer rotating ring - link 1 */}
      <a
        href="https://ibb.co/k6VhL5M4"
        target="_blank"
        rel="noopener noreferrer"
        className="outer-ring"
      >
        <motion.img
          src="https://i.ibb.co/zHVPDbt1/abed00ed7b867030f62f7b7637f2bbc9-1.png"
          alt="Outer Ring"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 8,
          }}
        />
      </a>

      {/* Inner logo - link 2 */}
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
