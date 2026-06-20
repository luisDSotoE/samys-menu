import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { promotionsData } from '../data/menuData';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export const Promotions: React.FC = () => {
  return (
    <section id="promociones" className="py-24 bg-[#121212] px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-5xl md:text-7xl tracking-wide text-white">PROMO<span className="text-[#FF6A00]">CIONES</span> 🔥</h2>
          <p className="font-montserrat text-xs uppercase tracking-widest text-gray-400 mt-2">Ofertas por tiempo limitado</p>
        </div>

        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect={'fade'}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          className="w-full max-w-4xl glass-premium h-[450px] md:h-[400px]"
        >
          {promotionsData.map((promo) => (
            <SwiperSlide key={promo.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="relative h-48 md:h-full overflow-hidden">
                  <img src={promo.image} alt={promo.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center bg-[#0A0A0A]/90">
                  <span className="font-bebas text-3xl text-[#FF6A00] tracking-widest mb-1">{promo.price}</span>
                  <h3 className="font-montserrat text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-wide">{promo.title}</h3>
                  <p className="font-poppins text-sm text-gray-400 mb-8 leading-relaxed font-light">{promo.desc}</p>
                  <button 
                    onClick={() => window.open(`https://wa.me/573169925697?text=Hola,%20quiero%20la%20promoción%20${encodeURIComponent(promo.title)}`, '_blank')}
                    className="w-full sm:w-auto self-start px-8 py-3.5 bg-gradient-to-r from-[#FF6A00] to-[#9B1D00] text-white text-xs font-semibold uppercase tracking-widest transition-transform active:scale-95"
                  >
                    Pedir Promo Ahora
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};