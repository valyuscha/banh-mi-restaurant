import { Coffee, Phone, MapPin, Facebook } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT } from "@/data/content";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer
      data-testid="main-footer"
      className="bg-[#2C1E16] text-[#FDFBF7]/80 py-16"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 text-[#FDFBF7]">
            <Coffee className="w-5 h-5 text-[#E8B79E]" strokeWidth={1.8} />
            <span className="font-serif text-2xl font-semibold">Gossip Cafe</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed max-w-xs">{t.footer.tagline}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#E8B79E]">
            {t.footer.addressLabel}
          </p>
          <div className="mt-4 space-y-1 text-sm">
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-[#E8B79E]" />
              <span>
                {CONTACT.street}
                <br />
                {CONTACT.city}
              </span>
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#E8B79E]">
            {t.footer.phoneLabel}
          </p>
          <div className="mt-4 space-y-3 text-sm">
            <a
              href={CONTACT.phoneHref}
              data-testid="footer-phone"
              className="flex items-center gap-2 hover:text-[#FDFBF7] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#E8B79E]" /> {CONTACT.phone}
            </a>
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-facebook"
              className="flex items-center gap-2 hover:text-[#FDFBF7] transition-colors"
            >
              <Facebook className="w-4 h-4 text-[#E8B79E]" /> Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 mt-12 pt-6 border-t border-[#FDFBF7]/10 text-xs text-[#FDFBF7]/50">
        © {new Date().getFullYear()} Gossip Cafe. {t.footer.rights}
      </div>
    </footer>
  );
};

export default Footer;
