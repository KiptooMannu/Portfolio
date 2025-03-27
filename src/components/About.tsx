import { motion } from "framer-motion";

const About = () => {
  const skills: string[] = ["JavaScript", "TypeScript", "React", "Next.js", "AWS", "Azure", "Node.js", "Docker", "Tailwind CSS", "Framer Motion"];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="min-h-screen py-20 flex flex-col justify-center"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <motion.h2
          whileInView={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          ABOUT ME
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xl text-gray-300 max-w-2xl mx-auto"
        >
          I wear shades 'cause you're just too bright
        </motion.p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/3"
        >
          <div className="text-2xl font-bold mb-4">Who Am I</div>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mb-6"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-2/3"
        >
          <p className="text-lg leading-relaxed mb-6">
            I am a web developer with a focus on building user-friendly interfaces using ReactJS. With over a year of experience in the industry, I have honed my skills in front-end technologies and am always looking to stay up to date on the latest developments.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            I also have experience working with cloud computing platforms, specifically Azure. Whether you are looking to build a new website or improve upon an existing one, I am dedicated to delivering high-quality, reliable solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, backgroundColor: "#3a86ff" }}
                className="px-4 py-2 bg-gray-800\\\ rounded-full text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;