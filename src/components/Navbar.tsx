
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 lg:px-8',
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-restaurant-burgundy font-display text-3xl font-bold">
          Culinary Canvas
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={cn(
                'font-medium transition-colors duration-200',
                isScrolled ? 'text-restaurant-charcoal hover:text-restaurant-burgundy' : 'text-white hover:text-restaurant-gold'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/reservation">
            <Button 
              className={cn(
                'transition-all duration-200',
                isScrolled 
                  ? 'bg-restaurant-burgundy hover:bg-restaurant-burgundy/90 text-white' 
                  : 'bg-restaurant-gold hover:bg-restaurant-gold/90 text-restaurant-charcoal'
              )}
            >
              Book a Table
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-restaurant-burgundy"
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-restaurant-charcoal hover:text-restaurant-burgundy font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/reservation" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full bg-restaurant-burgundy hover:bg-restaurant-burgundy/90 text-white">
                Book a Table
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
