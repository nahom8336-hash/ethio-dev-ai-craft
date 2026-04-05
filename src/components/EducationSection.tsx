import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "Addis Ababa University",
    degree: "Mechanical Engineering",
    status: "Currently Studying",
  },
  {
    school: "Hilcoe College",
    degree: "Software Engineering",
    status: "Completed",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            <span className="glow-text">Education</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card glow-border p-6"
            >
              <GraduationCap className="text-primary mb-3" size={28} />
              <h3 className="font-heading font-semibold text-foreground mb-1">{edu.school}</h3>
              <p className="text-sm text-muted-foreground">{edu.degree}</p>
              <span className="inline-block mt-3 px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                {edu.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
