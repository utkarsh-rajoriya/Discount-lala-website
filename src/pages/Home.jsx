import { useRef } from "react";
import { motion, useInView } from "motion/react";

/* ─── Reusable fade-in wrapper ─────────────────────────────────────────── */
function FadeIn({ children, delay = 0, className = "", direction = "up" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Hero ──────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-orange-950 to-rose-950" />

      {/* Animated blobs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl"
        animate={{ scale: [1.15, 1, 1.15], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-8"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Now available in 10+ cities across India
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6"
            >
              Unlock{" "}
              <span className="relative">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">
                  Hundreds
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-rose-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                />
              </span>{" "}
              of City Deals
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg text-slate-300 leading-relaxed mb-10 max-w-lg"
            >
              One booklet. Unlimited savings. Get exclusive discounts at top restaurants, luxury spas, hotels, gyms, and entertainment venues in your city.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#download")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-orange-500 to-rose-600 text-white font-bold px-7 py-4 rounded-2xl shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60 hover:scale-105 transition-all duration-200 text-base"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.42.07 2.4.73 3.23.78 1.23-.21 2.41-.93 3.73-.84 1.58.12 2.77.74 3.55 1.9-3.27 1.96-2.64 6.44.49 7.74-.59 1.58-1.36 3.15-3 3.3zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                App Store
              </a>
              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#download")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold px-7 py-4 rounded-2xl hover:bg-white/20 transition-all duration-200 text-base"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.18 23.76c.3.17.65.2.98.09l12.76-7.37-2.73-2.73-11.01 10.01zm-1.16-20.3C1.76 3.76 1.6 4.17 1.6 4.65v14.7c0 .48.16.89.42 1.19l.07.07L9.38 13.3v-.18L2.09 5.39l-.07.07zm17.42 7.06l-2.13-1.23-3.01 3.01 3.01 3.01 2.15-1.24c.61-.35.61-1.18 0-1.53l-.02-.02zM4.16.14L16.92 7.51l-2.73 2.73L3.18.23C3.51.12 3.88.15 4.16.34z" />
                </svg>
                Google Play
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-6 mt-10"
            >
              {[["10K+", "Downloads"], ["500+", "Offers"], ["4.8★", "Rating"]].map(([num, label]) => (
                <div key={label} className="text-center">
                  <div className="text-xl font-bold text-white">{num}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — phone mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-rose-500/30 rounded-[3rem] blur-2xl scale-110" />

              {/* Phone frame */}
              <div className="relative w-64 h-[520px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden">
                {/* Status bar */}
                <div className="absolute top-0 left-0 right-0 h-10 bg-black/30 flex items-center justify-between px-6 text-white text-xs font-medium">
                  <span>9:41</span>
                  <div className="w-24 h-6 bg-black rounded-b-2xl mx-auto absolute left-1/2 -translate-x-1/2 top-0" />
                  <div className="flex gap-1">
                    <span>●●●</span>
                  </div>
                </div>

                {/* App UI mockup */}
                <div className="absolute inset-0 pt-10 px-3 pb-3 flex flex-col gap-2">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-orange-500 to-rose-600 rounded-2xl p-3 flex items-center gap-2">
                    <img src="/assets/discount_lala_fav.jpeg" className="w-8 h-8 rounded-lg" alt="" />
                    <div>
                      <div className="text-white font-bold text-xs">Discount Lala</div>
                      <div className="text-white/70 text-[10px]">Mumbai • 48 deals</div>
                    </div>
                    <div className="ml-auto bg-white/20 rounded-lg px-2 py-1 text-white text-[10px] font-medium">Active</div>
                  </div>

                  {/* Offer cards */}
                  {[
                    { name: "The Grand Hotel", cat: "Hospitality", disc: "30% OFF", color: "from-amber-500 to-orange-500" },
                    { name: "Zen Spa & Wellness", cat: "Spa", disc: "25% OFF", color: "from-rose-500 to-pink-500" },
                    { name: "Urban Eats", cat: "Restaurant", disc: "20% OFF", color: "from-emerald-500 to-teal-500" },
                    { name: "FitZone Gym", cat: "Fitness", disc: "40% OFF", color: "from-blue-500 to-indigo-500" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="bg-white/5 border border-white/10 rounded-xl p-2.5 flex items-center gap-2"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex-shrink-0`} />
                      <div className="flex-1 min-w-0">
                        <div className="text-white text-[10px] font-semibold truncate">{item.name}</div>
                        <div className="text-slate-400 text-[9px]">{item.cat}</div>
                      </div>
                      <div className="text-orange-400 font-bold text-[10px] bg-orange-500/10 px-1.5 py-0.5 rounded-md">{item.disc}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-12 top-24 bg-white rounded-2xl shadow-xl px-3 py-2"
              >
                <div className="text-xs font-bold text-slate-900">🎉 30% OFF</div>
                <div className="text-[10px] text-slate-500">Restaurant deal</div>
              </motion.div>
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-12 bottom-32 bg-white rounded-2xl shadow-xl px-3 py-2"
              >
                <div className="text-xs font-bold text-slate-900">⭐ 4.8</div>
                <div className="text-[10px] text-slate-500">User rating</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 20C480 40 240 80 0 40L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

/* ─── Stats ─────────────────────────────────────────────────────────────── */
function Stats() {
  const stats = [
    { value: "10+", label: "Cities", icon: "🏙️" },
    { value: "500+", label: "Exclusive Offers", icon: "🎁" },
    { value: "200+", label: "Partner Venues", icon: "🏪" },
    { value: "10K+", label: "Happy Users", icon: "😊" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.04, y: -4 }}
                className="relative bg-gradient-to-br from-slate-50 to-orange-50 border border-orange-100 rounded-3xl p-6 text-center overflow-hidden group cursor-default"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-rose-600 opacity-0 group-hover:opacity-5 transition-opacity rounded-3xl" />
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ──────────────────────────────────────────────────────── */
function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: "📍",
      title: "Choose Your City",
      desc: "Select your city and browse our range of discount booklets tailored for your location.",
    },
    {
      step: "02",
      icon: "🛒",
      title: "Buy a Booklet",
      desc: "Pick a booklet that fits your lifestyle. Each booklet unlocks hundreds of deals instantly.",
    },
    {
      step: "03",
      icon: "🎊",
      title: "Redeem & Save",
      desc: "Show your digital coupon at the venue and enjoy your exclusive discount. It's that simple!",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="text-sm font-semibold text-orange-500 uppercase tracking-widest">How It Works</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-3 mb-4">
            Start saving in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-600">
              3 easy steps
            </span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Getting discounts has never been this easy. Join thousands of smart savers today.
          </p>
        </FadeIn>

        <div className="relative grid md:grid-cols-3 gap-8">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-orange-200 via-orange-400 to-rose-200 z-0" />

          {steps.map((step, i) => (
            <FadeIn key={step.step} delay={i * 0.15}>
              <motion.div
                whileHover={{ scale: 1.03, y: -6 }}
                className="relative bg-white border border-slate-100 rounded-3xl p-8 shadow-lg shadow-slate-100 hover:shadow-xl hover:shadow-orange-100 transition-all duration-300 z-10"
              >
                {/* Step number */}
                <div className="absolute -top-4 left-8">
                  <div className="bg-gradient-to-r from-orange-500 to-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    STEP {step.step}
                  </div>
                </div>
                <div className="text-5xl mb-5 mt-2">{step.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Cities ─────────────────────────────────────────────────────────────── */
function Cities() {
  const cities = [
    { name: "Mumbai", state: "Maharashtra", deals: "80+ deals", emoji: "🌊", color: "from-blue-500 to-cyan-400" },
    { name: "Delhi", state: "NCR", deals: "75+ deals", emoji: "🏛️", color: "from-orange-500 to-amber-400" },
    { name: "Bangalore", state: "Karnataka", deals: "65+ deals", emoji: "🌿", color: "from-emerald-500 to-teal-400" },
    { name: "Jaipur", state: "Rajasthan", deals: "50+ deals", emoji: "🏰", color: "from-rose-500 to-pink-400" },
    { name: "Pune", state: "Maharashtra", deals: "45+ deals", emoji: "☕", color: "from-violet-500 to-purple-400" },
    { name: "Hyderabad", state: "Telangana", deals: "55+ deals", emoji: "🍛", color: "from-amber-500 to-yellow-400" },
  ];

  return (
    <section id="cities" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="text-sm font-semibold text-orange-500 uppercase tracking-widest">Available Cities</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-3 mb-4">
            Deals in your city
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            We're expanding fast. Find exclusive booklets across India's top cities.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {cities.map((city, i) => (
            <FadeIn key={city.name} delay={i * 0.07}>
              <motion.div
                whileHover={{ scale: 1.06, y: -8 }}
                className="group cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${city.color} rounded-3xl p-6 text-center text-white shadow-lg group-hover:shadow-2xl transition-all duration-300 mb-3`}>
                  <div className="text-4xl mb-3">{city.emoji}</div>
                  <div className="font-bold text-lg leading-tight">{city.name}</div>
                  <div className="text-white/70 text-xs mt-0.5">{city.state}</div>
                </div>
                <div className="text-center">
                  <span className="text-xs font-semibold text-orange-500 bg-orange-50 px-3 py-1 rounded-full">
                    {city.deals}
                  </span>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center mt-12">
          <p className="text-slate-400 text-sm">+ Many more cities coming soon</p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Categories ─────────────────────────────────────────────────────────── */
function Categories() {
  const categories = [
    { name: "Restaurants", icon: "🍽️", count: "120+ offers" },
    { name: "Hotels", icon: "🏨", count: "45+ offers" },
    { name: "Spas & Wellness", icon: "💆", count: "60+ offers" },
    { name: "Fitness & Gym", icon: "💪", count: "35+ offers" },
    { name: "Entertainment", icon: "🎭", count: "50+ offers" },
    { name: "Travel", icon: "✈️", count: "25+ offers" },
    { name: "Shopping", icon: "🛍️", count: "40+ offers" },
    { name: "Adventure", icon: "🧗", count: "20+ offers" },
  ];

  return (
    <section id="categories" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="text-sm font-semibold text-orange-500 uppercase tracking-widest">Categories</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-3 mb-4">
            Deals for every{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-600">
              lifestyle
            </span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            From fine dining to weekend adventures — we've got a deal for everything you love.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <FadeIn key={cat.name} delay={i * 0.07}>
              <motion.div
                whileHover={{ scale: 1.04, y: -5 }}
                className="group bg-gradient-to-br from-slate-50 to-orange-50 border border-orange-100 hover:border-orange-300 rounded-3xl p-6 text-center cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-orange-100"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {cat.icon}
                </div>
                <div className="font-bold text-slate-900 mb-1">{cat.name}</div>
                <div className="text-xs text-orange-500 font-medium">{cat.count}</div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ──────────────────────────────────────────────────────── */
function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      city: "Mumbai",
      avatar: "PS",
      rating: 5,
      text: "Discount Lala has completely changed how I explore Mumbai! I saved over ₹4,000 on spa treatments and restaurant dinners last month alone. Absolutely worth it!",
      color: "from-orange-400 to-rose-400",
    },
    {
      name: "Rahul Mehta",
      city: "Bangalore",
      avatar: "RM",
      rating: 5,
      text: "The Bangalore booklet is a goldmine. My wife and I use it every weekend. The deals at our favourite restaurants are unbelievable. Highly recommend!",
      color: "from-blue-400 to-violet-400",
    },
    {
      name: "Ananya Kapoor",
      city: "Delhi",
      avatar: "AK",
      rating: 5,
      text: "I was skeptical at first, but one dinner outing saved us more than the cost of the whole booklet. Best investment for foodies in Delhi NCR!",
      color: "from-emerald-400 to-teal-400",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="text-sm font-semibold text-orange-500 uppercase tracking-widest">Testimonials</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-3 mb-4">
            Loved by thousands
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Real people, real savings. Here's what our community has to say.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.15}>
              <motion.div
                whileHover={{ scale: 1.02, y: -6 }}
                className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-100 hover:shadow-xl hover:shadow-orange-100 transition-all duration-300 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-amber-400 text-lg">★</span>
                  ))}
                </div>

                <p className="text-slate-600 leading-relaxed flex-1 mb-6 italic">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                    <div className="text-slate-400 text-xs">📍 {t.city}</div>
                  </div>
                  <div className="ml-auto">
                    <div className="bg-green-100 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full">
                      Verified
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Download CTA ──────────────────────────────────────────────────────── */
function Download() {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-orange-950 to-rose-950" />
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-500/15 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm px-4 py-2 rounded-full mb-8">
            🚀 Available on iOS & Android
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Start saving today.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">
              Download free.
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12">
            Join 10,000+ smart Indians who save money every time they go out. Your first booklet comes with a 7-day free trial.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* App Store button */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-4 bg-white text-slate-900 font-bold px-7 py-4 rounded-2xl shadow-2xl hover:shadow-white/20 transition-shadow w-52"
            >
              <svg className="w-8 h-8 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.42.07 2.4.73 3.23.78 1.23-.21 2.41-.93 3.73-.84 1.58.12 2.77.74 3.55 1.9-3.27 1.96-2.64 6.44.49 7.74-.59 1.58-1.36 3.15-3 3.3zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] text-slate-500 font-normal">Download on the</div>
                <div className="text-base font-bold">App Store</div>
              </div>
            </motion.a>

            {/* Google Play button */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-4 bg-white text-slate-900 font-bold px-7 py-4 rounded-2xl shadow-2xl hover:shadow-white/20 transition-shadow w-52"
            >
              <svg className="w-8 h-8 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.18 23.76c.3.17.65.2.98.09l12.76-7.37-2.73-2.73-11.01 10.01zm-1.16-20.3C1.76 3.76 1.6 4.17 1.6 4.65v14.7c0 .48.16.89.42 1.19l.07.07L9.38 13.3v-.18L2.09 5.39l-.07.07zm17.42 7.06l-2.13-1.23-3.01 3.01 3.01 3.01 2.15-1.24c.61-.35.61-1.18 0-1.53l-.02-.02zM4.16.14L16.92 7.51l-2.73 2.73L3.18.23C3.51.12 3.88.15 4.16.34z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] text-slate-500 font-normal">Get it on</div>
                <div className="text-base font-bold">Google Play</div>
              </div>
            </motion.a>
          </div>

          {/* Small print */}
          <p className="text-slate-500 text-sm mt-8">
            Free to download • No hidden fees • Cancel anytime
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Home (assembled) ──────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <HowItWorks />
      <Cities />
      <Categories />
      <Testimonials />
      <Download />
    </>
  );
}
