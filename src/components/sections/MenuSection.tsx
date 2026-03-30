import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuItem } from '@/types';
import { Flame, Leaf, Wheat, Info, Plus } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Grilled Mbuzi Choma',
    description: 'Fresh highland goat, slow-roasted over acacia charcoal. Served with manual-cut ugali and kachumbari.',
    price: 1350,
    category: 'mains',
    dietary: ['spicy'],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/9188bc24-4746-496a-812f-91bb193eb2cf/hero-kenyan-food---nyama-choma-701f73c1-1774849693902.webp',
  },
  {
    id: '2',
    name: 'Swahili Seafood Pilau',
    description: 'Traditional coastal rice cooked with cloves, peppercorns, and freshly caught prawns and calamari.',
    price: 1800,
    category: 'mains',
    dietary: ['spicy', 'gluten-free'],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/9188bc24-4746-496a-812f-91bb193eb2cf/menu-item---pilau-d1ff0257-1774849693588.webp',
  },
  {
    id: '3',
    name: 'Githeri ya Mahindi',
    description: 'A slow-cooked blend of young maize and beans, tempered with onions and local coriander.',
    price: 650,
    category: 'mains',
    dietary: ['vegetarian', 'vegan', 'gluten-free'],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/9188bc24-4746-496a-812f-91bb193eb2cf/customer-experience-20930327-1774849694241.webp',
  },
  {
    id: '4',
    name: 'Mshikaki (Skewers)',
    description: 'Marinated beef cubes grilled on open flame, served with a zesty lemon-chili dipping sauce.',
    price: 500,
    category: 'starters',
    dietary: ['spicy'],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/9188bc24-4746-496a-812f-91bb193eb2cf/special-offer---snacks-888b693e-1774849693811.webp',
  },
  {
    id: '5',
    name: 'Viazi Karai',
    description: 'Crispy fried potatoes coated in a spiced flour batter, a street-food classic from the coast.',
    price: 450,
    category: 'starters',
    dietary: ['vegetarian', 'spicy'],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/9188bc24-4746-496a-812f-91bb193eb2cf/special-offer---snacks-888b693e-1774849693811.webp',
  },
  {
    id: '6',
    name: 'Cardamom Mandazi',
    description: 'Fluffy, golden-brown triangle donuts served with a dollop of honey and ginger tea.',
    price: 400,
    category: 'desserts',
    dietary: ['vegetarian'],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/9188bc24-4746-496a-812f-91bb193eb2cf/special-offer---snacks-888b693e-1774849693811.webp',
  },
];

const categories = ['all', 'starters', 'mains', 'desserts', 'drinks'];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filter, setFilter] = useState<string | null>(null);

  const filteredItems = menuItems.filter((item) => {
    const categoryMatch = activeCategory === 'all' || item.category === activeCategory;
    const filterMatch = !filter || item.dietary.includes(filter as any);
    return categoryMatch && filterMatch;
  });

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase italic tracking-tighter">
            The <span className="text-amber-500 underline decoration-stone-200">Menu</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg mb-12">
            Explore our curated selection of East African delicacies, from heritage recipes to modern interpretations.
          </p>
          
          <Tabs defaultValue="all" className="w-full max-w-3xl mx-auto mb-10" onValueChange={setActiveCategory}>
            <TabsList className="bg-stone-100 p-1 h-14 rounded-full border border-stone-200 grid grid-cols-5">
              {categories.map(cat => (
                <TabsTrigger 
                  key={cat} 
                  value={cat}
                  className="rounded-full font-black uppercase tracking-widest text-[10px] data-[state=active]:bg-amber-600 data-[state=active]:text-white transition-all"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { id: 'vegetarian', icon: <Leaf size={14} />, label: 'Vegetarian' },
              { id: 'spicy', icon: <Flame size={14} />, label: 'Spicy' },
              { id: 'gluten-free', icon: <Wheat size={14} />, label: 'Gluten Free' }
            ].map((f) => (
              <Badge
                key={f.id}
                onClick={() => setFilter(filter === f.id ? null : f.id)}
                className={`cursor-pointer px-4 py-2 flex items-center gap-2 rounded-full border border-slate-200 shadow-sm transition-all text-xs font-bold uppercase tracking-widest ${
                  filter === f.id ? 'bg-amber-600 text-white border-amber-600' : 'bg-white text-slate-600 hover:bg-stone-50'
                }`}
              >
                {f.icon} {f.label}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group h-full"
              >
                <Card className="h-full border-stone-100 shadow-sm overflow-hidden flex flex-col group-hover:shadow-xl transition-all duration-500 rounded-3xl">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 h-12 w-12 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center font-black text-amber-600 text-xs shadow-lg">
                      KSh
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-black text-slate-900 uppercase italic tracking-tight">{item.name}</h3>
                      <span className="font-black text-amber-600 whitespace-nowrap">{item.price}</span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex gap-2">
                         {item.dietary.map(d => (
                            <span key={d} className="p-1.5 bg-stone-100 rounded-lg text-slate-400">
                               {d === 'vegetarian' && <Leaf size={14} />}
                               {d === 'spicy' && <Flame size={14} />}
                               {d === 'gluten-free' && <Wheat size={14} />}
                            </span>
                         ))}
                      </div>
                      <Button className="rounded-full h-10 w-10 p-0 bg-slate-900 hover:bg-amber-600 text-white transition-colors">
                        <Plus size={20} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;