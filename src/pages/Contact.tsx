import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Contact = () => {
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

  const quickActions = [
    {
      title: 'Request Product Quote',
      description: 'Get pricing for specific medical equipment',
      color: 'bg-gradient-primary'
    },
    {
      title: 'Schedule Consultation',
      description: 'Book a meeting with our medical equipment experts',
      color: 'bg-gradient-secondary'
    },
    {
      title: 'Technical Support',
      description: 'Get help with existing equipment or installations',
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
                  <a href="https://wa.me/+254726749708?text=urlencodedtext" target='_blank' className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"><button>Chat Whatsapp</button></a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section (Removed Form, Added Map) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map Section */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Find Us on the Map
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Visit our offices or reach us from anywhere in Kenya.
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7695597888787!2d36.07002693546721!3d-0.2832668997151389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18298d96b10c1e6b%3A0xc28dc43cc121646a!2sHighway%20Towers!5e0!3m2!1sen!2ske!4v1755064759647!5m2!1sen!2ske" // Replace with your custom Google Maps embed link
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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
            <a href="https://wa.me/+254726749708?text=urlencodedtext"><Button size="lg" className="bg-green-500 text-white hover:bg-green-600 text-lg px-8 py-6">
              <MessageSquare className="mr-2" size={20} />
              Start Conversation
            </Button></a>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
              <a href="tel:+254726749708" className="flex items-center space-x-2">
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
