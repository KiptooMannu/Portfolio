import { motion, useReducedMotion } from "framer-motion";
import { FiExternalLink, FiGithub, FiCheckCircle } from "react-icons/fi";
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiSpringboot,
  SiAngular,
  SiPostgresql,
} from "react-icons/si";

import autoSeatImage from "../assets/Auto.png";
import cemaImage from "../assets/Cema.png";
import churchImage from "../assets/Church.png";
import vehicleRentalImage from "../assets/Vehicle.png";

interface Project {
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
  techStack: string[];
  features: string[];
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Client-Worker Connection Platform",
    description:
      "An enterprise marketplace connecting 500+ clients with service providers, featuring modular API-first architecture, M-PESA escrow payments, and sub-100ms response times.",
    githubLink: "https://github.com/kiptoomannu/Auto-seat-psv-Client",
    liveLink: "https://kiptoomannu.github.io/Auto-seat-psv-Client/",
    techStack: ["Angular", "TypeScript", "Spring Boot", "Java", "PostgreSQL", "M-PESA Daraja API", "JWT"],
    features: [
      "Modular API-first architecture for independent service scaling",
      "Spring Boot REST APIs implementing complex negotiation logic",
      "M-PESA Daraja integration automating escrow for 200+ monthly payments",
      "Optimized PostgreSQL schema supporting 1,000+ concurrent users",
    ],
    category: "Fintech & Marketplace",
    image: autoSeatImage,
  },
  {
    title: "Healthcare Management System (ERP)",
    description:
      "A comprehensive clinical healthcare platform managing patient demographics, enrollment tracking, health programs, and confidential medical records for 1,000+ patients.",
    githubLink: "https://github.com/KiptooMannu/CEMA-FINAL",
    liveLink: "https://cema-final.onrender.com",
    techStack: ["React.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Drizzle ORM"],
    features: [
      "Secure patient records management & third-party integrations",
      "Optimized PostgreSQL schemas supporting complex medical analytics",
      "Data encryption & RBAC ensuring healthcare regulatory compliance",
      "Responsive clinical interfaces improving patient care workflows",
    ],
    category: "Health Tech ERP",
    image: cemaImage,
  },
  {
    title: "Property Management ERP System",
    description:
      "A full-stack property management application managing property listings, tenant onboarding, verification workflows, and automated rent processing across 500+ properties.",
    githubLink: "https://github.com/KiptooMannu/frontend-vehicle",
    liveLink: "https://frontend-vehicle-h287.vercel.app/",
    techStack: ["React.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Optimized queries enabling fast property search across 500+ listings",
      "Secure verification workflows for landlords and tenants with RBAC",
      "Managed application state with Context API for seamless mobile UX",
      "Automated rent processing & booking lifecycle tracking",
    ],
    category: "Enterprise Platform",
    image: vehicleRentalImage,
  },
  {
    title: "Community Digitization Platform",
    description:
      "A responsive community portal delivering announcements, service events, and media distribution, supporting local community digitization efforts.",
    githubLink: "https://github.com/KiptooMannu/Kapsomoita-Church-Website",
    liveLink: "https://kapsomoita-church-website.vercel.app/",
    techStack: ["TypeScript", "Tailwind CSS", "Node.js", "React"],
    features: [
      "Accessible information architecture and responsive delivery",
      "Event scheduling, community updates & program listings",
      "High performance CDN deployment with sub-second load times",
      "Community digital inclusion and literacy enablement",
    ],
    category: "Community Portal",
    image: churchImage,
  },
];

const getTechIcon = (tech: string) => {
  switch (tech.toLowerCase()) {
    case "angular":
      return <SiAngular className="text-rose-500" />;
    case "spring boot":
      return <SiSpringboot className="text-emerald-500" />;
    case "java":
      return <FaJava className="text-amber-500" />;
    case "react":
    case "react.js":
      return <FaReact className="text-sky-500 dark:text-sky-400" />;
    case "typescript":
      return <SiTypescript className="text-blue-600 dark:text-blue-400" />;
    case "next.js":
      return <SiNextdotjs className="text-slate-900 dark:text-white" />;
    case "tailwind css":
      return <SiTailwindcss className="text-cyan-500 dark:text-cyan-400" />;
    case "node.js":
      return <FaNodeJs className="text-emerald-600 dark:text-emerald-400" />;
    case "postgresql":
      return <SiPostgresql className="text-sky-600 dark:text-sky-400" />;
    default:
      return null;
  }
};

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="relative py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 overflow-hidden transition-colors duration-300"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-[130px]"
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
            Featured Enterprise Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Production Projects
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Scalable digital solutions connecting thousands of users with M-PESA payment flows, clinical records, and ERP workflows.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={!prefersReducedMotion ? { y: -8, scale: 1.01 } : {}}
              className="flex flex-col rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 overflow-hidden hover:border-indigo-400 dark:hover:border-indigo-500/40 shadow-md hover:shadow-2xl hover:shadow-indigo-500/20 dark:hover:shadow-indigo-500/25 transition-all duration-300"
            >
              {/* Project Preview Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-slate-950/85 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-sky-300 shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-2.5">
                      Key Technical Capabilities
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 leading-tight"
                        >
                          <FiCheckCircle className="text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack & Links */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-slate-200 dark:border-slate-800/80">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-xs dark:shadow-none"
                      >
                        {getTechIcon(tech)}
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold uppercase tracking-wider shadow-md shadow-indigo-600/25 transition-all duration-200"
                    >
                      Live Demo
                      <FiExternalLink className="text-sm" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white hover:bg-slate-50 dark:bg-slate-950 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 text-xs font-semibold uppercase tracking-wider shadow-sm transition-all duration-200"
                    >
                      Source Code
                      <FiGithub className="text-sm" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All GitHub Link */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.a
            whileHover={!prefersReducedMotion ? { y: -2, scale: 1.02 } : {}}
            whileTap={{ scale: 0.98 }}
            href="https://github.com/KiptooMannu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all duration-200 shadow-sm"
          >
            <FiGithub className="text-lg" />
            Explore 67+ Repositories on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
