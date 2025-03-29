// src/components/Footer.tsx
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import { ReactElement } from "react";

interface SocialLink {
  icon: ReactElement;
  name: string;
  link: string;
}

const Footer = () => {
  const socialLinks: SocialLink[] = [
    { 
      icon: <FiGithub />, 
      name: "GitHub", 
      link: "https://github.com/KiptooMannu" 
    },
    { 
      icon: <FiLinkedin />, 
      name: "LinkedIn", 
      link: "https://linkedin.com/in/yourusername" 
    },
    { 
      icon: <FiTwitter />, 
      name: "Twitter", 
      link: "https://x.com/EmmanuelKi82897?s=09" 
    },
    { 
      icon: <FiMail />, 
      name: "Email", 
      link: "mailto:Kiptooemmanuel763@gmail.com" 
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gray-900 py-12"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-6"
        >
          Emmanuel Kiptoo
        </motion.div>
        <p className="text-gray-400 mb-6">
          Software Developer & Cloud Enthusiast
        </p>
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: "#3a86ff" }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl"
              aria-label={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
        <p className="text-gray-400">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;