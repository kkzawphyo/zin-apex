import { Button } from './ui/button';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                John Developer
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
              Full Stack Developer & UI/UX Enthusiast
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              I create beautiful, functional web applications with modern technologies. 
              Passionate about clean code, user experience, and turning ideas into reality.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 mb-12">
            <a 
              href="#" 
              className="p-3 rounded-full border hover:bg-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full border hover:bg-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full border hover:bg-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
}