import { Languages } from "lucide-react";
import { motion } from "framer-motion";
import NavTooltip from "./NavTooltip";

export default function LanguageToggle() {
  return (
    <NavTooltip label="Language">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-11 h-11 flex items-center justify-center rounded-full bg-primary/5 hover:bg-primary/20 transition-all text-[#fefefea9] border border-[#fefefe11] cursor-pointer"
        aria-label="Toggle Language"
      >
        <Languages size={20} />
      </motion.button>
    </NavTooltip>
  );
}
