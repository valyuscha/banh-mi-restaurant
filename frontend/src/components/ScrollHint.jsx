import { motion } from "framer-motion";
import { ChevronsRight } from "lucide-react";

export const ScrollHint = ({ label, className = "" }) => (
  <div
    data-testid="carousel-scroll-hint"
    className={`flex items-center justify-center gap-2 mt-5 text-[#2F6042] ${className}`}
  >
    <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#5C4A3D]">
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
