import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    currentLevel: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    toast.success('Thank you for your inquiry! We\'ll contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', interest: '', currentLevel: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Contact Us</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Ready to start your journey to Japan? Get in touch with our expert counselors for personalized guidance
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2 mt-3">Admissions</p>
                  <p className="font-medium">zinapexeducation@gmail.com</p>
                </CardContent>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">Myanmar Office</p>
                  <p className="font-medium">+95 9 982626367 / +95 9 756367766</p>
                </CardContent>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5" />
                    Visit Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">Mandalay Office</p>
                  <p className="text-sm mb-3">ADDRESS - 85/5,3rd FLOOR, 78st x 79st Btw , 38 B st , MAHAAUNGMYAY TSP , MANDALAY</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Get Free Consultation</CardTitle>
                  <CardDescription>
                    Fill out this form and our expert counselors will contact you within 24 hours to discuss your Japanese education goals.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your Full Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+95-XXX-XXX-XXX"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="interest" className="block text-sm mb-2">
                          I'm interested in *
                        </label>
                        <Select value={formData.interest} onValueChange={(value: string) => handleSelectChange('interest', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your interest" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="japanese-language">Japanese Language Courses</SelectItem>
                            <SelectItem value="visa-support">Visa Support</SelectItem>
                            <SelectItem value="university-application">University Application</SelectItem>
                            <SelectItem value="scholarship">Scholarship Guidance</SelectItem>
                            <SelectItem value="consultation">General Consultation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="currentLevel" className="block text-sm mb-2">
                        Current Japanese Level
                      </label>
                      <Select value={formData.currentLevel} onValueChange={(value: string) => handleSelectChange('currentLevel', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your current level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Complete Beginner</SelectItem>
                          <SelectItem value="n5">N5 Level</SelectItem>
                          <SelectItem value="n4">N4 Level</SelectItem>
                          <SelectItem value="n3">N3 Level</SelectItem>
                          <SelectItem value="n2">N2 Level</SelectItem>
                          <SelectItem value="n1">N1 Level</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm mb-2">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your goals, timeline, preferred universities, or any specific questions you have..."
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Send Inquiry
                    </Button>

                    <p className="text-xs text-muted-foreground">
                      By submitting this form, you agree to receive communications from Zin Apex Education. 
                      We respect your privacy and will never share your information with third parties.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}