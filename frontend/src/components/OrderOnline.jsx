import { Reveal, Overline } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { ExternalLink } from "lucide-react";

const OrderOnline = () => {
  const { t } = useLanguage();

  const platforms = [
    {
      name: "Wolt",
      url: "https://wolt.com/pl/pol/krakow/restaurant/banh-mi-dzie-dobry",
      color: "#009DE0",
      logo: "🛵",
    },
    {
      name: "Uber Eats",
      url: "https://www.ubereats.com/pl/store/banh-mi-dzien-dobry/0bCbQH8IT5-8V4Vby5lqjg?diningMode=PICKUP",
      color: "#06C167",
      logo: "🚗",
    },
    {
      name: "Pyszne.pl",
      url: "https://www.pyszne.pl/menu/banh-mi-dzie-dobry-mazowiecka?serviceType=collection",
      color: "#FF8000",
      logo: "🍱",
    },
    {
      name: "Bolt Food",
      url: "https://food.bolt.eu/en/211-krakow/p/17132-banh-mi-dzien-dobry/",
      color: "#34D186",
      logo: "⚡",
    },
  ];

  return (
    <section
      id="order"
      data-testid="order-online-section"
      className="py-16 sm:py-24 bg-[#F9F3EA]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <Overline className="justify-center">{t.orderOnline.overline}</Overline>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#111111] tracking-tight leading-tight mt-4">
            {t.orderOnline.title}
          </h2>
          <p className="text-[#4A4038] text-base sm:text-lg leading-relaxed mt-6">
            {t.orderOnline.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {platforms.map((platform, index) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`platform-${platform.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#111111]/5"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${platform.color}15` }}
                  >
                    {platform.logo}
                  </div>
                  
                  <h3 className="font-serif text-2xl text-[#111111] mb-2">
                    {platform.name}
                  </h3>
                  
                  <p className="text-sm text-[#4A4038] mb-4">
                    {t.orderOnline.orderNow}
                  </p>

                  <div
                    className="flex items-center gap-2 text-sm font-medium transition-colors duration-300"
                    style={{ color: platform.color }}
                  >
                    <span>{t.orderOnline.visitSite}</span>
                    <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>

                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${platform.color}08 0%, transparent 100%)`,
                  }}
                />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.4} className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A3B26]/5 rounded-full">
            <span className="text-sm text-[#1A3B26] font-medium">
              {t.orderOnline.note}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default OrderOnline;
