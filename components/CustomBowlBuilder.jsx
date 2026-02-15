// components/CustomBowlBuilder.jsx (Versión Final)
'use client';
import { useState } from 'react';
import { ingredientsDB } from '../data/menu';
import { Plus, Check, X } from 'lucide-react';

export default function CustomBowlBuilder({ onAdd, onClose }) {
  const [category, setCategory] = useState('Bowls'); // Estado para elegir tipo
  const [selection, setSelection] = useState({
    base: null,
    protein: null,
    toppings: []
  });

  // Filtrar bases según la categoría elegida
  const availableBases = ingredientsDB.bases.filter(b => b.category === category);

  const toggleTopping = (topping) => {
    if (selection.toppings.find(t => t.name === topping.name)) {
      setSelection({
        ...selection,
        toppings: selection.toppings.filter(t => t.name !== topping.name)
      });
    } else {
      setSelection({
        ...selection,
        toppings: [...selection.toppings, topping]
      });
    }
  };

  const calculateTotal = () => {
    let total = 10000; // Base genérica
    if (selection.base) total += selection.base.price;
    if (selection.protein) total += selection.protein.price;
    selection.toppings.forEach(t => total += t.price);
    return total;
  };

  const handleAdd = () => {
    if (!selection.base || !selection.protein) return alert("Elige una base y una proteína.");
    
    const customProduct = {
      id: `custom_${Date.now()}`,
      name: `${category.slice(0, -1)} Personalizado`, // "Bowl Personalizado"
      price: calculateTotal(),
      description: `${selection.base.name}, ${selection.protein.name}, ${selection.toppings.map(t => t.name).join(', ')}`,
      type: 'Custom',
      nutrition: { calories: 0, protein: "0g", carbs: "0g", fat: "0g" }
    };
    onAdd(customProduct);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-[60] flex items-end md:items-center justify-center p-0 md:p-4 backdrop-blur-sm animate-in fade-in duration-200">
      
      <div className="bg-white w-full md:max-w-lg h-[90vh] md:h-auto md:max-h-[85vh] md:rounded-2xl rounded-t-2xl overflow-hidden flex flex-col shadow-2xl">
        
        {/* Header */}
        <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-white z-10">
          <div>
            <h2 className="text-xl font-black tracking-tight">Crea tu plato.</h2>
            <p className="text-xs text-gray-500">Diseñado a tu medida.</p>
          </div>
          <button onClick={onClose} className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 text-gray-600">
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-5 space-y-8 flex-1 pb-32">
          
          {/* Selector de Categoría */}
          <div>
            <label className="block text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">¿Qué quieres armar?</label>
            <div className="flex bg-gray-100 p-1 rounded-xl">
              {['Bowls', 'Ensaladas', 'Sandwiches', 'Wraps'].map(cat => (
                <button
                  key={cat}
                  onClick={() => { setCategory(cat); setSelection({...selection, base: null}); }}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${category === cat ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Paso 1: Base */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-black text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold">1</span>
              <h3 className="font-bold text-sm">Elige tu Base</h3>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {availableBases.map(base => (
                <button 
                  key={base.name}
                  onClick={() => setSelection({...selection, base})}
                  className={`p-3 rounded-xl border text-left flex justify-between items-center transition-all ${selection.base?.name === base.name ? 'border-black bg-gray-50 ring-1 ring-black' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <span className="font-medium text-sm">{base.name}</span>
                  <span className="text-xs font-bold bg-gray-200 px-2 py-1 rounded">+${base.price}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Paso 2: Proteína */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-black text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold">2</span>
              <h3 className="font-bold text-sm">Proteína</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {ingredientsDB.proteins.map(prot => (
                <button 
                  key={prot.name}
                  onClick={() => setSelection({...selection, protein: prot})}
                  className={`p-3 rounded-xl border text-left transition-all ${selection.protein?.name === prot.name ? 'border-black bg-gray-50 ring-1 ring-black' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <div className="font-medium text-sm mb-1">{prot.name}</div>
                  <div className="text-xs text-gray-500">+${prot.price}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Paso 3: Toppings */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-black text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold">3</span>
              <h3 className="font-bold text-sm">Toppings Extra</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {ingredientsDB.toppings.map(top => {
                const isSelected = selection.toppings.find(t => t.name === top.name);
                return (
                  <button 
                    key={top.name}
                    onClick={() => toggleTopping(top)}
                    className={`px-3 py-2 rounded-full border text-xs font-medium transition-all flex items-center gap-2 ${isSelected ? 'bg-black text-white border-black' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                  >
                    {top.name} {isSelected && <Check size={12} />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Flotante */}
        <div className="p-5 border-t border-gray-100 bg-white">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-gray-500">Total estimado</span>
            <span className="text-2xl font-black tracking-tight">${calculateTotal().toLocaleString()}</span>
          </div>
          <button 
            onClick={handleAdd}
            className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-transform active:scale-95 flex justify-center items-center gap-2"
          >
            Agregar al Pedido <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
