import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiMapPin, FiPhone, FiExternalLink } from "react-icons/fi";
import { ReactElement, useState } from "react";
import emailjs from '@emailjs/browser';

interface SocialLink {
  icon: ReactElement;
  name: string;
  link: string;
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
      link: "mailto:kiptooemmanuel763@gmail.com" 
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    
    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS environment variables are not properly configured');
      setSubmitStatus('error');
      return;
    }
  
    setIsSubmitting(true);
    setSubmitStatus('idle');
  
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: 'kiptooemmanuel763@gmail.com', // Your email as recipient
          from_name: formData.name,
          from_email: formData.email, // User's email (will be shown in message)
          subject: formData.subject,
          message: `From: ${formData.name} <${formData.email}>\n\nMessage:\n${formData.message}`,
          reply_to: formData.email // Ensures replies go to user
        },
        publicKey
      );
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="min-h-screen py-12 md:py-20 lg:py-24 flex flex-col justify-center scroll-mt-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Contact Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl mx-auto"
          >
            Let's build something amazing together
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6 md:px-8 lg:px-10">
          {/* Contact Info Card - Matching project card style */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="lg:w-1/3 bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all p-6 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800">Get In Touch</h3>
            
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-500">
                  <FiMapPin className="text-xl" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-medium text-gray-700">Location</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Nairobi, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-500">
                  <FiMail className="text-xl" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-medium text-gray-700">Email</h4>
                  <a 
                    href="mailto:kiptooemmanuel763@gmail.com" 
                    className="text-blue-600 hover:text-blue-700 text-sm sm:text-base transition-colors"
                  >
                    kiptooemmanuel763@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-500">
                  <FiPhone className="text-xl" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-medium text-gray-700">Phone</h4>
                  <a 
                    href="tel:+254113897004" 
                    className="text-blue-600 hover:text-blue-700 text-sm sm:text-base transition-colors"
                  >
                    (+254)113897004
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="text-base sm:text-lg font-medium text-gray-700 mb-4">Connect With Me</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1.5 px-3 py-2 bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 rounded-lg text-sm sm:text-base transition-all"
                    aria-label={social.name}
                  >
                    {social.icon}
                    <span className="hidden sm:inline">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form Card - Matching project card style */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:w-2/3 bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all p-6 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm sm:text-base"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm sm:text-base"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm sm:text-base"
                ></textarea>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="w-full sm:w-auto">
                  {submitStatus === 'success' && (
                    <p className="text-green-600 font-medium text-sm sm:text-base">Message sent successfully!</p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="text-red-600 font-medium text-sm sm:text-base">Failed to send message. Please try again.</p>
                  )}
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message <FiExternalLink className="text-lg" />
                    </span>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;