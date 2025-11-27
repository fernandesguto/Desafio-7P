import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-stone-900 text-white">
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/40 via-stone-900 to-stone-950" />
        <img 
          src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2727&auto=format&fit=crop" 
          alt="Abstract light texture" 
          className="w-full h-full object-cover mix-blend-overlay opacity-30"
        />
      </div>

      <div className="container mx-auto px-4 z-10 text-center max-w-4xl mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="text-amber-400 fill-amber-400 w-4 h-4" />
            <span className="text-amber-400 font-medium tracking-[0.2em] text-sm uppercase">O Desafio 7P</span>
            <Star className="text-amber-400 fill-amber-400 w-4 h-4" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight serif-font">
            7 Dias Para <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Prosperar</span> e Libertar o Passado
          </h1>

          <p className="text-stone-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Sua mente é como um iceberg: 95% dela roda no automático. Aprenda a reprogramar seu subconsciente, limpar dores emocionais e manifestar a realidade que você merece.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white rounded-full font-bold text-lg transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 group">
              Quero Transformar Minha Vida
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 border border-stone-700 hover:bg-stone-800 text-stone-300 rounded-full font-medium text-lg transition-all">
              Saiba Mais
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-stone-50 to-transparent z-10" />
    </section>
  );
};

export default Hero;