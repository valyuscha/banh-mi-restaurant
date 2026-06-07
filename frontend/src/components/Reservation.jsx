import { Bike, ShoppingBag, UtensilsCrossed } from "lucide-react";
import { Reveal, Overline } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT } from "@/data/content";

const Reservation = () => {
  const { t } = useLanguage();
  const r = t.reservation;

  const deliveryPlatforms = [
    {
      name: "Wolt",
      url: "https://wolt.com/pl/pol/krakow/restaurant/banh-mi-dzie-dobry",
      color: "#009DE0",
    },
    {
      name: "Uber Eats",
      url: "https://www.ubereats.com/pl/store/banh-mi-dzien-dobry/0bCbQH8IT5-8V4Vby5lqjg?diningMode=PICKUP",
      color: "#06C167",
    },
    {
      name: "Pyszne.pl",
      url: "https://www.pyszne.pl/menu/banh-mi-dzie-dobry-mazowiecka?serviceType=collection",
      color: "#FF8000",
    },
    {
      name: "Bolt Food",
      url: "https://food.bolt.eu/en/211-krakow/p/17132-banh-mi-dzien-dobry/",
      color: "#34D186",
    },
  ];

  return (
    <section
      id="order"
      data-testid="order-section"
      className="py-16 sm:py-24 bg-[#F9F3EA]"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-12">
        <Reveal className="text-center mb-12">
          <Overline className="justify-center">{r.overline}</Overline>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#111111] tracking-tight leading-tight mt-4">
            {r.title}
          </h2>
          <p className="text-[#4A4038] text-lg mt-6 leading-relaxed max-w-2xl mx-auto">
            {r.body}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="bg-white rounded-[2rem] border border-[#111111]/8 shadow-[0_18px_50px_-25px_rgba(44,30,22,0.35)] p-8 sm:p-12">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1A3B26]/10 rounded-full mb-4">
                <Bike className="w-8 h-8 text-[#1A3B26]" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-3xl text-[#111111] mb-3">
                {r.deliveryTitle}
              </h3>
              <p className="text-[#4A4038] leading-relaxed max-w-md mx-auto">
                {r.deliverySubtitle}
              </p>
            </div>

            {/* Delivery Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-md mx-auto">
              <div className="text-center p-6 bg-[#F9F3EA] rounded-xl">
                <Bike className="w-6 h-6 text-[#1A3B26] mx-auto mb-2" strokeWidth={1.5} />
                <p className="text-sm font-semibold text-[#111111] mb-1">{r.delivery}</p>
                <p className="text-xs text-[#4A4038]">{r.deliveryTime}</p>
              </div>
              <div className="text-center p-6 bg-[#F9F3EA] rounded-xl">
                <ShoppingBag className="w-6 h-6 text-[#1A3B26] mx-auto mb-2" strokeWidth={1.5} />
                <p className="text-sm font-semibold text-[#111111] mb-1">{r.pickup}</p>
                <p className="text-xs text-[#4A4038]">{r.pickupTime}</p>
              </div>
            </div>

            {/* Platform Buttons */}
            <div className="space-y-3 max-w-md mx-auto">
              <p className="text-xs uppercase tracking-[0.15em] font-semibold text-[#4A4038] text-center mb-6">
                {r.orderVia}
              </p>
              {deliveryPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-6 py-4 rounded-xl border-2 transition-all hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    borderColor: `${platform.color}40`,
                    backgroundColor: `${platform.color}08`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = platform.color;
                    e.currentTarget.style.backgroundColor = `${platform.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${platform.color}40`;
                    e.currentTarget.style.backgroundColor = `${platform.color}08`;
                  }}
                >
                  <span className="font-semibold text-[#111111]">{platform.name}</span>
                  <span className="text-sm font-medium" style={{ color: platform.color }}>
                    {r.orderNow} →
                  </span>
                </a>
              ))}
            </div>

            {/* Visit Us */}
            <div className="mt-10 pt-10 border-t border-[#111111]/10 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1A3B26]/10 rounded-full mb-3">
                <UtensilsCrossed className="w-6 h-6 text-[#1A3B26]" strokeWidth={1.5} />
              </div>
              <p className="text-[#4A4038] text-sm mb-4 max-w-sm mx-auto">{r.visitUs}</p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-xl border-2 border-[#1A3B26] text-[#1A3B26] font-medium transition-all hover:bg-[#1A3B26] hover:text-[#F9F3EA] hover:-translate-y-0.5"
              >
                {r.seeContact}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Reservation;
