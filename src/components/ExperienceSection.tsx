import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const experiences = [
  {
    company: "TechNova Solutions",
    role: "Full Stack Developer",
    period: "2023 – Present",
    points: [
      "Built scalable web applications serving 10K+ users using React and Node.js",
      "Developed RESTful APIs and integrated complex frontend systems with backend services",
      "Led code reviews and implemented CI/CD pipelines for rapid deployment",
    ],
  },
  {
    company: "DataMind AI",
    role: "AI Trainer",
    period: "2022 – 2023",
    points: [
      "Trained and fine-tuned machine learning models for NLP and classification tasks",
      "Managed large-scale data labeling pipelines and quality assurance workflows",
      "Optimized model performance through feature engineering and hyperparameter tuning",
    ],
  },
  {
    company: "CloudCore Systems",
    role: "Backend Developer",
    period: "2021 – 2022",
    points: [
      "Designed and maintained RESTful APIs handling high-traffic workloads",
      "Architected database schemas in PostgreSQL and optimized query performance",
      "Improved system scalability and reduced response times by 40%",
    ],
  },
  {
    company: "NexaSoft Technologies",
    role: "Junior Developer",
    period: "2020 – 2021",
    points: [
      "Assisted in frontend and backend development using React and Express.js",
      "Collaborated in agile teams delivering features on tight schedules",
      "Wrote unit tests and participated in sprint planning sessions",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Work <span className="glow-text">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Dot */}
                <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                <div className="glass-card p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-sm text-primary">
                        <Building2 size={14} />
                        {exp.company}
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground mt-1 sm:mt-0 font-medium">{exp.period}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
