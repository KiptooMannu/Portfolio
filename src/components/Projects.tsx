import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiDocker,
  SiPostgresql
} from "react-icons/si";

/* 🔹 Local project screenshots */
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

const Projects = () => {
  const projects: Project[] = [
    {
      title: "AutoSeat PSV",
      description:
        "A modern seat booking system for public service vehicles, streamlining reservations and fleet management for transport operators.",
      githubLink: "https://github.com/kiptoomannu/Auto-seat-psv-Client",
      liveLink: "https://kiptoomannu.github.io/Auto-seat-psv-Client/",
      techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      features: [
        "Real-time seat booking",
        "Admin dashboard",
        "Payment integration",
        "Booking analytics"
      ],
      category: "Transport Tech",
      image: autoSeatImage
    },

    {
      title: "CEMA Health Management System",
      description:
        "A modern health management platform for managing patient records, health programs, and enrollments.",
      githubLink: "https://github.com/KiptooMannu/CEMA-FINAL",
      liveLink: "https://cema-final.onrender.com",
      techStack: ["React", "Node.js", "PostgreSQL", "TypeScript"],
      features: [
        "Client registration & demographics",
        "Health program management",
        "Patient enrollment tracking",
        "Secure data handling"
      ],
      category: "Health Tech",
      image: cemaImage
    },

    {
      title: "Kapsomoita Church Website",
      description:
        "A responsive church website providing information, announcements, and church programs.",
      githubLink: "https://github.com/KiptooMannu/Kapsomoita-Church-Website",
      liveLink: "https://kapsomoita-church-website.vercel.app/",
      techStack: ["Node.js", "Tailwind CSS", "TypeScript"],
      features: [
        "Responsive design",
        "Service & event listings",
        "Modern UI/UX",
        "Fast deployment"
      ],
      category: "Web Development",
      image: churchImage
    },

    {
      title: "Car Vehicle Rental System",
      description:
        "A car rental web application that allows customers to browse available vehicles, book based on preferences, and view their reservations.",
      githubLink: "https://github.com/KiptooMannu/frontend-vehicle",
      liveLink: "https://frontend-vehicle-h287.vercel.app/",
      techStack: ["React", "TypeScript", "Tailwind CSS"],
      features: [
        "Vehicle browsing & filtering",
        "Car booking based on preferences",
        "Booking history & tracking",
        "Responsive user interface"
      ],
      category: "Rental Platform",
      image: vehicleRentalImage
    }
  ];

  const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case "react":
        return <FaReact className="text-blue-500" />;
      case "typescript":
        return <SiTypescript className="text-blue-600" />;
      case "next.js":
        return <SiNextdotjs className="text-black" />;
      case "tailwind css":
        return <SiTailwindcss className="text-cyan-500" />;
      case "node.js":
        return <FaNodeJs className="text-green-500" />;
      case "postgresql":
        return <SiPostgresql className="text-blue-700" />;
      case "firebase":
        return <SiFirebase className="text-yellow-500" />;
      case "docker":
        return <SiDocker className="text-blue-400" />;
      case "aws":
        return <FaAws className="text-orange-500" />;
      default:
        return <FaReact />;
    }
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-20 bg-white"
    >
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A selection of projects showcasing my skills and experience
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-800">
                  {project.title}
                </h3>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              <p className="text-gray-600 mb-4 text-sm">
                {project.description}
              </p>

              <ul className="mb-4 space-y-1">
                {project.features.map((feature, i) => (
                  <li key={i} className="text-sm text-gray-600 flex">
                    <span className="mr-2 text-blue-500">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 px-2 py-1 text-xs bg-gray-100 rounded-full"
                  >
                    {getTechIcon(tech)}
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex justify-between border-t pt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center text-sm"
                >
                  Live <FiExternalLink className="ml-1" />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:underline flex items-center text-sm"
                >
                  GitHub <FiGithub className="ml-1" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All */}
      <div className="flex justify-center mt-16">
        <a
          href="https://github.com/KiptooMannu"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition"
        >
          View All Projects
        </a>
      </div>
    </motion.section>
  );
};

export default Projects;
