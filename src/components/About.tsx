import { motion, useReducedMotion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiTailwindcss,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiApachekafka,
  SiDocker,
  SiSpringboot,
} from "react-icons/si";
import { FaJava, FaServer, FaShieldAlt, FaGraduationCap, FaCheckCircle } from "react-icons/fa";
import profileImage from "../assets/Hack.jpg";

const skillGroups = [
  {
    title: "Backend Frameworks & Messaging",
    icon: <FaServer className="text-emerald-500 dark:text-emerald-400" />,
    skills: [
      { name: "Java", icon: <FaJava className="text-amber-500" />, tip: "Core enterprise Java & OOP" },
      { name: "Spring Boot", icon: <SiSpringboot className="text-emerald-500" />, tip: "Microservices, REST APIs & security" },
      { name: "Node.js & Express", icon: <SiNodedotjs className="text-emerald-500" />, tip: "Async APIs & middleware" },
      { name: "Apache Kafka", icon: <SiApachekafka className="text-rose-500" />, tip: "Event-driven asynchronous messaging" },
      { name: "Python", icon: <SiPython className="text-blue-500" />, tip: "Automation & Django services" },
    ],
  },
  {
    title: "Frontend & Architecture",
    icon: <SiAngular className="text-rose-500 dark:text-rose-400" />,
    skills: [
      { name: "Angular", icon: <SiAngular className="text-rose-500" />, tip: "Enterprise single-page apps & TypeScript" },
      { name: "React.js", icon: <SiReact className="text-sky-400" />, tip: "Component architecture, hooks & Redux" },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, tip: "Strict type systems & contract safety" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, tip: "Responsive design tokens & UI polish" },
      { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" />, tip: "Modern async patterns & browser APIs" },
    ],
  },
  {
    title: "Databases, Cloud & Security",
    icon: <FaShieldAlt className="text-indigo-500 dark:text-indigo-400" />,
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-500" />, tip: "Optimized schemas, indexing & sub-second queries" },
      { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" />, tip: "Document schemas & aggregations" },
      { name: "Docker & CI/CD", icon: <SiDocker className="text-blue-400" />, tip: "Containerization & automated pipelines" },
      { name: "OAuth 2.0 & JWT", icon: <FaShieldAlt className="text-indigo-400" />, tip: "RBAC, encryption & Data Protection Act" },
    ],
  },
];

const stats = [
  { value: "2+ Years", label: "Enterprise Experience" },
  { value: "1,000+", label: "Concurrent Users Handled" },
  { value: "40%", label: "DB Speed Optimization" },
  { value: "85%", label: "Code Coverage Standards" },
];

const timeline = [
  { year: "2021 - 2025", text: "BSc in Software Engineering at Kirinyaga University (Second Class Upper Honours)." },
  { year: "May - July 2023", text: "Networking Intern at Tenwek Hospital administering enterprise healthcare infrastructure." },
  { year: "May - August 2024", text: "Software Developer Intern at Teach2Give engineering REST APIs & caching solutions." },
  { year: "March 2026 - Present", text: "Full Stack Developer (Apprenticeship) at Eclectics International Limited." },
];

const principles = [
  "API-first design, microservices architecture, and asynchronous event streams",
  "Strict adherence to OWASP security guidelines, OAuth 2.0, and data protection standards",
  "Sub-second database performance through disciplined query profiling and indexing",
  "Automated CI/CD pipelines with comprehensive unit and integration testing",
];

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 overflow-hidden transition-colors duration-300"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px]"
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2 inline-block">
            Professional Profile
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            Full Stack Developer with 2+ years of experience architecting and maintaining enterprise-grade, scalable financial applications.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait, Education & Verified Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col"
          >
            {/* Image Card */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto mb-8">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500/20 to-sky-500/20 blur-lg" />
              <img
                src={profileImage}
                alt="Emmanuel Kiptoo Coding"
                className="relative w-full h-full rounded-2xl object-cover border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-xl"
              />
            </div>

            {/* Education Spotlight Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50/70 to-slate-50 dark:from-indigo-950/40 dark:to-slate-900/50 border border-indigo-200 dark:border-indigo-900/50 mb-6 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-indigo-600 text-white shrink-0">
                  <FaGraduationCap className="text-lg" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                    Kirinyaga University
                  </h3>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">
                    Bachelor of Science in Software Engineering
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 pl-11">
                Graduated with <span className="font-semibold text-slate-800 dark:text-slate-100">Second Class Upper Division (Honours)</span> · 2021 - 2025
              </p>
            </div>

            {/* Verified Metrics */}
            <div className="grid grid-cols-2 gap-3.5 mb-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={!prefersReducedMotion ? { y: -2, scale: 1.02 } : {}}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 text-center hover:border-indigo-400 dark:hover:border-slate-700 transition-colors shadow-sm"
                >
                  <div className="text-xl sm:text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Career Milestones */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-300 mb-4">
                Career Timeline
              </h3>
              <ul className="space-y-4">
                {timeline.map((item, i) => (
                  <li key={i} className="flex gap-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    <span className="font-mono font-bold text-sky-600 dark:text-sky-400 shrink-0">
                      {item.year}
                    </span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Bio, Skills & Principles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col space-y-8"
          >
            {/* Core Narrative */}
            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              <p>
                I am a Full Stack Developer with 2+ years of hands-on experience designing, developing, and deploying enterprise-grade financial software solutions. Proven track record leading the full development lifecycle from responsive user interfaces in Angular and React to high-throughput backend services in Spring Boot and Node.js.
              </p>
              <p>
                Specializing in secure, cloud-native deployments across AWS and Azure, I leverage microservices, event-driven architecture with Apache Kafka and Azure Service Bus, and containerization with Docker and Kubernetes to deliver sub-100ms response times for mission-critical operations.
              </p>
            </div>

            {/* Skill Clusters */}
            <div className="space-y-6 pt-2">
              {skillGroups.map((group, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 shadow-sm">
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <span className="text-base">{group.icon}</span>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        title={skill.tip}
                        whileHover={!prefersReducedMotion ? { y: -2, scale: 1.05 } : {}}
                        className="relative group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-300 dark:hover:border-slate-700 transition-colors shadow-sm dark:shadow-none cursor-help"
                      >
                        <span className="text-sm">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Core Engineering Standards */}
            <div className="p-6 rounded-2xl bg-indigo-50/70 dark:bg-gradient-to-br dark:from-indigo-950/30 dark:to-slate-900/40 border border-indigo-100 dark:border-indigo-900/40 shadow-sm">
              <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 mb-3.5">
                Architecture & Engineering Standards
              </h4>
              <ul className="space-y-2.5">
                {principles.map((principle, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 leading-normal">
                    <FaCheckCircle className="text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
