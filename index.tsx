import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Timer, ArrowRight, CheckCircle, ShieldCheck, 
  Star, Zap, Users, Lock, Sparkles,
  Brain, Heart, Radio, Gavel, Sprout, Infinity, CalendarCheck, Eye, MessageCircle
} from 'lucide-react';

const MODULES_DATA = [
  {
    day: "DIA 1",
    title: "A Mente: Consciente x Subconsciente",
    description: "Entenda a teoria do Iceberg. Sua mente consciente (metas, lógica) é apenas 5% da força. Os outros 95% são o subconsciente que governa seus padrões automáticos.",
    icon: Brain,
    highlight: "O fim da autossabotagem começa aqui."
  },
  {
    day: "DIA 2",
    title: "Limpeza Emocional Profunda",
    description: "Reorganização interna e resgate da para tirar o peso que não serve mais. Prática com mantra de segurança emocional.",
    icon: Heart,
    highlight: "Reprogramação sensorial."
  },
  {
    day: "DIA 3",
    title: "Limpeza Física e Ambiental",
    description: "Aprenda como a desordem, objetos quebrados e energias estagnadas bloqueiam sua prosperidade. Receba um PDF exclusivo com um passo a passo para te guiar.",
    icon: Sparkles,
    highlight: "O externo muda o interno."
  },
  {
    day: "DIA 4",
    title: "Quem Eu Sou de Verdade",
    description: "Identidade e Vibração. Você é uma antena. Aprenda a sintonizar na frequência correta para atrair situações compatíveis com sua nova realidade.",
    icon: Radio,
    highlight: "Tire as camadas de trauma."
  },
  {
    day: "DIA 5",
    title: "Autorresponsabilidade Radical",
    description: "Saia da posição de vítima. Você é o diretor, roteirista e protagonista da sua peça de teatro. Assuma o leme da sua vida e pare de culpar o passado.",
    icon: Gavel,
    highlight: "O poder volta para suas mãos."
  },
  {
    day: "DIA 6",
    title: "O Poder dos Pensamentos e Palavras",
    description: "A ciência da planta: palavras têm energia biológica. Aprenda a neuroplasticidade prática para treinar seu cérebro a parar de vibrar na escassez.",
    icon: Sprout,
    highlight: "Coerência vibracional."
  },
  {
    day: "DIA 7",
    title: "Manifestação Prática",
    description: "Agir como se já fosse. A neurociência por trás da Lei da Atração. Alinhe pensamento, emoção, vibração e action para colher resultados reais.",
    icon: Zap,
    highlight: "O segredo da cocriação."
  }
];

const BONUS_DATA = [
  {
    day: "BÔNUS",
    title: "Dinâmica: Cura da Ancestralidade",
    description: "Rompa padrões familiares que te prendem sem tu perceber e encerre ciclos de dor para seguir com mais liberdade.",
    promoPrice: "De R$ 197,00 por R$ 0,00",
    icon: Infinity,
    highlight: "Aula exclusiva de libertação."
  },
  {
    day: "BÔNUS",
    title: "PDF Planner Rotina Equilibrada",
    description: "Avalie sua vida por áreas, defina metas com prazo, organize sua semana e seu dia com mais consciência.",
    promoPrice: "De R$ 47,00 por R$ 0,00",
    icon: CalendarCheck,
    highlight: "Organização e foco."
  }
];

const TESTIMONIAL_PRINTS = [
  "https://assets.zyrosite.com/A1azoVg7xQilMZ9l/1-W8iUGPCgIFDIGyqE.png",
  "https://assets.zyrosite.com/A1azoVg7xQilMZ9l/2-hSAr4gl9IZJT2Tza.png",
  "https://assets.zyrosite.com/A1azoVg7xQilMZ9l/3-IcyBnFHMvA5xsuR2.png"
];

const LiveCounter = () => {
  const [count, setCount] = useState(34);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        const change = Math.floor(Math.random() * 3) - 1;
        const next = prev + change;
        return Math.min(50, Math.max(12, next));
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-4">
      <Eye size={16} className="text-slate-400" />
      <span><span className="text-slate-900 font-bold">{count}</span> assistindo agora</span>
    </div>
  );
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ min: 14, sec: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft.sec > 0) {
        setTimeLeft(prev => ({ ...prev, sec: prev.sec - 1 }));
      } else if (timeLeft.min > 0) {
        setTimeLeft(prev => ({ min: prev.min - 1, sec: 59 }));
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);


  const formatTime = (t: number) => t < 10 ? `0${t}` : t;

  return (
    <div className="flex items-center gap-2 text-orange-600 font-bold bg-orange-600/5 px-4 py-2 rounded-full border border-orange-600/10">
      <div className="flex items-center gap-2">
        <Timer size={18} />
        <span>OFERTA EXPIRA EM BREVE</span>
      </div>
    </div>
  );
};

const Hero = () => (
  <section className="relative pt-12 pb-6 px-4 overflow-hidden text-center">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-600/5 rounded-full blur-[120px] -z-10" />
    
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-6"
      >
        <div className="flex items-baseline justify-center gap-0.5 mb-8 select-none">
          <span className="font-sans font-black text-slate-900 tracking-tighter text-2xl md:text-3xl"><strong>DESAFIO</strong></span>
          <span className="serif-font font-bold text-[#F97316] text-3xl md:text-4xl -ml-1"><strong>7P</strong></span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold leading-[1.1] md:leading-tight mb-2 tracking-tighter text-slate-900">
          Cansada de tentar mudar e continuar parada? Então descubra o <span className="bg-orange-600 text-white px-2 rounded-lg">Desafio 7P</span>
        </h1>

        <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-6 font-medium leading-relaxed">
          Um método prático de 7 dias pra você organizar a mente, superar a procrastinação e prosperar na vida com clareza.
        </p>

        {/* Vídeo posicionado abaixo do título com bordas quadradas e som ativado (mute=0) */}
        <div className="w-full max-w-4xl aspect-video overflow-hidden shadow-2xl bg-slate-900 border border-white/5 mx-auto mb-8">
          <iframe
            src="https://www.youtube.com/embed/scE6zlNIeGM?autoplay=1&mute=0&controls=0&loop=1&playlist=scE6zlNIeGM&rel=0"
            className="w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
            frameBorder="0"
          ></iframe>
        </div>

        <div className="text-slate-600 text-lg md:text-xl max-w-2xl leading-relaxed space-y-4 text-justify mb-2 text-center md:text-justify">
          <p>Tu ta cansada, eu sei. E não é porque tu é fraca. É porque ninguém nunca te mostrou por onde começar.</p>
          <p>Tu trabalha. Se esforça. Aguenta tudo calada. E no fim do dia sente que a vida não anda.</p>
          <p>Não é falta de vontade. Não é preguiça. É desorientação.</p>
          <p className="font-bold text-slate-900">👉 O problema não é a tua vida.<br />👉 É tu tentar mudar sem saber o que precisa ser mudado primeiro.</p>
        </div>

        <div className="flex flex-col items-center">
          <LiveCounter />
          <Countdown />
        </div>

        <div className="mt-6 flex flex-col gap-4 w-full max-sm mx-auto text-center">
          <a href="https://pay.hotmart.com/Y103405139M?bid=1765751031490" className="group bg-orange-600 hover:bg-orange-500 text-white py-5 px-8 rounded-xl font-bold text-lg shadow-xl shadow-orange-600/20 transition-all flex items-center justify-center gap-3">
            QUERO COMEÇAR AGORA
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-xs text-slate-400 flex items-center justify-center gap-2">
            <Lock size={12} /> Pagamento 100% seguro pela Hotmart
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

const PainSection = () => (
  <section className="py-10 px-4 bg-white/40 border-y border-slate-200">
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">O "Teto Invisível" que te impede de prosperar</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>Tu vive cansada. Trabalha. Se esforça. Aguenta calada. Se cobra. E no final do dia sente que nada mudou.</p>
          <p>Tu sente que pode mais. Mas não sabe por onde começar nem o que tá te travando de verdade.</p>
          <p>E isso te faz duvidar de ti. Mesmo sendo dedicada. Mesmo sendo esforçada. Mesmo sabendo, lá no fundo, que essa não é a vida que tu nasceu pra viver.</p>
        </div>
      </div>
      <div className="bg-card-custom p-8 rounded-3xl border border-slate-200 shadow-sm">
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p className="text-xl font-bold text-orange-600 italic">O Desafio 7P é a tua solução!</p>
          <p>Mas...eu não prometo mudar tua vida em 7 dias.</p>
          
          <p className="font-bold text-slate-900 pt-2">Prometo fazer algo mais importante:</p>
          
          <p>👉 Te mostrar onde tu tá presa<br />
          👉 Te fazer entender por que repete os mesmos padrões<br />
          👉 E te entregar clareza sobre o próximo passo real, sem autoengano.</p>
          
          <p className="pt-2">Por que quando tu entende o que te trava, tu para de se culpar e começa a prosperar.</p>
        </div>
      </div>
    </div>
  </section>
);

const TruthSection = () => (
  <section className="pt-2 pb-10 px-4 max-w-4xl mx-auto text-center">
    <br /><h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight text-slate-900">A verdade que ninguém te fala</h2>
    <div className="space-y-6 text-slate-600 text-lg md:text-xl leading-relaxed">
      <p>Você não trava porque é fraca.</p>
      <p>Você trava porque tentou mudar a vida do lugar errado e ninguém te ensinou a regra do jogo interno.</p>
      <p>Enquanto você tenta organizar a vida por fora, sua mente continua no automático, repetindo os mesmos padrões.</p>
      
      <div className="bg-white border border-slate-200 rounded-[32px] p-8 md:p-12 text-left space-y-6 max-w-2xl mx-auto shadow-sm my-10">
        <p className="font-black text-slate-400 mb-4 uppercase tracking-widest text-xs">Hoje você está assim:</p>
        <ul className="space-y-4 text-slate-700 font-medium text-sm md:text-base">
          <li className="flex gap-4">
            <span className="flex-shrink-0 text-orange-500 font-bold text-lg">❌</span>
            <span className="text-justify leading-relaxed">Acorda cheia de intenção, mas perde o controle do dia</span>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 text-orange-500 font-bold text-lg">❌</span>
            <span className="text-justify leading-relaxed">Começa animada e desiste no meio do caminho</span>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 text-orange-500 font-bold text-lg">❌</span>
            <span className="text-justify leading-relaxed">Procrastina mesmo sabendo o que precisa fazer</span>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 text-orange-500 font-bold text-lg">❌</span>
            <span className="text-justify leading-relaxed">Se sente cansada sem entender por quê</span>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 text-orange-500 font-bold text-lg">❌</span>
            <span className="text-justify leading-relaxed">Vive repetindo promessas que não cumpre</span>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 text-orange-500 font-bold text-lg">❌</span>
            <span className="text-justify leading-relaxed">Tenta mudar tudo ao mesmo tempo e acaba travando</span>
          </li>
        </ul>
      </div>

      <p className="text-slate-500">Enquanto isso,</p>
      <p className="text-orange-600 font-bold uppercase">o tempo passa…</p>
      <p className="text-orange-600 font-bold uppercase">a energia vai embora…</p>
      <p className="text-slate-900 font-black text-2xl">e a vida continua exatamente no mesmo lugar.</p>
    </div>

    <br />
    <div className="mt-6 flex flex-col gap-4 w-full max-sm mx-auto">
      <a href="https://pay.hotmart.com/Y103405139M?bid=1765751031490" className="group bg-orange-600 hover:bg-orange-500 text-white py-5 px-8 rounded-xl font-bold text-lg shadow-xl shadow-orange-600/20 transition-all flex items-center justify-center gap-3">
        QUERO SAIR DO AUTOMÁTICO
        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </a>
      <p className="text-xs text-slate-400 flex items-center justify-center gap-2">
        <Lock size={12} /> Pagamento 100% seguro pela Hotmart
      </p>
    </div>
  </section>
);

const CorrectionBlock = () => (
  <section className="py-10 px-4 max-w-4xl mx-auto">
    <div className="text-center space-y-10">
      <h2 className="text-3xl md:text-5xl font-black text-orange-600 leading-tight tracking-tight">
        O Desafio 7P existe para corrigir isso
      </h2>
      
      <div className="text-slate-600 text-lg md:text-xl leading-relaxed space-y-6">
        <p>Dentro do Desafio 7P, você não recebe motivação vazia. <br className="hidden md:block"/> Você recebe <strong>processo</strong>.</p>
        <p>Nada de frases prontas. <br className="hidden md:block"/> Nada de empurrão emocional que dura dois dias.</p>
        <p className="text-slate-900 font-bold text-2xl">Aqui, a mudanca começa por dentro.</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-[32px] p-8 md:p-12 text-left space-y-6 max-w-2xl mx-auto shadow-sm">
        <p className="font-black text-slate-400 mb-4 uppercase tracking-widest text-xs">Você aprende a:</p>
        <ul className="space-y-4 text-slate-700 font-medium">
          <li className="flex gap-4"><span className="flex-shrink-0 text-orange-500 font-bold text-xl">✓</span> <span className="text-justify leading-relaxed">Entender por que sua mente te trava mesmo querendo mudar</span></li>
          <li className="flex gap-4"><span className="flex-shrink-0 text-orange-500 font-bold text-xl">✓</span> <span className="text-justify leading-relaxed">Identificar padrões emocionais que te mantêm no automático</span></li>
          <li className="flex gap-4"><span className="flex-shrink-0 text-orange-500 font-bold text-xl">✓</span> <span className="text-justify leading-relaxed">Organizar pensamentos antes de tomar decisões importantes</span></li>
          <li className="flex gap-4"><span className="flex-shrink-0 text-orange-500 font-bold text-xl">✓</span> <span className="text-justify leading-relaxed">Sair do ciclo de cansaço, confusão e procrastinação</span></li>
          <li className="flex gap-4"><span className="flex-shrink-0 text-orange-500 font-bold text-xl">✓</span> <span className="text-justify leading-relaxed">Criar clareza e direção sem depender de força de vontade</span></li>
        </ul>
      </div>

      <div className="text-slate-600 text-lg md:text-xl leading-relaxed space-y-6 pt-4">
        <p>Enquanto muita gente tenta mudar fazendo mais, <br className="hidden md:block"/> você aprende a mudar fazendo melhor.</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 font-black text-slate-900 text-xl md:text-2xl mt-6">
          <span className="bg-white border border-slate-100 px-4 py-1 rounded-lg">COM CONSCIÊNCIA.</span>
          <span className="bg-white border border-slate-100 px-4 py-1 rounded-lg">COM ESTRUTURA.</span>
          <span className="bg-white border border-slate-100 px-4 py-1 rounded-lg">COM DIREÇÃO.</span>
        </div>
      </div>
    </div>
  </section>
);

const ModuleCard: React.FC<{ m: any }> = ({ m }) => {
  const Icon = m.icon;
  const isBonus = m.day === "BÔNUS";
  return (
    <div 
      className={`${isBonus ? 'bg-orange-50 border border-orange-100 shadow-xl shadow-orange-500/5' : 'bg-white glass-border glass-card-hover'} p-8 rounded-[32px] flex flex-col h-full group transition-all duration-300`}
    >
      <div className="flex justify-between items-start mb-6">
        <span className={`text-[10px] font-black tracking-widest px-3 py-1 rounded-md uppercase ${isBonus ? 'bg-orange-500 text-white' : 'text-slate-400 bg-slate-50 border border-slate-100'}`}>
          {m.day}
        </span>
        <div className={`p-2 rounded-xl ${isBonus ? 'text-orange-600' : 'text-slate-400 group-hover:text-orange-500'} transition-colors`}>
          <Icon size={24} />
        </div>
      </div>
      <h3 className={`text-xl font-bold mb-4 leading-tight transition-colors ${isBonus ? 'text-slate-900' : 'text-slate-900 group-hover:text-orange-500'}`}>{m.title}</h3>
      <p className={`text-sm leading-relaxed mb-4 ${isBonus ? 'text-slate-700' : 'text-slate-600'}`}>{m.description}</p>
      
      {m.promoPrice && (
        <div className="mb-8 flex-grow">
           <p className="text-orange-600 font-black text-2xl italic tracking-tighter leading-none">
             {m.promoPrice}
           </p>
        </div>
      )}
      
      {!m.promoPrice && <div className="mb-8 flex-grow" />}

      <div className={`pt-6 border-t mt-auto ${isBonus ? 'border-orange-100' : 'border-slate-100'}`}>
        <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${isBonus ? 'text-orange-700' : 'text-slate-400 group-hover:text-orange-500'}`}>
          <div className={`w-2 h-2 rounded-full ${isBonus ? 'bg-orange-600' : 'bg-green-500'}`}></div>
          {m.highlight}
        </div>
      </div>
    </div>
  );
};

const ModulesSection = () => (
  <section className="py-12 px-4 relative overflow-hidden">
    <div className="absolute top-1/2 left-0 w-64 h-64 bg-orange-600/5 rounded-full blur-[100px] -z-10" />
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900">Veja tudo o que você vai <span className="text-orange-500 italic">receber!</span></h2>
        <p className="text-slate-500 max-w-2xl mx-auto">Um passo a passo guiado de 7 dias para reprogramar sua mente e ambiente para o fluxo da abundância.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {MODULES_DATA.map((m, i) => <ModuleCard key={`module-${i}`} m={m} />)}
      </div>

      <div className="text-center mb-8 pt-8">
        <div className="flex flex-col items-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/5 text-orange-600 rounded-full border border-orange-500/10 text-[10px] font-black uppercase tracking-widest mb-4">
            ✨ PRESENTES PARA VOCÊ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            E você vai ganhar agora 2 bônus exclusivos!
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {BONUS_DATA.map((m, i) => <ModuleCard key={`bonus-${i}`} m={m} />)}
        </div>
      </div>
    </div>
  </section>
);

const WhatsAppVipSection = () => (
  <section className="py-10 px-4">
    <div className="max-w-4xl mx-auto bg-green-500/5 border border-green-500/10 rounded-[40px] p-8 md:p-12 text-center relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-700">
        <MessageCircle size={120} className="text-green-600" />
      </div>
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 text-green-700 rounded-full border border-green-500/20 text-[10px] font-black uppercase tracking-widest mb-6">
          <Zap size={12} /> Acesso Imediato
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">Grupo VIP de Alunas no <span className="text-green-600">WhatsApp</span></h2>
        <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Ao garantir sua vaga, você será direcionada para o nosso grupo exclusivo de alunas. Lá é o lugar onde a mágica acontece fora das aulas: troca de ideias, materiais extras e suporte próximo.
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <CheckCircle size={20} className="text-green-600 mb-3" />
            <h4 className="font-bold text-slate-900 mb-2">Material Complementar</h4>
            <p className="text-sm text-slate-600">PDFs e guias práticos enviados diretamente no seu celular para facilitar sua aplicação.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <Users size={20} className="text-green-600 mb-3" />
            <h4 className="font-bold text-slate-900 mb-2">Troca de Ideias</h4>
            <p className="text-sm text-slate-600">Compartilhe insights e aprenda com a jornada de outras mulheres que buscam o mesmo que você.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <Sparkles size={20} className="text-green-600 mb-3" />
            <h4 className="font-bold text-slate-900 mb-2">Material Extra</h4>
            <p className="text-sm text-slate-600">Conteúdos bônus e avisos importantes em primeira mão para você não perder nada.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className="pt-8 pb-0 px-4 bg-white/40 border-y border-slate-200">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-10 tracking-tight text-center text-slate-900">O que dizem nossas <span className="text-orange-500">alunas</span>:</h2>
      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-0 justify-center">
        {TESTIMONIAL_PRINTS.map((src, i) => (
          <motion.img 
            key={`testimonial-img-${i}`}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            src={src} 
            alt={`Depoimento ${i + 1}`} 
            className="w-full max-w-[380px] h-auto"
          />
        ))}
      </div>
    </div>
  </section>
);

const FOMOPrice = () => (
  <section id="oferta" className="py-12 px-4 text-center relative">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.05),transparent_70%)]" />
    
    <div className="max-w-2xl mx-auto relative z-10">
      <h2 className="text-3xl md:text-5xl font-bold mb-10 italic tracking-tight text-slate-900">Não deixe para amanhã a vida que você merece viver <span className="text-orange-500 uppercase">HOJE</span>.</h2>
      
      <div className="bg-white border border-orange-500/20 p-10 rounded-[40px] shadow-2xl shadow-orange-500/10 overflow-hidden relative">
        <div className="absolute top-0 right-0 bg-orange-600 text-white text-[10px] font-black px-6 py-2 uppercase tracking-tighter">Últimas vagas</div>
        
        <p className="text-slate-400 line-through text-xl mb-2">De R$ 197,00</p>
        <div className="mb-8">
          <span className="text-sm text-slate-500 block mb-1 uppercase font-bold tracking-widest">Por apenas</span>
          <h3 className="text-7xl font-black text-orange-600 tracking-tighter">R$ 47,00</h3>
          <p className="text-slate-500 mt-2 font-medium italic">ou 4x de R$ 12,79 no cartão</p>
        </div>

        <div className="space-y-4 mb-10 text-sm">
          <div className="flex items-center gap-3 justify-center text-slate-700">
            <CheckCircle size={16} className="text-green-600" />
            <span>Acesso imediato ao curso</span>
          </div>
          <div className="flex items-center gap-3 justify-center text-slate-700">
            <CheckCircle size={16} className="text-green-600" />
            <span>Bônus: Dinâmica Cura Ancestralidade</span>
          </div>
          <div className="flex items-center gap-3 justify-center text-slate-700">
            <CheckCircle size={16} className="text-green-600" />
            <span>PDF Planner da Rotina Equilibrada </span>
          </div> 
          <div className="flex items-center gap-3 justify-center text-slate-700">
            <CheckCircle size={16} className="text-green-600" />
            <span>7 dias de garantia</span>
          </div>
        </div>

        <a href="https://pay.hotmart.com/Y103405139M?bid=1765751031490" className="w-full flex items-center justify-center text-center bg-orange-600 text-white py-5 px-4 md:px-8 rounded-2xl font-black text-lg md:text-xl leading-tight hover:bg-orange-500 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-orange-600/20">
          LIBERAR MEU ACESSO
        </a>
        
        <div className="mt-8 flex items-center justify-center gap-6 text-slate-400 text-xs grayscale">
          <span className="flex items-center gap-1"><ShieldCheck size={14} /> Garantia de 7 dias</span>
        </div>
      </div>
      
     
    </div>
  </section>
);

const MentorCard = () => (
  <section className="py-10 px-4">
    <div className="max-w-5xl mx-auto bg-white border border-slate-100 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-sm">
      <div className="w-full md:w-1/3 relative group">
        <div className="absolute inset-0 bg-orange-600 rounded-2xl blur-2xl opacity-5 group-hover:opacity-10 transition-opacity" />
        <img 
          src="https://assets.zyrosite.com/A1azoVg7xQilMZ9l/freepik__luananovo-a-professional-indoor-portrait-of-a-conf__79448-Yh120t9wXnt4SIzZ.png" 
          className="relative w-full aspect-square object-cover rounded-3xl border border-slate-200 transition-all duration-500"
          alt="Luana Mentora"
        />
      </div>
      <div className="w-full md:w-2/3 space-y-6">
        <span className="text-orange-600 font-bold tracking-widest uppercase text-xs">A Mentora</span>
        <h2 className="text-4xl font-bold text-slate-900">Luana Soares</h2>
        <div className="space-y-4 text-slate-600 text-lg leading-relaxed italic text-justify">
          <p>Luana Soares é apaixonada por estudos sobre inteligência emocional, com foco em ajudar pessoas que queiram ressignificar suas histórias e conquistarem uma vida extraordinária.</p>
          <p>Com uma jornada pessoal marcada por superação, Luana passou por um profundo processo de transformation após vivências impactantes em treinamentos de autoconhecimento. A partir daí, decidiu transformar sua dor em missão de vida.</p>
          <p>Sua trajetória de cura e evolução pessoal se tornou a base para seu trabalho, e agora ela inspira e capacita others a também escreverem uma nova história.</p>
        </div>
      </div>
    </div>
  </section>
);

const App = () => (
  <div className="min-h-screen relative overflow-hidden">
    {/* Header FOMO */}
   

    <Hero />
    
    {/* Removido o Mentor Video Section daqui pois foi para dentro do Hero */}

    <PainSection />
    
    {/* Social Proof Stats */}
    <section className="py-6 border-y border-slate-200 bg-white/30">
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-12 text-center">
        
        <div>
          <p className="text-3xl font-black text-slate-900">4.9/5</p>
          <div className="flex gap-0.5 text-orange-500 justify-center my-1"><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/></div>
          <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Média de Satisfação</p>
        </div>
        <div>
          <p className="text-3xl font-black text-slate-900">100%</p>
          <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mt-1">Seguro e Garantido</p>
        </div>
      </div>
    </section>

    <TestimonialsSection />
    <TruthSection />
    <CorrectionBlock />
    <ModulesSection />
    <WhatsAppVipSection />
    <MentorCard />
    <FOMOPrice />

    {/* Footer Minimalist */}
    <footer className="py-12 border-t border-slate-200 text-center px-4 bg-white/20">
      <div className="max-w-4xl mx-auto space-y-8">
        <h4 className="text-2xl font-black tracking-tighter text-slate-900">DESAFIO <span className="text-orange-500"><strong>7P</strong></span></h4>
        <p className="text-[10px] text-slate-400 max-w-lg mx-auto leading-relaxed">
          &copy; {new Date().getFullYear()} Desafio 7P. Todos os direitos reservados. 
        </p>
      </div>
    </footer>
  </div>
);

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
