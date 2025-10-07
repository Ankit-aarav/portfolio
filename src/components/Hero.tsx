import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import studentPhoto from '@/assets/student-photo.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative hero-bg overflow-hidden">
      {/* Simple student photo background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${studentPhoto})`,
          filter: 'blur(5px)'
        }}
      ></div>
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Animated greeting */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <p className="text-sm font-medium text-primary">
                Welcome to my digital space
              </p>
            </div>
            
            <h1 className="responsive-heading font-bold mb-6 leading-tight">
              <span className="block mb-2">Hi, I'm</span>
              <span className="text-gradient">Ankit Sahu</span>
            </h1>
            
            <div className="relative">
              <h2 className="responsive-subheading text-foreground mb-8 font-medium">
                Engineering Student & 
                <span className="text-gradient-secondary ml-2">
                  Future Developer
                </span>
              </h2>
            </div>
          </div>

          {/* Animated description */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="responsive-text text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating innovative solutions through code. 
              Currently pursuing Computer Engineering while building projects 
              that bridge the gap between imagination and reality.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} mb-16`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto sm:max-w-none">
              <Button 
                size="lg" 
                className="w-full sm:w-auto min-w-[200px] transition-all duration-300 hover:scale-105 font-semibold"
                onClick={scrollToAbout}
              >
                Explore My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto min-w-[200px] border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Enhanced Social Links */}
          <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-sm text-muted-foreground mb-6">Connect with me</p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-4 rounded-full bg-card border border-border hover:border-primary transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5 group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-4 rounded-full bg-card border border-border hover:border-primary transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5 group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="mailto:sahuankit5737@gmail.com"
                className="group p-4 rounded-full bg-card border border-border hover:border-primary transition-all duration-300"
                aria-label="Send Email"
              >
                <Mail className="h-5 w-5 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>



      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/30 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;