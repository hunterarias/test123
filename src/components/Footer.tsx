
import React from 'react';

/**
 * Site footer with company information and legal links
 * Includes contact information and policy links
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-wellness-800 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-base font-bold mb-4 text-white">Potenza Maschile</h3>
            <p className="text-gray-300">
              La tua guida completa per il benessere maschile con prodotti naturali di alta qualità.
            </p>
            <p className="text-gray-300 mt-2">
              Selezioniamo i migliori prodotti naturali per l'uomo, basandoci su efficacia,
              innovazione e feedback degli utenti. Alcuni brand ci riconoscono una
              commissione per ogni acquisto tramite i nostri link, il che può influenzare la
              visibilità dei prodotti sul sito. Grazie a queste collaborazioni, ti offriamo un
              servizio sempre gratuito, aggiornato e trasparente.
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold mb-4 text-white">Link Utili</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.iubenda.com/privacy-policy/46320706" target="_blank" rel="nofollow" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="https://www.iubenda.com/privacy-policy/46320706/cookie-policy" target="_blank" rel="nofollow" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a>
              </li>
              <li>
                <a href="mailto:maschilepotenza@gmail.com" className="text-gray-300 hover:text-white transition-colors">Contattaci</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 mt-6 text-center text-sm text-gray-400">
          <p>©2025 Potenza Maschile. Tutti i diritti riservati No Follow</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
