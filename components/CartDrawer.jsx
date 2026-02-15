// components/CartDrawer.jsx
'use client';
import { useState } from 'react';
import { X, Trash2, ShoppingBag, Bike, Store } from 'lucide-react';

export default function CartDrawer({ cart, isOpen, onClose, onRemove, onClear }) {
  const [orderType, setOrderType] = useState('delivery'); // 'delivery' o 'pickup'

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    const itemsList = cart.map(i => `- ${i.name} ($${i.price.toLocaleString()})\n  ${i.description || ''}`).join('\n');
    
    const typeText = orderType === 'delivery' ? '🛵 *DOMICILIO*' : '🏪 *RECOGER EN TIENDA*';
    
    const message = `Hola Strong Salad, quiero hacer un pedido:\n\n${typeText}\n\n${itemsList}\n\n*Total a pagar: $${total.toLocaleString()}*`;
    
    window.open(`https://wa.me/573156314918?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      {/* Overlay Oscuro */}
      <div 
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Panel Deslizante */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[60] shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-white">
          <h2 className="text-xl font-black flex items-center gap-2">
            <ShoppingBag className="text-black" /> Tu Bolsa
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Lista de Productos (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4 opacity-50">
              <ShoppingBag size={64} />
              <p>Tu bolsa está vacía</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.uniqueId} className="flex gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100 relative group">
                {/* Imagen pequeña si existe, sino icono */}
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-2xl shadow-sm">
                  🥗
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm text-gray-900">{item.name}</h4>
                  <p className="text-xs text-gray-500 line-clamp-1 mb-1">{item.description}</p>
                  <p className="font-bold text-green-600">${item.price.toLocaleString()}</p>
                </div>
                <button 
                  onClick={() => onRemove(item.uniqueId)}
                  className="absolute top-2 right-2 p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer (Total + Tipo de Entrega + Botón) */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-white space-y-4">
            
            {/* Selector Domicilio/Recoger */}
            <div className="bg-gray-100 p-1 rounded-xl flex font-bold text-sm relative">
              <div 
                className={`absolute top-1 bottom-1 w-1/2 bg-white rounded-lg shadow-sm transition-all duration-300 ${orderType === 'pickup' ? 'left-[49%] translate-x-0' : 'left-1'}`}
              />
              <button 
                onClick={() => setOrderType('delivery')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 z-10 transition-colors ${orderType === 'delivery' ? 'text-black' : 'text-gray-500'}`}
              >
                <Bike size={18} /> Domicilio
              </button>
              <button 
                onClick={() => setOrderType('pickup')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 z-10 transition-colors ${orderType === 'pickup' ? 'text-black' : 'text-gray-500'}`}
              >
                <Store size={18} /> Recoger
              </button>
            </div>

            <div className="flex justify-between items-end">
              <span className="text-gray-500 text-sm font-medium">Total a Pagar</span>
              <span className="text-3xl font-black tracking-tighter">${total.toLocaleString()}</span>
            </div>

            <button 
              onClick={handleCheckout}
              className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#20bd5a] active:scale-[0.98] transition-all shadow-lg shadow-green-200 flex justify-center items-center gap-2"
            >
              Confirmar Pedido por WhatsApp
            </button>
            
            <button onClick={onClear} className="w-full text-xs text-red-400 hover:text-red-600 font-bold py-2">
              Vaciar Bolsa
            </button>
          </div>
        )}
      </div>
    </>
  );
}
