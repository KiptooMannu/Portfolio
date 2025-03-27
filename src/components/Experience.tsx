import { motion } from "framer-motion";

interface ExperienceItem {
  title: string;
  period: string;
  description: string;
  skills: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Gold Microsoft Learn Student Ambassador",
      period: "April 2023 - Present",
      description: "As a Gold Microsoft Learn Student Ambassador, I engage with peers, promote technology learning, and contribute to a global community. I facilitate workshops, share insights, and inspire others to explore Microsoft technologies.",
      skills: ["Hosting events", "Public speaking", "Community building"]
    },
    {
      title: "Software Development Trainee at The Jitu",
      period: "May 2023 - August 2023",
      description: "Immersed in a comprehensive training program, gaining expertise in both front-end and back-end development. Collaborating with mentors, I worked on diverse projects, honing my skills for a dynamic career in web development.",
      skills: ["Fullstack development", "Soft Skills", "Docker"]
    },
    {
      title: "Google Crowdsource Influencer",
      period: "August 2023 - August 2024",
      description: "Led the community by actively contributing insights, translations, and data annotations to enhance Google products. Collaborated globally to inspire and guide others in improving user experiences.",
      skills: ["Leadership", "Collaboration", "Community building"]
    },
    {
      title: "AWS ReStart Cloud Trainee",
      period: "April 2024 - August 2024",
      description: "Completed a hands-on training program focused on AWS fundamentals, including cloud architecture, EC2, S3, RDS, VPCs, IAM, and automation. Developed practical skills for deploying and managing cloud-based applications.",
      skills: ["Amazon Cloud Services", "Linux", "Cloud Certification"]
    }
  ];

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="min-h-screen py-20 flex flex-col justify-center"
    >
      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-16 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-primary">{exp.title}</h3>
              <span className="text-gray-300">{exp.period}</span>
            </div>
            <p className="text-gray-300 mb-4">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;