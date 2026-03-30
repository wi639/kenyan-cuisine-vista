import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, UtensilsCrossed } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/sonner';
import { Button } from '@/components/ui/button';

import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import SpecialOffers from './components/sections/SpecialOffers';
import MenuSection from './components/sections/MenuSection';
import ReservationForm from './components/sections/ReservationForm';
import ChefProfiles from './components/sections/ChefProfiles';
import Reviews from './components/sections/Reviews';
import EventBooking from './components/sections/EventBooking';
import LocationSection from './components/sections/LocationSection';
import Footer from './components/sections/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFBEB] text-slate-900 font-sans selection:bg-amber-200">
      <Toaster position="top-center" richColors />
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main>
        <Hero />
        <SpecialOffers />
        <MenuSection />
        <ReservationForm />
        <ChefProfiles />
        <Reviews />
        <EventBooking />
        <LocationSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;