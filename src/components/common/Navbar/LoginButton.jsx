import { LogIn } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import NavTooltip from "./NavTooltip";

export default function LoginButton() {
  return (
    <NavTooltip label="Login">
      <NavLink
        to="/auth/login"
        className={({ isActive }) => `
          flex items-center justify-center w-11 h-11 rounded-full border border-white/20
          transition-all duration-300 hover:bg-white/20 dark:hover:bg-white/10
          ${isActive ? "text-(--color-primary) bg-white/20 shadow-inner" : "text-white/80 bg-white/5"}
        `}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <LogIn size={22} />
        </motion.div>
      </NavLink>
    </NavTooltip>
  );
}
