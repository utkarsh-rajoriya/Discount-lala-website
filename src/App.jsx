import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

export default function App() {
  const [page, setPage] = useState("home");

  const navigate = (target) => {
    setPage(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (page === "terms") {
    return (
      <AnimatePresence mode="wait">
        <motion.div key="terms" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
          <Terms onNavigate={navigate} />
        </motion.div>
      </AnimatePresence>
    );
  }

  if (page === "privacy") {
    return (
      <AnimatePresence mode="wait">
        <motion.div key="privacy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
          <Privacy onNavigate={navigate} />
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
        <Navbar onNavigate={navigate} />
        <main>
          <Home />
        </main>
        <Footer onNavigate={navigate} />
      </motion.div>
    </AnimatePresence>
  );
}
