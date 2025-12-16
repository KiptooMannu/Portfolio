import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiGithub,
  SiFirebase,
} from "react-icons/si";
import { FaCode, FaServer, FaDatabase } from "react-icons/fa";
import profileImage from "../assets/Hack.jpg";

/* ---------------------------------- */
/* CONFIG                             */
/* ---------------------------------- */

const skillGroups = [
  {
    title: "Frontend",
    icon: <FaCode />,
    skills: [
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, tip: "ES6+, async patterns, performance" },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, tip: "Type safety, scalable apps" },
      { name: "React", icon: <SiReact className="text-blue-400" />, tip: "Hooks, state management" },
      { name: "Next.js", icon: <SiNextdotjs />, tip: "SSR, routing, SEO" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, tip: "Responsive UI systems" },
    ],
  },
  {
    title: "Backend",
    icon: <FaServer />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" />, tip: "APIs, authentication" },
      { name: "Python", icon: <SiPython className="text-blue-600" />, tip: "Automation, scripting" },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" />, tip: "Auth, real-time DB" },
    ],
  },
  {
    title: "Database & Tools",
    icon: <FaDatabase />,
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" />, tip: "Relational data modeling" },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, tip: "NoSQL schemas" },
      { name: "Git & GitHub", icon: <SiGithub className="text-gray-800" />, tip: "Collaboration & CI" },
    ],
  },
];

const stats = [
  { value: "4+", label: "Production Projects" },
  { value: "1+", label: "Years Experience" },
  { value: "100%", label: "Quality Mindset" },
  { value: "∞", label: "Continuous Learning" },
];

const timeline = [
  { year: "2023", text: "Started deep focus on full-stack development" },
  { year: "2024", text: "Built and deployed scalable real-world apps" },
  { year: "2025", text: "Specializing in cloud-ready web solutions" },
];

const principles = [
  "Clean, scalable architecture",
  "Performance & accessibility first",
  "Readable, maintainable code",
  "Continuous improvement mindset",
];

/* ---------------------------------- */
/* COMPONENT                          */
/* ---------------------------------- */

export default function About() {
  // const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#6366f120,transparent_40%)]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            A developer focused on building scalable, clean, and meaningful digital solutions.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* IMAGE */}
            <div className="relative w-64 h-64 mx-auto mb-10">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-xl opacity-30" />
              <img
                src={profileImage}
                alt="Emmanuel Kiptoo"
                className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-xl"
              />
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-xl bg-white border border-gray-200 text-center shadow-sm"
                >
                  <div className="text-2xl font-bold text-blue-500">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* TIMELINE */}
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                My Journey
              </h3>
              <ul className="space-y-3">
                {timeline.map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-600">
                    <span className="font-bold text-blue-500">{item.year}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* DESCRIPTION */}
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I’m a full-stack developer who enjoys turning complex problems into
              elegant, scalable systems. I care deeply about code quality,
              performance, and user experience.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              I work across frontend, backend, and databases — always aiming to
              build software that is maintainable, efficient, and impactful.
            </p>

            {/* SKILLS */}
            <div className="space-y-8">
              {skillGroups.map((group, i) => (
                <div key={i}>
                  <h3 className="flex items-center gap-2 text-xl font-bold text-gray-800 mb-4">
                    <span className="text-blue-500">{group.icon}</span>
                    {group.title}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.1, y: -4 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative group flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-sm"
                      >
                        <span className="text-lg">{skill.icon}</span>
                        {skill.name}

                        {/* Tooltip */}
                        <span className="absolute bottom-full mb-2 px-3 py-1 text-xs bg-gray-900 text-white rounded opacity-0 group-hover:opacity-100 transition">
                          {skill.tip}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* PRINCIPLES */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-14 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100"
            >
              <h4 className="text-xl font-bold mb-4 text-gray-800">
                How I Build Software
              </h4>
              <ul className="space-y-2 text-gray-600">
                {principles.map((p, i) => (
                  <li key={i}>✔ {p}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
