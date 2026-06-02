import { Reveal, Overline } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { MEDIA } from "@/data/content";

const About = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-20 sm:py-32 bg-[#FDFBF7]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid sm:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
        <Reveal className="order-2 sm:order-1">
          <Overline>{t.about.overline}</Overline>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#2C1E16] tracking-tight leading-tight mt-4">
            {t.about.title}
          </h2>
          <div className="mt-6 space-y-5">
            {t.about.body.map((p, i) => (
              <p key={i} className="text-[#5C4A3D] text-base sm:text-lg leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-[#2C1E16]/10">
            {t.about.stats.map((s, i) => (
              <div key={i} data-testid={`about-stat-${i}`}>
                <p className="font-serif text-2xl sm:text-3xl text-[#2F6042]">{s.value}</p>
                <p className="text-xs uppercase tracking-wider text-[#5C4A3D] mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="order-1 sm:order-2">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] aspect-[4/5]">
              <img
                src={MEDIA.about}
                alt="Cozy Gossip Cafe interior"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block bg-[#2C1E16] text-[#FDFBF7] rounded-2xl px-7 py-5 shadow-xl">
              <p className="font-serif text-2xl">Kraków</p>
              <p className="text-xs uppercase tracking-[0.2em] text-[#A9C3A2] mt-1">
                Świętego Jana 30
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
