import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      name: "Data Analytics",
      issuer: "Deloitte",
      date: "2025",
      credential: "DFLTsGHDaYQ564BoW",
      url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_wQNZJYkL3TquG2F5F_1755145018035_completion_certificate.pdf"
    },
    {
      id: 2,
      name: "Solutions Architecture Job Simulation",
      issuer: "Amazon Web Services",
      date: "2025",
      credential: "yYrgvWJtt96Ywzo6B",
      url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_wQNZJYkL3TquG2F5F_1753460863217_completion_certificate.pdf"
    },
    {
      id: 3,
      name: "Advanced Software Engineering Job Simulation",
      issuer: "Walmart",
      date: "2024",
      credential: "B3Any3tzFeQLS9NZn",
      url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Walmart%20USA/oX6f9BbCL9kJDJzfg_Walmart%20USA_wQNZJYkL3TquG2F5F_1724053089658_completion_certificate.pdf"
    },
    {
      id: 4,
      name: "SQL (Advanced)",
      issuer: "HackerRank",
      date: "2025",
      credential: "BCCF97308EЗА",
      url: "https://www.hackerrank.com/certificates/bccf97308e3a"
    },
    {
      id: 5,
      name: "Cybersecurity Analyst",
      issuer: "Tata Group",
      date: "2024",
      credential: "o77smphmg4ZZBbNhN",
      url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Tata/gmf3ypEXBj2wvfQWC_Tata%20Group_wQNZJYkL3TquG2F5F_1723555298286_completion_certificate.pdf"
    },
    {
      id: 6,
      name: "Python Programming",
      issuer: "HackerRank",
      date: "2025",
      credential: "39139715A887",
      url: "https://www.hackerrank.com/certificates/39139715a887"
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              className="group bg-gradient-secondary border-border/50 hover:shadow-soft transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => window.open(cert.url, "_blank")}
            >
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-3">
                <div className="flex-1">
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {cert.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Issued {cert.date}</span>
                </div>

                <Badge
                  variant="outline"
                  className="border-primary/30 text-primary bg-primary/10"
                >
                  {cert.credential}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
