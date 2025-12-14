
import React from 'react';
import { ExternalLink, CheckCircle, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-slate-500 py-8 md:py-12 border-t border-slate-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h4 className="text-slate-900 font-bold serif-font text-xl mb-2">Desafio 7P</h4>
          <p className="text-sm">7 dias para prosperar.</p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-3 text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
          
          {/* Botão solicitado para visualizar a Página de Obrigado - AGORA MAIS VISÍVEL */}
          <a 
            href="#obrigado" 
            className="mt-2 inline-flex items-center gap-2 px-6 py-3 bg-amber-100 hover:bg-amber-200 border border-amber-200 rounded-lg text-sm font-bold text-amber-800 transition-all hover:shadow-md"
          >
            <CheckCircle size={16} />
            Visualizar Página de Obrigado (Pós-Compra)
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
