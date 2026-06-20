import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        
        <div>
          <h2 className="font-bebas text-3xl text-white tracking-widest text-center md:text-left">
            SAMY'S <span className="text-[#FF6A00]">RESTOBAR</span>
          </h2>
          <p className="font-poppins text-xs text-gray-500 mt-1 text-center md:text-left">Los mejores asados y picadas de Chimichagua</p>
        </div>

        <div className="flex flex-col items-center md:items-end space-y-3">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-[#FF6A00] transition-colors"><FaInstagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-[#FF6A00] transition-colors"><FaFacebookF size={20} /></a>
          </div>
          <p className="font-montserrat text-xs text-gray-400 tracking-wider">
            Tels: 312 888 3855 | 316 992 5697
          </p>
        </div>

      </div>
      <div className="max-w-7xl mx-auto text-center mt-12 pt-6 border-t border-white/5">
        <p className="font-poppins text-xs text-gray-600">
          © 2026 Samy's Restobar - Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};