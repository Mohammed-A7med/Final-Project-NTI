import { motion } from "framer-motion";
import { Hotel } from "lucide-react";
import { NavLink } from "react-router-dom";
import NavTooltip from "./NavTooltip";

export default function Logo() {
  return (
    <NavTooltip label="Palm Mirage">
      <NavLink to="/">
        {({ isActive }) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`
              p-2.5 rounded-full border border-white/10 transition-all
              flex items-center justify-center cursor-pointer overflow-hidden
              ${isActive
                ? "bg-primary/20 text-primary shadow-inner border border-primary/20"
                : "bg-primary/10 hover:bg-primary/20 text-[#fefefea9]"}
            `}
          >
            <Hotel size={20} />
          </motion.div>
        )}
      </NavLink>
    </NavTooltip>
  );
}

