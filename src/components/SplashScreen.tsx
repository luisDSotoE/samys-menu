import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useUIStore } from '../store/useUIStore';

export const SplashScreen: React.FC = () => {
  const setLoading = useUIStore((state) => state.setLoading);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <motion.div
      className="fixed inset-0 bg-[#0A0A0A] z-50 flex flex-col justify-center items-center overflow-hidden"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Efecto de llamas difuminadas de fondo */}
      <div className="absolute w-[300px] h-[300px] bg-[#FF6A00] opacity-20 blur-[100px] rounded-full animate-pulse" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.3, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center z-10"
      >
        {/* Placeholder del Logo Estilizado Premium con Tipografía */}
        <div className="w-32 h-32 rounded-full border-2 border-[#FF6A00] flex items-center justify-center bg-[#121212] shadow-[0_0_50px_rgba(255,106,0,0.4)] mb-6">
          <span className="font-bebas text-5xl text-white tracking-wider">S<span className="text-[#FF6A00]">R</span></span>
        </div>
        
        <motion.h1 
          initial={{ letterSpacing: '2px', opacity: 0 }}
          animate={{ letterSpacing: '6px', opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-bebas text-5xl text-white tracking-widest text-center"
        >
          SAMY'S <span className="text-[#FF6A00]">RESTOBAR</span>
        </motion.h1>
        
        <p className="font-montserrat text-xs tracking-widest uppercase text-gray-400 mt-2">
          Asados • Picadas • Premium UI
        </p>
      </motion.div>

      {/* Barra de progreso elegante */}
      <div className="absolute bottom-16 w-48 h-[2px] bg-gray-900 overflow-hidden rounded-full">
        <motion.div 
          className="h-full bg-[#FF6A00]"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.3, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  );
};