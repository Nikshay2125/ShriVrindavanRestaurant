
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const revealRefs = useRef<HTMLDivElement[]>([]);
  const { toast } = useToast();

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out! We'll get back to you shortly.",
    });
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12" ref={addToRefs}>
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-restaurant-charcoal mb-2">Contact Us</h2>
            <div className="w-24 h-1 bg-restaurant-burgundy mx-auto mb-6"></div>
            <p className="text-gray-700">
              Have questions or need to get in touch? We're here to help with reservations, 
              private events, or any inquiries you may have.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8" ref={addToRefs}>
            <div className="reveal bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-6">
                <MapPin className="h-10 w-10 p-2 bg-restaurant-burgundy/10 text-restaurant-burgundy rounded-full mr-4" />
                <div>
                  <h3 className="text-xl font-display font-bold text-restaurant-charcoal">Our Location</h3>
                  <address className="not-italic text-gray-600">
                    123 Culinary Street<br />
                    Downtown, City 10001
                  </address>
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <Phone className="h-10 w-10 p-2 bg-restaurant-burgundy/10 text-restaurant-burgundy rounded-full mr-4" />
                <div>
                  <h3 className="text-xl font-display font-bold text-restaurant-charcoal">Reservations & Inquiries</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                  <p className="text-gray-600">info@culinarycanvas.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Clock className="h-10 w-10 p-2 bg-restaurant-burgundy/10 text-restaurant-burgundy rounded-full mr-4" />
                <div>
                  <h3 className="text-xl font-display font-bold text-restaurant-charcoal">Hours</h3>
                  <p className="text-gray-600">Monday - Thursday: 5:00 PM - 10:00 PM</p>
                  <p className="text-gray-600">Friday - Saturday: 5:00 PM - 11:00 PM</p>
                  <p className="text-gray-600">Sunday: 5:00 PM - 9:00 PM</p>
                </div>
              </div>
              
              <div className="mt-8 h-64 rounded-lg overflow-hidden">
                {/* This would typically be a Google Map embed */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Map Location</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div ref={addToRefs}>
            <div className="reveal bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-display font-bold text-restaurant-charcoal mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Smith" required />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
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
  );
};

export default Contact;
