import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">About Me</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get to know more about who I am, what I do, and what skills I have
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl mb-6">Get to know me!</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a <strong className="text-foreground">Full Stack Web Developer</strong> building 
                  and managing the Front-end and Back-end of Websites and Web Applications that leads 
                  to the success of the overall product.
                </p>
                <p>
                  I love sharing content related to the stuff that I have learned over the years in 
                  <strong className="text-foreground"> Web Development</strong> so it can help other 
                  people of the Dev Community. Feel free to Connect or Follow me on my social media 
                  accounts where I post useful content related to Web Development and Programming.
                </p>
                <p>
                  I'm open to <strong className="text-foreground">Job</strong> opportunities where I can 
                  contribute, learn and grow. If you have a good opportunity that matches my skills and 
                  experience then don't hesitate to <strong className="text-foreground">contact</strong> me.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-accent">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1731951039706-0e793240bb32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTc4MTY1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="John Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}