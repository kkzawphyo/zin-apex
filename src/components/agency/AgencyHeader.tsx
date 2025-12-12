import { useState } from 'react';
import { Button } from '../ui/button';
import { Menu, X, GraduationCap } from 'lucide-react';
import logo from "../../logo.png"; 

export function AgencyHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            {/* <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center"> */}
              {/* <GraduationCap className="h-6 w-6 text-primary-foreground" /> */}
            {/* </div> */}
              <img
                src={logo}
                alt="Logo"
                width={60}
              />
            <div>
              <div className="text-xl font-bold text-primary">Zin Apex Education</div>
              <div className="text-xs text-muted-foreground">Japanese Language Academy</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('courses')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Courses
            </button>
            <button 
              onClick={() => scrollToSection('offices')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Study in Japan
            </button>
            <button 
              onClick={() => scrollToSection('interviews')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Student Gallery
            </button>
            <button 
              onClick={() => scrollToSection('activities')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Activities
            </button>
            <button 
              onClick={() => scrollToSection('achievements')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Results
            </button>
            <Button onClick={() => scrollToSection('contact')}>
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('courses')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Courses
              </button>
              <button 
                onClick={() => scrollToSection('offices')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Offices
              </button>
              <button 
                onClick={() => scrollToSection('interviews')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Student Stories
              </button>
              <button 
                onClick={() => scrollToSection('activities')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Activities
              </button>
              <button 
                onClick={() => scrollToSection('achievements')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Results
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-fit"
              >
                Contact Us
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}