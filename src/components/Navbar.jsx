import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Cities", href: "#cities" },
  { label: "Categories", href: "#categories" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchor = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2.5 group"
          >
            <img
              src="/assets/discount_lala_fav.jpeg"
              alt="Discount Lala"
              className="w-9 h-9 rounded-xl object-cover shadow-sm group-hover:scale-105 transition-transform"
            />
            <span
              className={`font-bold text-lg tracking-tight transition-colors ${
                scrolled ? "text-slate-900" : "text-white"
              }`}
            >
              Discount <span className="text-orange-500">Lala</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleAnchor(e, link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-white/10 ${
                  scrolled
                    ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => onNavigate("terms")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                scrolled
                  ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              Terms
            </button>
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#download"
              onClick={(e) => handleAnchor(e, "#download")}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-rose-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-200"
            >
              Get the App
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 rounded-full transition-all duration-300 ${menuOpen ? "bg-slate-900 rotate-45 translate-y-[7px]" : scrolled ? "bg-slate-700" : "bg-white"}`} />
              <span className={`block h-0.5 rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : scrolled ? "bg-slate-700" : "bg-white"}`} />
              <span className={`block h-0.5 rounded-full transition-all duration-300 ${menuOpen ? "bg-slate-900 -rotate-45 -translate-y-[9px]" : scrolled ? "bg-slate-700" : "bg-white"}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleAnchor(e, link.href)}
                  className="px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-orange-50 hover:text-orange-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => { setMenuOpen(false); onNavigate("terms"); }}
                className="px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-orange-50 hover:text-orange-600 transition-colors text-left"
              >
                Terms & Conditions
              </button>
              <a
                href="#download"
                onClick={(e) => handleAnchor(e, "#download")}
                className="mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-rose-600 text-white font-semibold px-5 py-3 rounded-full shadow-lg"
              >
                Get the App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
