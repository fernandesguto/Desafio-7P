
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ProblemAgitation: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-white text-slate-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 serif-font text-slate-900">
            Você sente que está vivendo no "Piloto Automático"?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full mb-6 md:mb-8"></div>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Talvez você faça metas de Ano Novo que nunca cumpre. Talvez queira ser uma pessoa segura, mas na hora H, seu corpo trava. Isso não é falta de capacidade. É o seu <strong>subconsciente</strong> te protegendo com regras antigas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-10">
          <div className="relative flex justify-center md:block">
             <div className="absolute inset-0 bg-gradient-to-tr from-amber-200 to-rose-200 rounded-2xl blur-xl opacity-50 transform rotate-3 scale-95"></div>
             <img 
              src="https://assets.zyrosite.com/A1azoVg7xQilMZ9l/luana1-8ZU9MBLZoikW3FES.png" 
              alt="Luana - Mentora do Desafio 7P" 
              className="relative rounded-2xl shadow-2xl shadow-slate-200 z-10 w-full max-w-sm md:max-w-full object-cover h-auto aspect-[3/4] transition-all duration-500 hover:scale-[1.01]"
             />
          </div>
          
          <div className="space-y-4 md:space-y-6">
            <div className="bg-slate-50 p-5 md:p-6 rounded-xl shadow-lg shadow-slate-100 border-l-4 border-amber-500 hover:bg-white transition-colors">
              <h4 className="font-bold text-slate-900 text-lg mb-2">O Teto Invisível</h4>
              <p className="text-slate-600 text-sm md:text-base">Você ganha dinheiro, mas logo o carro quebra ou a geladeira pifa? Isso é sua vibração interna repelindo o excesso que você acha que "não merece".</p>
            </div>
            <div className="bg-slate-50 p-5 md:p-6 rounded-xl shadow-lg shadow-slate-100 border-l-4 border-slate-400 hover:bg-white transition-colors">
              <h4 className="font-bold text-slate-900 text-lg mb-2">Repetição de Padrões</h4>
              <p className="text-slate-600 text-sm md:text-base">"Dos 0 aos 7 anos, você era uma esponja." Absorveu medos e crenças dos seus pais que hoje governam 90% das suas decisões.</p>
            </div>
            <div className="bg-slate-50 p-5 md:p-6 rounded-xl shadow-lg shadow-slate-100 border-l-4 border-amber-500 hover:bg-white transition-colors">
              <h4 className="font-bold text-slate-900 text-lg mb-2">A Solução</h4>
              <p className="text-slate-600 text-sm md:text-base">Se foi aprendido sem consciência, pode ser mudado COM consciência. Você não é seus traumas.</p>
            </div>
          </div>
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

export default ProblemAgitation;
