import { Clock, MapPin, Phone } from "lucide-react";
import { Reveal, Overline } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT } from "@/data/content";

const Contact = () => {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-16 sm:py-24 bg-[#EFE3D2]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <Overline className="justify-center">{c.overline}</Overline>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#111111] tracking-tight leading-tight mt-4">
            {c.title}
          </h2>
          <p className="text-[#4A4038] text-lg mt-6 leading-relaxed">
            {c.subtitle}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Opening Hours */}
          <Reveal delay={0.1}>
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="flex items-center gap-3 text-[#1A3B26] mb-6">
                <div className="w-12 h-12 bg-[#1A3B26]/10 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <h3 className="font-serif text-2xl text-[#111111]">{c.hoursTitle}</h3>
              </div>
              <div className="space-y-3">
                {c.hours.map((h, i) => (
                  <div
                    key={i}
                    data-testid={`hours-row-${i}`}
                    className="flex items-center justify-between border-b border-dashed border-[#111111]/20 pb-3"
                  >
                    <span className="text-[#4A4038]">{h.day}</span>
                    <span className="font-medium text-[#111111]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Location & Contact */}
          <Reveal delay={0.2}>
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="flex items-center gap-3 text-[#1A3B26] mb-6">
                <div className="w-12 h-12 bg-[#1A3B26]/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <h3 className="font-serif text-2xl text-[#111111]">{c.locationTitle}</h3>
              </div>
              <div className="space-y-3 mb-6">
                <p className="font-medium text-[#111111] text-lg">{CONTACT.name}</p>
                <p className="text-[#4A4038]">{CONTACT.street}</p>
                <p className="text-[#4A4038]">{CONTACT.city}</p>
                <a
                  href={CONTACT.phoneHref}
                  data-testid="contact-phone-link"
                  className="inline-flex items-center gap-2 text-[#1A3B26] hover:text-[#112618] transition-colors font-medium"
                >
                  <Phone className="w-4 h-4" /> {CONTACT.phone}
                </a>
              </div>
              <a
                href={CONTACT.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="map-link"
                className="inline-flex items-center justify-center w-full px-7 py-3 rounded-xl bg-[#1A3B26] text-[#F9F3EA] font-medium transition-all hover:bg-[#112618] hover:-translate-y-0.5"
              >
                {c.openMap}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
