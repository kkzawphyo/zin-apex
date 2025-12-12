import { Badge } from './ui/badge';
import { Calendar, MapPin } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: [
        "Led development of enterprise web applications serving 10k+ users",
        "Architected and implemented microservices using Node.js and Docker",
        "Mentored junior developers and conducted code reviews",
        "Improved application performance by 40% through optimization"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Inc",
      location: "New York, NY",
      period: "2020 - 2022",
      description: [
        "Developed and maintained client-facing web applications",
        "Collaborated with design team to implement pixel-perfect UIs",
        "Integrated third-party APIs and payment systems",
        "Participated in agile development process and sprint planning"
      ],
      technologies: ["Vue.js", "Laravel", "MySQL", "Stripe", "Git"]
    },
    {
      title: "Frontend Developer",
      company: "StartupHub",
      location: "Remote",
      period: "2019 - 2020",
      description: [
        "Built responsive web applications using modern JavaScript frameworks",
        "Optimized websites for search engines and performance",
        "Worked closely with UX designers to enhance user experience",
        "Implemented automated testing and deployment processes"
      ],
      technologies: ["JavaScript", "CSS3", "Webpack", "Jest", "Sass"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Experience</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My professional journey and the roles that shaped my expertise
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                  
                  <div className="md:ml-16 bg-background rounded-lg p-6 border shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl mb-1">{experience.title}</h3>
                        <h4 className="text-lg text-primary mb-2">{experience.company}</h4>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1">
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="mr-1 h-4 w-4" />
                          {experience.period}
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <MapPin className="mr-1 h-4 w-4" />
                          {experience.location}
                        </div>
                      </div>
                    </div>

                    <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}