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
                ? "bg-white/20 text-(--color-primary)"
                : "bg-white/10 hover:bg-white/20 text-white/90"}
            `}
          >
            <Hotel size={20} />
          </motion.div>
        )}
      </NavLink>
    </NavTooltip>
  );
}

