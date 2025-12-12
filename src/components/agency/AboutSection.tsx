import { Card, CardContent } from '../ui/card';
import { Users, Award, Globe, BookOpen } from 'lucide-react';

export function AboutSection() {
  const stats = [
    {
      icon: Users,
      number: "2000+",
      label: "Students Placed"
    },
    {
      icon: Award,
      number: "95%",
      label: "Success Rate"
    },
    {
      icon: Globe,
      number: "50+",
      label: "Partner Universities"
    },
    {
      icon: BookOpen,
      number: "15+",
      label: "Years Experience"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">About Zin Apex Education</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Your trusted partner in achieving Japanese higher education dreams with comprehensive support and proven success
            </p>
          </div>

          {/* <div className="grid lg:grid-cols-2 gap-12 items-center mb-17"> */}
          <div className="grid lg:grid-cols-1 gap-12 items-center mb-17">
            <div>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-2xl mb-6">ABOUT </h3>
                <p>
                  Zin Apex Education currently offers Japanese language courses and provides complete support services for those who wish to study in Japan — from the initial application process all the way to their arrival in Japan.
                  With a focus on both language learning and practical guidance, we help students prepare for life in Japan academically, culturally, and professionally.
                </p>
                <h3 className="text-2xl mb-6">FOUNDER PROFILE </h3>
                <p>
                  I am ZIN THU AUNG, a Burmese educator and content creator based in Japan, and the founder of Zin Apex Education.
                  QUALIFICATION - Graduated Hamamatsu Japanese Language Collage
                  Shizuoka Eiwa University Japan (Business Management)
                  YADANABON University Mandalay
                  At Zin Apex Education, my mission is to guide Burmese students with clear pathways, accurate information, and full support—from language training to arrival assistance—helping them succeed both academically and culturally in Japan.
                  I also run Zin Japan Life on YouTube, sharing high-quality vlogs, 
                  knowledge sharings and tips, visa information, Japanese learning content, 
                  and real-life guidance for Burmese people living in or planning to come to Japan. 
                </p>
                <h3 className="text-2xl mb-6">MISSION</h3>
                <p>
                  To provide clear, accurate, and accessible pathways for students aspiring to study in Japan.
                  To offer both language and cultural training for better integration and success in Japan.
                </p>
                <h3 className="text-2xl mb-6">VISION</h3>
                <p>
                  To become a trusted, internationally recognized education agency for students aiming to study and thrive in Japan.
                </p>
                <h3 className="text-2xl mb-6">PURPOSE</h3>
                <p>
                  To enable students who wish to study in Japan to pursue their education with ease and confidence.
                  To assist our fellow citizens in overcoming any challenges they may face while living abroad.
                  To build a strong and inspiring community made up of talented and motivated young people.

                </p>
                <h3 className="text-2xl mb-6">OUR SERVICE</h3>
                <p>
                  Student Placement & Documentation
                  Connecting students with reputable language schools in Japan
                  Assisting with preparation and organization of all required documents
                  Supporting COE (Certificate of Eligibility) applications and compiling necessary supporting paperwork
                  Visa & Travel Arrangements
                  Providing full guidance through the visa application process
                  Booking airline tickets and offering travel advice
                  Preparing all immigration-related documents to ensure smooth entry

                  Arrival Support in Japan
                  Welcoming students at the airport upon arrival
                  Safely escorting students to their accommodation
                  Japanese Language & Skills Training
                  Offering JLPT N5 and N4 level language courses
                  Conducting speaking-focused classes to boost conversational ability
                  Providing practical skills training classes
                  Delivering flexible N5 video lessons for convenient self-study

                </p>
              </div>
            </div>

            {/* <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="pt-6">
                    <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div> */}
          </div>

          <div className="bg-muted/20 rounded-2xl p-8">
            <h3 className="text-2xl mb-6 text-center">Why Choose Zin Apex Education?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg mb-2">Strong COE Success Rate </h4>
                <p className="text-muted-foreground text-sm">
                Zin Apex Education is connected with reputable, high-ranking institutions, which contributes to a consistently strong COE (Certificate of Eligibility) success rate for students
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg mb-2">Excellent Reviews from Our Students</h4>
                <p className="text-muted-foreground text-sm">
                Many students who applied through Zin Apex Education share excellent reviews, reflecting their satisfaction and trust in the service.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg mb-2">Accurate, Well-Organized Document Preparation </h4>
                <p className="text-muted-foreground text-sm">
                All documents are carefully prepared with precision. The team communicates clearly with both students and parents, ensuring every requirement is fully met.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg mb-2">Transparent and Reliable Financial Information </h4>
                <p className="text-muted-foreground text-sm">
                Zin Apex provides clear, honest explanations of all financial matters, giving students and families complete confidence and peace of mind.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg mb-2">High-Quality Service at a Fair Service Fee </h4>
                <p className="text-muted-foreground text-sm">
                The service fee is reasonable and reflects the high-value, comprehensive support that students receive throughout the process.                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg mb-2">Ongoing Support Even After Arriving in Japan</h4>
                <p className="text-muted-foreground text-sm">
                 Students continue to receive guidance from senior members in Japan, who treat newcomers like family and offer continuous support for a smooth transition to life abroad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}