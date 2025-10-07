import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Send, Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sahuankit5737@gmail.com",
      href: "mailto:sahuankit5737@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9546924275",
      href: "tel:+919546924275"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bhubaneswar,Odisha, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Ankit-aarav",
      username: "@Ankit-aarav"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ankit-sahu-828043316",
      username: "Ankit Sahu"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get <span className="text-gradient">In Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? 
              I'd love to hear from you. Let's create something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <Card className="bg-card border hover:border-primary/20 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gradient mb-6">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="bg-muted/50 border-border focus:border-primary focus:glow-primary transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-muted/50 border-border focus:border-primary focus:glow-primary transition-all duration-300"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="bg-muted/50 border-border focus:border-primary focus:glow-primary transition-all duration-300"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or say hello..."
                      rows={5}
                      required
                      className="bg-muted/50 border-border focus:border-primary focus:glow-primary transition-all duration-300 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full glow-primary hover:glow-secondary transition-all duration-500 transform hover:scale-105"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact information */}
            <div className="space-y-8">
              {/* Contact details */}
              <Card className="card-gradient border-secondary/20 hover:glow-secondary transition-all duration-500">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-gradient-secondary mb-6">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((item) => {
                      const IconComponent = item.icon;
                      const content = (
                        <div className="flex items-center space-x-4 group">
                          <div className="p-3 rounded-lg bg-secondary/20 group-hover:glow-secondary transition-all duration-300">
                            <IconComponent className="h-5 w-5 text-secondary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{item.label}</p>
                            <p className="text-foreground font-medium">{item.value}</p>
                          </div>
                        </div>
                      );

                      return item.href ? (
                        <a 
                          key={item.label}
                          href={item.href}
                          className="block hover:scale-105 transition-transform duration-300"
                        >
                          {content}
                        </a>
                      ) : (
                        <div key={item.label}>
                          {content}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Social links */}
              <Card className="card-gradient border-accent/20 hover:glow-accent transition-all duration-500">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-gradient mb-6">
                    Connect With Me
                  </h3>
                  
                  <div className="space-y-4">
                    {socialLinks.map((social) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-4 group hover:scale-105 transition-all duration-300"
                        >
                          <div className="p-3 rounded-lg bg-accent/20 group-hover:glow-accent transition-all duration-300">
                            <IconComponent className="h-5 w-5 text-accent" />
                          </div>
                          <div>
                            <p className="text-foreground font-medium">{social.label}</p>
                            <p className="text-sm text-muted-foreground">{social.username}</p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Quick response note */}
              <Card className="card-gradient border-primary/20 p-6 text-center">
                <div className="text-primary mb-2">
                  <Mail className="h-8 w-8 mx-auto" />
                </div>
                <p className="text-sm text-muted-foreground">
                  I typically respond within 24 hours. Looking forward to hearing from you!
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;