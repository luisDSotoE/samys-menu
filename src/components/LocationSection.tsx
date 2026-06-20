import React from 'react';
import { MapPin } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-[#0A0A0A] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 text-[#FF6A00] mb-4">
              <MapPin size={20} />
              <span className="font-montserrat text-xs uppercase tracking-widest font-bold">Ubicación física</span>
            </div>
            <h2 className="font-bebas text-5xl text-white tracking-wide mb-6">VISÍTANOS EN <br />CHIMICHAGUA</h2>
            <p className="font-poppins text-base text-gray-400 leading-relaxed font-light mb-8">
              Calle 9 #10 Esquina,<br /> Chimichagua, Cesar, Colombia.
            </p>
            <a 
              href="https://maps.google.com/?q=Calle+9+#10+Esquina,+Chimichagua,+Cesar,+Colombia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border border-white/20 hover:border-[#FF6A00] font-montserrat text-xs uppercase tracking-widest text-white transition-colors"
            >
              Cómo llegar
            </a>
          </div>

          <div className="lg:col-span-2 h-96 w-full border border-white/10 relative">
            <iframe
              title="Google Maps Samys Restobar"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.3129571987515!2d-73.815234!3d9.257321!2m3!1f0!2f0!3f0!3m2!1i1020!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMTUnMjYuNCJOIDczwrA0OCU1NC44Ilc!5e0!3m2!1ses!2sco!4v1625000000000!5m2!1ses!2sco"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) invert(1) contrast(1.2)' }}
              allowFullScreen={false}
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
};