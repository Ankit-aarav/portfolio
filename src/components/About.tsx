import { Card, CardContent } from '@/components/ui/card';
import studentPhoto from '@/assets/student-photo.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-darker-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover my journey, passion, and the driving force behind my engineering pursuits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo section */}
            <div className="relative">
              <Card className="bg-card border overflow-hidden group hover:border-primary/20 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={studentPhoto}
                      alt="Ankit Sahu - Engineering Student"
                      className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-xl font-semibold text-gradient mb-2">
                        Ankit Sahu
                      </h3>
                      <p className="text-muted-foreground">
                        Computer Engineering Student
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Content section */}
            <div className="space-y-6">
              <Card className="bg-card border p-6 hover:border-secondary/20 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-gradient-secondary mb-4">
                  My Journey
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a passionate Computer Engineering student at Tech University, 
                  driven by curiosity and a love for solving complex problems through code. 
                  My journey began with a simple "Hello World" program, and now I'm creating 
                  innovative solutions that bridge hardware and software.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring the latest tech trends, 
                  contributing to open-source projects, or mentoring fellow students. 
                  I believe in the power of technology to create positive change.
                </p>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-card border p-4 text-center hover:border-accent/20 transition-all duration-300">
                  <div className="text-2xl font-bold text-gradient mb-1">3+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </Card>
                <Card className="bg-card border p-4 text-center hover:border-accent/20 transition-all duration-300">
                  <div className="text-2xl font-bold text-gradient mb-1">8.83</div>
                  <div className="text-sm text-muted-foreground">CGPA</div>
                </Card>
              </div>

              <Card className="bg-card border p-6 hover:border-secondary/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gradient mb-3">
                  What Drives Me
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Building user-centric applications
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    Exploring emerging technologies
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    Contributing to open-source communities
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Continuous learning and growth
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;