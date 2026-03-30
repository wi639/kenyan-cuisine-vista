import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LocationSection = () => {
  return (
    <section id="location" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-amber-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Our Home</span>
            <h2 className="text-5xl font-black text-slate-900 mb-8 uppercase italic tracking-tighter">
              Where to <br />
              <span className="text-amber-500 underline decoration-slate-200">Find Us.</span>
            </h2>
            <p className="text-slate-500 text-lg mb-12 leading-relaxed">
              Nestled on Ngong Road, JuaKali Kitchen is perfectly positioned for a quick 
              city lunch or a long, celebratory dinner under the Nairobi stars.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
              {[
                { icon: <MapPin />, title: 'The Spot', val: 'Ngong Road, Nairobi', sub: 'Opposite Junction Mall' },
                { icon: <Phone />, title: 'Call Us', val: '0768294036', sub: 'Available 10am - 11pm' },
                { icon: <Mail />, title: 'Write Us', val: 'hello@juakali.co.ke', sub: 'Corporate & Catering inquiries' },
                { icon: <Clock />, title: 'Hours', val: '10 AM - 12 AM', sub: 'Monday to Sunday' }
              ].map((item, i) => (
                <div key={i} className="group">
                   <div className="flex items-center gap-3 mb-3 text-amber-600">
                     {item.icon}
                     <h4 className="font-black uppercase tracking-widest text-[10px] text-slate-400 group-hover:text-amber-600 transition-colors">{item.title}</h4>
                   </div>
                   <p className="text-slate-900 font-black uppercase tracking-tight italic text-lg">{item.val}</p>
                   <p className="text-slate-500 text-xs mt-1">{item.sub}</p>
                </div>
              ))}
            </div>

            <Button className="rounded-full bg-slate-900 hover:bg-amber-600 text-white font-black uppercase tracking-widest px-10 h-14 group">
              GET DIRECTIONS <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="relative h-[600px] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border-8 border-white group">
            {/* Artistic Map Representation */}
            <div className="absolute inset-0 bg-stone-200 flex items-center justify-center p-20">
               <div className="relative text-center">
                  <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                    className="w-24 h-24 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl relative z-10"
                  >
                    <MapPin size={40} fill="currentColor" />
                  </motion.div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-600/10 rounded-full animate-ping"></div>
                  <h3 className="text-3xl font-black text-slate-800 uppercase italic tracking-tighter mb-4">JuaKali Kitchen</h3>
                  <p className="text-slate-400 text-sm max-w-[200px] mx-auto font-bold uppercase tracking-widest"> Ngong Road, Nairobi</p>
               </div>
               
               {/* Pattern overlay for "map" look */}
               <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </div>
            
            {/* Floating Info Card */}
            <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl flex justify-between items-center translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
               <div>
                  <h5 className="font-black text-slate-900 uppercase italic text-sm">Now Open</h5>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Serving hot food until midnight</p>
               </div>
               <Button variant="outline" className="rounded-full border-amber-600 text-amber-600 font-bold px-6">Visit</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;