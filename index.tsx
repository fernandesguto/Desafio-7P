import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThankYouPage from './components/ThankYouPage';

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

  return (
    <React.StrictMode>
      {page === 'obrigado' ? <ThankYouPage /> : <App />}
    </React.StrictMode>
  );
};

root.render(<Main />);