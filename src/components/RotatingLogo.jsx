import { motion } from "framer-motion";
import "./RotatingLogo.css";

export default function RotatingLogo() {
  return (
    <div className="rotating-logo-wrapper">
      {/* Outer rotating ring with Link 1 */}
      <a
        href="https://ibb.co/k6VhL5M4"
        target="_blank"
        rel="noopener noreferrer"
        className="rotating-ring"
      >
        <motion.img
          src="https://i.ibb.co/sJpFTbtK/1ce88644e964bdfbd268f4ab3973494e.webp"
          alt="Outer Ring"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />
      </a>

      {/* Inner logo with Link 2 */}
      <a
        href="https://ibb.co/W86FbbC"
        target="_blank"
        rel="noopener noreferrer"
        className="center-logo"
      >
        <img
          src="https://i.ibb.co/gq3w55Y/Picsart-25-10-08-17-53-43-447.png"
          alt="Inner Logo"
        />
      </a>
    </div>
  );
}
