import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, selectIsDark } from "@/store/themeSlice";
import NavTooltip from "./NavTooltip";

const iconVariants = {
  initial: { y: 12, opacity: 0, scale: 0.7 },
  animate: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.25, ease: "easeOut" } },
  exit:    { y: -12, opacity: 0, scale: 0.7, transition: { duration: 0.2, ease: "easeIn" } },
};

export default function ThemeToggle({ mobile = false }) {
  const isDark = useSelector(selectIsDark);
  const dispatch = useDispatch();

  const icon = (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={isDark ? "sun" : "moon"}
        variants={iconVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ display: "flex" }}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </motion.span>
    </AnimatePresence>
  );

  if (mobile) {
    return (
      <button
        onClick={() => dispatch(toggleTheme())}
        className="flex items-center gap-3 text-white/80 shrink-0 cursor-pointer overflow-hidden"
      >
        {icon}
        <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
      </button>
    );
  }

  return (
    <NavTooltip label={isDark ? "Light Mode" : "Dark Mode"}>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => dispatch(toggleTheme())}
        className="w-11 h-11 flex items-center justify-center rounded-full bg-primary/5 hover:bg-primary/20 transition-all text-[#fefefea9] border border-[#fefefe11] cursor-pointer overflow-hidden"
        aria-label="Toggle Theme"
      >
        {icon}
      </motion.button>
    </NavTooltip>
  );
}
