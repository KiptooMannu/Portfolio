import { motion, useReducedMotion } from "framer-motion";
import { FiCalendar, FiBriefcase, FiCheckCircle } from "react-icons/fi";
import teach2giveLogo from "../assets/Teach2give.png";
import tenwekLogo from "../assets/Tenwek.png";

interface WorkExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  status?: string;
  industry: string;
  summary: string;
  responsibilities: string[];
  techStack: string[];
  logo?: string;
}

const experiences: WorkExperience[] = [
  {
    role: "Full Stack Developer (Apprenticeship)",
    company: "Eclectics International Limited",
    location: "Nairobi, Kenya",
    period: "March 2026 - Present",
    status: "Current Position",
    industry: "Fintech & Digital Banking Solutions",
    summary:
      "Architecting and engineering scalable fintech applications serving African financial institutions, implementing core modules for onboarding, lending, payments, digital wallets, and automated customer journeys.",
    responsibilities: [
      "Designed and deployed microservices-based backend systems using Spring Boot and Node.js, implementing asynchronous workflows through Apache Kafka and Azure Service Bus to handle high-volume transaction processing.",
      "Engineered API-first solutions enabling seamless integration between internal platforms and third-party services, supporting M-PESA payment processing and automated reconciliation workflows.",
      "Built responsive frontend applications with Angular and TypeScript, delivering intuitive interfaces for complex financial operations serving thousands of daily active users.",
      "Optimized PostgreSQL database schemas and queries, achieving sub-second response times for transaction processing and improving overall system performance by 40%.",
      "Implemented secure authentication and authorization using OAuth 2.0 and JWT, ensuring strict compliance with the Data Protection Act and financial industry security standards.",
      "Deployed applications to cloud environments using Docker containers and automated CI/CD pipelines, reducing deployment cycle times by 60% through infrastructure automation.",
      "Produced comprehensive architecture documentation including C4 model diagrams and Mermaid sequence diagrams to visualize system designs and integration flows.",
    ],
    techStack: [
      "Spring Boot",
      "Angular",
      "TypeScript",
      "Java",
      "Node.js",
      "PostgreSQL",
      "Apache Kafka",
      "Azure Service Bus",
      "Docker",
      "CI/CD",
      "OAuth 2.0",
      "JWT",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Teach2Give",
    location: "Nyeri, Kenya",
    period: "May 2024 - August 2024",
    industry: "Full Stack Software Engineering",
    summary:
      "Engineered full-stack applications using React.js, TypeScript, Node.js, and PostgreSQL, delivering secure, customer-centric solutions for educational and business platforms.",
    responsibilities: [
      "Designed and implemented REST APIs with JWT-based authentication and role-based permissions, processing over 10,000 API requests monthly.",
      "Architected responsive UI components and managed application state using Context API and Redux, achieving seamless user experiences across mobile and desktop devices.",
      "Structured relational database schemas ensuring data consistency and integrity for scalable applications handling growing user bases.",
      "Applied Redis caching strategies that improved API response times by 40%, significantly enhancing overall system throughput.",
      "Conducted code reviews and implemented OWASP security guidelines, promoting secure coding practices and reducing vulnerabilities.",
      "Developed comprehensive unit and integration tests achieving 85% code coverage, ensuring high-quality software delivery and maintainability.",
    ],
    techStack: ["React.js", "TypeScript", "Node.js", "PostgreSQL", "Redux", "Redis", "REST APIs", "OWASP", "Unit Testing"],
    logo: teach2giveLogo,
  },
  {
    role: "Networking Intern",
    company: "Tenwek Hospital",
    location: "Bomet, Kenya",
    period: "May 2023 - July 2023",
    industry: "Enterprise Healthcare Infrastructure",
    summary:
      "Maintained mission-critical healthcare networking infrastructure and server communications supporting uninterrupted clinical operations across hospital departments.",
    responsibilities: [
      "Configured and maintained LAN/WAN infrastructure supporting healthcare operations across multiple departments.",
      "Resolved network incidents, configured switches, and implemented security protocols, ensuring uninterrupted critical healthcare services.",
    ],
    techStack: ["LAN/WAN", "Network Protocols", "Switch Configuration", "Security Protocols", "Infrastructure Diagnostics"],
    logo: tenwekLogo,
  },
];

export default function Experience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative py-24 bg-slate-50/50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 overflow-hidden transition-colors duration-300"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[110px]"
      />

      <div className="relative max-w-5xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2 inline-block">
            Verified Career History
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Engineering scalable fintech solutions, mission-critical digital banking rails, and enterprise systems.
          </p>
        </motion.div>

        {/* Timeline List */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 sm:ml-6 md:ml-40 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative pl-7 sm:pl-9"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-indigo-600 dark:border-indigo-500 flex items-center justify-center shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400" />
              </div>

              {/* Date on the left for medium+ screens */}
              <div className="hidden md:block absolute -left-44 top-5 w-36 text-right">
                <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 flex items-center justify-end gap-1.5">
                  <FiCalendar className="text-indigo-600 dark:text-indigo-400" />
                  {exp.period}
                </span>
              </div>

              {/* Card Container */}
              <motion.div
                whileHover={!prefersReducedMotion ? { y: -6, scale: 1.01 } : {}}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-indigo-400 dark:hover:border-indigo-500/50 shadow-md hover:shadow-2xl hover:shadow-indigo-500/15 dark:hover:shadow-indigo-500/20 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    {/* Company icon or logo */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/10 to-sky-500/10 dark:from-indigo-950 dark:to-slate-900 border border-indigo-200 dark:border-slate-800 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                      {exp.logo ? (
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-contain p-1.5"
                        />
                      ) : (
                        <FiBriefcase className="text-xl text-indigo-600 dark:text-indigo-400" />
                      )}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                          {exp.company}
                        </span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {exp.location}
                        </span>
                      </div>
                      <span className="inline-block mt-1 text-xs font-medium text-slate-500 dark:text-slate-400 italic">
                        {exp.industry}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {exp.status && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {exp.status}
                      </span>
                    )}
                    <span className="md:hidden text-xs font-mono text-slate-500 dark:text-slate-400">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-5">
                  {exp.summary}
                </p>

                {/* Core Responsibilities */}
                <div className="mb-6 space-y-2.5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Key Achievements & Responsibilities
                  </p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300 leading-normal">
                        <FiCheckCircle className="text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/90 text-xs text-slate-700 dark:text-slate-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
