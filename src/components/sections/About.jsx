import { motion } from "framer-motion";

const skills = [
  { name: "React", desc: "Frontend" },
  { name: "Node.js", desc: "Backend" },
  { name: "Python", desc: "Scripting" },
  { name: "CSS/Tailwind", desc: "Styling" },
  { name: "MongoDB", desc: "Database" },
  { name: "TypeScript", desc: "Type Safety" },
  { name: "Firebase", desc: "Cloud" },
  { name: "Git", desc: "Version Control" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export const About = () => {
  return (
    <section id="about" className="about">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Background & Skills
      </motion.p>

      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>
            I'm{" "}
            <span className="highlight">Swornim Chakubaji Shrestha</span>, a
            full-stack developer focused on building clean, efficient, and
            user-friendly web applications.
          </p>
          <p>
            With experience in both{" "}
            <span className="highlight">frontend</span> and{" "}
            <span className="highlight">backend</span> development, I enjoy
            working across the entire stack — from designing intuitive
            interfaces to architecting robust server-side solutions.
          </p>
          <p>
            I'm always learning new technologies and looking for opportunities
            to grow as a developer. I believe in writing{" "}
            <span className="highlight">clean code</span> and building software
            that solves real problems.
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <h4>{skill.name}</h4>
              <p>{skill.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
