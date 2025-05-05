
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&auto=format&fit=crop',
    alt: 'Elegant plated dish',
    category: 'Food'
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&auto=format&fit=crop',
    alt: 'Restaurant interior',
    category: 'Ambiance'
  },
  {
    src: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&auto=format&fit=crop',
    alt: 'Chef preparing food',
    category: 'Kitchen'
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&auto=format&fit=crop',
    alt: 'Restaurant dining room',
    category: 'Ambiance'
  },
  {
    src: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?q=80&auto=format&fit=crop',
    alt: 'Specialty cocktail',
    category: 'Drinks'
  },
  {
    src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&auto=format&fit=crop',
    alt: 'Dessert presentation',
    category: 'Food'
  }
];

const categories = ['All', 'Food', 'Drinks', 'Ambiance', 'Kitchen'];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
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
  
  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  return (
    <section className="py-20 px-4 bg-white" id="gallery">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12" ref={addToRefs}>
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-restaurant-charcoal mb-2">
              Our Gallery
            </h2>
            <div className="w-24 h-1 bg-restaurant-burgundy mx-auto mb-6"></div>
            <p className="text-gray-700">
              Take a visual journey through our culinary creations, elegant space, and memorable moments.
            </p>
          </div>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex justify-center mb-12" ref={addToRefs}>
          <div className="reveal flex flex-wrap gap-2 md:gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={cn(
                  "px-4 py-2 rounded-full font-medium transition-all",
                  selectedCategory === category
                    ? "bg-restaurant-burgundy text-white"
                    : "bg-gray-100 text-restaurant-charcoal hover:bg-restaurant-gold/10"
                )}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6" ref={addToRefs}>
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              className="reveal h-64 md:h-72 overflow-hidden rounded-lg cursor-pointer relative group"
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                <p className="text-white font-display text-lg">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12" ref={addToRefs}>
          <div className="reveal">
            <Link to="/gallery">
              <Button size="lg" className="bg-restaurant-burgundy hover:bg-restaurant-burgundy/90 text-white">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Gallery image" 
              className="w-full h-full object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
