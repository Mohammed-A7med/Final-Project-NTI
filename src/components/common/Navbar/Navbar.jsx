import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { navLinks } from "./navLinks";
import Logo from "./Logo";


import MobileMenuButton from "./MobileMenuButton";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import NavActions from "./NavActions";
import MegaMenu from "./MegaMenu";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const timeoutRef = useRef(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
      setActiveMegaMenu(null); // Close mega menu if scrolling down
      setIsOpen(false); // Close mobile menu if scrolling down
    } else {
      setHidden(false);
    }
  });

  const handleMouseEnter = (link) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (link.megaMenu) {
      setActiveMegaMenu(link);
    } else {
      setActiveMegaMenu(null);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 200); // Small delay to allow moving mouse into the mega menu
  };

  const keepOpen = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-5 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto relative">
        <motion.nav
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: -100, opacity: 0 },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="relative flex items-center justify-between px-2 py-2 bg-primary/50 backdrop-blur-xl border border-primary/20 rounded-full shadow-2xl z-20"
        >
          <Logo />
          <DesktopNav 
            navLinks={navLinks} 
            onHover={handleMouseEnter}
            onLeave={handleMouseLeave}
          />
          <NavActions />
          <MobileMenuButton isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
        </motion.nav>

        <AnimatePresence>
          {activeMegaMenu && (
            <MegaMenu 
              content={activeMegaMenu.megaMenu} 
              isOpen={!!activeMegaMenu}
              onMouseEnter={keepOpen}
              onMouseLeave={handleMouseLeave}
            />
          )}
        </AnimatePresence>

        <MobileNav
          navLinks={navLinks}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </header>
  );
}
