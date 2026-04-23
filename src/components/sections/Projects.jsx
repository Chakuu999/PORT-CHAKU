import { motion } from "framer-motion";

import vehicleImg from "../../assets/project_vehicle.png";
import gymImg from "../../assets/project_gym.png";
import weatherImg from "../../assets/project_weather.png";
import residentEvilImg from "../../assets/project_resident_evil.png";

const projects = [
  {
    title: "Vehicle Rental System",
    description:
      "A complete vehicle rental management platform with booking, fleet tracking, user authentication, and payment processing.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: vehicleImg,
  },
  {
    title: "Gym Management System",
    description:
      "Full-featured gym management solution with member tracking, workout plans, class scheduling, and subscription management.",
    tech: ["React", "Firebase", "Tailwind", "Chart.js"],
    image: gymImg,
  },
  {
    title: "Weather App",
    description:
      "Real-time weather application with location-based forecasts, interactive maps, and a clean data visualization dashboard.",
    tech: ["React", "OpenWeather API", "CSS", "Axios"],
    image: weatherImg,
  },
  {
    title: "Resident Evil Replica Game",
    description:
      "A horror survival game replica built with atmospheric environments, enemy AI, inventory system, and immersive gameplay mechanics.",
    tech: ["Unity", "C#", "Blender", "FMOD"],
    image: residentEvilImg,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Projects = () => {
  return (
    <section id="projects" className="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Featured Projects
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Recent work I'm proud of
      </motion.p>

      <motion.div
        className="project-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="project-card"
            variants={cardVariants}
            whileHover={{ y: -6 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
