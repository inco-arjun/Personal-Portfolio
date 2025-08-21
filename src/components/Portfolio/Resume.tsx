import { Button } from "@/components/ui/button";
import { Download, FileText, Eye } from "lucide-react";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf"; // refers to public/resume.pdf
    link.download = "Resume.pdf"; // suggested download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open("/resume.pdf", "_blank"); // open resume.pdf in new tab
  };

  return (
    <section className="py-16 bg-gradient-secondary">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <FileText className="w-12 h-12 text-primary" />
            </div>
          </div>

          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to work together?
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Download or view my resume to learn more about my experience, skills, and achievements.
          </p>

          <div className="flex justify-center gap-6">
            <Button
              size="lg"
              className="w-56 bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 text-lg px-8 py-3"
              onClick={handleDownload}
            >
              <Download className="w-5 h-5 mr-3" />
              Download Resume
            </Button>

            <Button
              size="lg"
              className="w-56 bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 text-lg px-8 py-3"
              onClick={handleView}
            >
              <Eye className="w-5 h-5 mr-3" />
              View Resume
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-4">
            PDF • 3.8 MB • Updated August 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
