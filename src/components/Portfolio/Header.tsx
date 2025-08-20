import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight py-2">
            Arjun N
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Full-Stack Developer crafting beautiful, functional web experiences with modern technologies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/inco-arjun" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/inco-arjun" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:arjunnagaraj06@email.com" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
    </header>
  );
};

export default Header;