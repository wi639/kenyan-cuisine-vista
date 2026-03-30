import React, { useState, useEffect } from 'react';
import { Menu, X, UtensilsCrossed, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
}

const Navbar = ({ isMenuOpen, setIsMenuOpen }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Reservations', href: '#reservations' },
    { name: 'Our Chefs', href: '#chefs' },
    { name: 'Events', href: '#events' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <UtensilsCrossed className={`h-8 w-8 ${isScrolled ? 'text-amber-600' : 'text-white'}`} />
            <span className={`text-2xl font-black tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              JUA<span className="text-amber-500">KALI</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-amber-500 ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button
              asChild
              className="bg-amber-600 hover:bg-amber-700 text-white rounded-full font-bold h-10 px-6"
            >
              <a href="tel:0768294036" className="flex items-center gap-2">
                <Phone size={16} />
                <span>0768294036</span>
              </a>
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl z-50 p-6 md:hidden"
          >
            <div className="flex justify-between items-center mb-10">
              <span className="text-xl font-bold">Navigation</span>
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={28} />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-bold text-slate-800 hover:text-amber-600"
                >
                  {link.name}
                </a>
              ))}
              <Button
                asChild
                className="bg-amber-600 hover:bg-amber-700 text-white rounded-xl h-14 font-bold"
              >
                <a href="tel:0768294036" className="flex items-center justify-center gap-2">
                  <Phone size={18} />
                  <span>Call 0768294036</span>
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;