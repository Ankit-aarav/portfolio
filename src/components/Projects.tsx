import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Play } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects, skills, and experience with modern web technologies and smooth animations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-darker-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical projects, from web applications to IoT solutions, 
              demonstrating my passion for innovation and problem-solving.
            </p>
          </div>

          {/* Projects grid */}
          <div className="responsive-grid">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="bg-card border overflow-hidden group hover:border-primary/20 transition-all duration-300"
              >
                <CardContent className="p-0">
                  {/* Project image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Status badge */}
                    <Badge 
                      variant={project.status === "Completed" ? "default" : "secondary"}
                      className="absolute top-4 right-4"
                    >
                      {project.status}
                    </Badge>

                    {/* Hover overlay with buttons */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex space-x-3">
                        <Button
                          size="sm"
                          variant="secondary"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        {project.demo && (
                          <Button
                            size="sm"
                            asChild
                          >
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project content */}
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gradient mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech}
                          variant="outline"
                          className="text-xs border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Project links */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                      {project.demo && (
                        <Button
                          size="sm"
                          className="flex-1 transition-all duration-300"
                          asChild
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <Play className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View more projects button */}
          <div className="text-center mt-12">
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;