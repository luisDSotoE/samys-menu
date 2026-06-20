import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Inicio', 'Menú', 'Promociones', 'Galería', 'Contacto'];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'glass-navbar py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Menú Izquierda Escritorio */}
          <div className="hidden md:flex space-x-8">
            {menuItems.slice(0, 2).map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="font-montserrat text-sm uppercase tracking-widest text-white hover:text-[#FF6A00] transition-colors">
                {item}
              </a>
            ))}
          </div>

          {/* Logo Centrado */}
          <a href="#inicio" className="flex flex-col items-center">
            <h1 className="font-bebas text-3xl md:text-4xl text-white tracking-widest leading-none">
              SAMY'S <span className="text-[#FF6A00]">RESTOBAR</span>
            </h1>
          </a>

          {/* Menú Derecha Escritorio */}
          <div className="hidden md:flex space-x-8">
            {menuItems.slice(2).map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="font-montserrat text-sm uppercase tracking-widest text-white hover:text-[#FF6A00] transition-colors">
                {item}
              </a>
            ))}
          </div>

          {/* Botón Hamburguesa Móvil */}
          <button className="md:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} className="text-[#FF6A00]" /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Menú Desplegable Móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 pt-28 px-6 bg-[#0A0A0A]/95 backdrop-blur-xl flex flex-col space-y-6 md:hidden"
          >
            {menuItems.map((item, index) => (
              <motion.a
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="font-bebas text-4xl text-white hover:text-[#FF6A00] transition-colors tracking-wider border-b border-white/5 pb-2"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};