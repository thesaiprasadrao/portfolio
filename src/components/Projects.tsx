import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "BruteForce 2025 Hackathon Landing Page",
      description:
        "Built a responsive event landing page with 3D visual effects using Three.js. Implemented animated terminal component for user onboarding and fluid UX with locomotive.js.",
      tech: ["Next.js", "React", "TypeScript", "Three.js"],
      image: "public/projects/BruteForce.png",
      gradient: "gradient-primary",
      link: "https://bruteforcecsbs.dev",
      github: "github.com/thesaiprasadrao/BruteForce",
    },
    {
      title: "Safar Saathi - Fleet Tracking Platform",
      description:
        "Complete backend system with live tracking sending location updates every 3 seconds. Supports Admin, User, and Driver roles with Fastify and TypeScript.",
      tech: ["Node.js", "Supabase", "Fastify", "TypeScript"],
      image: "public/projects/SafarSaathi.png",
      gradient: "gradient-accent",
      link: "#",
      github: "https://github.com/thesaiprasadrao/safar-saathi",
    },
    {
      title: "ScamShield - AI-Powered Scam Analyzer",
      description:
        "Full-stack scam detection app with OCR support using Pytesseract. Features NextAuth authentication, protected routes, and RESTful API for text and image analysis.",
      tech: ["Next.js", "TypeScript", "FastAPI", "Python"],
      image: "public/projects/ScamSheil.png",
      gradient: "gradient-primary",
      link: "#",
      github: "https://github.com/thesaiprasadrao/scam-sheild-analyzer",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Some of my recent work
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 group"
            >
              <div className={`h-48 relative overflow-hidden ${!project.image ? `bg-${project.gradient}` : ''}`}>
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/80 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-bold text-white opacity-20">
                        {index + 1}
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground leading-tight">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group/btn"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 group/btn bg-gradient-primary"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    Live
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
