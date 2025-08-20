import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react"; // Removed Github import since we don’t need it anymore
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Leaf Disease Detection Using CNN",
      description:
        "Built a CNN model to detect and classify potato leaf diseases. Achieved 99% validation accuracy and deployed.",
      image: project1,
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Streamlit"],
      githubUrl: "https://github.com/inco-arjun/Leaf-Disease-Detector.git",
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      description:
        "A personal portfolio showcases your skills and projects. It highlights your strengths professionally. It helps connect with employers and clients.",
      image: project2,
      technologies: ["HTML5", "TypeScript", "React.js", "Tailwind CSS"],
      liveUrl: "https://your-portfolio-link.com", // <-- Replace with actual live link
    },
    {
      id: 3,
      title: "Epilepsy Detector",
      description:
        "This tool enables easy EEG data upload and analysis to detect epileptic seizures with customizable settings and clear visual results.",
      image: project3,
      technologies: [
        "HTML",
        "Python",
        "CSS",
        "TensorFlow",
        "Keras",
        "NumPy",
        "Matplotlib",
      ],
      githubUrl: "https://github.com/inco-arjun/Epilepsy-Detector.git",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group bg-card hover:shadow-soft transition-all duration-500 transform hover:-translate-y-2 border-border/50 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader className="text-center">
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-primary/30 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 justify-center">
                  {/* ✅ Conditionally render button based on project type */}
                  {project.liveUrl ? (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center gap-2"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </a>
                    </Button>
                  ) : project.githubUrl ? (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center gap-2"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full"
                      >
                        <span>GitHub</span>
                      </a>
                    </Button>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
