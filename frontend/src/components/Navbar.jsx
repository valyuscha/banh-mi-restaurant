import { useEffect, useState } from "react";
import { Coffee, Menu as MenuIcon, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { LANGUAGES } from "@/data/content";

const Navbar = () => {
  const { t, lang, changeLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#menu", label: t.nav.menu },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#offer", label: t.nav.offer },
    { href: "#contact", label: t.nav.contact },
  ];

  const close = () => setOpen(false);

  return (
    <nav
      data-testid="main-navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#FDFBF7]/85 border-b border-[#2C1E16]/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
        <a
          href="#home"
          data-testid="navbar-logo"
          className="flex items-center gap-2 text-[#2C1E16]"
        >
          <Coffee className="w-5 h-5 text-[#C86F54]" strokeWidth={1.8} />
          <span className="font-serif text-2xl font-semibold tracking-tight">
            Gossip Cafe
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.href.replace("#", "")}`}
              className="text-[#5C4A3D] hover:text-[#C86F54] font-medium transition-colors text-sm uppercase tracking-wider"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div
            className="flex items-center gap-1 rounded-full border border-[#2C1E16]/15 p-1"
            data-testid="language-switcher"
          >
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => changeLang(l.code)}
                data-testid={`lang-btn-${l.code}`}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold tracking-wider transition-all ${
                  lang === l.code
                    ? "bg-[#2C1E16] text-[#FDFBF7]"
                    : "text-[#5C4A3D] hover:text-[#2C1E16]"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            data-testid="navbar-book-btn"
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#C86F54] text-[#FDFBF7] font-medium text-sm transition-all hover:bg-[#B35A3F] hover:-translate-y-0.5"
          >
            {t.nav.book}
          </a>

          <button
            className="lg:hidden text-[#2C1E16]"
            onClick={() => setOpen(!open)}
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="lg:hidden mt-3 mx-4 rounded-2xl bg-[#FDFBF7] border border-[#2C1E16]/10 shadow-xl p-5 flex flex-col gap-4"
          data-testid="mobile-menu"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="text-[#2C1E16] font-medium text-sm uppercase tracking-wider"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={close}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#C86F54] text-[#FDFBF7] font-medium text-sm"
          >
            {t.nav.book}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
