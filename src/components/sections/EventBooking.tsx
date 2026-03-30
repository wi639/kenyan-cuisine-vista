import React from 'react';
import { motion } from 'framer-motion';
import { Music, PartyPopper, Briefcase, ChevronRight, CalendarCheck } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

const EventBooking = () => {
  const handleInquiry = () => {
    toast.success('Event inquiry received!', {
      description: 'Our events coordinator will call you at 0768294036 shortly.',
    });
  };

  return (
    <section id="events" className="py-24 bg-amber-600 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 p-24 opacity-10 rotate-12">
         <CalendarCheck size={400} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-200 font-black uppercase tracking-[0.3em] text-xs mb-6 inline-block bg-white/10 px-4 py-1.5 rounded-full">Occasions</span>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic">
              Unforgettable <br />
              <span className="text-slate-900 underline decoration-white/20">Events.</span>
            </h2>
            <p className="text-amber-50 text-xl mb-12 leading-relaxed font-light opacity-90">
              Host your next milestone with us. Whether it's a vibrant traditional wedding or 
              a corporate networking evening, we provide the perfect Kenyan backdrop.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                { icon: <Music />, title: 'Live Entertainment', color: 'bg-slate-900' },
                { icon: <PartyPopper />, title: 'Private Parties', color: 'bg-amber-700' },
                { icon: <Briefcase />, title: 'Corporate Packages', color: 'bg-amber-800' },
                { icon: <CalendarCheck />, title: 'Weddings', color: 'bg-slate-800' }
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-4 p-5 rounded-[2rem] border border-white/10 shadow-lg ${item.color}`}>
                  <div className="p-3 bg-white/10 rounded-2xl">
                    {item.icon}
                  </div>
                  <h4 className="font-black uppercase tracking-widest text-[10px]">{item.title}</h4>
                </div>
              ))}
            </div>

            <Button
              onClick={handleInquiry}
              className="bg-white text-amber-600 hover:bg-slate-900 hover:text-white font-black text-lg h-16 px-12 rounded-full shadow-2xl transition-all uppercase tracking-widest gap-2"
            >
              Request a Proposal <ChevronRight size={20} />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative grid grid-cols-2 gap-6 rotate-3">
              <div className="space-y-6 pt-12">
                <img
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/9188bc24-4746-496a-812f-91bb193eb2cf/restaurant-interior-ebab0966-1774849694916.webp"
                  className="rounded-[3rem] w-full h-[300px] object-cover shadow-2xl border-4 border-white/20"
                  alt="Venue 1"
                />
                <img
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/9188bc24-4746-496a-812f-91bb193eb2cf/customer-experience-20930327-1774849694241.webp"
                  className="rounded-[3rem] w-full h-[200px] object-cover shadow-2xl border-4 border-white/20"
                  alt="Venue 2"
                />
              </div>
              <div className="space-y-6">
                <img
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/9188bc24-4746-496a-812f-91bb193eb2cf/hero-kenyan-food---nyama-choma-701f73c1-1774849693902.webp"
                  className="rounded-[3rem] w-full h-[200px] object-cover shadow-2xl border-4 border-white/20"
                  alt="Food Service"
                />
                <img
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/9188bc24-4746-496a-812f-91bb193eb2cf/restaurant-interior-ebab0966-1774849694916.webp"
                  className="rounded-[3rem] w-full h-[300px] object-cover shadow-2xl border-4 border-white/20"
                  alt="Dining Hall"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventBooking;