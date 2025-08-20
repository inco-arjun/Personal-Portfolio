import Header from "@/components/Portfolio/Header";
import About from "@/components/Portfolio/About";
import Projects from "@/components/Portfolio/Projects";
import Certifications from "@/components/Portfolio/Certifications";
import Resume from "@/components/Portfolio/Resume";
import Contact from "@/components/Portfolio/Contact";
import Footer from "@/components/Portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <About />
      <Projects />
      <Certifications />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
