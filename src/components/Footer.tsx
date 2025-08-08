import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='bg-gradient-subtle border-t border-border'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Company Info 8 */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-3'>
              <div className='w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center '>
                <span className='text-primary-foreground font-bold text-xl'>F</span>
              </div>
              <div>
                <span className='text-xl font-bold bg-gradient-primary bg-clip-text text-transparent'>
                  FAMCARE
                </span>
                <p className='text-xs text-muted-foreground'>Medical Supplies</p>
              </div>
            </div>
            <p className='text-sm text-muted-foreground leading-relaxed'>
              Leading provider of quality medical equipment and supplies in kenya.
              Serving hospitals, clinics, and healthcare institutions since 2020.
            </p>
            <div className='flex space-x-4'>
              <a href="#" className='text-muted-foreground hover:text-primary transition-colors'>
                <Facebook size={20} />
              </a>
              <a href="#" className='text-muted-foreground hover:text-primary transition-colors'>
                <Twitter size={20} />
              </a>
              <a href="#" className='text-muted-foreground hover:text-primary transition-colors'>
                <Linkedin size={20} />
              </a>
              <a href="#" className='text-muted-foreground hover:text-primary transition-colors'>
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-foreground'>Quick Links</h3>
            <ul className='space-y-2'>
              <li><Link to="/about" className='text-sm text-muted-forground hover:text-primary transition-colors'>About Us</Link></li>
              <li><Link to="/products" className='text-sm text-muted-forground hover:text-primary transition-colors'>Products</Link></li>
              <li><Link to="/clientele" className='text-sm text-muted-forground hover:text-primary transition-colors'>Clientele</Link></li>
              <li><Link to="/why-choose-us" className='text-sm text-muted-forground hover:text-primary transition-colors'>Why Choose Us</Link></li>
              <li><Link to="/contact" className='text-sm text-muted-forground hover:text-primary transition-colors'>Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-foreground'>Our Products</h3>
            <ul className='space-y-2'>
              <li className='text-sm text-muted-foreground '>Surgical Equipment</li>
              <li className='text-sm text-muted-foreground '>Orthopedic Equipment</li>
              <li className='text-sm text-muted-foreground '>Physiotherapy Equipment</li>
              <li className='text-sm text-muted-foreground '>Sports & Fitness</li>
              <li className='text-sm text-muted-foreground '>Ambulance Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-foreground'>Contact Info</h3>
            <div className='space-y-3'>
              <div className='flex items-start space-x-3'>
                <MapPin size={16} className='text-primary mt-1 flex-shrink-0' />
                <div className='text-sm text-muted-foreground'>
                  <p>Nakuru Office:</p>
                  <p>Highway Towers, 4th floor Room 405</p>
                  <p className='mt-2'>Nairobi office:</p>
                  <p>Healthcare Center, CBD</p>
                </div>
              </div>
              <div className='flex items-center space-x-3'>
                <Phone size={16} className='text-primary' />
                <span className='text-sm text-muted-foreground'> +254 745 384 301</span>
              </div>
              <div className='flex items-center space-x-3'>
                <Mail size={16} className='text-primary' />
                <span className='text-sm text-muted-foreground'>Famcarerehab@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-border mt-8 pt-8 text-center'>
          <p className='text-sm text-muted-foreground'>
            © 2025 FAMCARE Rehab $ Medical Supplies Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer