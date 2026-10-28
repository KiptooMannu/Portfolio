import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX, FiArrowUpRight, FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Credentials", id: "credentials" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/70 shadow-sm dark:shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-sky-400 to-indigo-500 origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Brand identity */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => setActiveSection("home")}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-sky-500 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-500/20"
          >
            EK
          </motion.div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-sky-400 transition-colors">
              Emmanuel Kiptoo
            </span>
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 tracking-wide">
              Full Stack Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 bg-slate-100/80 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-200 dark:border-slate-800/80 backdrop-blur-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                onSetActive={() => setActiveSection(item.id)}
                className={`relative px-4 py-1.5 text-xs uppercase tracking-wider font-semibold rounded-full cursor-pointer transition-colors duration-200 ${
                  isActive
                    ? "text-indigo-600 dark:text-white"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-white dark:bg-gradient-to-r dark:from-indigo-500/20 dark:to-sky-500/20 rounded-full border border-slate-200 dark:border-indigo-500/30 shadow-sm dark:shadow-none -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          {/* Animated Theme Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-amber-400 transition-colors cursor-pointer"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMoon className="text-base" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiSun className="text-base text-amber-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/25 transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
          >
            Contact
            <FiArrowUpRight className="text-sm" />
          </Link>
        </div>

        {/* Mobile Controls: Theme toggle + Menu button */}
        <div className="md:hidden flex items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-amber-400"
          >
            {theme === "dark" ? <FiMoon className="text-base" /> : <FiSun className="text-base text-amber-500" />}
          </motion.button>

          <button
            className="p-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl px-6 py-6"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-base font-medium py-2 px-3 rounded-lg cursor-pointer transition-colors ${
                    activeSection === item.id
                      ? "text-indigo-600 dark:text-sky-400 bg-indigo-50 dark:bg-slate-900/80 font-semibold"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900/40"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => {
                    setActiveSection("contact");
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-indigo-600 text-white font-semibold text-sm cursor-pointer"
                >
                  Get In Touch
                  <FiArrowUpRight />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
