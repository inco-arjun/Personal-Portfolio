import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Arjun N
            </h3>
            <p className="text-muted-foreground">
              Full-Stack Developer • Turning ideas into reality
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/inco-arjun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-muted/50 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/inco-arjun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-muted/50 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:arjunnagaraj06@gmail.com"
              className="p-3 bg-muted/50 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-110"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground">
            © {currentYear} Arjun N. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
