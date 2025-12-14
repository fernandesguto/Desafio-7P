
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThankYouPage from './components/ThankYouPage';
import { Eye, Home, ArrowRightLeft } from 'lucide-react';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

const Main = () => {
  // Simple hash router logic
  const [page, setPage] = useState(() => {
    if (!window.location.hash) return 'home';
    return window.location.hash.includes('obrigado') ? 'obrigado' : 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setPage(hash.includes('obrigado') ? 'obrigado' : 'home');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const togglePage = () => {
    window.location.hash = page === 'home' ? 'obrigado' : 'home';
  };

  return (
    <React.StrictMode>
      {/* --- GLOBAL PREVIEW TOGGLE BUTTON --- */}
      <div className="fixed top-4 right-4 z-[99999] flex flex-col items-end gap-2">
        <button
          onClick={togglePage}
          className={`
            flex items-center gap-2 px-6 py-3 rounded-full font-bold shadow-2xl transition-all border-4 border-white transform hover:scale-105
            ${page === 'home' ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-slate-800 text-white hover:bg-slate-900'}
          `}
          title="Alternar Visualização"
        >
          {page === 'home' ? (
            <>
              <Eye size={20} />
              VER PÁGINA DE OBRIGADO
            </>
          ) : (
            <>
              <Home size={20} />
              VOLTAR PARA O SITE
            </>
          )}
        </button>
      </div>
      {/* ------------------------------------ */}

      {page === 'obrigado' ? <ThankYouPage /> : <App />}
    </React.StrictMode>
  );
};

root.render(<Main />);
