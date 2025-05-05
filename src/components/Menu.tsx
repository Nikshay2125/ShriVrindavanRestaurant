
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
  dietary?: string[];
};

type MenuCategory = {
  name: string;
  items: MenuItem[];
};

const menuData: MenuCategory[] = [
  {
    name: 'Starters',
    items: [
      {
        name: 'Truffle Arancini',
        description: 'Crispy risotto balls with black truffle and parmesan',
        price: '16',
        image: 'https://images.unsplash.com/photo-1667760302050-81c31433bb1e?q=80&auto=format&fit=crop',
        dietary: ['vegetarian']
      },
      {
        name: 'Seared Scallops',
        description: 'Hand-dived scallops with cauliflower purée and pancetta crisp',
        price: '18',
        image: 'https://images.unsplash.com/photo-1560717845-968823efbee1?q=80&auto=format&fit=crop',
      },
      {
        name: 'Heirloom Tomato Salad',
        description: 'Local heirloom tomatoes with buffalo mozzarella and basil oil',
        price: '14',
        image: 'https://images.unsplash.com/photo-1515516969-d4008cc6241a?q=80&auto=format&fit=crop',
        dietary: ['vegetarian', 'gluten-free']
      },
      {
        name: 'Beef Tartare',
        description: 'Hand-cut beef with capers, shallots, and quail egg',
        price: '17',
        image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&auto=format&fit=crop',
        dietary: ['gluten-free']
      },
      {
        name: 'Wild Mushroom Soup',
        description: 'Creamy soup with forest mushrooms and truffle oil',
        price: '12',
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&auto=format&fit=crop',
        dietary: ['vegetarian', 'gluten-free']
      },
      {
        name: 'Prawn Cocktail',
        description: 'Classic prawn cocktail with marie rose sauce and lemon',
        price: '15',
        image: 'https://images.unsplash.com/photo-1565895405127-481853366cf8?q=80&auto=format&fit=crop',
        dietary: ['gluten-free']
      },
    ]
  },
  {
    name: 'Mains',
    items: [
      {
        name: 'Slow-cooked Short Rib',
        description: 'Grass-fed beef short rib with red wine jus and truffle mash',
        price: '34',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&auto=format&fit=crop',
      },
      {
        name: 'Pan-seared Salmon',
        description: 'Wild-caught salmon with asparagus, pea purée and lemon butter sauce',
        price: '28',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&auto=format&fit=crop',
        dietary: ['gluten-free']
      },
      {
        name: 'Wild Mushroom Risotto',
        description: 'Creamy arborio rice with foraged mushrooms and aged parmesan',
        price: '24',
        image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&auto=format&fit=crop',
        dietary: ['vegetarian', 'gluten-free']
      },
      {
        name: 'Rack of Lamb',
        description: 'Herb-crusted lamb with rosemary jus and butter-poached vegetables',
        price: '38',
        image: 'https://images.unsplash.com/photo-1602538320474-9566ea36bd27?q=80&auto=format&fit=crop',
      },
      {
        name: 'Duck Breast',
        description: 'Pan-roasted duck with cherry reduction and celeriac purée',
        price: '32',
        image: 'https://images.unsplash.com/photo-1619221882266-c3eb5eb0ac7b?q=80&auto=format&fit=crop',
        dietary: ['gluten-free']
      },
      {
        name: 'Eggplant Parmigiana',
        description: 'Layered eggplant with tomato sauce, mozzarella, and basil',
        price: '22',
        image: 'https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?q=80&auto=format&fit=crop',
        dietary: ['vegetarian']
      },
    ]
  },
  {
    name: 'Desserts',
    items: [
      {
        name: 'Dark Chocolate Fondant',
        description: 'Rich chocolate cake with molten center and vanilla bean ice cream',
        price: '12',
        image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&auto=format&fit=crop',
        dietary: ['vegetarian']
      },
      {
        name: 'Lemon Tart',
        description: 'Tangy lemon curd in a buttery pastry shell with raspberry sorbet',
        price: '10',
        image: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?q=80&auto=format&fit=crop',
        dietary: ['vegetarian']
      },
      {
        name: 'Crème Brûlée',
        description: 'Classic vanilla custard with caramelized sugar crust',
        price: '10',
        image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?q=80&auto=format&fit=crop',
        dietary: ['vegetarian', 'gluten-free']
      },
      {
        name: 'Tiramisu',
        description: 'Coffee-soaked ladyfingers with mascarpone cream and cocoa',
        price: '11',
        image: 'https://images.unsplash.com/photo-1551529674-48920e9fbe51?q=80&auto=format&fit=crop',
        dietary: ['vegetarian']
      },
    ]
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Starters');
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

  const renderDietaryIcons = (dietary?: string[]) => {
    if (!dietary || dietary.length === 0) return null;
    
    return (
      <div className="flex gap-2 mt-2">
        {dietary.includes('vegetarian') && (
          <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Vegetarian</span>
        )}
        {dietary.includes('gluten-free') && (
          <span className="text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded-full">Gluten-Free</span>
        )}
      </div>
    );
  };

  return (
    <section className="py-20 px-4 bg-gray-50" id="menu">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12" ref={addToRefs}>
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-restaurant-charcoal mb-2">Seasonal Menu</h2>
            <div className="w-24 h-1 bg-restaurant-burgundy mx-auto mb-6"></div>
            <p className="text-gray-700">
              Our menu changes with the seasons, showcasing the finest ingredients at their peak.
              Each dish is thoughtfully crafted to deliver exceptional flavors and textures.
            </p>
          </div>
        </div>
        
        {/* Menu Categories */}
        <div className="flex justify-center mb-12" ref={addToRefs}>
          <div className="reveal flex flex-wrap gap-2 md:gap-4 justify-center">
            {menuData.map((category) => (
              <button
                key={category.name}
                className={cn(
                  "px-4 py-2 rounded-full font-medium transition-all",
                  activeCategory === category.name
                    ? "bg-restaurant-burgundy text-white"
                    : "bg-white text-restaurant-charcoal hover:bg-restaurant-gold/10"
                )}
                onClick={() => setActiveCategory(category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Menu Items Carousel */}
        <div ref={addToRefs} className="reveal mb-12">
          <Carousel className="w-full">
            <CarouselContent>
              {menuData
                .find((category) => category.name === activeCategory)
                ?.items.map((item, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full mx-2">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-display font-bold text-restaurant-charcoal">{item.name}</h3>
                          <span className="text-restaurant-burgundy font-medium">${item.price}</span>
                        </div>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        {renderDietaryIcons(item.dietary)}
                      </div>
                    </div>
                  </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:block">
              <CarouselPrevious className="bg-white -left-4" />
              <CarouselNext className="bg-white -right-4" />
            </div>
          </Carousel>
        </div>
        
        {/* CTA */}
        <div className="text-center mt-8" ref={addToRefs}>
          <div className="reveal">
            <Link to="/menu">
              <Button size="lg" className="bg-restaurant-burgundy hover:bg-restaurant-burgundy/90 text-white">
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
