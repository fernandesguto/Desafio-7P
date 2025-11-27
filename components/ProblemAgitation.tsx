import React from 'react';
import { motion } from 'framer-motion';

const ProblemAgitation: React.FC = () => {
  return (
    <section className="py-20 bg-stone-50 text-stone-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 serif-font text-stone-900">
            Você sente que está vivendo no "Piloto Automático"?
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-stone-600 leading-relaxed">
            Talvez você faça metas de Ano Novo que nunca cumpre. Talvez queira ser uma pessoa segura, mas na hora H, seu corpo trava. Isso não é falta de capacidade. É o seu <strong>subconsciente</strong> te protegendo com regras antigas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
             <div className="absolute -inset-4 bg-amber-100 rounded-full blur-2xl opacity-50"></div>
             <img 
              src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2070&auto=format&fit=crop" 
              alt="Woman thinking" 
              className="relative rounded-2xl shadow-2xl z-10 w-full object-cover h-80"
             />
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-500">
              <h4 className="font-bold text-stone-900 text-lg mb-2">O Teto Invisível</h4>
              <p className="text-stone-600">Você ganha dinheiro, mas logo o carro quebra ou a geladeira pifa? Isso é sua vibração interna repelindo o excesso que você acha que "não merece".</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-stone-800">
              <h4 className="font-bold text-stone-900 text-lg mb-2">Repetição de Padrões</h4>
              <p className="text-stone-600">"Dos 0 aos 7 anos, você era uma esponja." Absorveu medos e crenças dos seus pais que hoje governam 90% das suas decisões.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-500">
              <h4 className="font-bold text-stone-900 text-lg mb-2">A Solução</h4>
              <p className="text-stone-600">Se foi aprendido sem consciência, pode ser mudado COM consciência. Você não é seus traumas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemAgitation;