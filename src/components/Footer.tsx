import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 
                className="text-xl font-semibold cursor-pointer hover:text-primary transition-colors"
                onClick={scrollToTop}
              >
                John Developer
              </h3>
              <p className="text-muted-foreground max-w-sm">
                A Full Stack Web Developer passionate about creating beautiful, 
                functional applications and sharing knowledge with the community.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors"
                >
                  Skills
                </button>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </button>
                <button 
                  onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors"
                >
                  Experience
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Connect</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-background border hover:bg-accent transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-background border hover:bg-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-background border hover:bg-accent transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center">
            <p className="text-muted-foreground flex items-center justify-center gap-1">
              © {currentYear} John Developer. Made with <Heart className="h-4 w-4 text-red-500" /> and lots of coffee.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}