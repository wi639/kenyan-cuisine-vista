import React from 'react';
import { motion } from 'framer-motion';
import { Chef } from '@/types';
import { Instagram, Twitter, Linkedin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const chefs: Chef[] = [
  {
    id: '1',
    name: 'Chef Mwangi',
    role: 'Executive Head Chef',
    bio: 'Champion of farm-to-table Kenyan cuisine. With over 20 years leading kitchens across East Africa.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/9188bc24-4746-496a-812f-91bb193eb2cf/head-chef-portrait-482b9487-1774849694362.webp',
  },
  {
    id: '2',
    name: 'Chef Fatuma',
    role: 'Coastal Specialist',
    bio: 'Born and raised in Old Town Mombasa, Fatuma is the guardian of our authentic Swahili spice blends.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/9188bc24-4746-496a-812f-91bb193eb2cf/customer-experience-20930327-1774849694241.webp',
  },
  {
    id: '3',
    name: 'Chef Otieno',
    role: 'Grill Master',
    bio: 'The artist behind the charcoal. Otieno ensures every cut of meat is perfectly seared and juicy.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/9188bc24-4746-496a-812f-91bb193eb2cf/head-chef-portrait-482b9487-1774849694362.webp',
  }
];

const ChefProfiles = () => {
  return (
    <section id="chefs" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase italic tracking-tighter">
            Our <span className="text-amber-600">Chefs</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-amber-500 mb-8">
             <Star size={16} fill="currentColor" />
             <Star size={16} fill="currentColor" />
             <Star size={16} fill="currentColor" />
             <Star size={16} fill="currentColor" />
             <Star size={16} fill="currentColor" />
          </div>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Meet the culinary visionaries who bring the authentic flavors of Kenya to your table with every serving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {chefs.map((chef, index) => (
            <motion.div
              key={chef.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group text-center"
            >
              <div className="relative aspect-[4/5] mb-10 mx-auto overflow-hidden rounded-[4rem] grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-amber-600/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="px-4">
                <span className="text-amber-600 font-black uppercase tracking-[0.2em] text-[10px] mb-2 block">
                  {chef.role}
                </span>
                <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase italic">{chef.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed italic max-w-[280px] mx-auto">
                  "{chef.bio}"
                </p>
                
                <div className="flex justify-center gap-4 mt-8 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                  {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                    <Button key={i} variant="outline" size="icon" className="rounded-full border-stone-200 hover:bg-amber-600 hover:text-white transition-colors">
                      <Icon size={18} />
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefProfiles;