import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  const handleMobileLink = (e, href) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <nav
      data-testid="main-navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#FDFBF7]/90 border-b border-[#2C1E16]/10 py-3"
          : "bg-gradient-to-b from-[#2C1E16]/45 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
        <a
          href="#home"
          data-testid="navbar-logo"
          className={`flex items-center gap-2 transition-colors ${
            scrolled ? "text-[#2C1E16]" : "text-[#FDFBF7]"
          }`}
        >
          <Coffee
            className={`w-5 h-5 ${scrolled ? "text-[#2F6042]" : "text-[#A9C3A2]"}`}
            strokeWidth={1.8}
          />
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
              className={`font-medium transition-colors text-sm uppercase tracking-wider ${
                scrolled
                  ? "text-[#5C4A3D] hover:text-[#2F6042]"
                  : "text-[#FDFBF7]/90 hover:text-[#FDFBF7]"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div
            className={`flex items-center gap-1 rounded-full border p-1 transition-colors ${
              scrolled ? "border-[#2C1E16]/15" : "border-[#FDFBF7]/40"
            }`}
            data-testid="language-switcher"
          >
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => changeLang(l.code)}
                data-testid={`lang-btn-${l.code}`}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold tracking-wider transition-all ${
                  lang === l.code
                    ? "bg-[#2F6042] text-[#FDFBF7]"
                    : scrolled
                    ? "text-[#5C4A3D] hover:text-[#2C1E16]"
                    : "text-[#FDFBF7]/85 hover:text-[#FDFBF7]"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            data-testid="navbar-book-btn"
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#2F6042] text-[#FDFBF7] font-medium text-sm transition-all hover:bg-[#234B33] hover:-translate-y-0.5"
          >
            {t.nav.book}
          </a>

          <button
            className={`lg:hidden transition-colors ${
              scrolled ? "text-[#2C1E16]" : "text-[#FDFBF7]"
            }`}
            onClick={() => setOpen(!open)}
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <X className="w-6 h-6" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <MenuIcon className="w-6 h-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -12, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden"
          >
            <div
              className="mt-3 mx-4 rounded-2xl bg-[#FDFBF7] border border-[#2C1E16]/10 shadow-xl p-5 flex flex-col gap-4"
              data-testid="mobile-menu"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleMobileLink(e, l.href)}
                  className="text-[#2C1E16] font-medium text-sm uppercase tracking-wider hover:text-[#2F6042] transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleMobileLink(e, "#contact")}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#2F6042] text-[#FDFBF7] font-medium text-sm"
              >
                {t.nav.book}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
