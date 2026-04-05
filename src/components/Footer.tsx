import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p className="flex items-center gap-1">
          © {new Date().getFullYear()} Built with <Heart size={14} className="text-primary" /> by Nahom Alemayehu
        </p>
        <p>Full Stack Developer & AI Trainer</p>
      </div>
    </footer>
  );
};

export default Footer;
