import React from 'react'
import { ArrowRight, CheckCircle, Users, Award, Clock, Phone ,MessageSquare} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '/images/hero-image2.jpg';
import rehabImage from '/images/physiotherapy.png';
import surgicalImage from '/images/medical.png';
import orthopedicImage from '/images/orthopedic.png';
import sports from '/images/sports.png';
import ambulance from '/images/ambulance.png';

const Home: React.FC = () => {
  const productCategories = [
    {
      title: 'Surgical & Medical Equipment',
      description: 'Professional surgical instruments and medical devices',
      image: surgicalImage,
      link: '/products#surgical'
    },
    {
      title: 'Orthopedic Equipment',
      description: 'Comprehensive orthopedic supplies and mobility aids',
      image: orthopedicImage,
      link: '/products#orthopedic'
    },
    {
      title: 'Physiotherapy & Rehabilitation Equipment',
      description: 'Complete rehabilitation and physiotherapy equipment',
      image: rehabImage,
      link: '/products#physiotherapy'
    },
     {
      title: 'Sports And Fitness Equipment',
      description: 'Complete rehabilitation and physiotherapy equipment',
      image: sports,
      link: '/products#physiotherapy'
    },
     {
      title: 'Emergency Ambulance Services',
      description: 'Complete rehabilitation and physiotherapy equipment',
      image: ambulance ,
      link: '/products#physiotherapy'
    },
     
  ];

  const stats = [
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Award, label: 'Years Experience', value: '4+' },
    { icon: CheckCircle, label: 'Products Delivered', value: '10K+' },
    { icon: Clock, label: 'Fast Delivery', value: '24hr' }
  ];

  return (
    <div className='min-h-screen'>
      {/* hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {/* keep your gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60 " />
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center max-w-full px-4 text-center">
          <div className="animate-fade-in space-y-6 md:space-y-8">
              <p className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed max-w-3xl mx-auto">
                <span className="text-white">Trusted partner for </span>
                <span className="text-yellow-400">hospitals, clinics</span>
                <span className="text-white">, and </span>
                <span className="text-cyan-300">healthcare institutions</span>
                <span className="text-white"> across Kenya.</span>
                 <br className="hidden sm:block" />
                <span className="text-pink-300 block mt-2 text-lg sm:text-xl">Professional medical equipment since 2020.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white hover:bg-gray-100 text-lg px-8 py-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <Link to="/products" className="flex items-center space-x-2 text-gray-900">
                    <span>Explore Products</span>
                    <ArrowRight size={20} />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                  <a href="https://wa.me/+254726749708?text=urlencodedtext" target='_blank' className="flex items-center space-x-2">
                    <Phone size={20} />
                    <span>Get Quote</span>
                  </a>
                </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Mission & Vision
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Dedicated to improving healthcare delivery across Kenya through quality medical equipment and exceptional service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-soft hover:shadow-primary transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                   To empower healthcare professionals by providing top-quality, cost
                  effective medical equipment, combined with unmatched customer
                  support and rapid delivery, ensuring that healthcare providers have
                   the tools they need to provide exceptional care to their communities.
                </p>
              </CardContent>
            </Card>

             <Card className="shadow-soft hover:shadow-secondary transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mb-6">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading provider of high-quality, affordable
                   medical equipment in Kenya, East Africa, and beyond,
                  playing a crucial role in improving healthcare outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Products Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive range of medical equipment and supplies for all your healthcare needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="group cursor-pointer overflow-hidden shadow-soft hover:shadow-primary transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-primary/20 group-hover:bg-gradient-primary/40 transition-all duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{category.title}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <Link 
                    to={category.link} 
                    className="inline-flex items-center space-x-2 text-primary hover:text-primary-light transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a personalized quote and discover how we can support your healthcare needs.
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
  )
}

export default Home