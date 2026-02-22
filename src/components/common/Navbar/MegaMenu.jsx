import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function MegaMenu({ content, isOpen, onMouseEnter, onMouseLeave }) {
  if (!content) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={isOpen ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.95 }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`
        absolute top-full left-0 right-0 mt-4 overflow-hidden
        bg-white/95 dark:bg-neutral-900/95 backdrop-blur-2xl
        border border-white/20 dark:border-white/10 rounded-[2rem] shadow-2xl
        ${isOpen ? "pointer-events-auto" : "pointer-events-none"}
      `}
    >
      <div className="flex p-6 gap-6">

        {/* Left Side: title + 2-col links grid — 50% */}
        <div className="w-[55%] pr-6 border-r border-black/10 dark:border-white/10">
          {/* Section label */}
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-black/40 dark:text-white/40 pb-3 mb-8 border-b border-black/10 dark:border-white/10">
            {content.title}
          </p>

          {/* 2-column grid of links */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8">
            {content.links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="group flex items-center gap-3 hover:opacity-80 transition-opacity duration-200"
              >
                {/* Circular icon */}
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 text-black/60 dark:text-white/70 group-hover:bg-[var(--color-primary)]/10 group-hover:text-[var(--color-primary)] transition-colors duration-200">
                  {link.icon}
                </div>
                <span className="text-sm font-medium text-black/80 dark:text-white/80 group-hover:text-[var(--color-primary)] transition-colors duration-200">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side: featured image with promo overlay */}
        {content.featuredImage && (
          <div className="w-[45%] flex-shrink-0 pl-0">
            <div className="relative rounded-2xl overflow-hidden h-[300px]">
              <img
                src={content.featuredImage}
                alt="Featured"
                className="w-full h-full object-cover"
              />
              {/* Dark gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Promo caption */}
              {content.promotion && (
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">
                      {content.promotion.title}
                    </p>
                    <p className="text-white/80 text-xs mt-0.5">
                      {content.promotion.subtitle}
                    </p>
                  </div>
                  <Link
                    to={content.promotion.href}
                    className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-colors duration-200"
                  >
                    <ArrowRight size={16} className="text-white" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </motion.div>
  );
}
