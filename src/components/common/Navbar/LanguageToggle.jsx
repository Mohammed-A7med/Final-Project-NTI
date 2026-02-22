import { Languages } from "lucide-react";
import { motion } from "framer-motion";
import NavTooltip from "./NavTooltip";

export default function LanguageToggle() {
  return (
    <NavTooltip label="Language">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white/90 border border-white/10 cursor-pointer"
        aria-label="Toggle Language"
      >
        <Languages size={20} />
      </motion.button>
    </NavTooltip>
  );
}
