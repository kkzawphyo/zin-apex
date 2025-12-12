import { Badge } from './ui/badge';

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", 
        "Tailwind CSS", "Sass", "Vue.js", "Angular", "Redux", "Zustand"
      ]
    },
    {
      title: "Backend",
      skills: [
        "Node.js", "Express.js", "Python", "Django", "Flask", "PHP", 
        "Laravel", "Java", "Spring Boot", "C#", ".NET", "Ruby on Rails"
      ]
    },
    {
      title: "Database",
      skills: [
        "PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", 
        "Supabase", "Prisma", "Mongoose", "SQLite", "Oracle"
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        "Git", "GitHub", "Docker", "AWS", "Vercel", "Netlify", 
        "Figma", "Adobe XD", "Postman", "Jest", "Cypress", "Webpack"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">My Skills</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-background rounded-lg p-6 border">
                <h3 className="text-xl mb-4 text-center">{category.title}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}