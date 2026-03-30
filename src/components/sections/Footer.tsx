import React from 'react';
import { UtensilsCrossed, Instagram, Facebook, Twitter, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-stone-950 text-white pt-32 pb-16 overflow-hidden relative">
      <div className="absolute top-0 right-0 p-40 opacity-5 rotate-45 pointer-events-none">
         <UtensilsCrossed size={600} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-amber-500 rounded-xl text-stone-950">
                <UtensilsCrossed className="h-6 w-6" />
              </div>
              <span className="text-3xl font-black tracking-tighter uppercase italic">
                JUA<span className="text-amber-500">KALI</span>
              </span>
            </div>
            <p className="text-slate-400 mb-10 leading-relaxed text-sm font-light">
              We believe in the power of shared meals. Every dish we serve is a tribute 
              to our Kenyan roots and the vibrant spirit of East African hospitality.
            </p>
            <div className="flex gap-4">
               {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <Button key={i} variant="outline" size="icon" className="rounded-2xl border-white/10 bg-white/5 hover:bg-amber-600 hover:text-white transition-all">
                    <Icon size={18} />
                  </Button>
               ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-10 text-amber-500">Navigation</h4>
            <ul className="space-y-5 text-sm font-bold uppercase tracking-widest">
              <li><a href="#menu" className="text-slate-300 hover:text-amber-500 transition-colors flex items-center justify-between group">The Menu <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#reservations" className="text-slate-300 hover:text-amber-500 transition-colors flex items-center justify-between group">Reservations <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#events" className="text-slate-300 hover:text-amber-500 transition-colors flex items-center justify-between group">Private Dining <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#chefs" className="text-slate-300 hover:text-amber-500 transition-colors flex items-center justify-between group">Our Story <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-10 text-amber-500">Support</h4>
            <ul className="space-y-5 text-sm font-bold uppercase tracking-widest">
              <li><a href="#" className="text-slate-300 hover:text-amber-500 transition-colors">Terms of Use</a></li>
              <li><a href="#" className="text-slate-300 hover:text-amber-500 transition-colors">Privacy Policy</a></li>
              <li><a href="tel:0768294036" className="text-amber-500 flex items-center gap-2">0768294036</a></li>
              <li><a href="mailto:hello@juakali.co.ke" className="text-slate-300 hover:text-amber-500 transition-colors">hello@juakali.co.ke</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-10 text-amber-500">Join the Circle</h4>
            <p className="text-slate-400 mb-8 text-xs font-light">Stay updated with our latest offers and coastal recipes.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-[10px] font-black tracking-widest uppercase outline-none focus:ring-1 focus:ring-amber-500 transition-all"
              />
              <Button className="w-full h-14 bg-white text-stone-950 hover:bg-amber-600 hover:text-white font-black uppercase tracking-[0.2em] rounded-2xl transition-all">
                SUBSCRIBE
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
            © {new Date().getFullYear()} JuaKali Kitchen Nairobi.
          </p>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
             <span>Proudly Kenyan</span>
             <span>Handcrafted with Soul</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;