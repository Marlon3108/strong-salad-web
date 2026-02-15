// app/about/page.tsx
'use client';
import Link from 'next/link';
import { ArrowLeft, Heart, Zap, Leaf, MapPin, Instagram } from 'lucide-react';

export default function About() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-green-100">
      
      {/* NAVBAR MINIMALISTA */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 mix-blend-difference text-white">
        <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
          <ArrowLeft size={24} /> <span className="font-bold tracking-tight">Volver al Menú</span>
        </Link>
        <span className="font-black tracking-tighter text-xl">STRONG SALAD.</span>
      </nav>

      {/* HERO SECTION CON VIDEO/IMAGEN DE FONDO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Fondo simulado (En producción usarías una imagen real de fondo 'object-cover') */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-60 scale-105 animate-pulse-slow"></div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-white/80 text-xs font-bold tracking-widest mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            EST. 2026 • CALI, COLOMBIA
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
            COMER INTELIGENTE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">ES UN ARTE.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            No solo vendemos ensaladas. Creamos combustible de alto rendimiento para tu cuerpo, fusionando nutrición funcional con la velocidad que tu vida exige.
          </p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <div className="w-1 h-16 bg-gradient-to-b from-green-500 to-transparent rounded-full mx-auto"></div>
        </div>
      </section>

      {/* MANIFIESTO (Grid Bento) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Misión */}
            <div className="md:col-span-2 bg-gray-50 rounded-3xl p-10 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <Zap className="text-green-600 mb-6" size={48} />
              <h3 className="text-3xl font-black mb-4">Nutrición basada en Datos.</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                En el ecosistema actual, comer sano no es suficiente. Nuestros bowls están diseñados con métricas precisas de macronutrientes. 
                Ya seas <span className="font-bold text-black">Keto, Vegano o Atleta</span>, tenemos la fórmula exacta para potenciar tu día.
              </p>
            </div>

            {/* Card 2: Ingredientes */}
            <div className="bg-black text-white rounded-3xl p-10 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 rounded-full blur-[60px] opacity-20"></div>
              <Leaf className="text-green-400 mb-6 relative z-10" size={48} />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">100% Fresco</h3>
                <p className="text-gray-400">Del campo a tu bowl en menos de 24h. Apoyamos el comercio justo local.</p>
              </div>
            </div>

            {/* Card 3: Ubicación */}
            <div className="bg-emerald-600 text-white rounded-3xl p-10 flex flex-col justify-center items-center text-center hover:bg-emerald-700 transition-colors cursor-pointer group">
              <MapPin className="mb-4 group-hover:-translate-y-2 transition-transform duration-300" size={48} />
              <h3 className="text-2xl font-bold mb-2">San Fernando</h3>
              <p className="text-emerald-100 mb-4">Calle 5B 3bis #38-70<br/>Cali, Valle del Cauca</p>
              <span className="bg-white/20 px-4 py-2 rounded-full text-xs font-bold backdrop-blur-sm">VISÍTANOS HOY</span>
            </div>

            {/* Card 4: Filosofía */}
            <div className="md:col-span-2 bg-gray-50 rounded-3xl p-10 flex items-center gap-8 border border-gray-100">
              <div className="flex-1">
                <Heart className="text-red-500 mb-6" size={48} />
                <h3 className="text-3xl font-black mb-4">Sin Culpa, Solo Energía.</h3>
                <p className="text-gray-600 text-lg">
                  Creemos que la comida rápida no tiene por qué ser comida chatarra. 
                  Rompemos el mito de que "comer sano es aburrido" con sabores explosivos y texturas crujientes.
                </p>
              </div>
              <div className="hidden md:block w-32 h-32 bg-gray-200 rounded-full animate-pulse">
                 {/* Aquí iría una foto circular de un bowl */}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-black text-white py-24 px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
          TU MEJOR VERSIÓN <br/>
          <span className="text-stroke">COMIENZA AQUÍ.</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link href="/" className="bg-green-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-green-400 hover:scale-105 transition-all w-full md:w-auto">
            Hacer Pedido Ahora
          </Link>
          <a href="https://instagram.com/strongsalads" target="_blank" className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors w-full md:w-auto justify-center">
            <Instagram size={20} /> Síguenos en Instagram
          </a>
        </div>
        <p className="mt-12 text-gray-500 text-xs">© 2026 Strong Salad FoodTech. Todos los derechos reservados.</p>
      </section>

    </main>
  );
}
