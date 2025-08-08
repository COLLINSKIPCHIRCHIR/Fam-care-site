import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        '+254 726 749 708 ',
        '+254 745 384 301 ',
        
      ]
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: [
        'Famcarerehab@gmail.com (General)',
        
      ]
    },
    {
      icon: MapPin,
      title: 'Office Locations',
      details: [
        'Nakuru: Highway Towers, 4th floor Room 405',
        'Nairobi: Healthcare Center, CBD',
        'Coverage: All 47 Counties in Kenya'
      ]
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 8:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 4:00 PM',
        'Sunday: Emergency Calls Only'
      ]
    }
  ];

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

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        content: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        content: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const quickActions = [
    {
      title: 'Request Product Quote',
      description: 'Get pricing for specific medical equipment',
      action: 'Get Quote',
      color: 'bg-gradient-primary'
    },
    {
      title: 'Schedule Consultation',
      description: 'Book a meeting with our medical equipment experts',
      action: 'Book Meeting',
      color: 'bg-gradient-secondary'
    },
    {
      title: 'Technical Support',
      description: 'Get help with existing equipment or installations',
      action: 'Get Support',
      color: 'bg-gradient-primary'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Ready to partner with Kenya's leading medical equipment supplier? 
            Get in touch with our team for personalized assistance.
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              How Can We Help You Today?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="group cursor-pointer shadow-soft hover:shadow-primary transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-3">{action.title}</h3>
                  <p className="text-muted-foreground mb-4">{action.description}</p>
                  {/*<Button className={`${action.color} text-white hover:opacity-90`}>
                    {action.action}
                  </Button>*/}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Send Us a Message
                </h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+254 XXX XXX XXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Organization
                    </label>
                    <Input
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="Hospital/Clinic name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your requirements, questions, or how we can help you..."
                    rows={6}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending Message...'
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Get In Touch
                </h2>
                <p className="text-lg text-muted-foreground">
                  Multiple ways to reach us for your convenience.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="shadow-soft hover:shadow-primary transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="text-white" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-foreground mb-3">{info.title}</h3>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-muted-foreground">{detail}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Emergency Contact */}
              <Card className="mt-6 border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Badge className="bg-gradient-primary text-white">Emergency</Badge>
                    <h3 className="text-lg font-bold text-foreground">24/7 Emergency Line</h3>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    For urgent medical equipment needs and emergency repairs:
                  </p>
                  <div className="flex items-center space-x-2">
                    <Phone className="text-primary" size={20} />
                    <span className="text-xl font-bold text-primary">+254 726 749 708</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Locations
            </h2>
            <p className="text-lg text-muted-foreground">
              Visit us at our offices in Nakuru and Nairobi, or we can come to you anywhere in Kenya.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Nakuru Office (Headquarters)</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium text-foreground">Highway Towers</p>
                      <p className="text-muted-foreground">4th floor Room 405, Nakuru</p>
                      <p className="text-muted-foreground">P.O. Box 1234-20100, Nakuru</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-primary" size={20} />
                    <span className="text-muted-foreground">+254 745 384 301</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-primary" size={20} />
                    <span className="text-muted-foreground">Famcarerehab@gmail.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Nairobi Office</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium text-foreground">Healthcare Center</p>
                      <p className="text-muted-foreground">Central Business District, Nairobi</p>
                      <p className="text-muted-foreground">P.O. Box 5678-00100, Nairobi</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-primary" size={20} />
                    <span className="text-muted-foreground">+254 726 749 708</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-primary" size={20} />
                    <span className="text-muted-foreground">Famcarerehab@gmail.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't wait! Contact us today and discover how FAMCARE can support your healthcare equipment needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              <MessageSquare className="mr-2" size={20} />
              Start Conversation
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
              <a href="tel:+254792345678" className="flex items-center space-x-2">
                <Phone size={20} />
                <span>Call Now</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;