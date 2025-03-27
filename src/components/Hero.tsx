import { motion } from "framer-motion";
import { FiDownload, FiGithub, FiLinkedin, FiTwitter, FiMail, FiCode, FiServer, FiCloud, FiDatabase } from "react-icons/fi";
import { FaReact, FaNodeJs, FaAws, FaMicrosoft, FaDocker, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiGraphql } from "react-icons/si";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [runningText, setRunningText] = useState("");
  const fullText = "Hello 🚀, I'm Emmanuel Kiptoo";

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setRunningText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 100);

    return () => clearInterval(typingEffect);
  }, []);

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.5 } 
    },
  };

  const hoverVariants = {
    hover: { 
      scale: 1.05, 
      transition: { duration: 0.3 } 
    },
    tap: { 
      scale: 0.95 
    },
  };

  // Floating elements positioned at top right with constrained movement
  const floatingElements = [
    {
      id: 1,
      initialX: 0,
      initialY: 0,
      animateX: 40,
      animateY: 40,
      size: "w-12 h-12",
      opacity: 0.9,
      duration: 15,
      delay: 0,
      element: <FaReact className="text-blue-500 w-full h-full" />
    },
    {
      id: 2,
      initialX: 20,
      initialY: 20,
      animateX: -20,
      animateY: 60,
      size: "w-10 h-10",
      opacity: 0.9,
      duration: 18,
      delay: 2,
      element: <SiTypescript className="text-blue-600 w-full h-full" />
    },
    {
      id: 3,
      initialX: -20,
      initialY: 40,
      animateX: 20,
      animateY: 0,
      size: "w-14 h-14",
      opacity: 0.9,
      duration: 20,
      delay: 1,
      element: <FaNodeJs className="text-green-500 w-full h-full" />
    },
    {
      id: 4,
      initialX: 30,
      initialY: 10,
      animateX: -30,
      animateY: 50,
      size: "w-12 h-12",
      opacity: 0.9,
      duration: 16,
      delay: 3,
      element: <FaDocker className="text-blue-400 w-full h-full" />
    },
    {
      id: 5,
      initialX: -10,
      initialY: 30,
      animateX: 10,
      animateY: 20,
      size: "w-10 h-10",
      opacity: 0.9,
      duration: 22,
      delay: 4,
      element: <SiJavascript className="text-yellow-500 w-full h-full" />
    }
  ];

  // Graphic design elements (abstract shapes)
  const designElements = [
    {
      id: 'design-1',
      position: 'absolute top-10 left-10 w-32 h-32',
      animation: {
        rotate: [0, 360],
        transition: { duration: 20, repeat: Infinity, ease: "linear" }
      },
      element: (
        <svg viewBox="0 0 100 100" className="text-blue-100">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      )
    },
    {
      id: 'design-2',
      position: 'absolute bottom-20 right-20 w-40 h-40',
      animation: {
        scale: [1, 1.1, 1],
        transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
      },
      element: (
        <svg viewBox="0 0 100 100" className="text-purple-100">
          <polygon points="50,5 95,95 5,95" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      )
    },
    {
      id: 'design-3',
      position: 'absolute top-1/3 left-1/4 w-24 h-24',
      animation: {
        rotate: [0, -360],
        transition: { duration: 25, repeat: Infinity, ease: "linear" }
      },
      element: (
        <svg viewBox="0 0 100 100" className="text-indigo-100">
          <rect x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      )
    }
  ];

  const webDevSymbols = [
    { 
      icon: <FiCode className="text-3xl" />, 
      title: "Frontend", 
      desc: "React, Next.js, Tailwind",
      techIcons: [
        <FaReact className="text-blue-500" />,
        <SiNextdotjs className="text-black" />,
        <SiTailwindcss className="text-cyan-500" />,
        <SiJavascript className="text-yellow-500" />
      ]
    },
    { 
      icon: <FiServer className="text-3xl" />, 
      title: "Backend", 
      desc: "Node.js, APIs, Databases",
      techIcons: [
        <FaNodeJs className="text-green-500" />,
        <FiDatabase className="text-yellow-500" />,
        <SiGraphql className="text-pink-500" />
      ]
    },
    { 
      icon: <FiCloud className="text-3xl" />, 
      title: "Cloud & DevOps", 
      desc: "AWS, Azure, Docker, Python",
      techIcons: [
        <FaAws className="text-orange-500" />,
        <FaMicrosoft className="text-blue-600" />,
        <FaDocker className="text-blue-400" />,
        <FaPython className="text-blue-700" />
      ]
    }
  ];

  const socialLinks = [
    { icon: <FiGithub />, url: "#", color: "hover:text-gray-800" },
    { icon: <FiLinkedin />, url: "#", color: "hover:text-blue-700" },
    { icon: <FiTwitter />, url: "#", color: "hover:text-blue-400" },
    { icon: <FiMail />, url: "#", color: "hover:text-red-500" }
  ];

  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-20 md:py-32 w-full relative overflow-hidden bg-white"
      style={{ height: "100vh" }}
    >
      {/* Graphic Design Elements */}
      {designElements.map((design) => (
        <motion.div
          key={design.id}
          className={`${design.position} opacity-20 -z-10`}
          animate={design.animation}
        >
          {design.element}
        </motion.div>
      ))}

      {/* Floating Tech Icons Container (Top Right) */}
      <div className="absolute top-10 right-10 w-64 h-64">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className={`absolute ${element.size} z-0`}
            style={{ opacity: element.opacity }}
            initial={{ 
              x: element.initialX,
              y: element.initialY
            }}
            animate={{
              x: element.animateX,
              y: element.animateY,
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: element.delay
            }}
          >
            {element.element}
          </motion.div>
        ))}
      </div>

      {/* Text Content */}
      <motion.div 
        variants={itemVariants} 
        className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left z-10"
      >
        {/* Animated Heading - Continuous animation */}
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4 min-h-[4rem] md:min-h-[6rem] text-gray-800"
          animate={{
            x: [-5, 5, -5],
            transition: {
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
        >
          {runningText}
          <motion.span
            animate={{ 
              rotate: [0, 20, -20, 0],
              y: [0, -10, 10, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4,
              ease: "easeInOut"
            }}
            className="inline-block ml-2"
          >
            {runningText.includes("🚀") ? "" : "🚀"}
          </motion.span>
        </motion.h1>

        {/* Subheading with professional motion */}
        <motion.h2 
          className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700"
          animate={{
            x: [0, 10, -10, 0],
            transition: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Full Stack Developer & Cloud Specialist
          </span>
        </motion.h2>

        {/* Description with subtle animation */}
        <motion.p 
          className="text-lg text-gray-600 mb-8 max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            y: [0, -3, 0],
            transition: {
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            } 
          }}
          transition={{ delay: 0.5 }}
        >
          I build scalable web applications with modern technologies and cloud solutions. 
          Passionate about creating efficient, user-friendly experiences.
        </motion.p>

        {/* Web Dev Symbolism Cards */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {webDevSymbols.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="p-6 bg-white rounded-xl border border-gray-200 shadow-md flex flex-col items-center hover:border-blue-200 transition-all duration-300 group flex-1"
            >
              <motion.div 
                className="p-4 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 mb-4 group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300"
                whileHover={{ rotate: 5 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 text-center mb-3">{item.desc}</p>
              <div className="flex gap-2 mt-2">
                {item.techIcons.map((techIcon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ 
                      scale: 1.2,
                      y: -5
                    }}
                    className="text-xl"
                  >
                    {techIcon}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download Button */}
        <motion.button
          variants={hoverVariants}
          whileHover="hover"
          whileTap="tap"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="flex items-center mx-auto md:mx-0 px-8 py-3.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300 mt-8 group"
        >
          <span>Download Resume</span>
          <motion.span
            animate={{ 
              x: isHovered ? [0, 5, -5, 0] : 0,
              transition: { 
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
            className="ml-2"
          >
            🚀
          </motion.span>
          <motion.span 
            className="ml-2 group-hover:translate-y-0.5 transition-transform duration-300"
          >
            <FiDownload />
          </motion.span>
        </motion.button>
      </motion.div>

      {/* Avatar/Image Section */}
      <motion.div className="md:w-1/2 flex justify-center mt-10 md:mt-0 z-10">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 2, -2, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          {/* Gradient Background */}
          <motion.div 
            className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 blur-xl absolute -z-10"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.2, 0.25, 0.2]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Avatar Container */}
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-blue-400/30 overflow-hidden shadow-2xl relative group">
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
              {/* Fallback if no image */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.05, 1],
                  transition: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <span className="text-6xl">👨‍💻</span>
              </motion.div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              
              {/* Tech badge floating around */}
              <motion.div
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <FaReact className="text-blue-500 text-xl" />
              </motion.div>
              
              <motion.div
                className="absolute bottom-4 left-4 bg-white p-2 rounded-full shadow-md"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -10, 10, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <FaNodeJs className="text-green-500 text-xl" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Social Links - Vertical on right */}
      <motion.div 
        className="hidden md:flex flex-col fixed right-6 top-1/2 transform -translate-y-1/2 space-y-6 z-10"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            className={`text-gray-600 transition-colors duration-300 ${link.color}`}
            whileHover={{ 
              scale: 1.2,
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-2xl">{link.icon}</span>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Hero;