import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import LogoImg from "@/assets/Logo.webp";

export default function Logo() {
  return (
    <NavLink to="/" className="flex items-center gap-3 shrink-0">
      <motion.img
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        src={LogoImg}
        alt="MountainHotel Logo"
        className="h-8 md:h-10 w-auto"
      />
    </NavLink>
  );
}
