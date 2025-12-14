import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, Users } from 'lucide-react';

const AboutMentor: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-50 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 opacity-60" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-5/12 relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-amber-900/10 border border-slate-100">
              <img 
                src="https://assets.zyrosite.com/A1azoVg7xQilMZ9l/luana1-8ZU9MBLZoikW3FES.png" 
                alt="Luana - Mentora" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              
            </div>
            
            {/* Background Accent */}
            <div className="absolute -z-10 top-6 -right-6 w-full h-full border-2 border-amber-200 rounded-2xl hidden md:block" />
          </motion.div>

          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-7/12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold tracking-wider uppercase mb-6">
              <Sparkles size={14} />
              Sua Guia
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 serif-font mb-6">
              Olá, eu sou a Luana
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>
                Nem sempre fui a mulher próspera que você vê hoje. Durante anos, lutei contra a escassez, repetindo ciclos de dívidas e relacionamentos falidos, sem entender por que, apesar de me esforçar tanto, eu não saía do lugar.
              </p>
              <p>
                Foi quando mergulhei fundo na <strong>Neurociência e na Física Quântica</strong> que descobri a verdade: meu "software" interno estava programado para a sobrevivência, não para a abundância.
              </p>
              <p>
                Criei o <strong>Método 7P</strong> para ser a ponte que faltava. Eu uni a ciência da mente com a espiritualidade prática para criar um caminho direto, sem rodeios, para desbloquear sua prosperidade em apenas uma semana.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100">
              <div className="flex items-center gap-4">
                <div className="bg-amber-50 p-3 rounded-full text-amber-500">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Método Próprio</h4>
                  <p className="text-sm text-slate-500">Validado por alunas de todo o Brasil</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutMentor;