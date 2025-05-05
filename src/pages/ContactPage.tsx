
import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out! We'll get back to you shortly.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 bg-restaurant-charcoal">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">Contact Us</h1>
          <div className="w-24 h-1 bg-restaurant-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-white/80">
            We'd love to hear from you! Reach out with questions, feedback, or to plan your next visit.
          </p>
        </div>
      </div>
      
      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-display font-bold text-restaurant-charcoal mb-6">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="h-10 w-10 p-2 bg-restaurant-burgundy/10 text-restaurant-burgundy rounded-full mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-display font-bold text-restaurant-charcoal mb-2">Our Location</h3>
                    <address className="not-italic text-gray-700">
                      123 Culinary Street<br />
                      Downtown, City 10001<br />
                      United States
                    </address>
                    <p className="text-gray-700 mt-2">
                      Located in the heart of downtown, two blocks from Central Park and the Arts District.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-10 w-10 p-2 bg-restaurant-burgundy/10 text-restaurant-burgundy rounded-full mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-display font-bold text-restaurant-charcoal mb-2">Contact Information</h3>
                    <p className="text-gray-700">Main: (555) 123-4567</p>
                    <p className="text-gray-700">Reservations: (555) 123-4568</p>
                    <p className="text-gray-700">Email: info@culinarycanvas.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-10 w-10 p-2 bg-restaurant-burgundy/10 text-restaurant-burgundy rounded-full mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-display font-bold text-restaurant-charcoal mb-2">Hours of Operation</h3>
                    <p className="text-gray-700">Monday - Thursday: 5:00 PM - 10:00 PM</p>
                    <p className="text-gray-700">Friday - Saturday: 5:00 PM - 11:00 PM</p>
                    <p className="text-gray-700">Sunday: 5:00 PM - 9:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-display font-bold text-restaurant-charcoal mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="h-10 w-10 rounded-full bg-restaurant-burgundy text-white flex items-center justify-center hover:bg-restaurant-gold transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="h-10 w-10 rounded-full bg-restaurant-burgundy text-white flex items-center justify-center hover:bg-restaurant-gold transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="h-10 w-10 rounded-full bg-restaurant-burgundy text-white flex items-center justify-center hover:bg-restaurant-gold transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-display font-bold text-restaurant-charcoal mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Smith" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Reservation Inquiry" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please let us know how we can help..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-restaurant-burgundy hover:bg-restaurant-burgundy/90 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-restaurant-charcoal mb-2">Find Us</h2>
            <div className="w-24 h-1 bg-restaurant-burgundy mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We're conveniently located in downtown, with easy access to public transportation and parking options nearby.
            </p>
          </div>
          
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            {/* This would typically be a Google Map embed */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-500">Map Location</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <h3 className="text-xl font-display font-bold text-restaurant-charcoal mb-4">Transportation & Parking</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <h4 className="font-display font-semibold text-restaurant-charcoal mb-2">Public Transit</h4>
                <p className="text-gray-700">
                  Two blocks from Central Station. Bus lines 10, 14, and 32 stop nearby.
                </p>
              </div>
              <div>
                <h4 className="font-display font-semibold text-restaurant-charcoal mb-2">Parking</h4>
                <p className="text-gray-700">
                  Public parking available at 100 Main St. garage, $5 evening rate.
                </p>
              </div>
              <div>
                <h4 className="font-display font-semibold text-restaurant-charcoal mb-2">Ride Services</h4>
                <p className="text-gray-700">
                  Drop-off and pick-up point directly in front of the restaurant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
