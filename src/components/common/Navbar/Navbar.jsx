import { useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "./navLinks";
import Logo from "./Logo";
import MobileMenuButton from "./MobileMenuButton";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import NavActions from "./NavActions";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-5 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative flex items-center justify-between px-6 py-2 bg-black/30 dark:bg-white/10 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full shadow-2xl"
        >
          <Logo />
          <DesktopNav navLinks={navLinks} />
          <NavActions />
          <MobileMenuButton isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
        </motion.nav>

        <MobileNav
          navLinks={navLinks}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </header>
  );
}
