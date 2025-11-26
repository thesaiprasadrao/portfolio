import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: [
        "Led development of scalable microservices architecture serving 1M+ users",
        "Mentored team of 5 junior developers in modern development practices",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description: [
        "Built and maintained 10+ client-facing web applications",
        "Collaborated with designers to create pixel-perfect interfaces",
        "Optimized database queries improving application performance by 40%",
      ],
    },
    {
      title: "Frontend Developer",
      company: "StartUp Ventures",
      period: "2019 - 2020",
      description: [
        "Developed responsive React applications with focus on UX",
        "Integrated RESTful APIs and third-party services",
        "Participated in agile development and sprint planning",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey in tech
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-l-primary"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    {exp.title}
                  </h3>
                  <p className="text-lg font-medium text-primary">{exp.company}</p>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium whitespace-nowrap">
                  <Calendar className="h-4 w-4" />
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-accent mt-1.5">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
