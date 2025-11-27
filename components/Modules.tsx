import React from 'react';
import { LESSONS } from '../constants';
import LessonCard from './LessonCard';

const Modules: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="cronograma">
      {/* Decorative bg elements - Soft Pastels */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-40" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-200 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-bold tracking-wider uppercase text-sm">O Cronograma</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6 serif-font text-slate-900">
            7 Dias de Profunda Transformação
          </h2>
          <p className="text-slate-600 text-lg">
            Um método passo-a-passo para sair da estagnação e entrar no fluxo da prosperidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LESSONS.map((lesson, index) => (
            <LessonCard key={index} lesson={lesson} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;