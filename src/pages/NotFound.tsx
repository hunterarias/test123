import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Pagina non trovata (404) – Integratori Potenza Maschile</title>
        <meta
          name="description"
          content="La pagina che cerchi non esiste o è stata spostata. Torna alla home per scoprire i migliori integratori naturali per il benessere maschile."
        />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="Pagina non trovata (404) – Integratori Potenza Maschile" />
        <meta property="og:description" content="La pagina che cerchi non esiste. Torna alla home per la guida ai migliori integratori naturali per il benessere maschile." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Pagina non trovata</p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            Torna alla Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
