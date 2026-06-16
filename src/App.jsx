import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Terms from "./pages/Terms";

export default function App() {
  const [page, setPage] = useState("home");

  const navigate = (target) => {
    setPage(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence mode="wait">
      {page === "home" ? (
        <motion.div
          key="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <Navbar onNavigate={navigate} />
          <main>
            <Home />
          </main>
          <Footer onNavigate={navigate} />
        </motion.div>
      ) : (
        <motion.div
          key="terms"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <Terms onNavigate={navigate} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
