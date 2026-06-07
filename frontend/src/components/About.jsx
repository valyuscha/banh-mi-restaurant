import { Reveal, Overline } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { MEDIA } from "@/data/content";
import ProgressiveImage from "@/components/ProgressiveImage";

const About = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-8 sm:py-32 bg-[#F9F3EA]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-20 md:items-top">
        <div className="order-1 md:order-2 w-full">
          <Reveal className="w-full min-w-0 overflow-hidden">
            <Overline>{t.about.overline}</Overline>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#111111] tracking-tight leading-tight mt-4 break-words overflow-wrap-anywhere">
              {t.about.title}
            </h2>
            <div className="mt-6 space-y-5 overflow-hidden">
              {t.about.body.map((p, i) => (
                <p key={i} className="text-[#4A4038] text-base sm:text-lg leading-relaxed break-words overflow-wrap-anywhere">
                  {p}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap items-start justify-center gap-4 sm:gap-8 md:gap-4 lg:gap-12 mt-10 pt-8 border-t border-[#111111]/10">
              {t.about.stats.map((s, i) => (
                <div key={i} data-testid={`about-stat-${i}`} className="flex flex-col items-center text-center min-w-0">
                  <p className="font-serif text-xl sm:text-2xl md:text-[20px] lg:text-2xl text-[#1A3B26] break-words">{s.value}</p>
                  <p className="text-[11px] sm:text-[10px] md:text-xs uppercase tracking-wide text-[#4A4038] mt-1 leading-tight break-words">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="order-2 md:order-1 w-full">
          <Reveal delay={0.15} className="w-full min-w-0">
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] aspect-[4/5]">
                <ProgressiveImage
                  src={MEDIA.about}
                  alt="Banh Mi Dzień Dobry Vietnamese restaurant interior"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute bottom-6 left-6 hidden md:block bg-[#1A3B26] text-[#F9F3EA] rounded-2xl px-6 py-4 shadow-xl">
                <p className="font-serif text-xl">Kraków</p>
                <p className="text-xs uppercase tracking-[0.2em] text-[#F9F3EA]/80 mt-0.5">
                  Mazowiecka 26B
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
