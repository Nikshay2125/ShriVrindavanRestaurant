
import { useEffect, useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  image?: string;
  dietary?: string[];
};

type MenuCategory = {
  name: string;
  description: string;
  items: MenuItem[];
};

const menuData: MenuCategory[] = [
  {
    name: 'Starters',
    description: 'Begin your culinary journey with our exquisite selection of appetizers',
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
        dietary: ['gluten-free']
      },
      {
        name: 'Wild Mushroom Soup',
        description: 'Creamy soup with forest mushrooms and truffle oil',
        price: '12',
        dietary: ['vegetarian', 'gluten-free']
      },
    ]
  },
  {
    name: 'Mains',
    description: 'Expertly crafted dishes that showcase the finest ingredients and culinary techniques',
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
      },
      {
        name: 'Duck Breast',
        description: 'Pan-roasted duck with cherry reduction and celeriac purée',
        price: '32',
        dietary: ['gluten-free']
      },
      {
        name: 'Eggplant Parmigiana',
        description: 'Layered eggplant with tomato sauce, mozzarella, and basil',
        price: '22',
        dietary: ['vegetarian']
      },
    ]
  },
  {
    name: 'Desserts',
    description: 'Complete your meal with our selection of handcrafted sweet delights',
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
        dietary: ['vegetarian', 'gluten-free']
      },
      {
        name: 'Tiramisu',
        description: 'Coffee-soaked ladyfingers with mascarpone cream and cocoa',
        price: '11',
        dietary: ['vegetarian']
      },
    ]
  },
  {
    name: 'Drinks',
    description: 'Complement your meal with our carefully curated selection of wines, cocktails and non-alcoholic beverages',
    items: [
      {
        name: 'Signature Cocktails',
        description: 'Handcrafted cocktails using premium spirits and fresh ingredients',
        price: '14-18',
      },
      {
        name: 'Wine Selection',
        description: 'Curated selection of wines from around the world',
        price: 'by glass/bottle',
      },
      {
        name: 'Craft Beer',
        description: 'Local and international craft beers',
        price: '8-12',
      },
      {
        name: 'Artisanal Coffee',
        description: 'Specialty coffee prepared by our trained baristas',
        price: '5-7',
      },
      {
        name: 'Herbal Tea Collection',
        description: 'Selection of premium loose-leaf teas',
        price: '6',
      },
    ]
  }
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('Starters');
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 bg-restaurant-charcoal">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">Our Menu</h1>
          <div className="w-24 h-1 bg-restaurant-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-white/80">
            Explore our seasonal offerings, crafted with passion and the finest ingredients.
            Our menu celebrates both tradition and innovation.
          </p>
        </div>
      </div>
      
      {/* Menu Categories */}
      <div className="sticky top-20 z-30 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex overflow-x-auto gap-2 md:gap-4 justify-start md:justify-center">
            {menuData.map((category) => (
              <button
                key={category.name}
                className={`px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                  activeCategory === category.name
                    ? "bg-restaurant-burgundy text-white"
                    : "bg-gray-100 text-restaurant-charcoal hover:bg-restaurant-gold/10"
                }`}
                onClick={() => setActiveCategory(category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Menu Content */}
      <div className="bg-white py-12 px-4">
        <div className="container mx-auto">
          {menuData
            .filter((category) => category.name === activeCategory)
            .map((category) => (
              <div key={category.name} className="animate-fade-in">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-restaurant-charcoal mb-2">
                    {category.name}
                  </h2>
                  <div className="w-16 h-1 bg-restaurant-burgundy mx-auto mb-6"></div>
                  <p className="text-gray-700">{category.description}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {category.items.map((item, index) => (
                    <div key={index} className="flex gap-6 group">
                      {item.image && (
                        <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                          />
                        </div>
                      )}
                      <div className={`flex-grow ${!item.image ? 'pl-6' : ''}`}>
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-display font-bold text-restaurant-charcoal group-hover:text-restaurant-burgundy transition-colors">
                            {item.name}
                          </h3>
                          <span className="font-medium text-restaurant-burgundy">${item.price}</span>
                        </div>
                        <p className="text-gray-600 mt-1">{item.description}</p>
                        {renderDietaryIcons(item.dietary)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MenuPage;
