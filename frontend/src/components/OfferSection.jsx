import { Sun, Utensils, Coffee, ShoppingBag, Users, Dog } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, Overline } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

const ICONS = { Sun, Utensils, Coffee, ShoppingBag, Users, Dog };

const OfferCard = ({ item, i, className = "" }) => {
  const Icon = ICONS[item.icon] || Coffee;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.07 }}
      data-testid={`offer-card-${i}`}
      className={`bg-[#FDFBF7] p-8 sm:p-10 rounded-3xl border border-[#2C1E16]/5 transition-transform hover:-translate-y-1.5 ${className}`}
    >
      <div className="w-12 h-12 rounded-full bg-[#F5F2EB] flex items-center justify-center text-[#2F6042] mb-6 shadow-sm">
        <Icon className="w-6 h-6" strokeWidth={1.8} />
      </div>
      <h3 className="font-serif text-2xl text-[#2C1E16]">{item.title}</h3>
      <p className="text-[#5C4A3D] mt-2 leading-relaxed">{item.text}</p>
    </motion.div>
  );
};

const OfferSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="offer"
      data-testid="offer-section"
      className="py-20 sm:py-32 bg-[#F5F2EB]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <Reveal className="text-center max-w-2xl mx-auto">
          <Overline>{t.offer.overline}</Overline>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#2C1E16] tracking-tight mt-4">
            {t.offer.title}
          </h2>
        </Reveal>

        {/* Mobile: horizontal snap carousel (1–2 cards depending on width) */}
        <div
          data-testid="offer-carousel"
          className="sm:hidden flex gap-5 mt-12 -mx-6 px-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2"
        >
          {t.offer.items.map((item, i) => (
            <OfferCard
              key={i}
              item={item}
              i={i}
              className="snap-center shrink-0 basis-[calc(50%-10px)] min-w-[250px]"
            />
          ))}
        </div>

        {/* Tablet / desktop: grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {t.offer.items.map((item, i) => (
            <OfferCard key={i} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
