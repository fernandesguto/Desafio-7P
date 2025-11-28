
import React from 'react';
import { LESSONS } from '../constants';
import LessonCard from './LessonCard';
import { ArrowRight } from 'lucide-react';

const Modules: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-white relative overflow-hidden" id="cronograma">
      {/* Decorative bg elements - Very Subtle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-slate-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-60" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-50 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 opacity-60" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <span className="text-amber-600 font-bold tracking-wider uppercase text-sm">O Cronograma</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-3 mb-4 md:mb-6 serif-font text-slate-900">
            7 Dias de Profunda Transformação
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Um método passo-a-passo para sair da estagnação e entrar no fluxo da prosperidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {LESSONS.map((lesson, index) => (
            <LessonCard key={index} lesson={lesson} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a 
            href="https://pay.kiwify.com.br/dyDMZxn" 
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg font-bold rounded-full shadow-lg shadow-green-200 hover:from-green-600 hover:to-emerald-700 hover:scale-105 transition-all transform gap-2 w-full md:w-auto"
          >
            QUERO PROSPERAR
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Modules;
