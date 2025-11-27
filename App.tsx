import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ProblemAgitation from './components/ProblemAgitation';
import Modules from './components/Modules';
import Differentials from './components/Differentials';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';
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
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-amber-200 selection:text-amber-900">
      <Hero />
      <ProblemAgitation />
      <Modules />
      
      {/* Concept Highlight Section - The Radio Analogy */}
      <section className="py-24 bg-amber-500 text-white overflow-hidden relative">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 serif-font leading-tight">
                Você é uma Antena de Rádio
              </h2>
              <p className="text-amber-100 text-lg mb-6 leading-relaxed">
                Se você está na frequência 92.8, você nunca vai escutar a música que toca na 105.5.
              </p>
              <p className="text-white text-lg leading-relaxed mb-8">
                Para mudar sua vida externa (dinheiro, amor, saúde), você precisa girar o botão interno da frequência. O Desafio 7P te ensina exatamente como girar esse botão.
              </p>
              <button className="bg-white text-amber-600 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-stone-100 transition-colors">
                Quero Mudar Minha Frequência
              </button>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-white/20 flex items-center justify-center relative">
                 <div className="absolute inset-0 rounded-full border border-white/10 animate-ping"></div>
                 <div className="w-48 h-48 md:w-72 md:h-72 rounded-full border-4 border-white/40 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                    <span className="serif-font text-4xl md:text-6xl font-bold">Hz</span>
                 </div>
              </div>
            </div>
         </div>
      </section>

      <Differentials />
      
      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 serif-font text-stone-900">
            A vida extraordinária começou a se aproximar de você.
          </h2>
          <p className="text-stone-600 text-lg mb-10">
            Você não precisa "dar conta" de tudo sozinha. Você só precisa aprender a regra do jogo.
          </p>
          <button className="w-full md:w-auto px-10 py-5 bg-stone-900 text-white text-xl font-bold rounded-full shadow-2xl hover:bg-stone-800 hover:scale-105 transition-all transform">
            GARANTIR MINHA VAGA NO DESAFIO
          </button>
          <p className="mt-6 text-sm text-stone-500">
            Acesso imediato • Pagamento seguro • Transformação garantida
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
              className="p-3 bg-white text-stone-900 rounded-full shadow-lg border border-stone-200 hover:bg-stone-50"
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