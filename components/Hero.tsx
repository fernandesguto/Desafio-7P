import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 flex justify-center overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white text-slate-900">
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-200/40 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-100/50 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center max-w-4xl mt-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo Replacement */}
          <div className="flex items-baseline justify-center gap-0.5 mb-6 select-none">
            <span className="font-sans font-black text-slate-900 tracking-tighter text-2xl md:text-3xl">DESAFIO</span>
            <span className="serif-font font-bold text-[#F97316] text-3xl md:text-4xl -ml-1">7P</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight serif-font text-slate-900">
            7 Dias Para <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Prosperar</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-700 font-medium mb-6 serif-font italic">
            e Libertar o Passado
          </h2>

          <p className="text-slate-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Sua mente é como um iceberg: 95% dela roda no automático. Aprenda a reprogramar seu subconsciente, limpar dores emocionais e manifestar a realidade que você merece.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Button removed as per previous request, keeping layout clean */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;