
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    // Reveal animation for content
    const content = document.querySelector(".hero-content");
    if (content) {
      setTimeout(() => {
        content.classList.add("opacity-100", "translate-y-0");
      }, 200);
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Hero Background with better high-quality image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&auto=format&fit=crop&w=2940&h=1200")',
          backgroundPosition: 'center center'
        }}
      >
        {/* Overlay with improved gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-restaurant-charcoal/70 via-restaurant-charcoal/50 to-restaurant-charcoal/90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto hero-content opacity-0 translate-y-4 transition-all duration-1000 ease-out">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight mb-8">
          <span className="block">Savor the Art of</span>
          <span className="text-restaurant-gold">Fine Dining</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-10 font-light">
          Experience culinary excellence with our seasonal dishes crafted from locally-sourced ingredients. 
          Where tradition meets innovation in every bite.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5">
          <Link to="/reservation">
            <Button size="lg" className="bg-restaurant-gold hover:bg-restaurant-gold/90 text-restaurant-charcoal font-medium text-lg px-8 py-6">
              Book a Table
            </Button>
          </Link>
          <Link to="/menu">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              View Menu
            </Button>
          </Link>
        </div>

        {/* Image thumbnails for visual interest */}
        <div className="hidden md:flex gap-4 mt-16">
          <div className="w-24 h-24 rounded-md overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1546833998-877b37c2e5c6?q=80&auto=format&fit=crop&w=200&h=200" 
              alt="Specialty cocktail" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-24 h-24 rounded-md overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&auto=format&fit=crop&w=200&h=200" 
              alt="Dessert presentation" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-24 h-24 rounded-md overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&auto=format&fit=crop&w=200&h=200" 
              alt="Elegant plated dish" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Improved Scroll Indicator with animation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce bg-white/10 p-2 rounded-full">
        <svg 
          width="28" 
          height="28" 
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
