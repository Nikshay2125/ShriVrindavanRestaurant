import { useEffect, useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  },
  {
    src: 'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?q=80&auto=format&fit=crop',
    alt: 'Private dining area',
    category: 'Ambiance'
  },
  {
    src: 'https://images.unsplash.com/photo-1554679665-f5537f187268?q=80&auto=format&fit=crop',
    alt: "Chef's special dish",
    category: 'Food'
  },
  {
    src: 'https://images.unsplash.com/photo-1507914997326-f07407a46502?q=80&auto=format&fit=crop',
    alt: 'Signature cocktail being prepared',
    category: 'Drinks'
  },
  {
    src: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&auto=format&fit=crop',
    alt: 'Chef plating a dish',
    category: 'Kitchen'
  },
  {
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&auto=format&fit=crop',
    alt: 'Pasta dish',
    category: 'Food'
  },
  {
    src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&auto=format&fit=crop',
    alt: 'Fine dining setup',
    category: 'Ambiance'
  },
];

const categories = ['All', 'Food', 'Drinks', 'Ambiance', 'Kitchen'];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 bg-restaurant-charcoal">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">Gallery</h1>
          <div className="w-24 h-1 bg-restaurant-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-white/80">
            A visual journey through our culinary creations, elegant space, and memorable moments.
          </p>
        </div>
      </div>
      
      {/* Filter Section */}
      <div className="sticky top-20 z-30 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex overflow-x-auto gap-2 md:gap-4 justify-start md:justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={cn(
                  "px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap",
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
      </div>
      
      {/* Gallery Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={index} 
                className="h-72 md:h-80 overflow-hidden rounded-lg cursor-pointer relative group animate-fade-in"
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  <div>
                    <p className="text-white font-display text-lg">{image.alt}</p>
                    <span className="text-white/80 text-sm">{image.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
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
      
      {/* Behind the Scenes Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-restaurant-charcoal mb-2">
              Behind The Scenes
            </h2>
            <div className="w-24 h-1 bg-restaurant-burgundy mx-auto mb-6"></div>
            <p className="text-gray-700">
              A glimpse into our kitchen, where passion and precision come together to create culinary magic.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1428515613728-6b4607e44363?q=80&auto=format&fit=crop" 
                alt="Chef team at work" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-bold text-restaurant-charcoal">Our Kitchen Philosophy</h3>
              <p className="text-gray-700">
                At Culinary Canvas, our kitchen is the heart of our restaurant. It's where creativity flows, 
                techniques are perfected, and ingredients are transformed into memorable dishes.
              </p>
              <p className="text-gray-700">
                Led by Chef Maria Rodriguez, our team works in harmony, each bringing their unique skills and 
                perspectives to create a dining experience that delights all the senses.
              </p>
              <p className="text-gray-700">
                We believe in transparency and take pride in our craft, which is why we've designed our kitchen 
                to be partially visible from the dining area, allowing guests to witness the artistry firsthand.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default GalleryPage;
