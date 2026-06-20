import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { TbMeat, TbGrill } from 'react-icons/tb';
import { GiFrenchFries, GiHamburger } from 'react-icons/gi';
import { Toaster, toast } from 'react-hot-toast'; // <-- Importamos las notificaciones

// Importamos el logo
import logoSamy from './assets/Logo.png';

const menuData = [
  {
    category: 'ASADOS',
    icon: <TbMeat size={40} className="text-white mb-2" />,
    items: [
      { name: 'Carne Capón', price: '$22K', desc: '280 gr de carne, papas a la francesa y ensalada.' },
      { name: 'Pechuga de Pollo', price: '$21K', desc: '280 gr de pechuga, papas a la francesa y ensalada.' },
      { name: 'Pechuga Gratinada', price: '$25K', desc: '280 gr de pechuga, jamón, queso mozzarella, papas a la francesa y ensalada.' },
      { name: 'Lomo de Cerdo', price: '$20K', desc: '280 gr de lomo, papas a la francesa y ensalada.' },
      { name: 'Churrasco', price: '$27K', desc: '330 gr de lomo, papas a la francesa y ensalada.' },
      { name: 'Trifásico', price: '$26K', desc: '300 gr de carne, lomo y pechuga, acompañado de papas a la francesa.' },
      { name: 'Bifásico', price: '$23K', desc: '300 gr de lomo y carne, acompañado de papas a la francesa y ensalada.' },
    ]
  },
  {
    category: 'PICADAS',
    icon: <GiFrenchFries size={40} className="text-white mb-2" />,
    items: [
      { name: 'Picada Personal', price: '25K', desc: '250 gr de carne (res y lomo), chorizo, butifarra, papas a la francesa, patacones y ensalada.' },
      { name: 'Picada Samy\'s', price: '45K', desc: '600 gr de carne (res, lomo y pechuga), chorizo, butifarra, papas a la francesa, patacones y ensalada.' },
      { name: 'Picada Samy\'s Mix', price: '60K', desc: '600 gr de carne (res, lomo y pechuga), chorizo, butifarra, costillas a la BBQ, papas a la francesa, patacones y ensalada.' },
      { name: 'Picada Súper Samy\'s', price: '70K', desc: '800 gr de carne (res, lomo y pechuga), chorizo, butifarra, costillas a la BBQ, papas a la francesa, patacones y ensalada.' },
    ]
  },
  {
    category: 'HAMBURGUESAS',
    icon: <GiHamburger size={40} className="text-white mb-2" />,
    items: [
      { name: 'Hamburguesa Sencilla', price: '15K', desc: 'Carne, jamón, queso, cebolla grillé, tomate, lechuga y papas fritas.' },
      { name: 'Hamburguesa Doble Carne', price: '20K', desc: '2 carnes de res, jamón, queso, cebolla grillé, tomate, lechuga y papas a la francesa.' },
      { name: 'Hamburguesa Especial', price: '25K', desc: '2 carnes (res y pollo), jamón, chorizo, queso, cebolla grillé, tomate, lechuga y papas a la francesa.' },
    ]
  },
  {
    category: 'A LA PLANCHA',
    icon: <TbGrill size={40} className="text-white mb-2" />,
    items: [
      { name: 'Patacón Samy\'s', price: '$20K', desc: '200 gr de carne, lomo y pechuga, chorizo, butifarra, queso mozzarella, queso costeño y cebolla grillé.' },
      { name: 'Costillas a la BBQ', price: '$28K', desc: '250 gr de costillas, papas a la francesa y ensalada.' },
      { name: 'Salchipapa Personal', price: '$15K', desc: 'Pollo, chorizo, butifarra, lechuga y queso.' },
      { name: 'Salchipapa Especial', price: '$20K', desc: 'Carne, lomo, pechuga, chorizo, butifarra, lechuga y queso.' },
    ]
  }
];

export default function App() {
  const handleOrder = (itemName: string) => {
    const text = encodeURIComponent(`Hola, quiero pedir: ${itemName}`);
    window.open(`https://wa.me/573169925697?text=${text}`, '_blank');
  };

  // Función mágica para copiar el número de Nequi
  const handleNequiCopy = () => {
    navigator.clipboard.writeText('3128883855');
    toast.success('¡Número de Nequi copiado!', {
      style: {
        background: '#4A148C',
        color: '#fff',
        fontWeight: 'bold',
      },
      iconTheme: {
        primary: '#fff',
        secondary: '#4A148C',
      },
    });
  };

  return (
    <div className="relative min-h-screen bg-black font-sans selection:bg-[#FF6A00] selection:text-white pb-12">
      
      {/* Componente Toaster que muestra las alertas en pantalla */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* El Fondo de Hamburguesa Oscurecido */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-luminosity"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1920&auto=format&fit=crop")' }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#1a0a00]/80 via-black/80 to-black/95" />

      {/* Contenido Real */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-4 md:pt-6">
        
        {/* HEADER: Logo y Contacto */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 md:gap-8">
          
          {/* Logo Real Importado */}
          <div className="w-[300px] sm:w-[350px] md:w-[500px] flex items-center justify-center shrink-0 -my-12 md:-my-20">
            <img 
              src={logoSamy} 
              alt="Samy's Restobar Logo" 
              className="w-full h-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] relative z-0"
            />
          </div>

          {/* Info de Contacto Superior */}
          <div className="relative z-10 flex flex-col gap-4 md:gap-6 text-white text-center md:text-right w-full md:w-auto items-center md:items-end">
            
            {/* Botón interactivo de Nequi */}
            <div 
              onClick={handleNequiCopy}
              className="flex items-center gap-4 cursor-pointer hover:scale-105 active:scale-95 transition-transform bg-white/5 px-4 py-2 rounded-xl border border-white/10 hover:border-[#4A148C]/50"
              title="Haz clic para copiar el número"
            >
              <div className="w-12 h-12 bg-white text-[#4A148C] font-black text-3xl flex items-center justify-center rounded-md shrink-0 shadow-[0_0_15px_rgba(74,20,140,0.4)]">
                N
              </div>
              <div className="flex flex-col items-start md:items-end">
                <span className="text-sm text-gray-400 font-medium">TOCA PARA COPIAR</span>
                <span className="text-3xl tracking-widest font-semibold">3128883855</span>
              </div>
            </div>

            {/* WhatsApp */}
            <div 
              className="flex items-center gap-4 hover:text-[#FF6A00] transition-colors cursor-pointer hover:scale-105 active:scale-95 px-4 py-2" 
              onClick={() => window.open('https://wa.me/573169925697', '_blank')}
            >
              <FaWhatsapp size={48} className="shrink-0" />
              <div className="flex flex-col items-start md:items-end">
                <span className="text-xl italic text-gray-300">DOMICILIOS</span>
                <span className="text-3xl tracking-widest font-semibold">3169925697</span>
              </div>
            </div>
          </div>
        </div>

        {/* MENU GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 relative z-10 mt-6">
          {menuData.map((category, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="mb-6 flex flex-col items-start">
                {category.icon}
                <h2 className="text-white text-5xl font-bold tracking-wider uppercase">
                  {category.category}
                </h2>
              </div>

              <div className="flex flex-col gap-5">
                {category.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx} 
                    onClick={() => handleOrder(item.name)}
                    className="group cursor-pointer"
                  >
                    <div className="flex items-baseline w-full">
                      <h3 className="text-white font-bold text-lg whitespace-nowrap group-hover:text-[#FF6A00] transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex-grow border-b-[3px] border-dotted border-white/40 mx-3 relative top-[-6px]"></div>
                      <span className="text-white font-bold text-lg whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mt-1 pr-4 leading-snug font-light group-hover:text-gray-100 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER EXACTO AL FLYER */}
        <div className="mt-20 pt-10 flex flex-col items-center text-center">
          <div className="flex items-center gap-3 bg-black/60 px-6 py-3 rounded-full border border-white/10 mb-10">
            <FaMapMarkerAlt className="text-red-500 shrink-0" size={24} />
            <span className="text-white text-xl font-medium tracking-wide">
              Dirección: Calle 9 #10 Esquina
            </span>
          </div>

          <h1 className="text-[#FF6A00] text-3xl md:text-5xl font-bold tracking-wider drop-shadow-lg uppercase flex items-center gap-4">
            NO TE OLVIDES DE TU BEBIDA FRIA
            <span className="text-4xl">🥤</span>
          </h1>
        </div>
      </div>
    </div>
  );
}