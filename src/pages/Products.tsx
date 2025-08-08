import { useState } from 'react';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import surgicalImage from '@/assets/stethoscopes.jpg';
import orthopedicImage1 from '@/assets/wheelchair.jpg';
import rehabImage2 from '@/assets/physiotherapy.jpg';
import sportImage1 from '@/assets/connector.jpg';
import sportImage2 from '@/assets/dumbells.jpg';
import sportImage3 from '@/assets/treadmills.jpg';
import sportImage4 from '@/assets/yoga.jpg';
import sportImage5 from '@/assets/chest expander.jpg';
import patientMonitorImage from '@/assets/patientmonitor.jpg';
import autoclaveImage from '@/assets/autoclave-machine.jpg';
import instrumentImage from '@/assets/surgical-instruments.jpg';
import operatingImage from '@/assets/surgical-table-and-operating-light.jpg';
import orthopedicImage2 from '@/assets/prosthetic.jpg';
import orthopedicImage3 from '@/assets/walking aids.jpg';
import ambulanceImage from '@/assets/ambulance.png';
import rehabImage1 from '@/assets/physiotherapy2.jpg';
import rehabImage3 from '@/assets/physiotherapy3.jpg';
const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', count: 150 },
    { id: 'surgical', name: 'Surgical & Medical Equipment', count: 45 },
    { id: 'orthopedic', name: 'Orthopedic Equipment', count: 15 },
    { id: 'physiotherapy', name: 'Physiotherapy & Rehabilitation', count: 40 },
    { id: 'sports', name: 'Sports & Fitness Equipment', count: 20 },
    { id: 'ambulance', name: 'Emergency Ambulance Services', count: 10 }
  ];

  const products = [
    {
      id: 1,
      name: 'Stethoscopes',
      category: 'surgical',
      image: surgicalImage,
      description: 'Gain a clear, accurate reading of every heartbeat and breath with our premium stethoscope.',
      features: ['LCD Display', 'Memory Function', 'Irregular Heartbeat Detection']
    },
    {
      id: 2,
      name: 'Autoclave & Sterilizers',
      category: 'surgical',
      image: autoclaveImage,
      description: 'Achieve total sterilization and peace of mind with our high-pressure steam sterilizers.',
      features: ['LCD Display', 'Memory Function', 'Irregular Heartbeat Detection']
    },
    {
      id: 3,
      name: 'Surgical table & operating lights',
      category: 'surgical',
      image: operatingImage,
      description: 'Provide a brighter and more precise surgical experience with our advanced tables and lights',
      features: ['LCD Display', 'Memory Function', 'Irregular Heartbeat Detection']
    },
    {
      id: 4,
      name: 'Surgical Instruments',
      category: 'surgical',
      image: instrumentImage,
      description: 'Empower surgeons with the precision, reliability, and durability of our high-quality surgical instruments.',
      features: ['LCD Display', 'Memory Function', 'Irregular Heartbeat Detection']
    },

     {
      id: 5,
      name: 'Patient Monitors',
      category: 'surgical',
      image: patientMonitorImage,
      description: 'Patient monitors offer continuous vital sign data for informed clinical decisions, improving patient safety and outcomes',
      features: ['Stainless Steel', 'Autoclave Safe', '25-piece Set']
    },
    {
      id: 6,
      name: 'Wheelchairs',
      category: 'orthopedic',
      image: orthopedicImage1,
      description: 'Wheelchairs enhance mobility and independence for users',
      features: ['Adjustable Fit', 'Breathable Material', 'Side Stabilizers']
    },
    {
      id: 7,
      name: 'Prosthetic devices',
      category: 'orthopedic',
      image: orthopedicImage2,
      description: 'Prosthetic devices replace missing body parts to restore function and mobility.',
      features: ['Height Adjustable', 'Lightweight', 'Rubber Tips']
    },
     {
      id: 7,
      name: 'Walking Aids',
      category: 'orthopedic',
      image: orthopedicImage3,
      description: 'Walking aids, such as canes, crutches, and walkers, provide support to improve balance, stability, and safety while moving',
      features: ['Height Adjustable', 'Lightweight', 'Rubber Tips']
    },
    {
      id: 8,
      name: 'Rehab Equipment',
      category: 'physiotherapy',
      image: rehabImage1,
      description: 'Rehabilitation equipment is used in physical therapy to help people recover from injuries or illnesses by improving function and mobility',
      features: ['Anti-burst', 'Multiple Sizes', 'Includes Pump']
    },
    {
      id: 6,
      name: 'Physiotherapy Equipment',
      category: 'physiotherapy',
      image: rehabImage2,
      description: 'Physiotherapy equipment aids in physical therapy to restore function, reduce pain, and improve mobility.',
      features: ['Digital Display', 'Multiple Frequencies', 'Timer Function']
    },
    {
      id: 7,
      name: 'Rehab Equipment',
      category: 'sports',
      image: rehabImage3,
      description: 'A complete resistance band set offers multiple resistance levels for a wide variety of strength training and rehabilitation exercises.',
      features: ['5 Resistance Levels', 'Door Anchor', 'Exercise Guide']
    },
    {
      id: 8,
      name: 'Planer fasciitis and Toe connectors',
      category: 'sports',
      image: sportImage1,
      description: 'Designed for all-day comfortand fast recoverToe connectors can alleviate plantar fasciitis by realigning toes and reducing strain on the inflamed ligament.',
      features: ['5 Resistance Levels', 'Door Anchor', 'Exercise Guide']
    },
    {
      id: 9,
      name: 'Adjustible dumbells with connectors',
      category: 'sports',
      image: sportImage2,
      description: 'Compact, customizable weights that convert into a barbell for full-body workouts—perfect for home fitness',
      features: ['5 Resistance Levels', 'Door Anchor', 'Exercise Guide']
    },
    {
      id: 10,
      name: 'Exercise bikes and Treadmills',
      category: 'sports',
      image: sportImage3,
      description: 'Cardio essentials for effective indoor workouts—build endurance, burn calories, and stay fit anytime',
      features: ['5 Resistance Levels', 'Door Anchor', 'Exercise Guide']
    },
    {
      id: 11,
      name: 'Swiss ball  and Yoga mat',
      category: 'sports',
      image: sportImage4,
      description: 'Essential fitness duo for core strength, balance, and flexibility. Perfect for yoga, pilates, and home workouts',
      features: ['5 Resistance Levels', 'Door Anchor', 'Exercise Guide']
    },
    {
      id: 12,
      name: 'Chest expanders And Pro racing bikes',
      category: 'sports',
      image: sportImage5,
      description: 'Build upper body strength and boost cardio performance with this powerful fitness combo.',
      features: ['5 Resistance Levels', 'Door Anchor', 'Exercise Guide']
    },
     {
      id: 12,
      name: 'Ambulance Services',
      category: 'sports',
      image: ambulanceImage,
      description: 'Ambulance services provide urgent, pre-hospital medical care and transportation to people with serious illnesses or injuries.',
      features: ['5 Resistance Levels', 'Door Anchor', 'Exercise Guide']
    },
    
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Products
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Comprehensive range of medical equipment and supplies for all your healthcare needs. 
            Quality products from trusted manufacturers worldwide.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Filter by category:</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Categories */}
            <div className="lg:w-1/4">
              <div className="sticky top-24">
                <h3 className="text-lg font-semibold text-foreground mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-gradient-primary text-white'
                          : 'bg-muted hover:bg-muted/80 text-foreground'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{category.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-foreground">
                  {selectedCategory === 'all' 
                    ? 'All Products' 
                    : categories.find(c => c.id === selectedCategory)?.name
                  }
                </h3>
                <p className="text-muted-foreground">
                  {filteredProducts.length} products found
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="group cursor-pointer overflow-hidden shadow-soft hover:shadow-primary transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-primary/20 group-hover:bg-gradient-primary/40 transition-all duration-300" />
                      <Badge className="absolute top-2 right-2 bg-white text-primary">
                        {categories.find(c => c.id === product.category)?.name.split(' ')[0]}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        {/*<span className="text-lg font-bold text-primary">{product.price}</span>*/}
                      </div>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {product.description}
                      </p>
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-1">
                          {product.features.map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        <Button 
                          className="w-full bg-gradient-primary hover:opacity-90"
                          size="sm"
                        >
                          <span>Request Quote</span>
                          <ArrowRight size={16} className="ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground mb-4">
                    No products found matching your criteria.
                  </p>
                  <Button 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    variant="outline"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-no-repeat bg-cover bg-center min-h-screen"
  style={{
    backgroundImage: "url('/FAMCARE_Page_8_Image.png')",
  }}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white/80 backdrop-blur-sm rounded-xl p-10">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
      Need Something Specific?
    </h2>
    <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
      Can't find what you're looking for? Our team can source specialized medical equipment 
      to meet your specific requirements.
    </p>
    <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg px-8 py-4 rounded-xl shadow-lg hover:opacity-90 transition">
      Contact Our Specialists
    </button>
  </div>
</section>

    </div>
  );
};

export default Products;