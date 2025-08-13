import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home' , path: '/'},
    { name: 'About Us' , path: '/about'},
    { name: 'Products' , path: '/products'},
    { name: 'Clientele' , path: '/clientele'},
    { name: 'Why Choose Us' , path: '/why-choose-us'},
    { name: 'Contact' , path: '/contact'}
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className='sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            {/* Logo Image */}
            <img
              src={logo}
              alt="Famcare Logo"
              className="w-10 h-10 rounded-lg object-cover"
            />
            
            {/* Logo Text */}
            <div className="hidden sm:block">
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                FAMCARE
              </span>
              <p className="text-xs text-muted-foreground">Medical Supplies</p>
            </div>
          </Link>


          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.path)
                  ? 'text-primary'
                  : 'text-foreground hover:text-primary'
                } `}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className='absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary rounded-full' />
                )}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className='hidden lg:flex items-center space-x-4'>
            <div className='flex items-center space-x-2 text-sm text-muted-foreground'>
              <Phone size={16} />
              <span>+254 726 749708</span>
            </div>
            <a href="https://wa.me/+254726749708?text=urlencodedtext" target='_blank'><Button  variant="default" size="sm" className="bg-gradient-primary">
              Get Quote
            </Button></a>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className='md:hidden border-t border-border'>
            <div className='px-2 pt-2 pb-3 space-y-1 bg-background'>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    isActive(item.path)
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-muted hover:text-primary'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 border-t border-border mt-3 pt-3">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                  <Phone size={16} />
                  <span>+254 792 345 678</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Mail size={16} />
                  <span>info@famcare.co.ke</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation