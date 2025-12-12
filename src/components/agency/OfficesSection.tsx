import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function OfficesSection() {
  const offices = [
    {
      country: "Myanmar",
      city: "Mandalay",
      address: "85/5,3rd FLOOR, 78st x 79st Btw , 38 B st , MAHAAUNGMYAY TSP , MANDALAY",
      phone: "+95 9 982626367 / +95 9 756367766",
      email: "zinapexeducation@gmail.com", 
      hours: "Mon-Fri: 8:30 AM - 5:30 PM MMT",
      image: "/office_photo.jpg",
      services: [
        "Japanese language training",
        "JLPT preparation courses",
        "University consultation",
        "Scholarship guidance",
        "Pre-departure orientation"
      ],
      docs: [
        "Passport ",
        "NRC (National Registration Card) for Student, Sponsor, and Parents",
        "High School Graduation Certificate / Academic Transcript (or) Degree Certificate with yearly transcripts",
        "Certificate of Completion and Yearly Transcripts of the Final Year at University (Not required for graduates; only for current university students)",
        "Japanese Language Proficiency Test Certificate (e.g., JLPT, NAT-TEST)",
        "Certificate of Attendance for any Japanese language courses taken",
        "Bank Statement as Proof of Show Money, approximately 4 million kyats",
        "Photograph (3cm x 4cm)",
        `Click below to download our Application form (pdf). Please fill it out and send it back to us.`
      ]
    },
    // {
    //   country: "Japan",
    //   city: "Tokyo",
    //   address: "",
    //   phone: "",
    //   email: "",
    //   hours: "Mon-Fri: 9:00 AM - 6:00 PM JST",
    //   image: "https://images.unsplash.com/photo-1655865904043-bd74d979ea63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMHRva3lvfGVufDF8fHx8MTc1Nzg0MDQyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    //   services: [
    //     "University application support",
    //     "Visa assistance",
    //     "Accommodation guidance",
    //     "Local orientation programs",
    //     "Career placement services"
    //   ]
    // },
  ];

  return (
    <section id="offices" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Our Office Locations</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              With offices in both Japan and Myanmar, we provide comprehensive support throughout your educational journey
            </p>
          </div>

          {/* <div className="grid lg:grid-cols-2 gap-8"> */}
          <div className="grid lg:grid-cols-1 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={office.image}
                  alt={`${office.city} office`}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
                
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>{office.city}, {office.country}</span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                      <span className="text-sm">{office.address}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{office.phone}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{office.email}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{office.hours}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-3">Services Available</h4>
                    <ul className="space-y-1">
                      {office.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-3">Required Documents for Japanese Language School (sample)</h4>
                    <ul className="space-y-1">
                      {office.docs.map((doc, docIndex) => (
                        <li key={docIndex} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                          {doc}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/form.pdf"
                      target="_blank"
                      className="text-blue-600 hover:underline hover:text-blue-800"
                    >
                      Download Application Form(PDF)
                    </a>
                    <a
                      href="/sample_form.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline hover:text-blue-800"
                    >
                      Download Sample Application Form (PDF)
                    </a>

                    <div className="py-6 px-0 w-full space-y-8 text-left">
                      <h2 className="text-l font-bold mb-4">Intake Schedules</h2>
                      <table className="w-full border border-gray-300 text-left">
                      <thead className="bg-gray-100 text-sm">
                      <tr>
                      <th className="border p-3">Intake</th>
                      <th className="border p-3">Registration Deadline</th>
                      <th className="border p-3">COE Submission Deadline</th>
                      <th className="border p-3">COE Result</th>
                      </tr>
                      </thead>
                      <tbody className="text-sm">
                      <tr>
                      <td className="border p-3">April Intake, 2026</td>
                      <td className="border p-3">September, 2025</td>
                      <td className="border p-3">October, 2025</td>
                      <td className="border p-3">February, 2026</td>
                      </tr>
                      <tr>
                      <td className="border p-3">July Intake, 2026</td>
                      <td className="border p-3">December, 2025</td>
                      <td className="border p-3">January, 2026</td>
                      <td className="border p-3">May, 2026</td>
                      </tr>
                      <tr>
                      <td className="border p-3">October Intake, 2026</td>
                      <td className="border p-3">March, 2026</td>
                      <td className="border p-3">April, 2026</td>
                      <td className="border p-3">August, 2026</td>
                      </tr>
                      </tbody>
                      </table>


                      <p className="text-gray-700">
                      The dates provided above are approximate and may vary depending on
                      individual circumstances and official processing times. We strongly
                      recommend prospective students to inquire and confirm all deadlines well
                      in advance to ensure a smooth application process.
                      </p>
                    </div>
                    <h3 className="text-l font-bold mt-10">
                    Cities in Japan Where You Can Apply for Language Schools with Us
                    </h3>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start text-gray-700 mt-4">
                    <div>
                    <p>
                    We help students apply to language schools located in various major
                    cities across Japan. Choose the city that matches your goals, lifestyle,
                    and study plan.
                    </p>


                    <ul className="list-disc px-6 mt-4 space-y-1">
                    <li>Tokyo</li>
                    <li>Shizuoka</li>
                    <li>Hamamatsu</li>
                    <li>Okayama</li>
                    <li>Kobe</li>
                    </ul>
                    </div>


                    <div className="w-full">
                    <img
                    src="/japan_map.jpg"
                    alt="Major cities in Japan"
                    className="rounded-xl shadow-md w-full h-auto"
                    />
                    </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          

          {/* <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Want to visit our office? Schedule an appointment with our counselors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                Schedule Tokyo Visit
              </button>
              <button className="px-6 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors">
                Schedule Yangon Visit
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}