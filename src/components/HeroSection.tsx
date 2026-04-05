import { motion } from "framer-motion";
import { ArrowDown, Briefcase, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-28 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            Open to new opportunities
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold leading-tight mb-2">
            Hey, I'm <span className="glow-text">Nahom</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-muted-foreground mb-6">
            Full Stack Developer & AI Trainer
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            I build scalable web apps and train machine learning models.
            With 4+ years of hands-on experience, I turn complex problems
            into clean, reliable software. Based in Ethiopia.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#projects"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <Briefcase size={18} />
              View Projects
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-border bg-card/50 text-foreground font-medium hover:border-primary/50 transition-colors"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
