import { Code2, Sparkles, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming ideas into exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              I'm a passionate full-stack developer with a keen eye for design and a love for solving 
              complex problems. With years of experience in building web applications, I specialize 
              in creating seamless user experiences backed by robust, scalable architectures.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              My journey in tech began with curiosity and evolved into a career where I get to merge 
              creativity with technology. I believe in writing code that's not just functional, but 
              elegant and maintainable. When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source, or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-primary p-1">
              <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                <div className="text-center space-y-4">
                  {/* <div className="text-6xl font-bold text-primary">5+</div>
                  <div className="text-xl font-medium text-foreground">Years Experience</div>
                  <div className="text-sm text-muted-foreground">Building Digital Products</div> */}
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-coral/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
