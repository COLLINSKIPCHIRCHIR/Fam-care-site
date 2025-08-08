import { Building2, Users, Heart, GraduationCap, Dumbbell, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Clientele = () => {
  const clientTypes = [
    {
      icon: Building2,
      title: 'Government Hospitals',
      description: 'National and county hospitals across Kenya',
      count: '150+',
      examples: ['Kenyatta National Hospital', 'Moi Teaching & Referral Hospital', 'Nakuru Level 5 Hospital']
    },
    {
      icon: Heart,
      title: 'Private Hospitals & Clinics',
      description: 'Private healthcare facilities and specialty clinics',
      count: '200+',
      examples: ['Aga Khan Hospital', 'Nairobi Hospital', 'MP Shah Hospital']
    },
    {
      icon: Users,
      title: 'NGOs & Non-Profits',
      description: 'Healthcare-focused NGOs and charitable organizations',
      count: '75+',
      examples: ['Doctors Without Borders', 'Amref Health Africa', 'Flying Doctors Society']
    },
    {
      icon: GraduationCap,
      title: 'Research Institutions',
      description: 'Universities and medical research centers',
      count: '25+',
      examples: ['University of Nairobi', 'Moi University', 'KEMRI']
    },
    {
      icon: Dumbbell,
      title: 'Fitness Centers',
      description: 'Gyms, rehabilitation centers, and sports facilities',
      count: '40+',
      examples: ['Virgin Active', 'Fitness World', 'Local Rehabilitation Centers']
    },
    {
      icon: Shield,
      title: 'Emergency Services',
      description: 'Ambulance services and emergency response teams',
      count: '15+',
      examples: ['St. John Ambulance', 'Emergency Plus Medical Services', 'Red Cross Kenya']
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Wanjiku',
      position: 'Chief Medical Officer',
      organization: 'Nakuru Level 5 Hospital',
      quote: 'FAMCARE has been our trusted partner for over 3 years. Their quality products and reliable service have significantly improved our patient care capabilities.',
      rating: 5
    },
    {
      name: 'James Karanja',
      position: 'Procurement Manager',
      organization: 'Amref Health Africa',
      quote: 'The team at FAMCARE understands our unique needs as an NGO. They provide cost-effective solutions without compromising on quality.',
      rating: 5
    },
    {
      name: 'Dr. Michael Ochieng',
      position: 'Head of Physiotherapy',
      organization: 'Moi Teaching & Referral Hospital',
      quote: 'Exceptional service and high-quality rehabilitation equipment. FAMCARE has helped us establish a world-class physiotherapy department.',
      rating: 5
    }
  ];

  const sectors = [
    {
      title: 'Public Healthcare',
      percentage: 40,
      description: 'Government hospitals and health centers'
    },
    {
      title: 'Private Healthcare',
      percentage: 35,
      description: 'Private hospitals, clinics, and medical centers'
    },
    {
      title: 'NGOs & Development',
      percentage: 15,
      description: 'Non-profit organizations and development agencies'
    },
    {
      title: 'Research & Education',
      percentage: 10,
      description: 'Universities, research institutions, and training centers'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Clientele
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Trusted by over 500+ healthcare institutions across Kenya. From government hospitals 
            to private clinics, we serve diverse healthcare needs with excellence.
          </p>
        </div>
      </section>

      {/* Client Overview Stats */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Impact Across Kenya
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Total Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">47</div>
              <div className="text-muted-foreground">Counties Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Equipment Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4+</div>
              <div className="text-muted-foreground">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Who We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our diverse client base spans across the entire healthcare ecosystem in Kenya.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientTypes.map((client, index) => (
              <Card key={index} className="group cursor-pointer shadow-soft hover:shadow-primary transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <client.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{client.title}</h3>
                      <div className="text-2xl font-bold text-primary">{client.count}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{client.description}</p>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-foreground">Notable Clients:</p>
                    {client.examples.map((example, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">• {example}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Distribution */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Client Distribution by Sector
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our balanced client portfolio across different healthcare sectors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {sectors.map((sector, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{sector.title}</span>
                    <span className="text-primary font-bold">{sector.percentage}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div 
                      className="bg-gradient-primary h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${sector.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-muted-foreground">{sector.description}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold text-foreground mb-6">Why Healthcare Institutions Choose Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Quality assurance and certified products</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Competitive pricing and flexible payment terms</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Fast delivery and reliable logistics</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Comprehensive after-sales support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Technical training and consultation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from healthcare professionals who trust FAMCARE for their medical equipment needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-soft hover:shadow-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-5 h-5 bg-gradient-primary rounded-sm mr-1"></div>
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t border-border pt-4">
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.position}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.organization}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Growing Family?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Become part of our extensive network of satisfied healthcare institutions. 
            Let us support your mission to provide excellent patient care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Become Our Partner
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Request Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clientele;