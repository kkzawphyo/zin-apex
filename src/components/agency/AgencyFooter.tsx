import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

export function AgencyFooter() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div 
                className="flex items-center space-x-2 cursor-pointer"
                onClick={scrollToTop}
              >
                <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-xl font-bold">Zin Apex Education</div>
                  <div className="text-xs text-primary-foreground/80">Japanese Language Academy</div>
                </div>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Your trusted partner for Japanese higher education. Helping students achieve their dreams since 2009.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block text-left text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  About Us
                </button>
                <button 
                  onClick={() => scrollToSection('courses')}
                  className="block text-left text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Japanese Courses
                </button>
                <button 
                  onClick={() => scrollToSection('offices')}
                  className="block text-left text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Office Locations
                </button>
                <button 
                  onClick={() => scrollToSection('interviews')}
                  className="block text-left text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Student Reviews
                </button>
                <button 
                  onClick={() => scrollToSection('achievements')}
                  className="block text-left text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Our Results
                </button>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Our Services</h3>
              <div className="space-y-2 text-sm">
                <div className="text-primary-foreground/80">Japanese Language Training</div>
                <div className="text-primary-foreground/80">University Application Support</div>
                <div className="text-primary-foreground/80">Scholarship Guidance</div>
                <div className="text-primary-foreground/80">Visa Processing</div>
                <div className="text-primary-foreground/80">Pre-departure Orientation</div>
                <div className="text-primary-foreground/80">Career Guidance</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-primary-foreground/80 mt-1 flex-shrink-0" />
                  <div className="text-sm">
                    <div className="font-medium mb-1">Mandalay Office</div>
                    <div className="text-primary-foreground/80">85/5,3rd FLOOR, 78st x 79st Btw , 38 B st , MAHAAUNGMYAY TSP , MANDALAY</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary-foreground/80" />
                  <span className="text-sm text-primary-foreground/80">+95 9 982626367 / +95 9 756367766</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary-foreground/80" />
                  <span className="text-sm text-primary-foreground/80">zinapexeducation@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <p className="text-primary-foreground/80 text-sm">
                  © {currentYear} Zin Apex Education. All rights reserved.
                </p>
                <p className="text-primary-foreground/60 text-xs mt-1">
                  Licensed by the Ministry of Education, Myanmar & Japan
                </p>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}