import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Chatbot System",
    description:
      "An intelligent conversational AI chatbot built with Python, leveraging NLP techniques for natural language understanding and context-aware responses.",
    tech: ["Python", "TensorFlow", "Flask", "React"],
    demo: "#",
    github: "#",
  },
  {
    title: "E-commerce Web Application",
    description:
      "A full-featured e-commerce platform with product catalog, cart management, payment integration, and an admin dashboard for inventory control.",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    demo: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates, drag-and-drop boards, team assignments, and progress tracking dashboards.",
    tech: ["React", "Express.js", "PostgreSQL", "Socket.io"],
    demo: "#",
    github: "#",
  },
  {
    title: "Data Analysis Dashboard",
    description:
      "An interactive analytics dashboard for visualizing large datasets, featuring dynamic charts, filtering capabilities, and data export options.",
    tech: ["Python", "Django", "D3.js", "PostgreSQL"],
    demo: "#",
    github: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-surface/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Featured <span className="glow-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 group hover:glow-border transition-shadow duration-300 flex flex-col"
            >
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={project.demo}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={14} />
                  Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
