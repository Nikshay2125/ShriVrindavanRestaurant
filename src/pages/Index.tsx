
import { useEffect, useState } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Reservation from "@/components/Reservation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  
  // Scroll to top on page load and setup reveal animations
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Handle scroll position
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Setup reveal animations with improved threshold and rootMargin
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { 
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    });
    
    // Observe all elements with reveal class
    document.querySelectorAll('.reveal').forEach(el => {
      // Set initial styles for reveal animation
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar scrollPosition={scrollY} />
      <Hero />
      <div className="reveal transition-all duration-1000 ease-out">
        <About />
      </div>
      <div className="reveal transition-all duration-1000 ease-out delay-100">
        <Menu />
      </div>
      <div className="reveal transition-all duration-1000 ease-out delay-200">
        <Gallery />
      </div>
      <div className="reveal transition-all duration-1000 ease-out delay-300">
        <Reservation />
      </div>
      <div className="reveal transition-all duration-1000 ease-out delay-400">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
