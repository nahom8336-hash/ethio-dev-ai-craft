import { motion } from "framer-motion";
import { Code2, Brain, Rocket } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Full Stack", desc: "End-to-end web development" },
  { icon: Brain, label: "AI Training", desc: "ML models & data pipelines" },
  { icon: Rocket, label: "4+ Years", desc: "Professional experience" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            About <span className="glow-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />

          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-12">
            I'm a passionate Full Stack Developer and AI Trainer based in Ethiopia with over 4 years of
            professional experience. I specialize in building scalable, high-performance web applications
            and training machine learning models that solve real-world problems. My work sits at the
            intersection of software engineering and artificial intelligence — combining robust system
            design with data-driven decision making to create intelligent, user-centered solutions.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-card glow-border p-6 text-center"
              >
                <item.icon className="mx-auto mb-3 text-primary" size={28} />
                <h3 className="font-heading font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
