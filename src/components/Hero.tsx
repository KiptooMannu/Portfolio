import { motion } from "framer-motion";
import { FiDownload, FiGithub, FiLinkedin, FiTwitter, FiMail, FiCode, FiServer, FiCloud, FiDatabase } from "react-icons/fi";
import { FaReact, FaNodeJs, FaAws, FaMicrosoft, FaDocker, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiGraphql } from "react-icons/si";
import { useState, useEffect } from "react";
import profileImage from "../assets/bus station.jpg";

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

  // Floating elements with right-side positioning
  const floatingElements = [
    {
      id: 1,
      initialX: 0,
      initialY: 0,
      animateX: 30,
      animateY: 30,
      size: "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12",
      opacity: 0.8,
      duration: 20,
      delay: 0,
      element: <FaReact className="text-blue-500 w-full h-full" />
    },
    {
      id: 2,
      initialX: 20,
      initialY: 15,
      animateX: -20,
      animateY: 35,
      size: "w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10",
      opacity: 0.8,
      duration: 22,
      delay: 3,
      element: <SiTypescript className="text-blue-600 w-full h-full" />
    },
    {
      id: 3,
      initialX: -20,
      initialY: 35,
      animateX: 20,
      animateY: 5,
      size: "w-9 h-9 sm:w-11 sm:h-11 md:w-13 md:h-13",
      opacity: 0.8,
      duration: 24,
      delay: 1,
      element: <FaNodeJs className="text-green-500 w-full h-full" />
    },
    {
      id: 4,
      initialX: 25,
      initialY: 10,
      animateX: -25,
      animateY: 30,
      size: "w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11",
      opacity: 0.8,
      duration: 21,
      delay: 4,
      element: <FaDocker className="text-blue-400 w-full h-full" />
    },
    {
      id: 5,
      initialX: -15,
      initialY: 25,
      animateX: 15,
      animateY: 20,
      size: "w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9",
      opacity: 0.8,
      duration: 26,
      delay: 2,
      element: <SiJavascript className="text-yellow-500 w-full h-full" />
    }
  ];

  // Graphic design elements
  const designElements = [
    {
      id: 'design-1',
      position: 'absolute top-4 left-4 sm:top-6 sm:left-6 md:top-10 md:left-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24',
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
      position: 'absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-10 md:right-10 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28',
      animation: {
        scale: [1, 1.1, 1],
        transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
      },
      element: (
        <svg viewBox="0 0 100 100" className="text-purple-100">
          <polygon points="50,5 95,95 5,95" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      )
    }
  ];

  const webDevSymbols = [
    { 
      icon: <FiCode className="text-xl sm:text-2xl md:text-3xl" />, 
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
      icon: <FiServer className="text-xl sm:text-2xl md:text-3xl" />, 
      title: "Backend", 
      desc: "Node.js, APIs, Databases",
      techIcons: [
        <FaNodeJs className="text-green-500" />,
        <FiDatabase className="text-yellow-500" />,
        <SiGraphql className="text-pink-500" />
      ]
    },
    { 
      icon: <FiCloud className="text-xl sm:text-2xl md:text-3xl" />, 
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
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 py-16 sm:py-20 md:py-32 w-full relative overflow-hidden bg-white"
      style={{ minHeight: "100vh" }}
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

      {/* Floating Tech Icons - Right side adjacent to heading */}
      <div className="absolute right-0 top-1/3 w-1/4 h-1/2 pointer-events-none z-0">
        <div className="relative w-full h-full">
          {floatingElements.map((element) => (
            <motion.div
              key={element.id}
              className={`absolute ${element.size}`}
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
      </div>

      {/* Text Content */}
      <motion.div 
        variants={itemVariants} 
        className="md:w-1/2 mb-8 sm:mb-10 md:mb-0 text-center md:text-left z-10 px-2 sm:px-4"
      >
        {/* Animated Heading */}
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 min-h-[3rem] sm:min-h-[4rem] md:min-h-[6rem] text-gray-800 relative"
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

        {/* Subheading */}
        <motion.h2 
          className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-gray-700"
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

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-md sm:max-w-lg mx-auto md:mx-0">
          I build scalable web applications with modern technologies and cloud solutions. 
          Passionate about creating efficient, user-friendly experiences.
        </p>

        {/* Web Dev Symbolism Cards */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 mx-auto md:mx-0 max-w-sm sm:max-w-none">
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
              className="p-4 sm:p-5 md:p-6 bg-white rounded-xl border border-gray-200 shadow-md flex flex-col items-center hover:border-blue-200 transition-all duration-300 group flex-1"
            >
              <motion.div 
                className="p-3 sm:p-4 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 mb-3 sm:mb-4 group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300"
                whileHover={{ rotate: 5 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="font-bold text-gray-800 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500 text-center mb-2 sm:mb-3">{item.desc}</p>
              <div className="flex gap-1 sm:gap-2 mt-1 sm:mt-2">
                {item.techIcons.map((techIcon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ 
                      scale: 1.2,
                      y: -5
                    }}
                    className="text-lg sm:text-xl"
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
          className="flex items-center mx-auto md:mx-0 px-6 py-2.5 sm:px-7 sm:py-3 md:px-8 md:py-3.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg sm:rounded-xl font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300 mt-6 sm:mt-8 group text-sm sm:text-base"
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
      <motion.div className="md:w-1/2 flex justify-center mt-8 sm:mt-10 md:mt-0 z-10 px-2 sm:px-4">
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 2, -2, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          {/* Gradient background */}
          <motion.div 
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 opacity-90 blur-xl absolute -z-10"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.9, 0.95, 0.9]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Avatar Container */}
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full border-4 border-indigo-200/30 overflow-hidden shadow-2xl relative group">
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
              {/* Image implementation */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full">
                <img 
                  src={profileImage} 
                  alt="Emmanuel Kiptoo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; 
                    target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23dddddd' width='100' height='100'/%3E%3Ctext fill='%23666666' font-family='sans-serif' font-size='20' dy='.35em' text-anchor='middle' x='50' y='50'%3E👨‍💻%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-indigo-200 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              
              {/* Tech badge floating around */}
              <motion.div
                className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 bg-white p-1 sm:p-1.5 md:p-2 rounded-full shadow-md"
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 8, -8, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <FaReact className="text-blue-500 text-base sm:text-lg md:text-xl" />
              </motion.div>
              
              <motion.div
                className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4 bg-white p-1 sm:p-1.5 md:p-2 rounded-full shadow-md"
                animate={{
                  y: [0, 8, 0],
                  rotate: [0, -8, 8, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <FaNodeJs className="text-green-500 text-base sm:text-lg md:text-xl" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Social Links - Vertical on right (desktop) / Horizontal bottom (mobile) */}
      <motion.div 
        className="hidden md:flex flex-col fixed right-4 sm:right-6 top-1/2 transform -translate-y-1/2 space-y-4 sm:space-y-6 z-10"
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
            <span className="text-xl sm:text-2xl">{link.icon}</span>
          </motion.a>
        ))}
      </motion.div>

      {/* Mobile Social Links */}
      <motion.div 
        className="md:hidden flex fixed bottom-4 left-1/2 transform -translate-x-1/2 space-x-6 z-10 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
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
            <span className="text-xl">{link.icon}</span>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Hero;