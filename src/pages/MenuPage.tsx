
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
      {
        name: 'Foie Gras Terrine',
        description: 'Silky terrine with brioche toast and fig jam',
        price: '19',
        image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&auto=format&fit=crop',
      },
      {
        name: 'Salmon Gravlax',
        description: 'House-cured salmon with dill, mustard sauce and rye crisps',
        price: '16',
        image: 'https://images.unsplash.com/photo-1610612410566-516f896139bf?q=80&auto=format&fit=crop',
        dietary: ['gluten-free']
      },
      {
        name: 'Grilled Octopus',
        description: 'Tender octopus with smoked paprika, olives and oregano',
        price: '18',
        image: 'https://images.unsplash.com/photo-1589386417356-8464ebca47ff?q=80&auto=format&fit=crop',
        dietary: ['gluten-free']
      },
      {
        name: 'Bruschetta',
        description: 'Grilled sourdough with tomato, basil and extra virgin olive oil',
        price: '12',
        image: 'https://images.unsplash.com/photo-1572695151366-d919e643f320?q=80&auto=format&fit=crop',
        dietary: ['vegetarian']
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
      {
        name: 'Filet Mignon',
        description: '8oz prime beef with peppercorn sauce and confit garlic',
        price: '42',
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&auto=format&fit=crop',
        dietary: ['gluten-free']
      },
      {
        name: 'Seafood Linguine',
        description: 'Fresh pasta with prawns, mussels, clams and lobster bisque',
        price: '30',
        image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&auto=format&fit=crop',
      },
      {
        name: 'Roasted Chicken',
        description: 'Free-range chicken with preserved lemon, herbs and roast potatoes',
        price: '26',
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&auto=format&fit=crop',
      },
      {
        name: 'Vegetable Wellington',
        description: 'Seasonal vegetables in pastry with vegetable gravy',
        price: '24',
        image: 'https://images.unsplash.com/photo-1631898039944-ee3976cf92fa?q=80&auto=format&fit=crop',
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
      {
        name: 'Apple Tarte Tatin',
        description: 'Caramelized apple tart with cinnamon ice cream',
        price: '11',
        image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&auto=format&fit=crop',
        dietary: ['vegetarian']
      },
      {
        name: 'Panna Cotta',
        description: 'Vanilla panna cotta with seasonal berries and coulis',
        price: '9',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&auto=format&fit=crop',
        dietary: ['vegetarian', 'gluten-free']
      },
      {
        name: 'Chocolate Trio',
        description: 'White, milk and dark chocolate desserts on one plate',
        price: '14',
        image: 'https://images.unsplash.com/photo-1611329695518-1763fc775f0d?q=80&auto=format&fit=crop',
        dietary: ['vegetarian']
      },
      {
        name: 'Cheese Board',
        description: 'Selection of artisanal cheeses with crackers and chutney',
        price: '16',
        image: 'https://images.unsplash.com/photo-1505575967455-40e256f73376?q=80&auto=format&fit=crop',
        dietary: ['vegetarian', 'gluten-free']
      },
    ]
  },
  {
    name: 'Drinks',
    description: 'Complement your meal with our carefully curated selection of wines, cocktails and non-alcoholic beverages',
    items: [
      {
        name: 'Classic Martini',
        description: 'Gin or vodka with dry vermouth and olive or lemon twist',
        price: '14',
        image: 'https://images.unsplash.com/photo-1560963689-b5682b6440f8?q=80&auto=format&fit=crop',
      },
      {
        name: 'Old Fashioned',
        description: 'Bourbon, angostura bitters, sugar and orange peel',
        price: '15',
        image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&auto=format&fit=crop',
      },
      {
        name: 'Negroni',
        description: 'Gin, sweet vermouth and Campari with orange garnish',
        price: '14',
        image: 'https://images.unsplash.com/photo-1550425827-8225e67fe0f3?q=80&auto=format&fit=crop',
      },
      {
        name: 'Espresso Martini',
        description: 'Vodka, coffee liqueur and fresh espresso',
        price: '15',
        image: 'https://images.unsplash.com/photo-1581927692708-23a653d8c35e?q=80&auto=format&fit=crop',
      },
      {
        name: 'French 75',
        description: 'Gin, lemon juice, sugar syrup topped with champagne',
        price: '16',
        image: 'https://images.unsplash.com/photo-1566046637041-9008d3e500c2?q=80&auto=format&fit=crop',
      },
      {
        name: 'House Red Wine',
        description: 'Selection of premium red wines by the glass',
        price: '10-18',
        image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&auto=format&fit=crop',
      },
      {
        name: 'House White Wine',
        description: 'Selection of premium white wines by the glass',
        price: '10-18',
        image: 'https://images.unsplash.com/photo-1560148218-1a83060f7b32?q=80&auto=format&fit=crop',
      },
      {
        name: 'Champagne',
        description: 'Premium champagne by the glass',
        price: '18-25',
        image: 'https://images.unsplash.com/photo-1568197868675-8b4efbbf01fa?q=80&auto=format&fit=crop',
      },
      {
        name: 'Craft Beer',
        description: 'Selection of local and international craft beers',
        price: '8-12',
        image: 'https://images.unsplash.com/photo-1558642891-54be180ea339?q=80&auto=format&fit=crop',
      },
      {
        name: 'Artisanal Coffee',
        description: 'Specialty coffee prepared by our trained baristas',
        price: '5-7',
        image: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?q=80&auto=format&fit=crop',
      },
      {
        name: 'Herbal Tea',
        description: 'Selection of premium loose-leaf teas',
        price: '6',
        image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&auto=format&fit=crop',
      },
      {
        name: 'Fresh Juices',
        description: 'Seasonal fruits freshly pressed to order',
        price: '7',
        image: 'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?q=80&auto=format&fit=crop',
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
                className={cn(
                  "px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap",
                  activeCategory === category.name
                    ? "bg-restaurant-burgundy text-white"
                    : "bg-gray-100 text-restaurant-charcoal hover:bg-restaurant-gold/10"
                )}
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
