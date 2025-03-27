import { motion } from "framer-motion";
import microsoftLogo from "../assets/Bus.jpg";
import jituLogo from "../assets/Hack.jpg";
import googleLogo from "../assets/Hero2.jpg";
import awsLogo from "../assets/login.jpg";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  logo: string;
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Gold Microsoft Learn Student Ambassador",
      company: "Microsoft",
      period: "April 2023 - Present",
      description: "As a Gold Microsoft Learn Student Ambassador, I engage with peers, promote technology learning, and contribute to a global community. I facilitate workshops, share insights, and inspire others to explore Microsoft technologies.",
      skills: ["Hosting events", "Public speaking", "Community building"],
      logo: microsoftLogo
    },
    {
      title: "Software Development Trainee",
      company: "The Jitu",
      period: "May 2023 - August 2023",
      description: "Immersed in a comprehensive training program, gaining expertise in both front-end and back-end development. Collaborating with mentors, I worked on diverse projects, honing my skills for a dynamic career in web development.",
      skills: ["Fullstack development", "Soft Skills", "Docker"],
      logo: jituLogo
    },
    {
      title: "Google Crowdsource Influencer",
      company: "Google",
      period: "August 2023 - August 2024",
      description: "Led the community by actively contributing insights, translations, and data annotations to enhance Google products. Collaborated globally to inspire and guide others in improving user experiences.",
      skills: ["Leadership", "Collaboration", "Community building"],
      logo: googleLogo
    },
    {
      title: "AWS ReStart Cloud Trainee",
      company: "Amazon Web Services",
      period: "April 2024 - August 2024",
      description: "Completed a hands-on training program focused on AWS fundamentals, including cloud architecture, EC2, S3, RDS, VPCs, IAM, and automation. Developed practical skills for deploying and managing cloud-based applications.",
      skills: ["Amazon Cloud Services", "Linux", "Cloud Certification"],
      logo: awsLogo
    }
  ];

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-12 md:py-20 lg:py-24 flex flex-col justify-center bg-white relative overflow-hidden"
    >
      {/* Rocket animation */}
      <motion.div
        className="absolute top-1/2 left-0 -translate-y-1/2 z-0"
        initial={{ x: "-100%" }}
        whileInView={{ 
          x: "150vw",
          transition: { 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }
        }}
        viewport={{ once: true }}
      >
        <div className="text-4xl">🚀</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4 relative z-10"
      >
        <motion.h2
          whileInView={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
        >
          Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl mx-auto"
        >
          My professional journey and achievements
        </motion.p>
      </motion.div>

      <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6 md:px-8 lg:px-10 max-w-6xl mx-auto relative z-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 hover:border-blue-400 transition-colors shadow-md"
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Company Logo */}
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full border border-gray-200 overflow-hidden bg-white p-2 flex items-center justify-center shadow-sm">
                <img 
                  src={exp.logo} 
                  alt={`${exp.company} logo`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%236b7280' text-anchor='middle' dominant-baseline='middle'%3E" + 
                    exp.company.charAt(0) + "%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{exp.title}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 font-medium">{exp.period}</span>
                </div>
                
                <p className="text-gray-600 mb-6">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm sm:text-base"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;