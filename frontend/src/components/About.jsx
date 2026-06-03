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
      className="py-12 sm:py-32 bg-[#F9F3EA]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid sm:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
        <Reveal className="order-2 sm:order-1">
          <Overline>{t.about.overline}</Overline>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#111111] tracking-tight leading-tight mt-4">
            {t.about.title}
          </h2>
          <div className="mt-6 space-y-5">
            {t.about.body.map((p, i) => (
              <p key={i} className="text-[#4A4038] text-base sm:text-lg leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-[#111111]/10">
            {t.about.stats.map((s, i) => (
              <div key={i} data-testid={`about-stat-${i}`}>
                <p className="font-serif text-2xl sm:text-3xl text-[#1A3B26]">{s.value}</p>
                <p className="text-xs uppercase tracking-wider text-[#4A4038] mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="order-1 sm:order-2">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] aspect-[4/5]">
              <ProgressiveImage
                src={MEDIA.about}
                alt="Banh Mi Dzień Dobry Vietnamese restaurant interior"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block bg-[#1A3B26] text-[#F9F3EA] rounded-2xl px-7 py-5 shadow-xl">
              <p className="font-serif text-2xl">Kraków</p>
              <p className="text-xs uppercase tracking-[0.2em] text-[#F9F3EA]/80 mt-1">
                Mazowiecka 26B
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
