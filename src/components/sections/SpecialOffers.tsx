import React from 'react';
import { motion } from 'framer-motion';
import { Offer } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';

const offers: Offer[] = [
  {
    id: '1',
    title: 'Weekend Nyama Feast',
    description: 'A grand platter of Prime Beef, Mbuzi Choma, Ugali, and Sukuma Wiki. Ideal for four.',
    discount: 'SAVE 20%',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/9188bc24-4746-496a-812f-91bb193eb2cf/hero-kenyan-food---nyama-choma-701f73c1-1774849693902.webp',
  },
  {
    id: '2',
    title: 'Swahili Friday',
    description: 'Get our Signature Mutton Pilau with an authentic side of Biryani and fresh Kachumbari.',
    discount: 'KSh 950 ONLY',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/9188bc24-4746-496a-812f-91bb193eb2cf/menu-item---pilau-d1ff0257-1774849693588.webp',
  },
  {
    id: '3',
    title: 'Tea Time Delight',
    description: '3 Handmade Meat Samosas paired with our special Masala Ginger Tea (Chai ya Tangawizi).',
    discount: 'KSh 499',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/9188bc24-4746-496a-812f-91bb193eb2cf/special-offer---snacks-888b693e-1774849693811.webp',
  },
];

const SpecialOffers = () => {
  return (
    <section className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
              Featured <span className="text-amber-600">Specials</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Carefully curated culinary experiences that showcase the best of our kitchen, 
              available for a limited time only.
            </p>
          </div>
          <div className="flex items-center gap-4">
             <Button variant="outline" className="rounded-full h-12 w-12 border-slate-300 p-0">
                <ArrowRight className="rotate-180" size={20} />
             </Button>
             <Button className="rounded-full h-12 w-12 bg-slate-900 p-0 hover:bg-amber-600 transition-colors">
                <ArrowRight size={20} />
             </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="group relative h-full bg-white rounded-3xl overflow-hidden shadow-sm border-none hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-amber-500 text-white font-black px-4 py-1 text-sm border-none">
                      {offer.discount}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-black mb-4 leading-tight group-hover:text-amber-400 transition-colors uppercase italic">
                      {offer.title}
                    </h3>
                    <p className="text-slate-200 text-sm mb-6 line-clamp-2 leading-relaxed">
                      {offer.description}
                    </p>
                    <Button variant="link" className="text-white p-0 h-auto font-bold uppercase tracking-widest text-xs gap-2 group/btn">
                      ORDER NOW <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;