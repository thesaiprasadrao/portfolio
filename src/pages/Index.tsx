import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutComponent from "@/components/About";
import SkillsComponent from "@/components/Skills";
import ProjectsComponent from "@/components/Projects";
import Footer from "@/components/Footer";
import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const contactLinks = [
  {
    icon: Mail,
    title: "Email",
    href: "mailto:saiprasadrao1234@gmail.com",
    color: "text-blue-500 hover:text-blue-600"
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    href: "https://wa.me/919902450514?text=Hello%20Saiprasad!",
    color: "text-green-500 hover:text-green-600"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    href: "https://linkedin.com/in/saiprasadrao",
    color: "text-blue-700 hover:text-blue-800"
  },
  {
    icon: Github,
    title: "GitHub",
    href: "https://github.com/thesaiprasadrao",
    color: "text-gray-800 dark:text-white hover:text-black dark:hover:text-gray-200"
  },
  {
    icon: Twitter,
    title: "Twitter",
    href: "https://x.com/thesaiprasadrao",
    color: "text-sky-500 hover:text-sky-600"
  },
  {
    icon: FaInstagram,
    title: "Instagram",
    href: "https://instagram.com/thesaiprasadrao",
    color: "text-pink-500 hover:text-pink-600"
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {/* Desktop: Show only Hero, Mobile: Show all sections */}
        <Hero />
        <div className="md:hidden">
          <AboutComponent />
          <SkillsComponent />
          <ProjectsComponent />
          
          {/* Mobile Contact Section */}
          <section id="contact" className="py-24 px-4 bg-muted/30">
            <div className="max-w-5xl mx-auto space-y-16">
              <div className="text-center space-y-4">
                <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Let me know if you need me for building some cool stuff
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
                {contactLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col items-center"
                    aria-label={link.title}
                  >
                    <div className={`p-3 rounded-full bg-secondary/20 hover:bg-secondary/40 transition-all duration-300 transform hover:scale-110 ${link.color}`}>
                      <link.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <span className="absolute -bottom-8 text-sm font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {link.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
