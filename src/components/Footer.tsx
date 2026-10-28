import { motion, useReducedMotion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from "react-icons/fi";
import { Link } from "react-scroll";

interface SocialLink {
  icon: React.ReactElement;
  name: string;
  link: string;
}

const Footer = () => {
  const prefersReducedMotion = useReducedMotion();

  const socialLinks: SocialLink[] = [
    {
      icon: <FiGithub />,
      name: "GitHub",
      link: "https://github.com/KiptooMannu",
    },
    {
      icon: <FiLinkedin />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/kiptoo-emmanuel-726893262",
    },
    {
      icon: <FiTwitter />,
      name: "Twitter",
      link: "https://x.com/EmmanuelKi82897?s=09",
    },
    {
      icon: <FiMail />,
      name: "Email",
      link: "mailto:kiptooemmanuel763@gmail.com",
    },
  ];

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Credentials", id: "credentials" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900/80 py-12 text-slate-600 dark:text-slate-400 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-900">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-sky-500 flex items-center justify-center font-bold text-white text-xs shadow-sm">
                EK
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                Emmanuel Kiptoo
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5">
              Full Stack Software Engineer · Nairobi, Kenya
            </p>
          </div>

          {/* Quick Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 text-xs font-semibold uppercase tracking-wider">
            {navLinks.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                offset={-80}
                className="hover:text-indigo-600 dark:hover:text-white transition-colors cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Back to top button */}
          <Link
            to="home"
            smooth={true}
            duration={600}
            className="cursor-pointer"
          >
            <motion.div
              whileHover={!prefersReducedMotion ? { y: -2 } : {}}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-300 dark:hover:border-slate-700 transition-colors shadow-xs dark:shadow-none"
            >
              <span>Back to Top</span>
              <FiArrowUp />
            </motion.div>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Emmanuel Kiptoo. Engineered with React, TypeScript & Tailwind CSS.</p>

          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                whileHover={!prefersReducedMotion ? { y: -2, scale: 1.15 } : {}}
                whileTap={{ scale: 0.95 }}
                className="text-base text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-sky-400 transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
