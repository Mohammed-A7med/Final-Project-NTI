import { NavLink } from "react-router-dom";
import { LogIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

export default function MobileNav({ navLinks, isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0, y: -20 }}
          animate={{ height: "auto", opacity: 1, y: 0 }}
          exit={{ height: 0, opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="md:hidden absolute left-5 right-5 mt-4 overflow-hidden z-40"
        >
          <div className="p-6 bg-black/30 dark:bg-white/10 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl">
            <ul className="grid grid-cols-1 gap-3">
              {navLinks.map((link, idx) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <NavLink
                    to={link.href}
                    onClick={onClose}
                    className={({ isActive }) => `
                      flex items-center gap-4 p-4 rounded-2xl transition-all
                      ${isActive ? "bg-(--color-primary) text-white shadow-lg" : "text-white/80 hover:bg-white/10"}
                    `}
                  >
                    {link.icon}
                    <span className="font-semibold">{link.label}</span>
                  </NavLink>
                </motion.li>
              ))}

              {/* Mobile Login Link */}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <NavLink
                  to="/login"
                  onClick={onClose}
                  className={({ isActive }) => `
                    flex items-center gap-4 p-4 rounded-2xl transition-all
                    ${isActive ? "bg-(--color-primary) text-white shadow-lg" : "text-white/80 hover:bg-white/10"}
                  `}
                >
                  <LogIn size={22} />
                  <span className="font-semibold">Login</span>
                </NavLink>
              </motion.li>
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-4"
            >
              <div className="flex justify-between items-center px-2">
                <ThemeToggle mobile />
                <LanguageToggle />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
