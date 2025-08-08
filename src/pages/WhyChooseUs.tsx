import { CheckCircle, Shield, Clock, DollarSign, Users, Wrench, Award, Truck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
//import { Badge } from '@/components/ui/badge';

const WhyChooseUs = () => {
  const mainReasons = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'All our products meet international quality standards and are sourced from certified manufacturers.',
      benefits: ['ISO Certified Products', 'Quality Testing', 'Warranty Coverage', 'Compliance Standards']
    },
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Affordable pricing without compromising quality, with flexible payment options for institutions.',
      benefits: ['Best Market Prices', 'Bulk Discounts', 'Flexible Payment Terms', 'Value for Money']
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery across Kenya with efficient logistics and supply chain management.',
      benefits: ['24-Hour Delivery', 'Nationwide Coverage', 'Real-time Tracking', 'Emergency Rush Orders']
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated customer support team with medical equipment expertise to assist you every step of the way.',
      benefits: ['Technical Consultation', '24/7 Support', 'Training Programs', 'Installation Assistance']
    }
  ];

  const additionalBenefits = [
    {
      icon: Wrench,
      title: 'After-Sales Service',
      description: 'Comprehensive maintenance and repair services to ensure your equipment operates at peak performance.'
    },
    {
      icon: Award,
      title: 'Industry Experience',
      description: 'Over 4 years of specialized experience in the medical equipment industry in Kenya.'
    },
    {
      icon: Truck,
      title: 'Reliable Logistics',
      description: 'Professional logistics team ensuring safe and timely delivery of sensitive medical equipment.'
    },
    {
      icon: CheckCircle,
      title: 'Customer Satisfaction',
      description: '98% customer satisfaction rate with over 500+ healthcare institutions served successfully.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Our experts assess your specific medical equipment needs and requirements.'
    },
    {
      step: '02',
      title: 'Quotation',
      description: 'Receive detailed quotations with competitive pricing and flexible payment options.'
    },
    {
      step: '03',
      title: 'Delivery',
      description: 'Fast and secure delivery with professional handling of sensitive medical equipment.'
    },
    {
      step: '04',
      title: 'Support',
      description: 'Ongoing support including training, maintenance, and technical assistance.'
    }
  ];

  const certifications = [
    'ISO 9001:2015 Quality Management',
    'ISO 13485 Medical Devices',
    'Kenya Bureau of Standards (KEBS)',
    'Medical Devices Authority Kenya',
    'East African Standards (EAS)',
    'World Health Organization (WHO) Standards'
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose FAMCARE?
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover what makes us the preferred partner for healthcare institutions across Kenya. 
            Excellence, reliability, and innovation in every interaction.
          </p>
        </div>
      </section>

      {/* Main Reasons */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Four Pillars of Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Built on the foundation of quality, affordability, speed, and expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {mainReasons.map((reason, index) => (
              <Card key={index} className="group cursor-pointer shadow-soft hover:shadow-primary transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <reason.icon className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{reason.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    {reason.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {reason.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Additional Benefits
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Going beyond the basics to provide comprehensive healthcare equipment solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <Card key={index} className="group text-center shadow-soft hover:shadow-primary transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A streamlined approach to serving your medical equipment needs efficiently and effectively.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-primary transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative text-center">
                  <div className="relative z-10 bg-background">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Certifications & Standards
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our commitment to quality is backed by recognized certifications and adherence to international standards.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((certification, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-soft hover:shadow-primary transition-all duration-300">
                <CheckCircle className="text-primary flex-shrink-0" size={20} />
                <span className="text-foreground font-medium">{certification}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Proven Track Record
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Numbers that demonstrate our commitment to excellence and customer satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">24hr</div>
              <div className="text-muted-foreground">Average Delivery Time</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-muted-foreground">Healthcare Partners</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">4+</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience the FAMCARE Difference
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of healthcare institutions that trust us for their medical equipment needs. 
            Let us show you why we're the preferred choice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;