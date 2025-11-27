import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ProblemAgitation from './components/ProblemAgitation';
import Modules from './components/Modules';
import Differentials from './components/Differentials';
import Footer from './components/Footer';
import { ArrowUp, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-600 selection:bg-amber-400 selection:text-amber-900">
      <Hero />
      <ProblemAgitation />
      <Modules />
      
      {/* Concept Highlight Section - The Radio Analogy - Colorful Gradient */}
      <section className="py-24 bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 text-white overflow-hidden relative">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         
         <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 serif-font leading-tight text-white drop-shadow-md">
                Você é uma Antena de Rádio
              </h2>
              <p className="text-orange-50 text-lg mb-6 leading-relaxed font-medium">
                Se você está na frequência 92.8, você nunca vai escutar a música que toca na 105.5.
              </p>
              <p className="text-white text-lg leading-relaxed mb-8">
                Para mudar sua vida externa (dinheiro, amor, saúde), você precisa girar o botão interno da frequência. O Desafio 7P te ensina exatamente como girar esse botão.
              </p>
              <button className="bg-white text-rose-600 px-8 py-3 rounded-full font-bold shadow-xl hover:bg-orange-50 hover:scale-105 transition-all">
                Quero Mudar Minha Frequência
              </button>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-white/30 flex items-center justify-center relative bg-white/10 backdrop-blur-sm">
                 <div className="absolute inset-0 rounded-full border border-white/20 animate-ping"></div>
                 <div className="w-48 h-48 md:w-72 md:h-72 rounded-full border-4 border-white/60 flex items-center justify-center bg-white text-rose-500 shadow-2xl">
                    <span className="serif-font text-4xl md:text-6xl font-bold">Hz</span>
                 </div>
              </div>
            </div>
         </div>
      </section>

      <Differentials />
      
      {/* Final CTA - Light & Clean */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white text-center relative border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 serif-font text-slate-900">
            A vida extraordinária começou a se aproximar de você.
          </h2>
          <p className="text-slate-600 text-lg mb-12">
            Você não precisa "dar conta" de tudo sozinha. Você só precisa aprender a regra do jogo.
          </p>

          {/* Pricing Card */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-10 bg-white p-8 md:p-10 rounded-[2rem] inline-block shadow-2xl shadow-orange-100 border border-orange-100 relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 bg-rose-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
               OFERTA PROMOCIONAL
             </div>
             
             <div className="flex flex-col items-center">
                <p className="text-slate-400 font-medium mb-2 uppercase tracking-wide text-sm flex items-center gap-2">
                  <Tag size={16} /> Preço Especial
                </p>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-2xl text-slate-300 line-through serif-font">R$ 197,00</span>
                  <span className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-rose-600 tracking-tight">
                    R$ 19,90
                  </span>
                </div>
                <p className="text-slate-500 font-medium mb-6">Pagamento único • Acesso Imediato</p>
                
                <button className="w-full md:w-auto px-12 py-5 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xl font-bold rounded-full shadow-lg shadow-amber-200 hover:from-amber-600 hover:to-orange-700 hover:scale-105 transition-all transform">
                  GARANTIR MINHA VAGA AGORA
                </button>
             </div>
          </motion.div>

          <p className="mt-6 text-sm text-slate-500 flex items-center justify-center gap-4">
            <span>🔒 Pagamento 100% Seguro</span>
            <span>✨ Garantia de 7 Dias</span>
          </p>
        </div>
      </section>

      <Footer />

      {/* Sticky Mobile CTA / Scroll Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
          >
            <button 
              onClick={scrollToTop}
              className="p-3 bg-white text-amber-600 rounded-full shadow-lg border border-slate-200 hover:bg-amber-50 transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;