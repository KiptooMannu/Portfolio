import { motion } from "framer-motion";
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiTailwindcss,
  SiPython,
  SiPostgresql,
  SiGithub,
  SiFirebase,
  SiMongodb
} from "react-icons/si";
import { FaCode, FaServer, FaDatabase } from "react-icons/fa";
import profileImage from "../assets/Hack.jpg";

const About = () => {
  const skills = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "React", icon: <SiReact className="text-blue-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Python", icon: <SiPython className="text-blue-600" /> },
    // { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
   
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Git/GitHub", icon: <SiGithub className="text-gray-800" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "Backend", icon: <FaServer className="text-purple-500" /> },
    { name: "Database", icon: <FaDatabase className="text-blue-500" /> },
    { name: "Framer Motion", icon: <FaCode className="text-purple-400" /> },
  ];

  const stats = [
    { value: "4+", label: "Projects Completed" },
    { value: "1+", label: "Years Experience" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "∞", label: "Coffee Cups" },
  ];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-12 md:py-20 lg:py-24 flex flex-col justify-center bg-white"
    >
      {/* Header Section */}
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
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl mx-auto"
        >
          Crafting digital experiences with precision and passion
        </motion.p>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center px-4 sm:px-6 md:px-8 lg:px-10 max-w-6xl mx-auto">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-2/5 lg:w-1/3 px-4"
        >
          <div className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">Who Am I</div>
          <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-blue-500 to-purple-600 mb-4 sm:mb-6"></div>
          
          {/* Profile Image */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto mb-6 sm:mb-8 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 group-hover:opacity-30 transition-opacity duration-300 rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full border-4 border-blue-400/20">
              <img 
                src={profileImage} 
                alt="Profile Image" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; 
                  target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23dddddd' width='100' height='100'/%3E%3Ctext fill='%23666666' font-family='sans-serif' font-size='20' dy='.35em' text-anchor='middle' x='50' y='50'%3E👨‍💻%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
          </motion.div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-3 sm:p-4 rounded-lg text-center border border-gray-200 hover:border-blue-400 transition-colors shadow-sm"
              >
                <div className="text-xl sm:text-2xl font-bold text-blue-500">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-3/5 lg:w-2/3 px-4"
        >
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6 text-gray-600">
            I am a passionate full-stack developer with expertise in building modern, responsive, and scalable web applications. With professional experience across the stack, I specialize in creating seamless digital experiences that combine functionality with aesthetic appeal.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 text-gray-600">
            My technical journey has equipped me with comprehensive knowledge from crafting pixel-perfect UIs to implementing robust backend solutions and cloud infrastructure. I'm proficient in JavaScript/TypeScript ecosystems, Python, and cloud platforms like AWS and Azure, constantly exploring new technologies to enhance my skill set.
          </p>
          
          {/* Skills Section */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">My Skills</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 bg-white rounded-full border border-gray-200 hover:border-blue-400 transition-all shadow-sm text-sm sm:text-base"
                >
                  <span className="text-lg sm:text-xl">{skill.icon}</span>
                  <span className="text-gray-700">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Additional Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-4 sm:p-5 md:p-6 rounded-xl border border-gray-200 hover:border-blue-400 transition-colors shadow-sm"
            >
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-2 text-gray-800">
                <span className="text-blue-500">✦</span> Development Approach
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
                Component-driven architecture with emphasis on performance, accessibility, and clean code. I follow best practices in testing, documentation, and CI/CD pipelines.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-4 sm:p-5 md:p-6 rounded-xl border border-gray-200 hover:border-purple-400 transition-colors shadow-sm"
            >
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-2 text-gray-800">
                <span className="text-purple-500">✦</span> Continuous Learning
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
                Dedicated to staying current with industry trends through courses, conferences, and open-source contributions. I enjoy solving problems on platforms like LeetCode and Codewars.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;