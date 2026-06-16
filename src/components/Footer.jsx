import { motion } from "motion/react";

const FOOTER_LINKS = {
  Product: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Cities", href: "#cities" },
    { label: "Categories", href: "#categories" },
    { label: "Download App", href: "#download" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

export default function Footer({ onNavigate }) {
  const handleAnchor = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400">
      {/* Top wave */}
      <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-14">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/discount_lala_fav.jpeg"
                alt="Discount Lala"
                className="w-10 h-10 rounded-xl object-cover"
              />
              <span className="text-white font-bold text-xl">
                Discount <span className="text-orange-500">Lala</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-6">
              India's smartest discount booklet app. One app, hundreds of deals at top restaurants, spas, hotels, and gyms in your city.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                { label: "Twitter/X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                { label: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
              ].map(({ label, path }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-orange-500 flex items-center justify-center transition-colors group"
                >
                  <svg className="w-4 h-4 fill-slate-400 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleAnchor(e, link.href)}
                      className="text-sm hover:text-orange-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                {title === "Support" && (
                  <li>
                    <button
                      onClick={() => onNavigate("terms")}
                      className="text-sm hover:text-orange-400 transition-colors"
                    >
                      Terms & Conditions
                    </button>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} Discount Lala. All rights reserved.</p>
          <div className="flex items-center gap-1 text-slate-500">
            <span>Made with</span>
            <span className="text-rose-500">♥</span>
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
