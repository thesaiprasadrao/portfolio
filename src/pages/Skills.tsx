import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SkillsComponent from "@/components/Skills";

const Skills = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-1">
        <SkillsComponent />
      </main>
      <Footer />
    </div>
  );
};

export default Skills;
