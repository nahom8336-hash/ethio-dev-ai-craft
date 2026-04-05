import { motion } from "framer-motion";
import { Monitor, Server, Database, Brain, Wrench } from "lucide-react";

const categories = [
  {
    icon: Monitor,
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Express.js", "Django", "REST APIs"],
  },
  {
    icon: Database,
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    skills: ["Python", "TensorFlow", "PyTorch", "Data Preprocessing", "Model Training", "NLP Basics"],
  },
  {
    icon: Wrench,
    title: "Tools & Others",
    skills: ["Git & GitHub", "Docker", "Linux", "Agile Methodologies"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-surface/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Technical <span className="glow-text">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 hover:glow-border transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <cat.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-heading font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
