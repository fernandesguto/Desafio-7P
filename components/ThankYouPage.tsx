
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, MessageCircle, Mail, ArrowRight, ShieldCheck, ArrowLeft } from 'lucide-react';

const ThankYouPage: React.FC = () => {
  // LINK DO GRUPO DO WHATSAPP - Substitua pelo link real
  const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/seu-link-aqui";

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-600 flex flex-col items-center justify-center p-4 md:p-8 relative">
      
      {/* Botão Voltar ao Início */}
      <a 
        href="#home"
        className="absolute top-6 left-6 md:top-10 md:left-10 z-50 flex items-center gap-2 text-slate-500 hover:text-amber-600 transition-colors font-medium bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md border border-slate-100"
      >
        <ArrowLeft size={18} />
        <span className="hidden md:inline">Voltar ao Início</span>
      </a>

      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-amber-100 rounded-full blur-[100px] opacity-30" />
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-green-100 rounded-full blur-[100px] opacity-30" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl shadow-slate-200/60 overflow-hidden relative z-10 border border-slate-100"
      >
        {/* Header Section */}
        <div className="bg-gradient-to-b from-green-50 to-white p-8 md:p-12 text-center border-b border-slate-100">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-full mb-6 shadow-sm">
            <CheckCircle size={40} strokeWidth={2.5} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 serif-font mb-4">
            Parabéns pela decisão!
          </h1>
          <p className="text-lg text-slate-600">
            Sua inscrição no <span className="font-bold text-amber-600">Desafio 7P</span> foi confirmada.
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 space-y-8">
          
          {/* Step 1: Email */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-sm">1</div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                Verifique seu E-mail <Mail size={16} className="text-slate-400"/>
              </h3>
              <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                Os dados de acesso à área de membros foram enviados para o e-mail cadastrado. Se não encontrar, verifique a caixa de <strong>Spam</strong> ou <strong>Promoções</strong>.
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-slate-100" />

          {/* Step 2: WhatsApp (Highlighted) */}
          <div className="bg-green-50 rounded-2xl p-6 border border-green-100 relative overflow-hidden group hover:border-green-200 transition-colors">
             <div className="absolute top-0 right-0 p-3 opacity-10 transform rotate-12">
               <MessageCircle size={100} className="text-green-600" />
             </div>
             
             <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">2</div>
                  <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-200 px-2 py-0.5 rounded-full">Passo Importante</span>
                </div>
                
                <h3 className="text-xl font-bold text-green-900 mb-2">
                  Entre no Grupo VIP de Avisos
                </h3>
                <p className="text-green-800 text-sm mb-6 leading-relaxed">
                  Para garantir que você receba os <strong>materiais extras</strong>, PDFs de limpeza e links das aulas ao vivo, é obrigatório estar no grupo. É um grupo silenciado, apenas para avisos importantes.
                </p>

                <a 
                  href={WHATSAPP_GROUP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-green-200 flex items-center justify-center gap-3 transition-all transform group-hover:scale-[1.02]"
                >
                  <MessageCircle size={24} />
                  ENTRAR NO GRUPO VIP
                  <ArrowRight size={20} />
                </a>
             </div>
          </div>

        </div>

        {/* Footer Section */}
        <div className="bg-slate-50 p-6 text-center border-t border-slate-100">
          <p className="text-xs text-slate-400 flex items-center justify-center gap-2">
            <ShieldCheck size={14} /> Pagamento processado com segurança.
          </p>
        </div>
      </motion.div>

      <div className="mt-8 text-center">
         <p className="text-sm text-slate-400 font-serif italic">
           "Sua nova realidade começa agora."
         </p>
      </div>

    </div>
  );
};

export default ThankYouPage;
