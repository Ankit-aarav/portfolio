import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Zap, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Palette,
      color: "primary",
      skills: [
        { name: "HTML/CSS", level: 90, description: "Modern responsive layouts" },
        { name: "JavaScript", level: 65, description: "ES6+ & DOM manipulation" },
        { name: "React", level: 30, description: "Component-based architecture" },
      ]
    },
    {
      title: "Programming Languages",
      icon: Code,
      color: "secondary",
      skills: [
        { name: "Python", level: 88, description: "Data structures & algorithms" },
        { name: "Java", level: 82, description: "OOP & backend development" },
        { name: "C++", level: 70, description: "System programming" },
        { name: "JavaScript", level: 65, description: "Full-stack development" },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "primary",
      skills: [
        { name: "Git/GitHub", level: 85, description: "Version control & collaboration" },
      ]
    }
  ];

  const certifications = [
    "AWS Cloud Practitioner",
    "Google IT Support Professional",
    "Meta Frontend Developer",
    "FreeCodeCamp Responsive Web Design"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and continuous learning journey.
            </p>
          </div>

          {/* Skills categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={category.title}
                  className="card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-lg bg-primary/20 mr-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-gradient">
                        {category.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-6">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skill.name} className="group/skill">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-foreground font-medium text-sm sm:text-base">
                                  {skill.name}
                                </span>
                                <span className="text-muted-foreground text-xs sm:text-sm font-medium">
                                  {skill.level}%
                                </span>
                              </div>
                              <p className="text-xs text-muted-foreground/80">
                                {skill.description}
                              </p>
                            </div>
                          </div>
                          <div className="w-full bg-muted/30 rounded-full h-2 sm:h-3 overflow-hidden border border-border/30">
                            <div 
                              className="h-full rounded-full bg-gradient-primary transition-all duration-300"
                              style={{ 
                                width: `${skill.level}%`
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Certifications */}
          <Card className="card-gradient border-accent/20 hover:border-accent/40 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold text-gradient-secondary mb-6">
                Certifications & Achievements
              </h3>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert) => (
                  <Badge 
                    key={cert}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-secondary/10 text-secondary border border-secondary/20 hover:bg-secondary/20 transition-all duration-300"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;