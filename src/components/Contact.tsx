import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import { ReactElement } from "react";

interface SocialLink {
  icon: ReactElement;
  name: string;
  link: string;
}

const Contact = () => {
  const socialLinks: SocialLink[] = [
    { 
      icon: <FiGithub />, 
      name: "GitHub", 
      link: "https://github.com/yourusername" 
    },
    { 
      icon: <FiLinkedin />, 
      name: "LinkedIn", 
      link: "https://linkedin.com/in/yourusername" 
    },
    { 
      icon: <FiTwitter />, 
      name: "Twitter", 
      link: "https://twitter.com/yourusername" 
    },
    { 
      icon: <FiMail />, 
      name: "Email", 
      link: "mailto:gideontargetch80@gmail.com" 
    },
  ];

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="min-h-screen py-20 flex flex-col justify-center"
    >
      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>
      <motion.p
        className="text-xl text-center mb-16 text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.p>

      <div className="flex flex-col md:flex-row gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <h3 className="text-2xl font-bold mb-6">Reach Out!</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Location</h4>
              <p className="text-gray-300">Kimiyaga, Kenya</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Email</h4>
              <a href="mailto:gideontargetch80@gmail.com" className="text-primary hover:underline">
                gideontargetch80@gmail.com
              </a>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Phone</h4>
              <a href="tel:+254742252910" className="text-gray-300 hover:text-primary">
                (+254) 742252910
              </a>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
            <div className="flex space-x-4">
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
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block mb-2">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-medium w-full md:w-auto"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;