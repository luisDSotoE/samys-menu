import React from 'react';
import { motion } from 'framer-motion';
import { galleryData } from '../data/menuData';

export const Gallery: React.FC = () => {
  return (
    <section id="galería" className="py-24 bg-[#0A0A0A] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-5xl md:text-7xl tracking-wide text-white">GALERÍA <span className="text-[#FF6A00]">PREMIUM</span></h2>
          <div className="w-24 h-1 bg-[#FF6A00] mx-auto mt-2" />
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryData.map((imgUrl, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="break-inside-avoid overflow-hidden border border-white/5 bg-[#121212] group relative cursor-pointer"
            >
              <img 
                loading="lazy"
                src={imgUrl} 
                alt={`Plato ${index}`} 
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="font-montserrat text-xs uppercase tracking-widest text-white font-semibold">@samys.restobar</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};