import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white text-slate-900">
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-200/40 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-100/50 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center max-w-4xl mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="text-amber-500 fill-amber-500 w-4 h-4" />
            <span className="text-amber-600 font-bold tracking-[0.2em] text-sm uppercase">O Desafio 7P</span>
            <Star className="text-amber-500 fill-amber-500 w-4 h-4" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight serif-font text-slate-900">
            7 Dias Para <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Prosperar</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-700 font-medium mb-8 serif-font italic">
            e Libertar o Passado
          </h2>

          <p className="text-slate-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Sua mente é como um iceberg: 95% dela roda no automático. Aprenda a reprogramar seu subconsciente, limpar dores emocionais e manifestar a realidade que você merece.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-full font-bold text-lg transition-all shadow-xl shadow-amber-200 flex items-center justify-center gap-2 group">
              Quero Transformar Minha Vida
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 border border-slate-300 hover:bg-slate-50 text-slate-600 rounded-full font-medium text-lg transition-all">
              Saiba Mais
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;