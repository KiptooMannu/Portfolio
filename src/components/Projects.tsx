// src/components/Projects.tsx
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface Project {
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "HealthJfer",
      description: "Empowering women with accessible health resources and personalized wellness solutions.",
      githubLink: "https://github.com/yourusername/healthjfer",
      liveLink: "https://healthjfer.com"
    },
    {
      title: "Gallery App",
      description: "Modern and responsive gallery app styled with Daisy UI, built using TypeScript and Firebase for secure authentication, efficient image storage, and real-time updates.",
      githubLink: "https://github.com/yourusername/gallery-app",
      liveLink: "https://gallery-app-demo.com"
    },
    {
      title: "PrismCloudata",
      description: "A cloud-powered data platform enabling seamless analytics and scalable storage solutions.",
      githubLink: "https://github.com/yourusername/prismcloudata",
      liveLink: "https://prismcloudata.com"
    }
  ];

  return (
    <motion.section
      id="projects"
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
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700"
          >
            <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <span className="text-4xl">📁</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary hover:underline"
                >
                  Live Demo <FiExternalLink className="ml-1" />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary hover:underline"
                >
                  GitHub <FiGithub className="ml-1" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;