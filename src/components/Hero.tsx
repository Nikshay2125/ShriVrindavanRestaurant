
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Reveal animation for content
    const content = document.querySelector(".hero-content");
    if (content) {
      setTimeout(() => {
        content.classList.add("opacity-100", "translate-y-0");
      }, 200);
    }
    
    // Set the loaded state after a short delay to trigger animations
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Hero Background with animation */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-20000 ease-in-out ${isLoaded ? 'scale-110' : 'scale-100'}`}
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&auto=format&fit=crop&w=2940&h=1200")',
          backgroundPosition: 'center center'
        }}
      >
        {/* Overlay with improved gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-restaurant-charcoal/80 via-restaurant-charcoal/60 to-restaurant-charcoal/90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto hero-content opacity-0 translate-y-4 transition-all duration-1000 ease-out">
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight mb-8 ${isLoaded ? 'animate-[fadeInDown_1.2s_ease-out]' : ''}`}>
          <span className="block">Savor the Art of</span>
          <span className="text-restaurant-gold">Fine Dining</span>
        </h1>
        
        <p className={`text-xl md:text-2xl text-white/90 max-w-2xl mb-10 font-light ${isLoaded ? 'animate-[fadeIn_1.5s_ease-out]' : ''}`}>
          Experience culinary excellence with our seasonal dishes crafted from locally-sourced ingredients. 
          Where tradition meets innovation in every bite.
        </p>
        
        <div className={`flex flex-col sm:flex-row gap-5 ${isLoaded ? 'animate-[fadeInUp_1.8s_ease-out]' : ''}`}>
          <Link to="/reservation">
            <Button size="lg" className="bg-restaurant-gold hover:bg-restaurant-gold/90 text-restaurant-charcoal font-medium text-lg px-8 py-6 animate-pulse">
              Book a Table
            </Button>
          </Link>
          <Link to="/menu">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-restaurant-charcoal bg-white hover:bg-transparent hover:text-white hover:border-white transition-colors duration-300 text-lg px-8 py-6"
            >
              View Menu
            </Button>
          </Link>
        </div>

        {/* Removed image thumbnails section */}
      </div>
      
      {/* Improved Scroll Indicator with animation */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce bg-white/20 p-3 rounded-full ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-1000`}>
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
