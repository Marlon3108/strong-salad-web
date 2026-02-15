// app/menu/page.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
// Importaciones ajustadas para estar dentro de app/menu/
import { menuItems, ingredientsDB } from '../../data/menu';
import ProductCard from '../../components/ProductCard';
import CustomBowlBuilder from '../../components/CustomBowlBuilder';
import CartDrawer from '../../components/CartDrawer';
import { ShoppingBag, Settings, PlusCircle, X, ChefHat, Carrot, ArrowLeft } from 'lucide-react';

export default function MenuPage() {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState('Todos');
  const [showBuilder, setShowBuilder] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [animateCart, setAnimateCart] = useState(false);
  
  // Estado local para productos e ingredientes (Simulando DB)
  const [products, setProducts] = useState(menuItems);
  const [ingredients, setIngredients] = useState(ingredientsDB);
  const [adminTab, setAdminTab] = useState('products');

  // --- LÓGICA DE CARRITO ---
  const addToCart = (product) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setCart([...cart, { ...product, uniqueId: Date.now() }]);
    setAnimateCart(true);
    setTimeout(() => setAnimateCart(false), 500);
  };

  const removeFromCart = (uniqueId) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setCart(cart.filter(item => item.uniqueId !== uniqueId));
  };
  
  const clearCart = () => setCart([]);

  // --- LÓGICA DE ADMIN ---
  const handleAddNewProduct = (e) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const formData = new FormData(e.target);
    const newProd = {
      id: `new_${Date.now()}`,
      name: formData.get('name'),
      price: parseInt(formData.get('price')),
      category: formData.get('category'),
      description: formData.get('desc'),
      type: 'Standard',
      nutrition: { calories: 0, protein: "0g", carbs: "0g", fat: "0g" },
      tags: [],
      image: null
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setProducts([...products, newProd]);
    alert("Plato agregado exitosamente!");
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    e.target.reset();
  };

  const handleAddNewIngredient = (e) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const formData = new FormData(e.target);
    const type = formData.get('type');
    const newIng = {
      name: formData.get('name'),
      price: parseInt(formData.get('price')),
      category: formData.get('category') || 'General'
    };
    setIngredients({
      ...ingredients,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      [type]: [...ingredients[type], newIng]
    });
    alert(`Ingrediente agregado a ${type}!`);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    e.target.reset();
  };

  // --- FILTRADO ---
  const filteredItems = filter === 'Todos' 
    ? products 
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    : products.filter(item => item.tags?.includes(filter) || item.category === filter);

  return (
    <main className="min-h-screen bg-gray-50 text-slate-900 font-sans pb-20">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
            <Link href="/" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ArrowLeft size={20} />
            </Link>
            <h1 className="text-xl font-black tracking-tighter">MENÚ.</h1>
        </div>

        <div className="flex gap-4 items-center">
          
          <button onClick={() => setShowAdmin(!showAdmin)} className={`p-2 rounded-full transition-colors ${showAdmin ? 'bg-black text-white' : 'text-gray-400 hover:text-black'}`}>
            <Settings size={20} />
          </button>
          
          {/* ICONO CARRITO MEJORADO */}
          <button 
            onClick={() => setIsCartOpen(true)}
            className={`relative p-2 rounded-full transition-all ${animateCart ? 'animate-bounce text-green-600 bg-green-50' : 'text-slate-800 hover:bg-gray-100'}`}
          >
            <ShoppingBag size={24} />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-black text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold border-2 border-white transform translate-x-1 -translate-y-1">
                {cart.length}
              </span>
            )}
          </button>

        </div>
      </nav>

      {/* PANEL DE ADMIN */}
      {showAdmin && (
        <section className="bg-white border-b border-gray-200 p-6 mb-8 shadow-lg animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-xl flex items-center gap-2">
                <Settings className="text-black" size={20} /> 
                Panel de Control
              </h3>
              <button onClick={() => setShowAdmin(false)} className="text-sm text-gray-500 hover:text-red-500 flex items-center gap-1">
                <X size={16} /> Cerrar
              </button>
            </div>

            <div className="flex gap-4 mb-6 border-b border-gray-100">
              <button onClick={() => setAdminTab('products')} className={`pb-2 px-4 font-bold text-sm flex items-center gap-2 transition-all ${adminTab === 'products' ? 'border-b-2 border-black text-black' : 'text-gray-400'}`}>
                <ChefHat size={16} /> Nuevo Plato
              </button>
              <button onClick={() => setAdminTab('ingredients')} className={`pb-2 px-4 font-bold text-sm flex items-center gap-2 transition-all ${adminTab === 'ingredients' ? 'border-b-2 border-black text-black' : 'text-gray-400'}`}>
                <Carrot size={16} /> Nuevo Ingrediente
              </button>
            </div>
            
            {adminTab === 'products' ? (
              <form onSubmit={handleAddNewProduct} className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="md:col-span-2">
                  <label className="label-admin">Nombre del Plato</label>
                  {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                  {/* @ts-ignore */}
                  <input name="name" placeholder="Ej: Bowl Mediterráneo" className="input-admin" required />
                </div>
                <div>
                  <label className="label-admin">Precio</label>
                  {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                  {/* @ts-ignore */}
                  <input name="price" type="number" placeholder="0" className="input-admin" required />
                </div>
                <div>
                  <label className="label-admin">Categoría</label>
                  {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                  {/* @ts-ignore */}
                  <select name="category" className="input-admin">
                    <option value="Bowls">Bowls</option>
                    <option value="Ensaladas">Ensaladas</option>
                    <option value="Sandwiches">Sandwiches</option>
                    <option value="Bebidas">Bebidas</option>
                  </select>
                </div>
                <div className="md:col-span-4">
                  <label className="label-admin">Descripción</label>
                  {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                  {/* @ts-ignore */}
                  <textarea name="desc" placeholder="Ingredientes..." rows={2} className="input-admin" />
                </div>
                <div className="md:col-span-4 flex justify-end">
                  <button type="submit" className="btn-admin"><PlusCircle size={18} /> Publicar</button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleAddNewIngredient} className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-green-50 p-6 rounded-xl border border-green-100">
                <div className="md:col-span-2">
                  <label className="label-admin text-green-800">Nombre Ingrediente</label>
                  {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                  {/* @ts-ignore */}
                  <input name="name" placeholder="Ej: Queso Feta" className="input-admin focus:ring-green-500" required />
                </div>
                <div>
                  <label className="label-admin text-green-800">Precio</label>
                  {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                  {/* @ts-ignore */}
                  <input name="price" type="number" placeholder="2000" className="input-admin focus:ring-green-500" required />
                </div>
                <div>
                  <label className="label-admin text-green-800">Tipo</label>
                  {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                  {/* @ts-ignore */}
                  <select name="type" className="input-admin focus:ring-green-500">
                    <option value="bases">Base</option>
                    <option value="proteins">Proteína</option>
                    <option value="toppings">Topping</option>
                  </select>
                </div>
                <div className="md:col-span-4 flex justify-end">
                  <button type="submit" className="btn-admin bg-green-700 hover:bg-green-800"><Carrot size={18} /> Guardar</button>
                </div>
              </form>
            )}
          </div>
        </section>
      )}

      {/* HERO SECTION */}
      <section className="px-4 py-8 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-black mb-2 tracking-tight">Comer inteligente.</h2>
        <p className="text-gray-500 mb-8">Diseña tu comida o elige del menú del chef.</p>
        
        <button 
          onClick={() => setShowBuilder(true)}
          className="w-full md:w-auto bg-black text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-3 mx-auto mb-8"
        >
          <div className="bg-white/20 p-2 rounded-full"><PlusCircle size={24} /></div>
          <span>Armar mi propio Bowl/Sandwich</span>
        </button>

        <div className="flex gap-2 overflow-x-auto pb-4 justify-center no-scrollbar mask-linear">
          {['Todos', 'Bowls', 'Ensaladas', 'Sandwiches', 'Wraps', 'Bebidas'].map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all border ${filter === tag ? 'bg-black text-white border-black shadow-lg' : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* GRID PRODUCTOS */}
      <section className="px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">
        {filteredItems.map(item => (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          <ProductCard key={item.id} product={item} onAdd={addToCart} />
        ))}
      </section>

      {/* MODAL BUILDER */}
      {showBuilder && (
        <CustomBowlBuilder onAdd={addToCart} onClose={() => setShowBuilder(false)} />
      )}

      {/* DRAWER CARRITO LATERAL */}
      <CartDrawer 
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onRemove={removeFromCart}
        onClear={clearCart}
      />

    </main>
  );
}
