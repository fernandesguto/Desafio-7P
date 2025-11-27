import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 text-slate-500 py-8 md:py-12 border-t border-slate-200">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h4 className="text-slate-900 font-bold serif-font text-xl mb-2">Desafio 7P</h4>
          <p className="text-sm">7 dias para prosperar e libertar o passado.</p>
        </div>
        
        <div className="text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;