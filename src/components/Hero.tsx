import React from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex justify-center items-center bg-[#0A0A0A] overflow-hidden">
      {/* Background Imagen Oscurecida con gradiente */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 opacity-30"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1920&auto=format&fit=crop")' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
      
      {/* Luces de fuego difuminadas */}
      <div className="fire-glow top-1/4 left-1/4 animate-pulse" />
      <div className="fire-glow bottom-1/4 right-1/4" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-6 flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md"
        >
          <Flame size={16} className="text-[#FF6A00] animate-bounce" />
          <span className="font-montserrat text-xs uppercase tracking-widest text-gray-300">Sabor Auténtico al Carbón</span>
        </motion.div>

        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-bebas text-6xl md:text-9xl tracking-tight text-white mb-4"
        >
          LOS MEJORES <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-[#9B1D00]">ASADOS</span> Y PICADAS
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-montserrat text-lg md:text-2xl text-gray-300 font-light mb-12 tracking-wide"
        >
          Ubicados en el corazón de <span className="font-medium text-white border-b-2 border-[#FF6A00]">Chimichagua, Cesar</span>
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto"
        >
          <a
            href="#menú"
            className="px-8 py-4 bg-gradient-to-r from-[#FF6A00] to-[#9B1D00] text-white font-montserrat text-sm font-semibold uppercase tracking-widest rounded-none shadow-[0_4px_30px_rgba(255,106,0,0.3)] hover:shadow-[0_4px_40px_rgba(255,106,0,0.6)] transition-all duration-300 text-center"
          >
            Ver Menú
          </a>
          <a
            href="https://wa.me/573169925697?text=Hola,%20quiero%20hacer%20un%20pedido."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-white text-white font-montserrat text-sm font-semibold uppercase tracking-widest rounded-none hover:bg-white hover:text-black transition-all duration-300 text-center"
          >
            Pedir por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};