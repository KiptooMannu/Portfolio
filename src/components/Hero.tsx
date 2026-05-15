import { motion, useReducedMotion } from "framer-motion";
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi";
import {
  FaReact, FaNodeJs, FaDocker, FaAws, FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiTypescript,
  SiSpringboot, SiPostgresql, SiAngular,
} from "react-icons/si";
import { useEffect, useState, useRef } from "react";
import profileImage from "../assets/Mannu1.jpeg";

/* ─────────────────────────────────────────────
   CONFIG
───────────────────────────────────────────── */

const ROLES = [
  "Full Stack Developer",
  "Spring Boot Engineer",
  "React & Next.js Specialist",
  "Cloud & DevOps Enthusiast",
];

const SOCIALS = [
  {
    icon: <FiGithub />,
    url: "https://github.com/KiptooMannu",
    label: "GitHub",
  },
  {
    icon: <FiLinkedin />,
    url: "https://linkedin.com/in/KiptooMannu",
    label: "LinkedIn",
  },
  {
    icon: <FiMail />,
    url: "mailto:kkgg7241@gmail.com",
    label: "Email",
  },
];

const TECH_STACK = [
  { icon: <FaReact />, label: "React", color: "#61DAFB" },
  { icon: <SiAngular />, label: "Angular", color: "#DD0031" },
  { icon: <SiNextdotjs />, label: "Next.js", color: "#000000" },
  { icon: <SiTypescript />, label: "TypeScript", color: "#3178C6" },
  { icon: <SiSpringboot />, label: "Spring Boot", color: "#6DB33F" },
  { icon: <FaNodeJs />, label: "Node.js", color: "#339933" },
  { icon: <SiPostgresql />, label: "PostgreSQL", color: "#4169E1" },
  { icon: <SiTailwindcss />, label: "Tailwind", color: "#38BDF8" },
  { icon: <FaDocker />, label: "Docker", color: "#2496ED" },
  { icon: <FaAws />, label: "AWS", color: "#FF9900" },
  { icon: <FaJava />, label: "Java", color: "#ED8B00" },
];

/* ─────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────── */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.7, delay },
});

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  /* Role cycling */
  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % ROLES.length),
      2800
    );
    return () => clearInterval(id);
  }, []);

  /* Subtle parallax on mouse move */
  useEffect(() => {
    if (prefersReducedMotion) return;
    const handleMove = (e: MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(to bottom right, #ffffff, #f8fafc, #eef2ff)",
        fontFamily: "'Sora', 'DM Sans', sans-serif",
      }}
    >
      {/* ── Ambient background orbs (adjusted for light theme) ── */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: "10%", left: "5%",
          width: 480, height: 480,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          bottom: "8%", right: "6%",
          width: 360, height: 360,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* ── Fine dot grid (light) ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ══════════════════════════════════════════
          MAIN GRID
      ══════════════════════════════════════════ */}
      <div className="relative z-10 max-w-6xl w-full px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center py-24">

        {/* ── LEFT COLUMN ── */}
        <div className="flex flex-col">

          {/* Availability pill - light theme */}
          <motion.div {...fadeIn(0.1)} className="mb-7 self-start">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{
                background: "rgba(16,185,129,0.12)",
                border: "1px solid rgba(16,185,129,0.3)",
                color: "#059669",
                letterSpacing: "0.1em",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for work
            </span>
          </motion.div>

          {/* Headline - dark text */}
          <motion.div {...fadeUp(0.15)}>
            <p
              className="text-sm font-semibold mb-2 tracking-widest uppercase"
              style={{ color: "#6366f1" }}
            >
              Hello, World 👋
            </p>
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight text-gray-900"
            >
              Emmanuel
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Kiptoo
              </span>
            </h1>
          </motion.div>

          {/* Animated role */}
          <motion.div
            {...fadeUp(0.25)}
            className="mt-5 h-8 overflow-hidden"
          >
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="text-lg font-semibold text-gray-600"
            >
              {ROLES[roleIndex]}
            </motion.p>
          </motion.div>

          {/* Bio */}
          <motion.p
            {...fadeUp(0.32)}
            className="mt-6 text-base leading-relaxed max-w-md text-gray-500"
          >
            I build scalable, high-performance web applications — from
            pixel-perfect Angular & React frontends to robust Spring Boot APIs,
            backed by PostgreSQL and deployed on the cloud. Based in{" "}
            <span className="font-semibold text-gray-700">
              Nairobi, Kenya 🇰🇪
            </span>
            .
          </motion.p>

          {/* Divider */}
          <motion.div
            {...fadeIn(0.38)}
            className="mt-8 mb-6"
            style={{
              height: 1,
              background:
                "linear-gradient(90deg, rgba(59,130,246,0.5) 0%, transparent 100%)",
              maxWidth: 320,
            }}
          />

          {/* CTA Buttons - light theme */}
          <motion.div {...fadeUp(0.42)} className="flex flex-wrap gap-4">
            <a
              href="https://drive.google.com/file/d/1YVDPKJ4OYFYeInogbnj6WzmAWNwQEQa-/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                color: "#fff",
                boxShadow: "0 0 20px rgba(59,130,246,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 28px rgba(59,130,246,0.5)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 20px rgba(59,130,246,0.3)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <FiDownload className="text-base" />
              View Resume
            </a>

            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
              style={{
                border: "1px solid rgba(59,130,246,0.4)",
                color: "#3b82f6",
                background: "rgba(59,130,246,0.06)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(59,130,246,0.12)";
                e.currentTarget.style.borderColor = "rgba(59,130,246,0.7)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(59,130,246,0.06)";
                e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              View Projects
              <FiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
              style={{
                border: "1px solid rgba(139,92,246,0.3)",
                color: "#8b5cf6",
                background: "rgba(139,92,246,0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(139,92,246,0.1)";
                e.currentTarget.style.borderColor = "rgba(139,92,246,0.6)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(139,92,246,0.05)";
                e.currentTarget.style.borderColor = "rgba(139,92,246,0.3)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <FiMail className="text-base" />
              Contact Me
            </a>
          </motion.div>

          {/* Socials - light */}
          <motion.div {...fadeIn(0.52)} className="flex items-center gap-5 mt-8">
            <span className="text-xs tracking-widest uppercase text-gray-400">
              Find me on
            </span>
            <div className="flex gap-4">
              {SOCIALS.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg text-lg transition-all duration-200 text-gray-500 hover:text-blue-600 border border-gray-200 bg-white/60 hover:border-blue-400 hover:bg-blue-50"
                  style={{ transform: "translateY(0)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN — IMAGE (BORDERS REMOVED) ── */}
        <motion.div
          {...fadeIn(0.3)}
          className="relative flex justify-center items-center"
          style={{
            transform: prefersReducedMotion
              ? "none"
              : `perspective(800px) rotateY(${mousePos.x * 0.015}deg) rotateX(${-mousePos.y * 0.015}deg)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          {/* Removed outer decorative frame and corner accents */}

          {/* Soft glow behind image (kept for depth) */}
          <div
            className="absolute"
            style={{
              inset: "10%",
              borderRadius: 20,
              background:
                "radial-gradient(ellipse at center, rgba(59,130,246,0.2) 0%, transparent 70%)",
              filter: "blur(20px)",
              zIndex: 1,
            }}
          />

          {/* Profile Image — clean card, no border/shadow */}
          <div
            className="relative overflow-hidden"
            style={{
              width: "100%",
              maxWidth: 400,
              aspectRatio: "3 / 4",
              borderRadius: 20,
              zIndex: 2,
              boxShadow: "none", // removed border shadow
            }}
          >
            <img
              src={profileImage}
              alt="Emmanuel Kiptoo — Full Stack Developer"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
              }}
              loading="eager"
            />

            {/* Subtle gradient overlay at bottom for name legibility */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "35%",
                background:
                  "linear-gradient(to top, rgba(255,255,255,0.9) 0%, transparent 100%)",
              }}
            />


          </div>

          {/* Floating badges (kept as is) */}
          <motion.div
            animate={prefersReducedMotion ? {} : { y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: 16,
              right: -20,
              padding: "8px 14px",
              borderRadius: 12,
              background: "rgba(255,255,255,0.95)",
              border: "1px solid rgba(59,130,246,0.2)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              zIndex: 10,
              backdropFilter: "blur(12px)",
            }}
          >
            <p style={{ margin: 0, fontSize: 11, color: "#3b82f6", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              67+ Repos
            </p>
            <p style={{ margin: "1px 0 0", fontSize: 10, color: "#6b7280" }}>
              on GitHub
            </p>
          </motion.div>

          <motion.div
            animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            style={{
              position: "absolute",
              bottom: 24,
              left: -24,
              padding: "8px 14px",
              borderRadius: 12,
              background: "rgba(255,255,255,0.95)",
              border: "1px solid rgba(139,92,246,0.2)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              zIndex: 10,
              backdropFilter: "blur(12px)",
            }}
          >
            <p style={{ margin: 0, fontSize: 11, color: "#8b5cf6", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Open to Work
            </p>
            <p style={{ margin: "1px 0 0", fontSize: 10, color: "#6b7280" }}>
              Full-time / Freelance
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Tech Stack Strip (light theme) ── */}
      <motion.div
        {...fadeUp(0.6)}
        className="absolute bottom-0 left-0 right-0"
        style={{
          borderTop: "1px solid rgba(0,0,0,0.05)",
          background: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(12px)",
          padding: "16px 40px",
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center gap-6 flex-wrap justify-center md:justify-start">
          <span
            className="text-xs font-semibold tracking-widest uppercase text-gray-400 shrink-0"
          >
            Tech Stack
          </span>
          <div className="flex gap-5 flex-wrap">
            {TECH_STACK.map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.25, y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="flex items-center gap-1.5 cursor-default group"
                title={tech.label}
              >
                <span
                  className="text-xl transition-all duration-200"
                  style={{ color: tech.color, opacity: 0.7 }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
                >
                  {tech.icon}
                </span>
                <span
                  className="text-xs hidden md:block text-gray-500"
                >
                  {tech.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Scroll indicator (light) ── */}
      <motion.div
        animate={prefersReducedMotion ? {} : { y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-8 bottom-24 hidden md:flex flex-col items-center gap-2 text-gray-400"
      >
        <span className="text-xs tracking-widest uppercase" style={{ writingMode: "vertical-rl" }}>
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 48,
            background: "linear-gradient(to bottom, #3b82f6, transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}