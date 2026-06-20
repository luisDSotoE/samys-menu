import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData } from '../data/menuData';
import { useUIStore } from '../store/useUIStore';
import { ShoppingBag } from 'lucide-react';
import Skeleton from '@mui/material/Skeleton';

export const MenuSection: React.FC = () => {
  const { activeCategory, setActiveCategory } = useUIStore();
  const [loadingItems, setLoadingItems] = React.useState(false);

  const handleCategoryChange = (catId: string) => {
    setLoadingItems(true);
    setActiveCategory(catId);
    setTimeout(() => setLoadingItems(false), 400);
  };

  const currentCategory = menuData.find(cat => cat.id === activeCategory);

  const handleWhatsAppRedirect = (productName: string) => {
    const message = encodeURIComponent(`Hola, quiero pedir ${productName}.`);
    window.open(`https://wa.me/573169925697?text=${message}`, '_blank');
  };

  return (
    <section id="menú" className="py-24 bg-[#0A0A0A] relative px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-5xl md:text-7xl tracking-wide text-white">NUESTRO <span className="text-[#FF6A00]">MENÚ</span></h2>
          <div className="w-24 h-1 bg-[#FF6A00] mx-auto mt-2" />
        </div>

        {/* Categorías Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 font-montserrat text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeCategory === category.id 
                  ? 'bg-[#FF6A00] text-white shadow-[0_4px_20px_rgba(255,106,0,0.3)]' 
                  : 'bg-[#121212] text-gray-400 border border-white/5 hover:border-[#FF6A00]/40'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Grid de Productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          <AnimatePresence mode="wait">
            {loadingItems ? (
              Array.from(new Array(6)).map((_, idx) => (
                <div key={idx} className="bg-[#121212] p-4 border border-white/5">
                  <Skeleton variant="rectangular" height={220} sx={{ bgcolor: 'rgba(255,106,0,0.05)' }} />
                  <Skeleton width="60%" sx={{ bgcolor: 'rgba(255,255,255,0.05)', mt: 2 }} />
                  <Skeleton width="40%" sx={{ bgcolor: 'rgba(255,255,255,0.05)', mt: 1 }} />
                </div>
              ))
            ) : (
              currentCategory?.items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="glass-premium flex flex-col group overflow-hidden"
                >
                  {/* Contenedor Imagen */}
                  <div className="h-60 w-full overflow-hidden relative">
                    <img 
                      loading="lazy"
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60" />
                  </div>
                  
                  {/* Datos */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-baseline mb-3">
                      <h3 className="font-montserrat text-xl font-bold text-white tracking-wide group-hover:text-[#FF6A00] transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-bebas text-2xl text-[#FF6A00] tracking-wider">
                        ${item.price.toLocaleString('es-CO')}
                      </span>
                    </div>
                    <p className="font-poppins text-sm text-gray-400 font-light leading-relaxed mb-6 flex-grow">
                      {item.description}
                    </p>
                    
                    <button
                      onClick={() => handleWhatsAppRedirect(item.name)}
                      className="w-full py-3.5 bg-[#121212] group-hover:bg-gradient-to-r group-hover:from-[#FF6A00] group-hover:to-[#9B1D00] border border-white/10 group-hover:border-transparent text-white font-montserrat text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <ShoppingBag size={14} />
                      <span>Pedir Orden</span>
                    </button>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};