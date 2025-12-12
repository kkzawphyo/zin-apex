import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function HeroSlider() {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1589872880544-76e896b0592c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHVuaXZlcnNpdHklMjBzdHVkZW50cyUyMHN0dWR5fGVufDF8fHx8MTc1Nzg0MDQxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Your Gateway to Japan",
      subtitle: "Helping Myanmar Students Study at Top Japanese Language Schools",
      description: "Join thousands of Myanmar students who acheved theri dream of studying in Japan through our complete guidance and support programs."
    },
    {
      image: "https://images.unsplash.com/photo-1757431959447-84d072dc654c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMHVuaXZlcnNpdHklMjBjYW1wdXMlMjBtb2Rlcm58ZW58MXx8fHwxNzU3ODQwNDE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Expert Japanese Language Training",
      subtitle: "Master Japanese from N5 to N1 with our proven methodology",
      description: "Our experienced instructors will guide you through comprehensive JLPT preparation with personalized learning approaches tailored to your goals."
    },
    {
      image: "/group.jpg",
      title: "Complete Student Support",
      subtitle: "From Enrollment to achievement - we're with you every step",
      description: "We support students studying Japanese with course guidance, placement help, study advice adn visa support for a smooth, successful learning journy."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ImageWithFallback
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 animate-fade-in">
              {slides[currentSlide].title}
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-white/90">
              {slides[currentSlide].subtitle}
            </h2>
            <p className="text-lg mb-12 text-white/80 max-w-2xl mx-auto">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('courses')}
                className="w-full sm:w-auto bg-primary hover:bg-primary/90"
              >
                Japanese Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                // className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary"
                onClick={() => scrollToSection('contact')}
              >
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}