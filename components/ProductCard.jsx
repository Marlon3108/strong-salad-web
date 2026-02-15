'use client';
import { Plus } from 'lucide-react';

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="group relative bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Etiqueta de Ingeniería de Menú */}
      {product.type === 'Star' && (
        <span className="absolute top-3 left-3 bg-black text-white text-[10px] font-bold px-2 py-1 rounded-full z-10 tracking-widest">
          BEST SELLER
        </span>
      )}
      
      {/* Imagen (Simulada con un div gris por ahora) */}
      <div className="h-48 bg-gray-100 relative overflow-hidden flex items-center justify-center text-gray-300">
        {/* Si tuvieras imagen real usarías <Image /> de Next.js */}
        <span className="text-4xl">🥗</span> 
        
        {/* Overlay con Nutrición al pasar el mouse (Hover) */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
          <p className="font-bold text-xs uppercase mb-2 text-green-400">Datos Nutricionales</p>
          <div className="grid grid-cols-3 gap-2 text-xs text-center">
            <div className="bg-white/10 p-1 rounded">
              <span className="block font-bold">{product.nutrition.protein}</span>
              <span className="text-[10px] opacity-70">PRO</span>
            </div>
            <div className="bg-white/10 p-1 rounded">
              <span className="block font-bold">{product.nutrition.carbs}</span>
              <span className="text-[10px] opacity-70">CARB</span>
            </div>
            <div className="bg-white/10 p-1 rounded">
              <span className="block font-bold">{product.nutrition.fat}</span>
              <span className="text-[10px] opacity-70">GRASA</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg leading-tight text-gray-900">{product.name}</h3>
          <span className="font-bold text-green-600">${product.price.toLocaleString()}</span>
        </div>
        <p className="text-gray-500 text-xs line-clamp-2 mb-4 h-8">{product.description}</p>
        
        <button 
          onClick={() => onAdd(product)}
          className="w-full bg-black text-white py-2.5 rounded-lg font-medium text-sm flex items-center justify-center gap-2 hover:bg-gray-800 active:scale-95 transition-all"
        >
          <Plus size={16} /> Agregar al Pedido
        </button>
      </div>
    </div>
  );
}
