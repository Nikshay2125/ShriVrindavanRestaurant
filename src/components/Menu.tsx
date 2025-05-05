
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
        
        {/* Menu Items */}
        <div ref={addToRefs}>
          <div className="reveal grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuData
              .find((category) => category.name === activeCategory)
              ?.items.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
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
              ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12" ref={addToRefs}>
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
