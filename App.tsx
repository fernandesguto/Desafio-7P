import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ProblemAgitation from './components/ProblemAgitation';
import Modules from './components/Modules';
import Differentials from './components/Differentials';
import Footer from './components/Footer';
import { ArrowUp, Tag, ArrowRight, CheckCircle, ShieldCheck, Clock, Users, MessageCircle, Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from './constants';

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
      
      {/* Concept Highlight Section - The Radio Analogy - Lighter & Smaller */}
      <section className="py-10 md:py-20 bg-gradient-to-r from-orange-100 via-amber-100 to-rose-100 text-slate-800 overflow-hidden relative">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 mix-blend-multiply"></div>
         
         <div className="container mx-auto px-4 relative z-10 max-w-5xl">
            {/* Top Part: The Radio Concept */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center mb-16">
              <div className="text-center md:text-left flex flex-col items-center md:items-start">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 serif-font leading-tight text-orange-600">
                  Você é uma Antena de Rádio
                </h2>
                <p className="text-amber-700 text-base md:text-lg mb-4 leading-relaxed font-bold">
                  Se você está na frequência 92.8, você nunca vai escutar a música que toca na 105.5.
                </p>
                <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-6">
                  Para mudar sua vida externa (dinheiro, amor, saúde), você precisa girar o botão interno da frequência. O Desafio 7P te ensina exatamente como girar esse botão.
                </p>
                <button className="bg-gradient-to-r from-orange-500 to-rose-500 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-orange-200 hover:scale-105 transition-all text-sm uppercase tracking-wide w-full md:w-auto">
                  Quero Mudar Minha Frequência
                </button>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="w-40 h-40 md:w-64 md:h-64 rounded-full border-4 border-white/50 flex items-center justify-center relative bg-white/20 backdrop-blur-sm shadow-xl">
                   <div className="absolute inset-0 rounded-full border border-white/40 animate-ping"></div>
                   <div className="w-28 h-28 md:w-44 md:h-44 rounded-full border-4 border-white/80 flex items-center justify-center bg-white text-rose-500 shadow-inner">
                      <span className="serif-font text-3xl md:text-5xl font-bold">Hz</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Middle Part: Community */}
            <div className="mb-16 bg-white/60 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-white/50">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0 bg-green-100 p-4 rounded-full text-green-600">
                  <Users size={40} />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 flex items-center justify-center md:justify-start gap-2">
                    Você não vai estar sozinha <MessageCircle className="text-green-500" size={24} />
                  </h3>
                  <p className="text-slate-600 mb-2">
                    Ao entrar no Desafio, você ganha acesso à nossa <strong>Comunidade Exclusiva no WhatsApp</strong>.
                  </p>
                  <p className="text-sm text-slate-500">
                    É um ambiente seguro para troca de histórias, dúvidas e crescimento em grupo. Além disso, você receberá <strong>materiais semanais extras</strong> para continuar seu aprendizado mesmo após os 7 dias. Mantenha sua frequência alta andando com quem também quer prosperar.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Part: Testimonials */}
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-8 serif-font">
                Quem girou o botão da frequência:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {TESTIMONIALS.map((t, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-4 rounded-xl shadow-md border border-amber-50 flex flex-col items-center text-center h-full hover:-translate-y-1 transition-transform"
                  >
                    <div className="mb-3 text-amber-400">
                      <div className="flex gap-0.5 justify-center">
                        {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                      </div>
                    </div>
                    <Quote size={20} className="text-slate-200 mb-2" />
                    <p className="text-xs text-slate-600 italic mb-4 flex-grow">"{t.text}"</p>
                    <div className="mt-auto">
                      <p className="text-sm font-bold text-slate-900">{t.name}</p>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wide">{t.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

         </div>
      </section>

      <Differentials />
      
      {/* Final CTA - Light & Clean */}
      <section className="py-6 md:py-24 bg-gradient-to-b from-slate-50 to-white text-center relative border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <h2 className="text-2xl md:text-5xl font-bold mb-6 md:mb-8 serif-font text-slate-900">
            A vida extraordinária começou a se aproximar de você.
          </h2>
          <p className="text-slate-600 text-base md:text-lg mb-8 md:mb-12">
            Você não precisa "dar conta" de tudo sozinha. Você só precisa aprender a regra do jogo.
          </p>

          {/* Pricing Card */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-10 bg-white p-6 md:p-10 rounded-[2rem] inline-block shadow-2xl shadow-orange-100 border border-orange-100 relative overflow-hidden w-full max-w-md mx-auto"
          >
             <div className="absolute top-0 right-0 bg-rose-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
               OFERTA PROMOCIONAL
             </div>
             
             <div className="flex flex-col items-center">
                <p className="text-slate-400 font-medium mb-2 uppercase tracking-wide text-sm flex items-center gap-2">
                  <Tag size={16} /> Preço Especial
                </p>
                <div className="flex flex-col items-center gap-1 mb-4">
                  <span className="text-xl text-slate-400 line-through decoration-slate-400 serif-font">De R$ 197,00</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-slate-700">Por</span>
                    <span className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-rose-600 tracking-tight">
                      R$ 19,90
                    </span>
                  </div>
                </div>
                
                <div className="w-full h-px bg-slate-100 my-4"></div>
                
                <ul className="text-left w-full space-y-3 mb-8 text-slate-600 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Acesso imediato às 7 aulas</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Bônus: Cura da Ancestralidade</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Acesso à Comunidade VIP</li>
                  <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-green-500" /> 7 dias de garantia incondicional</li>
                </ul>
                
                <button className="w-full px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg md:text-xl font-bold rounded-full shadow-lg shadow-green-200 hover:from-green-600 hover:to-emerald-700 hover:scale-105 transition-all transform flex items-center justify-center gap-2">
                  COMPRAR AGORA
                  <ArrowRight size={20} />
                </button>
                
                <p className="mt-4 text-xs text-slate-400 flex items-center gap-1">
                   <Clock size={12} /> Oferta por tempo limitado
                </p>
             </div>
          </motion.div>

          <p className="mt-6 text-sm text-slate-500 flex items-center justify-center gap-4">
            <span>🔒 Pagamento 100% Seguro</span>
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