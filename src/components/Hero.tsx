import { motion } from "framer-motion";
import { FiDownload, FiGithub, FiLinkedin, FiTwitter, FiMail, FiCode, FiServer, FiCloud, FiDatabase } from "react-icons/fi";
import { FaReact, FaNodeJs, FaAws, FaMicrosoft, FaDocker, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiGraphql } from "react-icons/si";
import { useState, useEffect } from "react";
import profileImage from "../assets/login.jpg";

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

  // Floating elements with larger circular paths
  const floatingElements = [
    {
      id: 1,
      size: "w-14 h-14",
      opacity: 0.9,
      duration: 20,
      delay: 0,
      element: <FaReact className="text-blue-500 w-full h-full" />,
      path: {
        x: [0, 60, 120, 60, 0, -60, -120, -60, 0],
        y: [120, 180, 120, 60, 0, 60, 120, 180, 120]
      }
    },
    {
      id: 2,
      size: "w-12 h-12",
      opacity: 0.9,
      duration: 22,
      delay: 3,
      element: <SiTypescript className="text-blue-600 w-full h-full" />,
      path: {
        x: [90, 150, 90, 30, -30, -90, -150, -90, -30, 30, 90],
        y: [60, 120, 180, 120, 60, 0, 60, 120, 180, 120, 60]
      }
    },
    {
      id: 3,
      size: "w-16 h-16",
      opacity: 0.9,
      duration: 24,
      delay: 1,
      element: <FaNodeJs className="text-green-500 w-full h-full" />,
      path: {
        x: [-90, -30, 30, 90, 150, 90, 30, -30, -90],
        y: [150, 90, 30, -30, 30, 90, 150, 90, 30]
      }
    },
    {
      id: 4,
      size: "w-14 h-14",
      opacity: 0.9,
      duration: 21,
      delay: 4,
      element: <FaDocker className="text-blue-400 w-full h-full" />,
      path: {
        x: [120, 60, 0, -60, -120, -60, 0, 60, 120],
        y: [45, -15, -75, -15, 45, 105, 165, 105, 45]
      }
    },
    {
      id: 5,
      size: "w-12 h-12",
      opacity: 0.9,
      duration: 26,
      delay: 2,
      element: <SiJavascript className="text-yellow-500 w-full h-full" />,
      path: {
        x: [-60, 0, 60, 120, 60, 0, -60, -120, -60],
        y: [120, 60, 0, 60, 120, 180, 120, 60, 0]
      }
    }
  ];

  // Responsive floating elements for mobile
  const floatingElementsMobile = floatingElements.map(el => ({
    ...el,
    size: "w-10 h-10",
    opacity: 0.7,
    path: {
      x: el.path.x.map(val => val * 0.6),
      y: el.path.y.map(val => val * 0.6 - 30)
    }
  }));

  // Graphic design elements
  const designElements = [
    {
      id: 'design-1',
      position: 'absolute top-10 left-10 w-32 h-32',
      mobilePosition: 'absolute top-5 left-5 w-20 h-20',
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
      mobilePosition: 'absolute bottom-10 right-10 w-24 h-24',
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
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 pt-16 sm:pt-20 md:pt-32 pb-0 w-full relative overflow-hidden bg-white"
    >
      {/* Graphic Design Elements */}
      {designElements.map((design) => (
        <motion.div
          key={design.id}
          className={`hidden sm:block ${design.position} md:${design.position} opacity-20 -z-10`}
          animate={design.animation}
        >
          {design.element}
        </motion.div>
      ))}

      {/* Floating Tech Icons - Desktop */}
      <div className="hidden sm:block absolute top-10 right-10 w-80 h-80 md:w-[28rem] md:h-[28rem]">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className={`absolute ${element.size} z-0`}
            style={{ opacity: element.opacity }}
            animate={{
              x: element.path.x,
              y: element.path.y,
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              ease: "linear",
              delay: element.delay
            }}
          >
            {element.element}
          </motion.div>
        ))}
      </div>

      {/* Floating Tech Icons - Mobile */}
      <div className="sm:hidden absolute top-0 right-0 w-48 h-48">
        {floatingElementsMobile.map((element) => (
          <motion.div
            key={element.id}
            className={`absolute ${element.size} z-0`}
            style={{ opacity: element.opacity }}
            animate={{
              x: element.path.x,
              y: element.path.y,
            }}
            transition={{
              duration: element.duration * 0.8,
              repeat: Infinity,
              ease: "linear",
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
        className="md:w-1/2 mb-8 sm:mb-10 md:mb-0 text-center md:text-left z-10 px-2 sm:px-0"
      >
        {/* Animated Heading */}
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 min-h-[3.5rem] sm:min-h-[4rem] md:min-h-[5rem] lg:min-h-[6rem] text-gray-800"
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
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
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
              className="p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl border border-gray-200 shadow-md sm:shadow-md flex flex-col items-center hover:border-blue-200 transition-all duration-300 group flex-1"
            >
              <motion.div 
                className="p-3 sm:p-4 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 mb-3 sm:mb-4 group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300"
                whileHover={{ rotate: 5 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-1 sm:mb-2">{item.title}</h3>
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
          className="flex items-center mx-auto md:mx-0 px-6 sm:px-8 py-2.5 sm:py-3.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg sm:rounded-xl font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300 mt-6 sm:mt-8 group text-sm sm:text-base"
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
      <motion.div className="md:w-1/2 flex justify-center mt-8 sm:mt-10 md:mt-6 z-10">
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
          {/* Gradient background */}
          <motion.div 
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 opacity-90 blur-xl absolute -z-10"
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
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-4 border-indigo-200/30 overflow-hidden shadow-2xl relative group">
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
                className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white p-1 sm:p-2 rounded-full shadow-md"
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
                <FaReact className="text-blue-500 text-lg sm:text-xl" />
              </motion.div>
              
              <motion.div
                className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-white p-1 sm:p-2 rounded-full shadow-md"
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
                <FaNodeJs className="text-green-500 text-lg sm:text-xl" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Social Links - Vertical on right (Desktop) */}
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

      {/* Social Links - Horizontal on bottom (Mobile) */}
      <motion.div 
        className="md:hidden flex fixed bottom-6 left-1/2 transform -translate-x-1/2 space-x-8 z-10 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md"
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