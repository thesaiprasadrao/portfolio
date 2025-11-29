import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectsComponent from "@/components/Projects";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-1">
        <ProjectsComponent />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
