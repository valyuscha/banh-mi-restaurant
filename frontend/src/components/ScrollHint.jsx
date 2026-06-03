import { motion } from "framer-motion";
import { ChevronsRight } from "lucide-react";

export const ScrollHint = ({ label, className = "" }) => (
  <div
    data-testid="carousel-scroll-hint"
    className={`flex items-center justify-center gap-2 mt-5 text-[#1A3B26] ${className}`}
  >
    <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#4A4038]">
      {label}
    </span>
    <motion.span
      animate={{ x: [0, 6, 0] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <ChevronsRight className="w-4 h-4" strokeWidth={2} />
    </motion.span>
  </div>
);
