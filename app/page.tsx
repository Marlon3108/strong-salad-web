// app/page.tsx (Nueva Home Page Tipo Landing)
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { MapPin, Instagram, ArrowRight, Star, Leaf } from 'lucide-react';

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-green-100 overflow-x-hidden">
      
      {/* NAVBAR FLOTANTE MEJORADO */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm text-black' : 'bg-transparent py-6 text-white'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="font-black tracking-tighter text-2xl flex items-center gap-2">
            <Leaf size={24} className={scrollY > 50 ? 'text-green-600' : 'text-white'} />
            STRONG SALAD.
          </span>
          <Link 
            href="/menu" 
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${scrollY > 50 ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-200'}`}
          >
            Hacer Pedido
          </Link>
        </div>
      </nav>

      {/* HERO SECTION CON PARALLAX */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Fondo de Video/Imagen */}
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-60 scale-110" style={{ transform: `translateY(${scrollY * 0.5}px)` }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10"></div>
        
        {/* Elementos Flotantes (Parallax Ingredientes) */}
        <div className="absolute top-1/4 left-10 text-6xl opacity-20 animate-float-slow pointer-events-none z-10" style={{ transform: `translateY(${-scrollY * 0.2}px)` }}>🥑</div>
        <div className="absolute bottom-1/3 right-20 text-5xl opacity-20 animate-float-medium pointer-events-none z-10" style={{ transform: `translateY(${-scrollY * 0.3}px)` }}>🍅</div>
        <div className="absolute top-20 right-1/4 text-4xl opacity-20 animate-float-fast pointer-events-none z-10" style={{ transform: `translateY(${-scrollY * 0.1}px)` }}>🥬</div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-10">
          <span className="inline-block py-1 px-4 border border-green-400/50 bg-green-900/20 backdrop-blur-md rounded-full text-green-300 text-xs font-bold tracking-[0.2em] mb-8 animate-fade-in-up">
            FOODTECH & FITNESS
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tighter animate-fade-in-up delay-100">
            COMER SANO <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">YA NO ES ABURRIDO.</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light animate-fade-in-up delay-200">
            Comida diseñada con data nutricional, ingredientes locales y sabores explosivos. Tu cuerpo es una máquina, dale el mejor combustible.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
            <Link href="/menu" className="group bg-green-500 text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-green-400 hover:scale-105 transition-all flex items-center gap-2">
              Ver Menú y Pedir <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="https://instagram.com/strongsalads" target="_blank" className="px-10 py-5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all font-medium backdrop-blur-sm">
              Nuestra Comunidad
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE VALORES (Bento Grid Mejorado) */}
      <section className="py-32 px-6 bg-white relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Caja Grande: Misión */}
            <div className="md:col-span-8 bg-gray-50 rounded-[2.5rem] p-12 hover:shadow-2xl transition-all duration-500 border border-gray-100 group">
              <div className="mb-8 p-4 bg-green-100 w-fit rounded-2xl text-green-800"><Leaf size={32} /></div>
              <h3 className="text-4xl font-black mb-6 tracking-tight group-hover:text-green-700 transition-colors">Nutrición Inteligente.</h3>
              <p className="text-gray-600 text-xl leading-relaxed max-w-2xl">
                Olvídate de contar calorías vacías. Nuestros platos están balanceados macro-nutricionalmente para objetivos reales: 
                <strong className="text-black"> Ganar masa, perder grasa o mantener energía.</strong> Usamos ingredientes funcionales como Quinoa Real, Kale Orgánico y Proteínas Premium.
              </p>
            </div>

            {/* Caja Vertical: Ubicación */}
            <a href="https://maps.app.goo.gl/TkBJQdJZCwDaRpyY6" target="_blank" className="md:col-span-4 bg-black text-white rounded-[2.5rem] p-10 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('/images/map-bg.png')] opacity-20 bg-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="bg-white/20 w-12 h-12 flex items-center justify-center rounded-full mb-6 backdrop-blur-md">
                  <MapPin size={24} />
                </div>
                <h3 className="text-3xl font-bold mb-2">San Fernando</h3>
                <p className="text-gray-400 text-lg">Calle 5B 3bis #38-70<br/>Cali, Colombia</p>
              </div>
              <div className="mt-8 relative z-10 flex items-center gap-2 text-green-400 font-bold">
                VER EN MAPA <ArrowRight size={16} />
              </div>
            </a>

            {/* Caja Horizontal: Testimonio/Filosofía */}
            <div className="md:col-span-12 bg-emerald-900 text-emerald-50 rounded-[2.5rem] p-12 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
              <div className="absolute -right-20 -top-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
              
              <div className="flex-1 relative z-10">
                <div className="flex gap-1 text-yellow-400 mb-6">
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                </div>
                <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                  "Sin culpa,<br/>solo energía."
                </h3>
                <p className="text-emerald-200 text-xl leading-relaxed max-w-xl">
                  Rompemos el mito de que comer sano es sufrir. Aquí se viene a disfrutar de texturas crujientes, salsas artesanales y porciones generosas. Tu cuerpo te lo agradecerá.
                </p>
              </div>
              
              {/* Imagen Circular Rotativa (Estilo Disco) */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-emerald-500/30 flex items-center justify-center relative animate-spin-slow shadow-[0_0_60px_rgba(16,185,129,0.3)]">
                
                {/* Reemplazamos el div gris por la imagen real */}
                <div className="w-full h-full rounded-full overflow-hidden relative bg-black">
                    <img 
                      src="/images/bowl.webp" 
                      alt="Bowl Saludable Vista Superior" 
                      className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-700"
                    />
                    {/* Sombra interna para darle profundidad */}
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] pointer-events-none"></div>
                </div>

                {/* Badge Flotante (Se mantiene igual) */}
                <div className="absolute -bottom-4 bg-white text-black px-5 py-2 rounded-full font-black shadow-xl text-sm whitespace-nowrap tracking-wider transform -rotate-6 border-2 border-green-400 z-10">
                    100% NATURAL 🌿
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white pt-24 pb-0 overflow-hidden relative border-t border-white/5">
        
        {/* Fondo Decorativo (Capas traseras) */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-green-500 rounded-full blur-[100px] animate-pulse-slow"></div>
          <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-emerald-700 rounded-full blur-[80px]"></div>
        </div>

        {/* Texto Gigante Decorativo (Detrás del contenido) */}
        <div className="absolute bottom-20 left-0 w-full flex justify-center pointer-events-none select-none overflow-hidden z-0 opacity-20">
            <span className="text-[13vw] font-black text-white/10 whitespace-nowrap leading-none tracking-tighter">
              STRONG SALAD
            </span>
        </div>

        {/* Contenido Principal (Delante) */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
            
            {/* Columna 1: Marca */}
            <div className="space-y-6">
              <h2 className="text-3xl font-black tracking-tighter flex items-center gap-2">
                <Leaf className="text-green-400" /> STRONG SALAD.
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Combustible de alto rendimiento para tu cuerpo. Nutrición funcional, sabores explosivos y conciencia ecológica.
              </p>
              <div className="flex gap-4 pt-2">
                <a href="https://instagram.com/strongsalads" target="_blank" className="bg-white/10 p-3 rounded-full hover:bg-green-500 hover:text-black transition-all hover:-translate-y-1">
                  <Instagram size={20} />
                </a>
                <a href="https://wa.me/573156314918" target="_blank" className="bg-white/10 p-3 rounded-full hover:bg-green-500 hover:text-black transition-all hover:-translate-y-1">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.585 1.802.88 2.796.88h.001c3.181 0 5.767-2.586 5.768-5.766.001-3.18-2.585-5.767-5.769-5.767zm0 10.368c-.911 0-1.688-.284-2.457-.741l-.176-.104-1.579.414.421-1.54-.115-.183c-.538-.857-.866-1.637-.866-2.447 0-2.535 2.063-4.598 4.601-4.598 2.536 0 4.598 2.063 4.598 4.598 0 2.536-2.062 4.599-4.599 4.599zm9.969-5.766C22 5.068 17.527.595 12.031.595S2.062 5.068 2.062 10.563c0 1.944.557 3.754 1.523 5.304L2.2 21.8l5.938-1.556c1.238.679 2.646 1.085 4.131 1.085 5.496 0 9.969-4.473 9.969-9.969h-1.469z"/></svg>
                </a>
              </div>
            </div>

            {/* Columna 2: Enlaces */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-green-400">Explora</h4>
              <ul className="space-y-4 text-gray-300 text-sm">
                <li><Link href="/menu" className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-2">Nuestro Menú</Link></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-2">Planes Semanales</a></li>
              </ul>
            </div>

            {/* Columna 3: Horarios */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-green-400">Horarios</h4>
              <ul className="space-y-4 text-gray-300 text-sm">
                <li className="flex justify-between border-b border-white/10 pb-2"><span>Lun - Vie</span> <span className="text-white font-medium">7:00 am - 4:00 pm</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span>Sábados</span> <span className="text-white font-medium">7:00 am - 3:00 pm</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span>Domingos</span> <span className="text-red-400 font-bold">Cerrado</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Barra Inferior Separada (Para que no estorbe el texto gigante) */}
        <div className="relative z-20 border-t border-white/10 bg-black/40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© 2026 Strong Salad. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos</a>
            </div>
          </div>
        </div>

      </footer>
    </main>
  );
}
