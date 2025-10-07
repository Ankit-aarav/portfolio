import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darker-surface border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gradient">
                Ankit Sahu
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Computer Engineering Student passionate about creating innovative 
                solutions and building the future through code.
              </p>
            </div>

            {/* Quick links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                Quick Links
              </h4>
              <nav className="flex flex-col space-y-2">
                {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                Get In Touch
              </h4>
              <div className="space-y-2">
                <a 
                  href="sahuankit5737@gmailto:mail.com"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  sahuankit5737@gmail.com
                </a>
                <p className="text-muted-foreground">
                  Bhubaneswar, Odisha ,India
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="section-divider w-full mb-8"></div>

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-2 text-red-500 animate-pulse" />
              <span>© {currentYear} Ankit Sahu</span>
            </div>

            {/* Social links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/Ankit-aarav/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:border-primary hover:glow-primary transition-all duration-300 transform hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/ankit-sahu-828043316"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:border-primary hover:glow-primary transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:sahuankit5737@gmail.com"
                className="p-2 rounded-full border border-border hover:border-primary hover:glow-primary transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;