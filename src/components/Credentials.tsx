import { motion, useReducedMotion } from "framer-motion";
import { FiAward, FiExternalLink, FiCheckCircle, FiShield } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

interface Credential {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  category: string;
  driveLink: string;
  skills: string[];
  themeColor: {
    badgeBg: string;
    badgeText: string;
    sealBorder: string;
    sealGradient: string;
  };
}

const credentials: Credential[] = [
  {
    id: "icta-cybersecurity",
    title: "Cybersecurity & Emerging Technologies",
    issuer: "ICT Authority of Kenya & Learnovate",
    issueDate: "November 2024",
    credentialId: "ICTA-LNV-2024-SEC",
    category: "Security & Infrastructure",
    driveLink: "https://drive.google.com/file/d/1gd49HSj9Tz8CtxJmUGdgd9mYQuUraX8W/view?usp=drive_link",
    skills: ["Network Security", "Threat Intelligence", "Vulnerability Defense", "Compliance Standards"],
    themeColor: {
      badgeBg: "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-500/30",
      badgeText: "text-emerald-700 dark:text-emerald-300",
      sealBorder: "border-emerald-400/60",
      sealGradient: "from-emerald-500 to-teal-600",
    },
  },
  {
    id: "jitu-fullstack",
    title: "Software Development Immersion",
    issuer: "Teach2Give & The Jitu",
    issueDate: "July 2024",
    credentialId: "T2G-JITU-DISTINCTION",
    category: "Full Stack Engineering",
    driveLink: "https://drive.google.com/file/d/1hMiJWBJH3SRcpuzHALsaiTpSUR4W3zlQ/view?usp=drive_link",
    skills: ["Full Stack Architecture", "TypeScript", "React", "PostgreSQL", "Clean Coding"],
    themeColor: {
      badgeBg: "bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-500/30",
      badgeText: "text-indigo-700 dark:text-indigo-300",
      sealBorder: "border-indigo-400/60",
      sealGradient: "from-indigo-500 to-purple-600",
    },
  },
  {
    id: "devtown-backend",
    title: "JavaScript, Node.js & Express",
    issuer: "DevTown & AWS Community",
    issueDate: "January 2023",
    credentialId: "DEVTOWN-BACKEND-API",
    category: "Backend & Systems",
    driveLink: "https://drive.google.com/file/d/1G_nFYVmDfGcukZHT_ZQI6Q6E-ZCyqYu-/view?usp=drive_link",
    skills: ["Node.js", "Express.js", "RESTful Architecture", "Relational Schemas", "Async Patterns"],
    themeColor: {
      badgeBg: "bg-sky-50 dark:bg-sky-950/60 border-sky-200 dark:border-sky-500/30",
      badgeText: "text-sky-700 dark:text-sky-300",
      sealBorder: "border-sky-400/60",
      sealGradient: "from-sky-500 to-blue-600",
    },
  },
  {
    id: "devtown-react",
    title: "React.js from A to Z Specialization",
    issuer: "DevTown & Google Developer Groups",
    issueDate: "April 2023",
    credentialId: "DEVTOWN-REACT-PRO",
    category: "Frontend Specialization",
    driveLink: "https://drive.google.com/file/d/1WzLKg0wjHcjghPrm4lTh6uuwVVIvBWKR/view?usp=drive_link",
    skills: ["React.js", "State Orchestration", "Component Lifecycle", "Modern Hooks", "DOM Performance"],
    themeColor: {
      badgeBg: "bg-cyan-50 dark:bg-cyan-950/60 border-cyan-200 dark:border-cyan-500/30",
      badgeText: "text-cyan-700 dark:text-cyan-300",
      sealBorder: "border-cyan-400/60",
      sealGradient: "from-cyan-500 to-blue-500",
    },
  },
  {
    id: "ms-csharp",
    title: "Foundation of C# & .NET",
    issuer: "Microsoft Learn Student Ambassadors",
    issueDate: "October 2023",
    credentialId: "MLSA-KU-CSHARP-NET",
    category: "Enterprise Software",
    driveLink: "https://drive.google.com/file/d/1JprKvb4PcOIxRVsjp89mrlWjuuebO_Ol/view?usp=drive_link",
    skills: ["C#", ".NET Core", "Object-Oriented Design", "Memory Management", "Enterprise Patterns"],
    themeColor: {
      badgeBg: "bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-500/30",
      badgeText: "text-amber-800 dark:text-amber-300",
      sealBorder: "border-amber-400/60",
      sealGradient: "from-amber-500 to-orange-600",
    },
  },
];

export default function Credentials() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="credentials"
      className="relative py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 overflow-hidden transition-colors duration-300"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px]"
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
            Verified Accreditations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Credentials & Certifications
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Authenticated certifications in enterprise engineering, cybersecurity, and modern frameworks.
          </p>
        </motion.div>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {credentials.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={!prefersReducedMotion ? { y: -8, scale: 1.02 } : {}}
              className="group relative flex flex-col rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-md hover:shadow-2xl hover:shadow-indigo-500/20 dark:hover:shadow-indigo-500/25 transition-all duration-300"
            >
              {/* Animated Light Shimmer Sweep across card */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
              >
                <div className="w-[120%] h-full bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent -skew-x-12 animate-shimmer-sweep opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Engraved Certificate Artboard Header (Replaces Black Box) */}
              <a
                href={cert.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-[16/10] w-full block overflow-hidden p-6 bg-gradient-to-br from-amber-50/70 via-indigo-50/40 to-slate-100/90 dark:from-slate-900 dark:via-indigo-950/60 dark:to-slate-950 border-b border-indigo-100/80 dark:border-slate-800 transition-colors"
                aria-label={`Inspect official certificate for ${cert.title}`}
              >
                {/* Guilloche border accents */}
                <div className="absolute inset-2.5 rounded-xl border border-dashed border-indigo-200/70 dark:border-indigo-500/20 pointer-events-none" />

                {/* Top bar with category & verified lock */}
                <div className="relative z-10 flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border shadow-xs ${cert.themeColor.badgeBg} ${cert.themeColor.badgeText}`}>
                    <FiShield className="text-[11px]" />
                    {cert.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                    {cert.issueDate}
                  </span>
                </div>

                {/* Certificate Recipient Presentation */}
                <div className="relative z-10 flex flex-col justify-center h-[calc(100%-2.5rem)]">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400">
                    Certificate of Accreditation
                  </span>
                  <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight mt-0.5 leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                    {cert.title}
                  </h4>

                  <div className="mt-2.5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Awarded to:</span>
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        Emmanuel Kiptoo
                      </span>
                    </div>

                    {/* Embossed Metallic Seal Medal */}
                    <div className={`relative w-11 h-11 rounded-full bg-gradient-to-tr ${cert.themeColor.sealGradient} p-0.5 shadow-md flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform duration-300`}>
                      <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
                        <FiAward className="text-lg text-amber-500 dark:text-amber-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Inspect hover indicator */}
                <div className="absolute inset-0 z-30 bg-indigo-600/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span className="px-3.5 py-1.5 rounded-xl bg-white/95 dark:bg-slate-950/90 text-indigo-700 dark:text-sky-300 text-xs font-bold shadow-lg flex items-center gap-1.5 border border-indigo-200 dark:border-slate-700">
                    <FiExternalLink className="text-sm" />
                    Inspect Certificate
                  </span>
                </div>
              </a>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-1.5">
                    <FaGraduationCap className="text-sm shrink-0" />
                    <span>{cert.issuer}</span>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mb-4">
                    Verification ID: {cert.credentialId}
                  </p>

                  {/* Skills tags with hover lift */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 group-hover:border-indigo-300 dark:group-hover:border-slate-700 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link with shine effect */}
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={cert.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-50 hover:bg-indigo-600 dark:bg-slate-950 dark:hover:bg-indigo-600 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:text-white dark:hover:text-white text-xs font-bold uppercase tracking-wider shadow-xs transition-all duration-200"
                >
                  <FiCheckCircle className="text-emerald-500 group-hover:text-white transition-colors" />
                  <span>View Verified Document</span>
                  <FiExternalLink className="text-xs" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
