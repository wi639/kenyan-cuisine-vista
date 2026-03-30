import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Clock, Utensils, Send, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ReservationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success('Table reservation confirmed! Check your SMS for details.', {
        description: 'We look forward to hosting you at JuaKali Kitchen.',
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="reservations" className="py-24 bg-stone-900 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/9188bc24-4746-496a-812f-91bb193eb2cf/restaurant-interior-ebab0966-1774849694916.webp" 
          className="w-full h-full object-cover opacity-20"
          alt="Atmosphere"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="text-white">
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic">
              Reserved <br />
              <span className="text-amber-500">For You.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-lg">
              Experience Kenyan hospitality at its finest. From business lunches to 
              intimate family gatherings, we ensure your table is ready.
            </p>
            
            <div className="space-y-10">
               {[
                 { title: 'The Ambiance', desc: 'Warm lighting and contemporary African art.' },
                 { title: 'The Service', desc: 'Friendly staff dedicated to your comfort.' },
                 { title: 'The Taste', desc: 'Quality ingredients and traditional cooking methods.' }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6">
                    <CheckCircle2 className="text-amber-500 flex-shrink-0" size={28} />
                    <div>
                      <h4 className="font-black uppercase tracking-widest text-sm mb-2">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Full Name</Label>
                  <Input required placeholder="E.g. Mwangi Juma" className="h-14 rounded-2xl bg-stone-50 border-stone-200 focus:ring-amber-500" />
                </div>
                <div className="space-y-3">
                  <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Phone Number</Label>
                  <Input required defaultValue="0768294036" className="h-14 rounded-2xl bg-stone-50 border-stone-200 focus:ring-amber-500" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Date</Label>
                  <Input required type="date" className="h-14 rounded-2xl bg-stone-50 border-stone-200" />
                </div>
                <div className="space-y-3">
                  <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Time</Label>
                  <Select defaultValue="7pm">
                    <SelectTrigger className="h-14 rounded-2xl bg-stone-50 border-stone-200">
                      <SelectValue placeholder="Time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12pm">12:00 PM</SelectItem>
                      <SelectItem value="1pm">01:00 PM</SelectItem>
                      <SelectItem value="7pm">07:00 PM</SelectItem>
                      <SelectItem value="8pm">08:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-3">
                  <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Guests</Label>
                  <Select defaultValue="2">
                    <SelectTrigger className="h-14 rounded-2xl bg-stone-50 border-stone-200">
                      <SelectValue placeholder="Guests" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Person</SelectItem>
                      <SelectItem value="2">2 People</SelectItem>
                      <SelectItem value="4">4 People</SelectItem>
                      <SelectItem value="6">6+ People</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Special Requests</Label>
                <Textarea placeholder="Tell us about any dietary needs or special occasions..." className="min-h-[120px] rounded-2xl bg-stone-50 border-stone-200 resize-none" />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-16 bg-amber-600 hover:bg-amber-700 text-white font-black text-lg rounded-2xl shadow-xl shadow-amber-600/20 transition-all uppercase tracking-widest gap-3"
              >
                {isSubmitting ? 'Confirming...' : (
                  <>
                    Confirm Reservation <Send size={20} />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;