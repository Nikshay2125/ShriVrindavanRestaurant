
import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Reservation from "@/components/Reservation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // Scroll to top on page load and setup reveal animations
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Setup reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all elements with reveal class
    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="reveal">
        <About />
      </div>
      <div className="reveal">
        <Menu />
      </div>
      <div className="reveal">
        <Gallery />
      </div>
      <div className="reveal">
        <Reservation />
      </div>
      <div className="reveal">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
