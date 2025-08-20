import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const skills = [
    "Python", "CSS", "JavaScript", "HTML5", "MySQL", 
    "react.js", "Linux", "Github", "Git", "MongoDB"
  ];

  return (
    <section id="about" className="py-20 bg-background">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
      About Me
    </h2>
    
    <div className="max-w-xl mx-auto">
      <Card className="bg-gradient-secondary border-border/50 hover:shadow-soft transition-all duration-300">
        <CardContent className="p-8">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I am a Bachelor of Computer Applications (BCA) graduate from the University of Mysore,
            specializing in full-stack development. Though a fresher, I am passionate about coding 
            and eager to grow in this dynamic field. I love turning complex problems into simple, 
            beautiful, and intuitive solutions.


          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
           When I’m not coding, I explore new technologies, contribute to open source projects, and 
           share knowledge with the developer community. I am committed to honing my skills and embracing 
           challenges. I look forward to building scalable and innovative applications in full-stack development.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-4 text-center">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>
  );
};

export default About;