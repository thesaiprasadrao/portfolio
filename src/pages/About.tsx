import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutComponent from "@/components/About";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-1">
        <AboutComponent />
      </main>
      <Footer />
    </div>
  );
};

export default About;
