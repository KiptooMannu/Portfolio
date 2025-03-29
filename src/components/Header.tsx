import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-scroll";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" }
  ];

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
              <Link
                key={item.id}
                to={item.id}
                smooth="easeInOutQuart"  // Smoother easing function
                duration={0.5}         // Increased duration (1 second)
                offset={-80}
                spy={true}
                activeClass="text-blue-400"
                onSetActive={() => setActiveSection(item.id)}
                className="text-2xl cursor-pointer font-medium text-white hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navigation */}
      <motion.ul className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <motion.li
            key={item.id}
            whileHover={{ scale: 1.1, color: "#3a86ff" }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer font-medium relative"
          >
            <Link
              to={item.id}
              smooth="easeInOutQuart"  // Smoother easing function
              duration={1000}         // Increased duration (1 second)
              offset={-80}
              spy={true}
              activeClass="active"
              onSetActive={() => setActiveSection(item.id)}
              className="block py-2 px-1"
            >
              {item.name}
              {activeSection === item.id && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default Header;