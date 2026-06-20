export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  icon: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: 'asados',
    title: 'Asados',
    icon: '🔥',
    items: [
      { id: 'a1', name: 'Carne Capón', price: 22000, description: 'Exquisito corte de carne de capón sazonado con la receta secreta de la casa, asado al carbón.', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop' },
      { id: 'a2', name: 'Pechuga de Pollo', price: 21000, description: 'Filete de pechuga jugosa a la parrilla marinada con finas hierbas y especias.', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=600&auto=format&fit=crop' },
      { id: 'a3', name: 'Pechuga Gratinada', price: 25000, description: 'Pechuga a la parrilla cubierta con una generosa capa de queso mozzarella fundido al fuego.', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=600&auto=format&fit=crop' },
      { id: 'a4', name: 'Lomo de Cerdo', price: 20000, description: 'Medallón de lomo de cerdo tierno, asado a la perfección con un toque ahumado.', image: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?q=80&w=600&auto=format&fit=crop' },
      { id: 'a5', name: 'Churrasco', price: 27000, description: 'Corte premium de res con su clásico borde de grasa crocante, acompañado de chimichurri.', image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=600&auto=format&fit=crop' },
      { id: 'a6', name: 'Trifásico', price: 26000, description: 'La combinación perfecta de tres carnes: res, cerdo y pollo, asadas al carbón ardiente.', image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=600&auto=format&fit=crop' },
      { id: 'a7', name: 'Bifásico', price: 23000, description: 'Doble sabor a tu elección: selecciona dos de nuestras mejores carnes a la parrilla.', image: 'https://images.unsplash.com/photo-1529692236671-f1f6e994a52c?q=80&w=600&auto=format&fit=crop' }
    ]
  },
  {
    id: 'picadas',
    title: 'Picadas',
    icon: '🍖',
    items: [
      { id: 'p1', name: 'Picada Personal', price: 25000, description: 'Porción ideal para uno: variedad de carnes, papa criolla, patacón y arepa.', image: 'https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?q=80&w=600&auto=format&fit=crop' },
      { id: 'p2', name: 'Picada Samy\'s', price: 45000, description: 'Combinación icónica para compartir con los embutidos artesanales y cortes de la casa.', image: 'https://images.unsplash.com/photo-1541014741259-df549fa3335d?q=80&w=600&auto=format&fit=crop' },
      { id: 'p3', name: 'Picada Samy\'s Mix', price: 60000, description: 'Bandeja gigante mixta reforzada con costillas BBQ, chicharrón, papas fritas y salsas.', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop' },
      { id: 'p4', name: 'Picada Súper Samy\'s', price: 70000, description: 'Nuestra picada legendaria tamaño familiar. Absolutamente todo el poder del asado en tu mesa.', image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=600&auto=format&fit=crop' }
    ]
  },
  {
    id: 'hamburguesas',
    title: 'Hamburguesas',
    icon: '🍔',
    items: [
      { id: 'h1', name: 'Hamburguesa Sencilla', price: 15000, description: 'Carne artesanal de 150g, queso cheddar, vegetales frescos y nuestra salsa especial.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop' },
      { id: 'h2', name: 'Hamburguesa Doble Carne', price: 20000, description: 'Para amantes de la carne: 300g de puro sabor artesanal, doble queso y tocineta.', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600&auto=format&fit=crop' },
      { id: 'h3', name: 'Hamburguesa Especial', price: 25000, description: 'Carne premium, ripio de papa, huevo frito, tocineta crujiente, queso fundido y baño de BBQ.', image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=600&auto=format&fit=crop' }
    ]
  },
  {
    id: 'plancha',
    title: 'A la Plancha',
    icon: '🍟',
    items: [
      { id: 'l1', name: 'Patacón Samy\'s', price: 20000, description: 'Patacón gigante crujiente coronado con carne desmechada, pollo gratinado y hogao.', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=600&auto=format&fit=crop' },
      { id: 'l2', name: 'Costillas a la BBQ', price: 28000, description: 'Costillas de cerdo tiernas bañadas en una ahumada y dulce salsa BBQ artesanal.', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop' },
      { id: 'l3', name: 'Salchipapa Personal', price: 15000, description: 'Papas fritas seleccionadas con salchicha premium, queso costeño rallado y salsas.', image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=600&auto=format&fit=crop' },
      { id: 'l4', name: 'Salchipapa Especial', price: 20000, description: 'Papas, salchicha premium, pollo, carne, queso derretido en soplete y ripio crujiente.', image: 'https://images.unsplash.com/photo-1625182630526-83633aa1f908?q=80&w=600&auto=format&fit=crop' }
    ]
  }
];

export const promotionsData = [
  { id: 'pr1', title: 'Combo Parejas', price: '$39.900', desc: '2 Hamburguesas Sencillas + Papas Gigantes + Bebida', image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop' },
  { id: 'pr2', title: 'Jueves de Asados', price: '$22.000', desc: 'Pechuga Gratinada a precio de Pechuga Normal', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop' },
  { id: 'pr3', title: 'Mega Picada Fest', price: '$62.000', desc: 'Lleva tu Picada Súper Samy\'s con porción de patacón gratis', image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=800&auto=format&fit=crop' }
];

export const galleryData = [
  'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541014741259-df549fa3335d?q=80&w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=500&auto=format&fit=crop',
];