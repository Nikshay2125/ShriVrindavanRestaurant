
import { useEffect, useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const ReservationPage = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const { toast } = useToast();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reservation Request Submitted",
      description: "We'll confirm your booking shortly. Thank you!",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 bg-restaurant-charcoal">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">Make a Reservation</h1>
          <div className="w-24 h-1 bg-restaurant-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-white/80">
            Book your table and join us for a memorable dining experience.
          </p>
        </div>
      </div>
      
      {/* Reservation Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-display font-bold text-restaurant-charcoal mb-6">Book Your Table</h2>
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                  </div>
                  
                  <div>
                    <Label>Party Size</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Number of guests" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? 'person' : 'people'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-gray-500 mt-1">For parties larger than 8, please call us directly.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label>Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Select a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 pointer-events-auto">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          disabled={(date) => date < new Date()}
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div>
                    <Label>Time</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent>
                        {['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'].map((time) => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="special-requests">Special Requests</Label>
                  <Textarea 
                    id="special-requests" 
                    placeholder="Please let us know about any allergies, dietary restrictions, special occasions, or seating preferences."
                    className="h-32"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-restaurant-burgundy hover:bg-restaurant-burgundy/90 text-white"
                  size="lg"
                >
                  Request Reservation
                </Button>
                
                <p className="text-gray-500 text-sm text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                  We'll contact you to confirm your reservation.
                </p>
              </form>
            </div>
            
            {/* Information */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-display font-bold text-restaurant-charcoal mb-6">Reservation Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-display font-semibold text-restaurant-charcoal mb-2">Hours of Operation</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="font-medium">Monday - Thursday</span>
                      <span>5:00 PM - 10:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Friday - Saturday</span>
                      <span>5:00 PM - 11:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Sunday</span>
                      <span>5:00 PM - 9:00 PM</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-display font-semibold text-restaurant-charcoal mb-2">Reservation Policies</h3>
                  <ul className="space-y-2 list-disc pl-5 text-gray-700">
                    <li>Reservations can be made up to 30 days in advance.</li>
                    <li>We hold reservations for 15 minutes past the scheduled time.</li>
                    <li>For parties of 8 or more, please call us directly at (555) 123-4567.</li>
                    <li>A credit card is required for parties of 6 or more.</li>
                    <li>Cancellations must be made at least 24 hours in advance to avoid a fee.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-display font-semibold text-restaurant-charcoal mb-2">Contact Information</h3>
                  <p className="text-gray-700">
                    For immediate assistance or to modify an existing reservation, please call us at (555) 123-4567 or email us at reservations@culinarycanvas.com.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-display font-semibold text-restaurant-charcoal mb-2">Private Events</h3>
                  <p className="text-gray-700">
                    Looking to host a private event? We offer customizable options for special occasions.
                    Contact our events team at events@culinarycanvas.com for more information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ReservationPage;
