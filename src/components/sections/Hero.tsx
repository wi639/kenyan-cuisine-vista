import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/9188bc24-4746-496a-812f-91bb193eb2cf/hero-kenyan-food---nyama-choma-701f73c1-1774849693902.webp"
          alt="Kenyan Nyama Choma"
          className="w-full h-full object-cover scale-105 brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-[0.2em] text-amber-400 uppercase border border-amber-400/40 rounded-full bg-amber-400/10 backdrop-blur-sm">
            <Utensils size={14} /> Traditional Kenyan Cuisine
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9] tracking-tighter">
            THE TASTE <br />
            <span className="text-amber-500">OF HOME.</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Savor the authentic flavors of Kenya—from the rich, smoky Nyama Choma to our aromatic coastal Pilau. 
            Crafted with passion, served with heart.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              asChild
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white font-black text-lg h-16 px-10 rounded-full shadow-2xl shadow-amber-600/20 group"
            >
              <a href="#menu">
                VIEW OUR MENU
                <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/10 hover:bg-white/20 border-white/20 text-white font-black text-lg h-16 px-10 rounded-full backdrop-blur-md"
            >
              <a href="#reservations">BOOK A TABLE</a>
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase font-bold tracking-[0.3em]">Scroll</span>
        <div className="w-[2px] h-12 bg-gradient-to-b from-amber-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;