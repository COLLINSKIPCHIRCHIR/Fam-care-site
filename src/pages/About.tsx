import { Heart, Users, Award, Target, Shield, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Quality First',
      description: 'We prioritize quality in every product we supply, ensuring reliability and safety for healthcare providers.'
    },
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'Building lasting relationships through transparent business practices and ethical standards.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Our customers are at the center of everything we do, from product selection to after-sales support.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing new technologies and innovative solutions to advance healthcare delivery.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Striving for excellence in service delivery and maintaining the highest professional standards.'
    },
    {
      icon: Target,
      title: 'Accessibility',
      description: 'Making quality medical equipment accessible and affordable to healthcare institutions of all sizes.'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Company Foundation',
      description: 'FAMCARE Rehab & Medical Supplies Ltd was established in February 2020 with a vision to transform healthcare delivery in Kenya.'
    },
    {
      year: '2021',
      title: 'Expansion to Nairobi',
      description: 'Opened our second office in Nairobi to better serve the growing demand in the capital and surrounding regions.'
    },
    {
      year: '2022',
      title: 'Partnership Growth',
      description: 'Established partnerships with leading international medical equipment manufacturers and expanded our product portfolio.'
    },
    {
      year: '2023',
      title: 'Digital Transformation',
      description: 'Launched our digital platform to streamline ordering processes and improve customer experience.'
    },
    {
      year: '2024',
      title: 'Regional Leadership',
      description: 'Became a recognized leader in medical equipment supply, serving over 500+ healthcare institutions across Kenya.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About FAMCARE
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in healthcare excellence. Providing quality medical equipment 
            and supplies to healthcare institutions across Kenya since 2020.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                About Us
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                   FAMCARE REHAB & MEDICAL SUPPLIES LIMITED (FRAMs Ltd) is a dynamic and
                   rapidly growing supplier of medical equipment, committed to improving the
                    quality of healthcare in Kenya and the wider East African region. Since its inception
                    in 2020, FRAMs Ltd has made a significant mark in the medical supplies industry,
                    focusing on providing high-quality products across a variety of sectors including
                    surgical, orthopedic, laboratory, and rehabilitation equipment.
                    </p>
                <p>
                  With our strong presence in both Nakuru and Nairobi, FAMCARE's commitment
                   extends beyond mere product delivery. We are a partner in enhancing patient care
                   and medical services through the provision of affordable and reliable medical
                   supplies. We cater to hospitals, clinics, rehabilitation centers, sports facilities, and
                   government and non-government organizations, ensuring that all our clients
                   receive the best in quality products and exceptional customer service.
                 </p>
                <p>
                  We specialize in delivering a comprehensive range of medical solutions designed
                 to meet the diverse needs of healthcare providers. Whether it's state-of-the-art
                  surgical instruments, mobility aids for rehabilitation, or diagnostic tools for
                  laboratories, we pride ourselves on supplying equipment that meets the highest
                   standards of quality, safety, and functionality.
                  
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-white/80">Healthcare Institutions Served</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">10K+</div>
                    <div className="text-white/80">Products Delivered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">2</div>
                    <div className="text-white/80">Major Cities</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">24hr</div>
                    <div className="text-white/80">Fast Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Mission & Vision
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-soft hover:shadow-primary transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To provide high-quality, affordable medical equipment and supplies that enhance healthcare 
                  delivery and improve patient outcomes across Kenya's healthcare sector. We are committed 
                  to supporting healthcare professionals with reliable tools and exceptional service.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft hover:shadow-secondary transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To be the leading provider of medical equipment and supplies in East Africa, 
                  recognized for excellence, innovation, and commitment to healthcare advancement. 
                  We envision a future where quality healthcare is accessible to all.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These values guide everything we do and shape our commitment to excellence in healthcare support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group cursor-pointer shadow-soft hover:shadow-primary transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From our humble beginnings to becoming a trusted leader in medical equipment supply.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-primary"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="shadow-soft hover:shadow-primary transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">{item.year}</span>
                          </div>
                          <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background"></div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;