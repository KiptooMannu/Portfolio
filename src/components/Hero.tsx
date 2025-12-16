import { motion, useReducedMotion } from "framer-motion";
import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaReact, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { useEffect, useState } from "react";
import profileImage from "../assets/Mannu1.jpeg";

/* ---------------------------------- */
/* CONFIG                             */
/* ---------------------------------- */

const ROLES = [
  "Full Stack Developer",
  "Cloud Engineer",
  "React & Next.js Specialist",
  "DevOps Enthusiast",
];

const SOCIALS = [
  { icon: <FiGithub />, url: "https://github.com/KiptooMannu" },
  { icon: <FiLinkedin />, url: "#" },
  { icon: <FiMail />, url: "mailto:kiptooemmanuel763@gmail.com" },
];

const TECH_STACK = [
  <FaReact className="text-blue-500" />,
  <SiNextdotjs />,
  <SiTailwindcss className="text-cyan-500" />,
  <FaNodeJs className="text-green-500" />,
  <FaDocker className="text-blue-400" />,
  <FaAws className="text-orange-500" />,
];

/* ---------------------------------- */
/* COMPONENT                          */
/* ---------------------------------- */

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setRoleIndex((i) => (i + 1) % ROLES.length),
      2500
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-indigo-50"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-6xl w-full px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          {/* Availability */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Available for work
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Emmanuel Kiptoo
            </span>
          </h1>

          {/* Role Switch */}
          <motion.p
            key={roleIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-4 text-xl font-semibold text-gray-700"
          >
            {ROLES[roleIndex]}
          </motion.p>

          <p className="mt-6 text-gray-600 max-w-xl">
            I design and build scalable, high-performance web applications using
            modern frontend, backend, and cloud technologies.
          </p>

          {/* Tech Stack */}
          <div className="flex gap-4 mt-8 flex-wrap">
            {TECH_STACK.map((icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, y: -4 }}
                className="text-2xl p-3 rounded-xl bg-white shadow-md"
              >
                {icon}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex gap-4 mt-10">
           <a
  href="https://drive.google.com/file/d/1YVDPKJ4OYFYeInogbnj6WzmAWNwQEQa-/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition flex items-center gap-2"
>
  <FiDownload />
  View Resume
</a>


            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-blue-500 text-blue-600 font-medium hover:bg-blue-50 transition"
            >
              Contact Me
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-6 mt-8">
            {SOCIALS.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-blue-600 transition"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <motion.div
          animate={
            prefersReducedMotion
              ? {}
              : { y: [0, -15, 0], rotate: [0, 2, -2, 0] }
          }
          transition={{ duration: 6, repeat: Infinity }}
          className="relative flex justify-center"
        >
          {/* Gradient Ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 blur-xl opacity-30" />

          <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <img
              src={profileImage}
              alt="Emmanuel Kiptoo"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
