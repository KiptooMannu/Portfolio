import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiFirebase, SiDocker } from "react-icons/si";
import healthJferImage from "../assets/Bus.jpg"; // Match your hero image import style
import galleryAppImage from "../assets/bus station.jpg";
import prismCloudImage from "../assets/Hero.png";

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

const Projects = () => {
  const projects: Project[] = [
    {
      title: "HealthJfer",
      description: "Empowering women with accessible health resources and personalized wellness solutions through an intuitive platform.",
      githubLink: "https://github.com/yourusername/healthjfer",
      liveLink: "https://healthjfer.com",
      techStack: ["React", "TypeScript", "Node.js", "Firebase"],
      features: ["User authentication", "Health tracking", "Personalized recommendations", "Community forum"],
      category: "Health Tech",
      image: healthJferImage
    },
    {
      title: "Gallery App",
      description: "Modern and responsive gallery app with secure authentication, efficient image storage, and real-time updates.",
      githubLink: "https://github.com/yourusername/gallery-app",
      liveLink: "https://gallery-app-demo.com",
      techStack: ["Next.js", "Tailwind CSS", "Firebase", "Docker"],
      features: ["Image upload", "Album organization", "Sharing functionality", "Responsive design"],
      category: "Media",
      image: galleryAppImage
    },
    {
      title: "PrismCloudata",
      description: "A cloud-powered data platform enabling seamless analytics and scalable storage solutions for businesses.",
      githubLink: "https://github.com/yourusername/prismcloudata",
      liveLink: "https://prismcloudata.com",
      techStack: ["AWS", "Node.js", "React", "TypeScript"],
      features: ["Data visualization", "Real-time analytics", "Secure API", "Scalable infrastructure"],
      category: "Cloud Computing",
      image: prismCloudImage
    }
  ];

  const getTechIcon = (tech: string) => {
    switch(tech.toLowerCase()) {
      case 'react': return <FaReact className="text-blue-500" />;
      case 'typescript': return <SiTypescript className="text-blue-600" />;
      case 'next.js': return <SiNextdotjs className="text-black" />;
      case 'tailwind css': return <SiTailwindcss className="text-cyan-500" />;
      case 'node.js': return <FaNodeJs className="text-green-500" />;
      case 'firebase': return <SiFirebase className="text-yellow-500" />;
      case 'docker': return <SiDocker className="text-blue-400" />;
      case 'aws': return <FaAws className="text-orange-500" />;
      default: return <FaReact className="text-blue-500" />;
    }
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-12 md:py-20 lg:py-24 flex flex-col justify-center bg-white"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4"
      >
        <motion.h2
          whileInView={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl mx-auto"
        >
          My recent work and contributions
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8 lg:px-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all"
          >
            {/* Project Image - Matching hero style */}
            <div className="h-48 relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23dddddd' width='100' height='100'/%3E%3Ctext fill='%23666666' font-family='sans-serif' font-size='20' dy='.35em' text-anchor='middle' x='50' y='50'%3E📁%3C/text%3E%3C/svg%3E";
                }}
              />
              <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md text-xs font-medium text-gray-700 shadow-sm">
                {project.category}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                <div className="flex space-x-2">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="text-white bg-black/30 p-1 rounded-full backdrop-blur-sm"
                      title={tech}
                    >
                      {getTechIcon(tech)}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{project.title}</h3>
                <div className="flex space-x-2">
                  {project.techStack.slice(0, 2).map((tech, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="text-lg sm:text-xl"
                      title={tech}
                    >
                      {getTechIcon(tech)}
                    </motion.div>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 mb-4 text-sm sm:text-base">{project.description}</p>

              <div className="mb-5">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 mb-4">
                {project.techStack.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-2.5 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4 pt-2 border-t border-gray-100">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base transition-colors"
                >
                  Live Demo <FiExternalLink className="ml-1.5" />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-gray-900 font-medium text-sm sm:text-base transition-colors"
                >
                  GitHub <FiGithub className="ml-1.5" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="flex justify-center mt-12 px-4"
      >
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-md transition-all"
        >
          View All Projects
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Projects;