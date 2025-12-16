import { motion, useReducedMotion } from "framer-motion";
import ictaLogo from "../assets/ICT.png";
import teach2giveLogo from "../assets/Teach2give.png";
import tenwekLogo from "../assets/Tenwek.png";
import devtownLogo from "../assets/devtown.png";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  logo: string;
}

const Experience = () => {
  const prefersReducedMotion = useReducedMotion();

  const experiences: ExperienceItem[] = [
    {
      title: "Backend Web Development Bootcamp",
      company: "DevTown",
      period: "January 2023",
      description: "Completed 7-day intensive bootcamp on Backend Development with Node.js & Express.",
      skills: ["Node.js", "Express", "Backend Development"],
      logo: devtownLogo,
    },
    {
      title: "Cybersecurity Training",
      company: "ICT Authority & Learnovate",
      period: "November 2024",
      description: "Certification in cybersecurity and emerging technologies.",
      skills: ["Cybersecurity", "Emerging Tech", "Certification"],
      logo: ictaLogo,
    },
    {
      title: "Software Development Training (Distinction)",
      company: "Teach2Give",
      period: "July 2024",
      description: "Awarded distinction for outstanding performance in software development cohort.",
      skills: ["Software Dev", "Programming", "Distinction"],
      logo: teach2giveLogo,
    },
    {
      title: "Networking Engineer Intern",
      company: "Tenwek Mission Hospital",
      period: "May 2023 - Aug 2023",
      description: "Implemented and maintained network infrastructure for hospital systems.",
      skills: ["Network Engineering", "Troubleshooting", "Infrastructure"],
      logo: tenwekLogo,
    },
  ];

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-12 md:py-20 lg:py-24 bg-white relative overflow-hidden"
    >
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Experience & Certifications
        </h2>
        <p className="mt-4 text-gray-600 text-lg md:text-xl">
          My professional journey and learning achievements
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Vertical Line */}
        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full border-l-2 border-gray-200"></div>

        {experiences.map((exp, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`relative w-full md:w-1/2 ${isLeft ? "md:left-0" : "md:left-1/2 md:pl-12 md:pr-0"} mb-12`}
            >
              {/* Timeline Dot */}
              <div className="absolute top-4 md:top-1/2 transform -translate-y-1/2 -left-4 md:-left-6 w-4 h-4 bg-blue-500 rounded-full border-2 border-white z-10 shadow-md"></div>

              {/* Card */}
              <motion.div
                whileHover={!prefersReducedMotion ? { scale: 1.03, y: -3 } : {}}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:border-blue-400 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-200 flex items-center justify-center shadow-sm">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                </div>
                <span className="text-gray-500 text-sm mb-3 block">{exp.period}</span>
                <p className="text-gray-600 mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={!prefersReducedMotion ? { scale: 1.1 } : {}}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Experience;
