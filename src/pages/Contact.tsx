import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// Modular data structure - easy to add/remove items
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
    href: "https://twitter.com",
    color: "text-sky-500 hover:text-sky-600"
  },
];

// Modular styling configuration
const STYLE_CONFIG = {
  iconSize: "w-2 h-2 md:w-10 md:h-10",
  containerPadding: "p-4",
  gap: "gap-6 md:gap-12"
};

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-24 px-4 pb-24 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-5xl w-full space-y-16">
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with me on your preferred platform
            </p>
          </div>

          <div className={`flex flex-wrap items-center justify-center ${STYLE_CONFIG.gap}`}>
            {contactLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center"
                aria-label={link.title}
              >
                <div className={`${STYLE_CONFIG.containerPadding} rounded-full bg-secondary/20 hover:bg-secondary/40 transition-all duration-300 transform hover:scale-110 ${link.color}`}>
                  <link.icon className={STYLE_CONFIG.iconSize} />
                </div>
                <span className="absolute -bottom-8 text-sm font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {link.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default Contact;
