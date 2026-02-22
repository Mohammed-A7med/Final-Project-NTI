import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import NavTooltip from "./NavTooltip";

export default function DesktopNav({ navLinks, onHover, onLeave }) {
  return (
    <ul className="hidden md:flex items-center gap-2 lg:gap-4 absolute left-1/2 -translate-x-1/2">
      {navLinks.map((link) => (
        <li 
          key={link.label}
          onMouseEnter={() => onHover(link)}
          onMouseLeave={onLeave}
        >
          <NavTooltip label={link.label}>
            <NavLink
              to={link.href}
              className={({ isActive }) => `
                flex items-center justify-center w-11 h-11 rounded-full
                transition-all duration-300 hover:bg-white/20 dark:hover:bg-white/10
                ${isActive ? "text-[var(--color-primary)] bg-white/20 shadow-inner" : "text-white/80"}
              `}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.div>
            </NavLink>
          </NavTooltip>
        </li>
      ))}
    </ul>
  );
}
