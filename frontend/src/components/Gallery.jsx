import { motion } from "framer-motion";
import { Reveal, Overline } from "@/components/Reveal";
import { ScrollHint } from "@/components/ScrollHint";
import { useLanguage } from "@/context/LanguageContext";
import { MEDIA } from "@/data/content";
import ProgressiveImage from "@/components/ProgressiveImage";

const spans = [
  "md:col-span-7 md:row-span-2",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-6",
  "md:col-span-6",
];

const Gallery = () => {
  const { t } = useLanguage();

  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="py-12 sm:py-32 bg-[#F9F3EA]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <Reveal className="max-w-2xl">
          <Overline>{t.gallery.overline}</Overline>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#111111] tracking-tight mt-4">
            {t.gallery.title}
          </h2>
          <p className="text-[#4A4038] text-lg mt-4 leading-relaxed">{t.gallery.body}</p>
        </Reveal>

        {/* Mobile: horizontal snap carousel */}
        <div className="md:hidden mt-10">
          <div
            data-testid="gallery-carousel"
            className="flex gap-4 -mx-6 px-6 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide pb-1 items-stretch"
          >
            {MEDIA.gallery.map((img, i) => (
              <div
                key={i}
                data-testid={`gallery-slide-${i}`}
                className="snap-center shrink-0 w-[82%] aspect-[4/3] overflow-hidden rounded-3xl relative"
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <ScrollHint label={t.scrollHint} />
        </div>

        {/* Desktop / tablet: bento grid */}
        <div className="hidden md:grid grid-cols-12 gap-6 mt-12 auto-rows-[260px]">
          {MEDIA.gallery.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
              data-testid={`gallery-image-${i}`}
              className={`group relative overflow-hidden rounded-3xl ${spans[i]}`}
            >
              <ProgressiveImage
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
