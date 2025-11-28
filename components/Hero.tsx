
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-8 pb-6 md:pt-16 md:pb-12 flex justify-center overflow-hidden bg-white text-slate-900">
      {/* Background Pattern - Subtle */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center max-w-4xl mt-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo Replacement */}
          <div className="flex items-baseline justify-center gap-0.5 mb-12 select-none">
            <span className="font-sans font-black text-slate-900 tracking-tighter text-2xl md:text-3xl">DESAFIO</span>
            <span className="serif-font font-bold text-[#F97316] text-3xl md:text-4xl -ml-1">7P</span>
          </div>

          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 leading-tight serif-font text-slate-900">
            7 Dias Para <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Prosperar</span>
          </h1>

          <p className="text-slate-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Aprenda a reprogramar seu subconsciente, limpar dores emocionais e manifestar a realidade que você merece.
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