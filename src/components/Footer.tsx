import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Saiprasad Rao
            </h3>
            <p className="text-sm text-muted-foreground">
              Full-Stack Web Developer
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/thesaiprasadrao"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-all border border-border"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/saiprasadrao"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-all border border-border"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/thesaiprasadrao"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-all border border-border"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:saiprasadrao1234@gmail.com"
                className="p-2 rounded-lg bg-card hover:bg-accent hover:text-accent-foreground transition-all border border-border"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Saiprasad Rao. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
