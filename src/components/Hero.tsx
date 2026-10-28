import { motion, useReducedMotion } from "framer-motion";
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiArrowRight, FiShield } from "react-icons/fi";
import { useEffect, useState } from "react";
import profileImage from "../assets/Mannu1.jpeg";
import Terminal from "./Terminal";

const ROLES = [
  "Full Stack Developer",
  "Fintech & Digital Banking Specialist",
  "Spring Boot & Microservices Engineer",
  "Angular & React Specialist",
];

const SOCIALS = [
  {
    icon: <FiGithub className="text-lg" />,
    url: "https://github.com/KiptooMannu",
    label: "GitHub",
  },
  {
    icon: <FiLinkedin className="text-lg" />,
    url: "https://www.linkedin.com/in/kiptoo-emmanuel-726893262",
    label: "LinkedIn",
  },
  {
    icon: <FiMail className="text-lg" />,
    url: "mailto:Kiptooemmanuel763@gmail.com",
    label: "Email",
  },
];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center overflow-hidden pt-6 sm:pt-8 pb-12 sm:pb-16 bg-slate-50/50 dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 left-1/4 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-16 right-1/4 translate-x-1/3 w-[28rem] h-[28rem] bg-emerald-500/10 dark:bg-emerald-600/10 rounded-full blur-[140px]"
      />

      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#cbd5e125_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e125_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* Left Column: Profile & Copy */}
          <div className="min-w-0 lg:col-span-6 flex flex-col items-start">
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex max-w-full flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold tracking-wide mb-5 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              2+ Years Experience · Fintech & Digital Banking
            </motion.div>

            {/* Profile Avatar Token */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex max-w-full items-center gap-3.5 mb-5 p-2 pr-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <img
                src={profileImage}
                alt="Emmanuel Kiptoo"
                className="w-12 h-12 rounded-xl object-cover object-top border border-indigo-200 dark:border-indigo-500/30"
              />
              <div className="min-w-0 flex flex-col">
                <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1">
                  Emmanuel Kiptoo
                  <FiShield className="text-sky-500 text-xs inline" />
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 break-words">
                  Kirinyaga University Software Engineering (Honours)
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Engineering Scalable{" "}
                <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-indigo-700 dark:from-sky-400 dark:via-indigo-300 dark:to-indigo-400 bg-clip-text text-transparent">
                  Fintech Solutions
                </span>
              </h1>
            </motion.div>

            {/* Role Ticker */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 min-h-8 max-w-full overflow-hidden"
            >
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="text-sm sm:text-base md:text-lg font-semibold text-indigo-600 dark:text-indigo-300 tracking-wide flex flex-wrap items-center gap-2"
              >
                <span className="text-slate-400 dark:text-slate-500 font-mono text-sm">&gt;</span>
                {ROLES[roleIndex]}
              </motion.div>
            </motion.div>

            {/* Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl"
            >
              Full Stack Developer at Eclectics International Limited. I build mission-critical banking rails, M-PESA escrow switches, and high-throughput microservices using{" "}
              <span className="text-slate-900 dark:text-slate-100 font-semibold">Java Spring Boot, Angular, React,</span> and{" "}
              <span className="text-slate-900 dark:text-slate-100 font-semibold">PostgreSQL</span> with sub-second performance.
            </motion.p>

            {/* Primary Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 flex max-w-full flex-wrap items-center gap-2 sm:gap-3.5"
            >
              <motion.a
                whileHover={!prefersReducedMotion ? { y: -2, scale: 1.02 } : {}}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-indigo-600/25 transition-all duration-200"
              >
                View Projects
                <FiArrowRight className="text-sm" />
              </motion.a>

              <motion.a
                whileHover={!prefersReducedMotion ? { y: -2, scale: 1.02 } : {}}
                whileTap={{ scale: 0.98 }}
                href="https://drive.google.com/file/d/1YVDPKJ4OYFYeInogbnj6WzmAWNwQEQa-/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80 font-semibold text-xs uppercase tracking-wider shadow-sm transition-all duration-200"
              >
                <FiDownload className="text-sm" />
                Resume
              </motion.a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3 py-3 text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-sky-300 font-semibold text-xs tracking-wider transition-colors duration-200"
              >
                Contact
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 w-full max-w-md flex items-center gap-4"
            >
              <span className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                Socials
              </span>
              <div className="flex gap-2">
                {SOCIALS.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white shadow-xs transition-colors"
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Prominent Top Hacker Terminal */}
          <div className="min-w-0 lg:col-span-6 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full"
            >
              {/* Terminal glowing back illumination */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-indigo-500/15 to-sky-500/20 rounded-3xl blur-2xl -z-10" />

              {/* Embedded Interactive Terminal */}
              <Terminal embedded={true} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
