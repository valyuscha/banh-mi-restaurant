import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, Overline } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { MEDIA } from "@/data/content";
import ProgressiveImage from "@/components/ProgressiveImage";

const MenuSection = () => {
  const { t, lang } = useLanguage();
  const [active, setActive] = useState(0);
  const categories = t.menu.categories;
  const current = categories[active] || categories[0];

  return (
    <section
      id="menu"
      data-testid="menu-section"
      className="py-12 sm:py-32 bg-[#F5F2EB]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <Reveal className="text-center max-w-2xl mx-auto">
          <Overline>{t.menu.overline}</Overline>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#2C1E16] tracking-tight mt-4">
            {t.menu.title}
          </h2>
          <p className="text-[#5C4A3D] mt-4">{t.menu.note}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="flex flex-wrap justify-center gap-3 mt-12"
            data-testid="menu-category-tabs"
          >
            {categories.map((c, i) => (
              <button
                key={`${lang}-${i}`}
                onClick={() => setActive(i)}
                data-testid={`menu-tab-${i}`}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === i
                    ? "bg-[#2F6042] text-[#FDFBF7]"
                    : "bg-[#FDFBF7] text-[#5C4A3D] hover:text-[#2C1E16] border border-[#2C1E16]/10"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-12 lg:gap-16 mt-14 items-start">
          <div className="flex flex-col gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${lang}-${active}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col gap-4"
              >
                {current.items.map((item, idx) => (
                  <div
                    key={idx}
                    data-testid={`menu-item-${active}-${idx}`}
                    className="flex items-end justify-between border-b border-dashed border-[#2C1E16]/25 pb-3"
                  >
                    <span className="font-serif text-xl sm:text-2xl text-[#2C1E16] pr-4">
                      {item.name}
                    </span>
                    <span className="font-medium text-[#2F6042] text-lg sm:text-xl whitespace-nowrap">
                      {item.price} zł
                    </span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <Reveal delay={0.15} className="w-full md:sticky md:top-28">
            <div className="overflow-hidden rounded-[2rem] aspect-[4/3] sm:aspect-[21/9] md:aspect-[3/4]">
              <ProgressiveImage
                src={MEDIA.menuHighlight}
                alt="Signature dishes at Gossip Cafe"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
