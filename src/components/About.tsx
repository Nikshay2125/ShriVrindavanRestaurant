
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const revealRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      revealRefs.current.forEach((ref) => {
        if (ref) {
          const top = ref.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          if (top < windowHeight * 0.75) {
            ref.classList.add('active');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image */}
          <div className="lg:w-1/2" ref={addToRefs}>
            <div className="reveal relative">
              <img
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&auto=format&fit=crop"
                alt="Chef preparing a gourmet dish"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-restaurant-gold w-32 h-32 rounded-lg flex items-center justify-center p-4">
                <p className="text-restaurant-charcoal text-center font-display text-lg">
                  <span className="block font-bold">15</span>
                  <span className="text-sm">Years of Excellence</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:w-1/2 space-y-6" ref={addToRefs}>
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-restaurant-charcoal mb-2">Our Culinary Story</h2>
              <div className="w-24 h-1 bg-restaurant-burgundy mb-6"></div>
              
              <p className="text-gray-700 mb-4">
                Culinary Canvas was born from a passion for artful cuisine and memorable dining experiences. 
                Established in 2010, our restaurant brings together traditional techniques and contemporary 
                innovation to create dishes that are both familiar and surprising.
              </p>
              
              <p className="text-gray-700 mb-6">
                Led by award-winning Chef Maria Rodriguez, our kitchen team sources the finest seasonal 
                ingredients from local farmers and producers. We believe that great food begins with great 
                ingredients, treated with respect and prepared with skill.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-display font-bold text-restaurant-charcoal mb-2">Our Mission</h3>
                  <p className="text-gray-700">To create unforgettable culinary experiences that honor ingredients and tradition.</p>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-restaurant-charcoal mb-2">Our Vision</h3>
                  <p className="text-gray-700">To be a destination where food, art, and community come together.</p>
                </div>
              </div>
              
              <Link to="/about">
                <Button className="bg-restaurant-burgundy hover:bg-restaurant-burgundy/90 text-white">
                  Read Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
