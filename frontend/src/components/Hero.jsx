import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { MEDIA } from "@/data/content";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#111111]"
    >
      <div className="absolute inset-0">
        <img
          src={MEDIA.hero}
          alt="Fresh Vietnamese Bánh Mì sandwich"
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/80 via-[#111111]/55 to-[#111111]/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 w-full pt-28 pb-20">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold text-[#E8C9A0]"
          >
            {t.hero.overline}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#F9F3EA] tracking-tight leading-[1.02] mt-5"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
            className="text-lg sm:text-xl leading-relaxed text-[#F9F3EA]/85 mt-7 max-w-xl"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mt-10"
          >
            <a
              href="#contact"
              data-testid="hero-book-btn"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#1A3B26] text-[#F9F3EA] font-medium transition-all hover:bg-[#112618] hover:-translate-y-0.5"
            >
              {t.hero.primary}
            </a>
            <a
              href="#menu"
              data-testid="hero-menu-btn"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-[#F9F3EA]/60 text-[#F9F3EA] font-medium transition-all hover:bg-[#F9F3EA] hover:text-[#111111] hover:-translate-y-0.5"
            >
              {t.hero.secondary}
            </a>
          </motion.div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#F9F3EA]/70 hover:text-[#F9F3EA] transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
