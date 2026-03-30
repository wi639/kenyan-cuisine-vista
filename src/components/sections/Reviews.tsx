import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Heart } from 'lucide-react';
import { Review } from '@/types';
import { Card, CardContent } from '@/components/ui/card';

const reviews: Review[] = [
  {
    id: '1',
    name: 'Sarah Kamau',
    rating: 5,
    comment: 'Absolute flavor explosion! The Mbuzi Choma was exactly how I remember it back home in Nakuru. Simply authentic.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: '2',
    name: 'David Omondi',
    rating: 5,
    comment: 'The best Pilau in Nairobi, hands down. You can taste the quality of the spices. Excellent service too.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    id: '3',
    name: 'John Macharia',
    rating: 5,
    comment: 'A masterpiece of Kenyan cuisine. The environment is cozy and the food is world-class. Highly recommend.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
];

const Reviews = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-50 rounded-full blur-3xl opacity-40 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
           <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 uppercase italic tracking-tighter">
             Guests <span className="text-amber-500">Love Us</span>
           </h2>
           <p className="text-slate-400">Join thousands of satisfied diners who have experienced the magic of JuaKali.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-[0_20px_50px_rgba(0,0,0,0.03)] rounded-[2.5rem] bg-stone-50 overflow-hidden group">
                <CardContent className="p-10 flex flex-col items-center text-center">
                  <div className="p-3 bg-white rounded-2xl shadow-sm mb-8 text-amber-500">
                    <Quote size={24} fill="currentColor" />
                  </div>
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-amber-500" fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-slate-600 italic leading-relaxed mb-10 text-lg">
                    "{review.comment}"
                  </p>
                  
                  <div className="mt-auto">
                    <div className="relative inline-block mb-4">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-16 h-16 rounded-full border-4 border-white shadow-md object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-amber-500 text-white p-1 rounded-full border-2 border-white">
                        <Heart size={10} fill="currentColor" />
                      </div>
                    </div>
                    <h4 className="font-black text-slate-900 uppercase tracking-tighter italic">{review.name}</h4>
                    <p className="text-amber-600 text-[10px] font-black uppercase tracking-widest mt-1">Verified Patron</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;