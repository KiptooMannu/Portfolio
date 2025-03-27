// src/components/Header.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Home", "About", "Experience", "Projects", "Contact"];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-6 py-4 flex justify-between items-center relative"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
      >
        EN
      </motion.div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-dark/95 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navItems.map((item) => (
              <motion.a
                key={item}
                whileHover={{ scale: 1.1, color: "#3a86ff" }}
                whileTap={{ scale: 0.95 }}
                className="text-2xl cursor-pointer font-medium"
                onClick={() => {
                  setActiveSection(item.toLowerCase());
                  setIsMenuOpen(false);
                }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navigation */}
      <motion.ul className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <motion.li
            key={item}
            whileHover={{ scale: 1.1, color: "#3a86ff" }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer font-medium relative"
            onClick={() => setActiveSection(item.toLowerCase())}
          >
            {item}
            {activeSection === item.toLowerCase() && (
              <motion.div
                layoutId="navIndicator"
                className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default Header;