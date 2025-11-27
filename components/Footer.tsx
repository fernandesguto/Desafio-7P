import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-500 py-12 border-t border-stone-900">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h4 className="text-white font-bold serif-font text-xl mb-2">Desafio 7P</h4>
          <p className="text-sm">7 dias para prosperar e libertar o passado.</p>
        </div>
        
        <div className="text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
          <p className="mt-1">Design focado em conversão e estética.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;