
import { useEffect, useRef, useState } from 'react';
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

const Reservation = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
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
      title: "Reservation Request Submitted",
      description: "We'll confirm your booking shortly. Thank you!",
    });
  };

  return (
    <section 
      className="py-20 px-4 bg-restaurant-charcoal text-white"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0,0,0,0.7)'
      }}
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12" ref={addToRefs}>
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">Reserve Your Table</h2>
              <div className="w-24 h-1 bg-restaurant-gold mx-auto mb-6"></div>
              <p className="text-white/80">
                Experience our chef's creative menu in an elegant setting.
                For parties of 8 or more, please call us directly.
              </p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 md:p-8" ref={addToRefs}>
            <div className="reveal">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-white mb-2">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="John Smith" 
                    required
                    className="bg-white/20 border-white/30 focus-visible:ring-restaurant-gold text-white placeholder:text-white/50"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-white mb-2">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com"
                    required
                    className="bg-white/20 border-white/30 focus-visible:ring-restaurant-gold text-white placeholder:text-white/50"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-white mb-2">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="(555) 123-4567"
                    required
                    className="bg-white/20 border-white/30 focus-visible:ring-restaurant-gold text-white placeholder:text-white/50"
                  />
                </div>
                
                <div>
                  <Label className="text-white mb-2">Party Size</Label>
                  <Select>
                    <SelectTrigger className="bg-white/20 border-white/30 focus-visible:ring-restaurant-gold text-white">
                      <SelectValue placeholder="Number of guests" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? 'person' : 'people'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label className="text-white mb-2">Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal bg-white/20 border-white/30 focus-visible:ring-restaurant-gold text-white",
                          !date && "text-white/50"
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
                  <Label className="text-white mb-2">Time</Label>
                  <Select>
                    <SelectTrigger className="bg-white/20 border-white/30 focus-visible:ring-restaurant-gold text-white">
                      <SelectValue placeholder="Select a time" />
                    </SelectTrigger>
                    <SelectContent>
                      {['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'].map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="md:col-span-2">
                  <Label htmlFor="special-requests" className="text-white mb-2">Special Requests</Label>
                  <Textarea 
                    id="special-requests" 
                    placeholder="Allergies, special occasions, seating preferences, etc."
                    className="bg-white/20 border-white/30 focus-visible:ring-restaurant-gold text-white placeholder:text-white/50"
                  />
                </div>
                
                <div className="md:col-span-2 flex justify-center">
                  <Button 
                    type="submit" 
                    size="lg"
                    className="bg-restaurant-gold hover:bg-restaurant-gold/90 text-restaurant-charcoal font-medium px-8"
                  >
                    Request Reservation
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
