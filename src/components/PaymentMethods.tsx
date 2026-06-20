import React from 'react';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { Copy, PhoneCall } from 'lucide-react';

export const PaymentMethods: React.FC = () => {
  const nequiNumber = '3128883855';

  const handleNequiAction = () => {
    const startTime = Date.now();
    window.location.href = `nequi://send?phone=${nequiNumber}`;

    setTimeout(() => {
      if (Date.now() - startTime < 2000) {
        window.open('https://www.nequi.com.co/', '_blank');
      }
    }, 1500);
  };

  const copyToClipboard = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(nequiNumber);
    toast.success('Número de Nequi copiado con éxito.', {
      style: { background: '#121212', color: '#FFF', border: '1px solid #FF6A00', fontFamily: 'Montserrat', fontSize: '12px' },
      iconTheme: { primary: '#FF6A00', secondary: '#0A0A0A' }
    });
  };

  return (
    <section className="py-24 bg-[#121212] px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-5xl md:text-7xl tracking-wide text-white">MÉTODOS DE <span className="text-[#FF6A00]">PAGO</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tarjeta Nequi Premium */}
          <motion.div 
            whileHover={{ y: -5 }}
            onClick={handleNequiAction}
            className="glass-premium p-8 flex flex-col justify-between h-64 cursor-pointer relative group overflow-hidden border-l-4 border-l-[#D11973]!"
          >
            <div className="flex justify-between items-start">
              {/* Logo o Icono Simulado de Nequi */}
              <div className="bg-[#1E002C] text-[#E5287B] font-montserrat text-xl font-black px-4 py-1.5 rounded">
                NEQUI
              </div>
              <button 
                onClick={copyToClipboard}
                className="p-2.5 bg-white/5 hover:bg-[#FF6A00]/20 text-white rounded-full transition-colors"
                title="Copiar número"
              >
                <Copy size={16} />
              </button>
            </div>
            <div>
              <p className="font-poppins text-xs text-gray-400 uppercase tracking-widest mb-1">Número de cuenta</p>
              <h3 className="font-bebas text-4xl text-white tracking-widest">{nequiNumber}</h3>
            </div>
            <div className="font-montserrat text-xs text-gray-400 group-hover:text-white transition-colors flex items-center space-x-1">
              <span>Presiona para abrir la app o ir al sitio web</span>
            </div>
          </motion.div>

          {/* Tarjeta Domicilios */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-premium p-8 flex flex-col justify-between h-64 border-l-4 border-l-[#FF6A00]!"
          >
            <div className="flex justify-between items-start">
              <div className="bg-[#FF6A00]/10 text-[#FF6A00] p-3 rounded">
                <PhoneCall size={24} />
              </div>
            </div>
            <div>
              <p className="font-poppins text-xs text-gray-400 uppercase tracking-widest mb-1">WhatsApp Domicilios</p>
              <h3 className="font-bebas text-4xl text-white tracking-widest">316 992 5697</h3>
            </div>
            <button
              onClick={() => window.open('https://wa.me/573169925697', '_blank')}
              className="w-full py-3 bg-gradient-to-r from-[#FF6A00] to-[#9B1D00] font-montserrat text-xs uppercase tracking-widest font-bold text-white shadow-lg"
            >
              Pedir Ahora
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};