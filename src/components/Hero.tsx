
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&auto=format&fit=crop")', 
          backgroundPosition: 'center 30%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-restaurant-charcoal/80 via-restaurant-charcoal/50 to-restaurant-charcoal/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
          <span className="block">Savor the Art of</span>
          <span className="text-restaurant-gold">Fine Dining</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8 font-light">
          Experience culinary excellence with our seasonal dishes crafted from locally-sourced ingredients. 
          Where tradition meets innovation in every bite.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/reservation">
            <Button size="lg" className="bg-restaurant-gold hover:bg-restaurant-gold/90 text-restaurant-charcoal font-medium">
              Book a Table
            </Button>
          </Link>
          <Link to="/menu">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10"
            >
              View Menu
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path 
            d="M7 13L12 18L17 13" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M7 7L12 12L17 7" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
