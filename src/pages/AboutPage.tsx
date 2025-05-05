
import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 bg-restaurant-charcoal">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">Our Story</h1>
          <div className="w-24 h-1 bg-restaurant-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-white/80">
            Discover the passion and people behind Culinary Canvas, where gastronomy meets artistry.
          </p>
        </div>
      </div>
      
      {/* Story Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-restaurant-charcoal mb-4">Our Beginnings</h2>
              <div className="w-16 h-1 bg-restaurant-burgundy mb-6"></div>
              <p className="text-gray-700 mb-4">
                Founded in 2010 by Chef Maria Rodriguez and restaurateur James Chen, Culinary Canvas began as a 
                small supper club in the heart of downtown. What started as intimate gatherings of food enthusiasts 
                quickly gained a reputation for innovative cuisine and impeccable service.
              </p>
              <p className="text-gray-700 mb-4">
                After two years of sold-out events, we opened our first permanent location in 2012. The vision was simple: 
                create a restaurant where every dish is approached as a work of art, where flavors, textures, and presentation 
                come together to create a memorable dining experience.
              </p>
              <p className="text-gray-700">
                Over the years, we've grown from a team of five passionate individuals to a family of over thirty dedicated 
                professionals, all committed to culinary excellence and creating moments of joy for our guests.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&auto=format&fit=crop" 
                alt="Restaurant interior" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Chef Profile */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&auto=format&fit=crop" 
                alt="Chef Maria Rodriguez" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-display font-bold text-restaurant-charcoal mb-4">Meet Chef Maria</h2>
              <div className="w-16 h-1 bg-restaurant-burgundy mb-6"></div>
              <p className="text-gray-700 mb-4">
                Chef Maria Rodriguez brings over 20 years of culinary expertise to Culinary Canvas. After training at the 
                prestigious Culinary Institute of America and working in Michelin-starred restaurants across Europe, she 
                returned home with a vision to create something truly special.
              </p>
              <p className="text-gray-700 mb-4">
                Her philosophy is rooted in respecting ingredients, honoring traditional techniques, and embracing 
                innovation. Each dish on our menu reflects her commitment to seasonality and her belief that dining 
                should be an experience that engages all the senses.
              </p>
              <p className="text-gray-700">
                "Food is a universal language that brings people together. At Culinary Canvas, we speak this language 
                through thoughtfully crafted dishes that tell a story and create connections." - Chef Maria Rodriguez
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Philosophy */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-restaurant-charcoal mb-4">Our Philosophy</h2>
            <div className="w-24 h-1 bg-restaurant-burgundy mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-display font-bold text-restaurant-charcoal mb-4">Seasonal & Local</h3>
              <p className="text-gray-700">
                We believe the best flavors come from ingredients at their peak. Our menu changes with the seasons, 
                highlighting the finest produce from local farmers and artisans.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-display font-bold text-restaurant-charcoal mb-4">Artistry & Innovation</h3>
              <p className="text-gray-700">
                Each dish is thoughtfully designed to balance tradition with creativity. We approach cooking as an 
                art form, where presentation is as important as taste.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-display font-bold text-restaurant-charcoal mb-4">Sustainability</h3>
              <p className="text-gray-700">
                We are committed to responsible sourcing and minimizing our environmental impact. From reducing food waste 
                to supporting sustainable farming practices, we strive to make choices that respect our planet.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Awards & Recognition */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-restaurant-charcoal mb-4">Awards & Recognition</h2>
            <div className="w-24 h-1 bg-restaurant-burgundy mx-auto mb-6"></div>
            <p className="text-gray-700">
              We're honored to have been recognized for our commitment to culinary excellence and hospitality.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-restaurant-gold text-4xl font-bold mb-2">2023</div>
              <h3 className="font-display font-bold text-restaurant-charcoal mb-2">Best Fine Dining</h3>
              <p className="text-gray-600 text-sm">City Culinary Awards</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-restaurant-gold text-4xl font-bold mb-2">2022</div>
              <h3 className="font-display font-bold text-restaurant-charcoal mb-2">Chef of the Year</h3>
              <p className="text-gray-600 text-sm">National Restaurant Guild</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-restaurant-gold text-4xl font-bold mb-2">2020</div>
              <h3 className="font-display font-bold text-restaurant-charcoal mb-2">Most Innovative Menu</h3>
              <p className="text-gray-600 text-sm">Food & Wine Magazine</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-restaurant-gold text-4xl font-bold mb-2">2018</div>
              <h3 className="font-display font-bold text-restaurant-charcoal mb-2">Best Restaurant</h3>
              <p className="text-gray-600 text-sm">Regional Dining Guide</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 px-4 bg-restaurant-charcoal text-white text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Join Us for a Memorable Experience</h2>
          <p className="text-white/80 mb-8">
            We invite you to be our guest and experience the artistry of our cuisine firsthand.
            Whether it's an intimate dinner for two or a special celebration, we look forward to serving you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/reservation">
              <Button size="lg" className="bg-restaurant-gold hover:bg-restaurant-gold/90 text-restaurant-charcoal font-medium">
                Reserve a Table
              </Button>
            </Link>
            <Link to="/menu">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Explore Our Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
